
-- Roles enum and table
CREATE TYPE public.app_role AS ENUM ('admin', 'editor');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid());

-- Allowlist of emails that should be auto-granted admin on sign-in
CREATE TABLE public.admin_allowlist (
  email text PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.admin_allowlist TO service_role;
ALTER TABLE public.admin_allowlist ENABLE ROW LEVEL SECURITY;
-- no policies => not readable from client; only service_role can touch it

INSERT INTO public.admin_allowlist (email) VALUES ('kerbinoyel@gmail.com');

-- has_role helper used by RLS
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

-- Server fn will call this to self-grant admin if the caller's email is on the allowlist
CREATE OR REPLACE FUNCTION public.ensure_admin_role(_user_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_email text;
BEGIN
  SELECT email INTO user_email FROM auth.users WHERE id = _user_id;
  IF user_email IS NULL THEN
    RETURN false;
  END IF;
  IF EXISTS (SELECT 1 FROM public.admin_allowlist WHERE lower(email) = lower(user_email)) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (_user_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
    RETURN true;
  END IF;
  RETURN false;
END;
$$;
GRANT EXECUTE ON FUNCTION public.ensure_admin_role(uuid) TO authenticated;

-- Admin SELECT policies on existing tables
CREATE POLICY "Admins can read contact submissions"
  ON public.contact_submissions FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read newsletter subscribers"
  ON public.newsletter_subscribers FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

GRANT SELECT ON public.contact_submissions TO authenticated;
GRANT SELECT ON public.newsletter_subscribers TO authenticated;
