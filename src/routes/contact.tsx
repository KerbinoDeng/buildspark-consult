import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/leads.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Meridian Consulting" },
      { name: "description", content: "Talk to Meridian Consulting about your project. Most enquiries answered within one business day." },
      { property: "og:title", content: "Contact — Meridian Consulting" },
      { property: "og:description", content: "Get in touch with Meridian Consulting." },
      { property: "og:url", content: "https://buildspark-consult.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://buildspark-consult.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const send = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await send({
        data: {
          name: String(fd.get("name") ?? ""),
          company: String(fd.get("company") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          project_type: String(fd.get("type") ?? ""),
          message: String(fd.get("msg") ?? ""),
        },
      });
      if (res.ok) {
        setState("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setState("error");
        setError(res.error ?? "Something went wrong.");
      }
    } catch {
      setState("error");
      setError("Please check your details and try again.");
    }
  }

  return (
    <>
      {/* HERO BENTO */}
      <section className="border-b border-border bg-background">
        <div className="container-tight py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-12">
              <p className="eyebrow text-cloud/70">/ Contact</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
                Tell us about<br />the project.
              </h1>
              <p className="mt-6 max-w-xl text-cloud/80">
                A partner reviews every enquiry. Most are answered within one business day.
              </p>
            </div>
            <div className="md:col-span-4 bento-card space-y-5">
              <p className="eyebrow text-[color:var(--steel)]">Direct</p>
              <Row icon={Mail} label="Email" value="kerbinoyel@gmail.com" />
              <Row icon={Phone} label="Kenya" value="+254 743 978 678" />
              <Row icon={Phone} label="South Sudan" value="+211 927 272 752" />
              <Row icon={MapPin} label="Offices" value="Nairobi · Juba" />
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <form onSubmit={onSubmit} className="md:col-span-8 bento-card md:p-10 space-y-6">
              <p className="eyebrow text-[color:var(--steel)]">/ Project brief</p>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
              </div>
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="type">Project type</label>
                <select id="type" name="type" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-base focus:border-[color:var(--steel)] focus:outline-none">
                  <option>Commercial</option>
                  <option>Civic / infrastructure</option>
                  <option>Industrial</option>
                  <option>Healthcare</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="msg">Brief</label>
                <textarea id="msg" name="msg" rows={6} required maxLength={5000} className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-base focus:border-[color:var(--steel)] focus:outline-none" placeholder="A few sentences on the project, timeline, and what you need from us." />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--ink)] px-7 py-4 text-sm font-medium text-cloud transition-colors hover:bg-[color:var(--steel)] disabled:opacity-60"
                >
                  {state === "sending" ? "Sending…" : (<>Send enquiry <ArrowUpRight className="h-4 w-4" /></>)}
                </button>
                {state === "sent" && (
                  <span className="inline-flex items-center gap-2 text-sm text-[color:var(--steel)]">
                    <CheckCircle2 className="h-4 w-4" /> Thanks — we'll be in touch.
                  </span>
                )}
                {state === "error" && error && <span className="text-sm text-destructive">{error}</span>}
              </div>
            </form>

            <aside className="md:col-span-4 space-y-4">
              <div className="bento-card-dark">
                <p className="eyebrow text-cloud/60">Response</p>
                <p className="mt-3 font-display text-4xl">&lt;24h</p>
                <p className="mt-2 text-sm text-cloud/70">Typical first reply on weekdays.</p>
              </div>
              <div className="bento-card">
                <p className="eyebrow text-[color:var(--steel)]">Hours</p>
                <p className="mt-3 text-sm text-muted-foreground">Mon–Fri · 8:00–18:00 EAT<br />Emergency site support 24/7</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[color:var(--cloud)] py-20 md:py-24">
        <div className="container-tight grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-[color:var(--steel)]">/ FAQ</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Common questions.</h2>
          </div>
          <dl className="md:col-span-8 divide-y divide-border border-y border-border">
            {[
              { q: "What does a typical engagement look like?", a: "We start with a paid 2-week discovery — current state, risks, and a delivery plan. From there, most owners retain us as project manager or owner's representative through handover." },
              { q: "How do you measure success?", a: "Against the metrics the owner cares about: cost vs. approved budget, schedule vs. baseline, safety incidents, and quality at handover. We report monthly with one page, not fifty." },
              { q: "Do you take on distressed projects?", a: "Yes — recovery and audit work is a core service. We can mobilise an interim project director within two weeks." },
              { q: "Where do you work?", a: "Primarily East Africa from our Nairobi and Juba offices. We've supported owners across Kenya, South Sudan, Uganda, and Rwanda." },
              { q: "How quickly do you respond?", a: "A partner reviews every enquiry. Most are answered within one business day." },
            ].map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-display text-lg">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow text-muted-foreground" htmlFor={name}>{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-base focus:border-[color:var(--steel)] focus:outline-none"
      />
    </div>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--steel)]" strokeWidth={1.5} />
      <div className="min-w-0">
        <p className="eyebrow text-muted-foreground">{label}</p>
        <p className="mt-0.5 truncate text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}
