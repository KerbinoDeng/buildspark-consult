
-- 1) Lock down ensure_admin_role: revoke from public/anon/authenticated, allow only service_role
REVOKE EXECUTE ON FUNCTION public.ensure_admin_role(uuid) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.ensure_admin_role(uuid) FROM anon;
REVOKE EXECUTE ON FUNCTION public.ensure_admin_role(uuid) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.ensure_admin_role(uuid) TO service_role;

-- 2) Explicit admin-only SELECT policy on admin_allowlist (clears "RLS enabled, no policy")
DROP POLICY IF EXISTS "Admins can read admin allowlist" ON public.admin_allowlist;
CREATE POLICY "Admins can read admin allowlist"
ON public.admin_allowlist
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- 3) Explicit admin-only write policies on user_roles (prevent future privilege escalation)
DROP POLICY IF EXISTS "Admins can insert user roles" ON public.user_roles;
CREATE POLICY "Admins can insert user roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can update user roles" ON public.user_roles;
CREATE POLICY "Admins can update user roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can delete user roles" ON public.user_roles;
CREATE POLICY "Admins can delete user roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));
