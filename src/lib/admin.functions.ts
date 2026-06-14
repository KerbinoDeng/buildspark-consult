import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// Self-promote to admin if the caller's email is on the allowlist.
export const ensureMyAdminRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("ensure_admin_role", {
      _user_id: context.userId,
    });
    if (error) {
      console.error("[ensureMyAdminRole]", error);
      return { ok: false as const, isAdmin: false };
    }
    return { ok: true as const, isAdmin: Boolean(data) };
  });

export const listContactSubmissions = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    // RLS restricts to admins only; non-admin sees []
    const { data, error } = await context.supabase
      .from("contact_submissions")
      .select("id, created_at, name, email, company, phone, project_type, message")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) {
      console.error("[listContactSubmissions]", error);
      return { ok: false as const, rows: [] as const };
    }
    return { ok: true as const, rows: data ?? [] };
  });

export const listNewsletterSubscribers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("newsletter_subscribers")
      .select("id, created_at, email, source")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) {
      console.error("[listNewsletterSubscribers]", error);
      return { ok: false as const, rows: [] as const };
    }
    return { ok: true as const, rows: data ?? [] };
  });
