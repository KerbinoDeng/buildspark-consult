import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  project_type: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
});

const newsletterSchema = z.object({
  email: z.string().trim().email().max(255),
  source: z.string().trim().max(80).optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      phone: data.phone || null,
      project_type: data.project_type || null,
      message: data.message,
    });
    if (error) {
      console.error("[submitContact] insert failed:", error);
      return { ok: false as const, error: "Could not send. Please try again." };
    }
    return { ok: true as const };
  });

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => newsletterSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .insert({ email: data.email, source: data.source || null });
    // duplicate email = treat as success
    if (error && !String(error.message).toLowerCase().includes("duplicate")) {
      console.error("[subscribeNewsletter] insert failed:", error);
      return { ok: false as const, error: "Could not subscribe. Please try again." };
    }
    return { ok: true as const };
  });
