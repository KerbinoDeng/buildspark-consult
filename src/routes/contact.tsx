import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/leads.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The KSL Group" },
      { name: "description", content: "Book a complimentary 60-minute discovery call with The KSL Group's Principal Consultant. Most enquiries answered within one business day." },
      { property: "og:title", content: "Contact — The KSL Group" },
      { property: "og:description", content: "Book a discovery call with The KSL Group." },
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
              <p className="eyebrow text-[color:var(--gold)]">/ Contact</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-cloud md:text-7xl">
                Book a discovery<br />call.
              </h1>
              <p className="mt-6 max-w-xl text-cloud/80">
                Tell us briefly about your institution and the challenge you're working on.
                A Principal reviews every enquiry, typically within one business day.
              </p>
            </div>
            <div className="md:col-span-4 bento-card space-y-5">
              <p className="eyebrow text-[color:var(--gold)]">Direct</p>
              <Row icon={Mail} label="Email" value="info@kslgroup.co" />
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
              <p className="eyebrow text-[color:var(--gold)]">/ Discovery brief</p>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Organisation" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
              </div>
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="type">Area of interest</label>
                <select id="type" name="type" className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-base focus:border-[color:var(--gold)] focus:outline-none">
                  <option>Strategic Planning & Institutional Development</option>
                  <option>Crisis Leadership Advisory</option>
                  <option>Executive Leadership Development & Coaching</option>
                  <option>Governance, Accountability & Public Sector Reform</option>
                  <option>Research, Policy Analysis & Advisory</option>
                  <option>Training, Facilitation & Workshop Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="eyebrow text-muted-foreground" htmlFor="msg">Brief</label>
                <textarea id="msg" name="msg" rows={6} required maxLength={5000} className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-base focus:border-[color:var(--gold)] focus:outline-none" placeholder="A few sentences on your institution, the challenge, and what you'd like to discuss." />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-7 py-4 text-sm font-semibold text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--gold)] disabled:opacity-60"
                >
                  {state === "sending" ? "Sending…" : (<>Send enquiry <ArrowUpRight className="h-4 w-4" /></>)}
                </button>
                {state === "sent" && (
                  <span className="inline-flex items-center gap-2 text-sm text-[color:var(--gold)]">
                    <CheckCircle2 className="h-4 w-4" /> Thanks — a Principal will be in touch.
                  </span>
                )}
                {state === "error" && error && <span className="text-sm text-destructive">{error}</span>}
              </div>
            </form>

            <aside className="md:col-span-4 space-y-4">
              <div className="bento-card-dark">
                <p className="eyebrow text-[color:var(--gold)]">Response</p>
                <p className="mt-3 font-display text-4xl text-cloud">&lt;24h</p>
                <p className="mt-2 text-sm text-cloud/70">Typical first reply on weekdays.</p>
              </div>
              <div className="bento-card">
                <p className="eyebrow text-[color:var(--gold)]">Hours</p>
                <p className="mt-3 text-sm text-muted-foreground">Mon–Fri · 8:00–18:00 EAT</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[color:var(--cloud)] py-20 md:py-24">
        <div className="container-tight grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-[color:var(--gold)]">/ FAQ</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Common questions.</h2>
          </div>
          <dl className="md:col-span-8 divide-y divide-border border-y border-border">
            {[
              { q: "What does a typical engagement look like?", a: "Most engagements begin with a 2–3 week discovery — diagnostic review, stakeholder interviews, and a written recommendation memo. From there, clients retain us on monthly advisory or commission a defined research / reform programme." },
              { q: "Who do you typically work with?", a: "Governments and ministries, oversight institutions, UN agencies and multilaterals, bilateral donors and INGOs, and civil society and academic institutions across East Africa and South Sudan." },
              { q: "Do you take on crisis-response engagements?", a: "Yes — crisis leadership advisory is a core service line. We can mobilise senior counsel within days for institutions navigating acute pressure." },
              { q: "Where do you operate?", a: "Headquartered in Nairobi, with operations across South Sudan, Kenya, Uganda, Ethiopia, and the broader EAC region." },
              { q: "How quickly do you respond?", a: "A Principal reviews every enquiry. Most are answered within one business day." },
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
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-base focus:border-[color:var(--gold)] focus:outline-none"
      />
    </div>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--gold)]" strokeWidth={1.5} />
      <div className="min-w-0">
        <p className="eyebrow text-muted-foreground">{label}</p>
        <p className="mt-0.5 truncate text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}
