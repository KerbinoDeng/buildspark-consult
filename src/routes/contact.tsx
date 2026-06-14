import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Meridian Consulting" },
      { name: "description", content: "Talk to Meridian Consulting about your project. Most enquiries answered within one business day." },
      { property: "og:title", content: "Contact — Meridian Consulting" },
      { property: "og:description", content: "Get in touch with Meridian Consulting." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-background py-24">
        <div className="container-tight">
          <p className="eyebrow text-accent">/ Contact</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Tell us about<br />the project.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A partner reviews every enquiry. Most are answered within one business day.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4 space-y-8">
            <ContactRow icon={Mail} label="Email" value="kerbinoyel@gmail.com" />
            <ContactRow icon={Phone} label="Phone" value={"+254 743 978 678\n+211 927 272 752"} />
            <ContactRow icon={MapPin} label="Office" value={"Nairobi, Kenya\nJuba, South Sudan"} />
            <div className="rule-top pt-8">
              <p className="eyebrow text-accent">Hours</p>
              <p className="mt-3 text-sm text-muted-foreground">Mon–Fri · 8:00–18:00 PT<br />Emergency site support 24/7</p>
            </div>
          </aside>

          <form
            className="md:col-span-8 space-y-6"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
            </div>

            <div>
              <label className="eyebrow text-muted-foreground" htmlFor="type">Project type</label>
              <select id="type" name="type" className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-base focus:border-accent focus:outline-none">
                <option>Commercial</option>
                <option>Civic / infrastructure</option>
                <option>Industrial</option>
                <option>Healthcare</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="eyebrow text-muted-foreground" htmlFor="msg">Brief</label>
              <textarea id="msg" name="msg" rows={6} required className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-base focus:border-accent focus:outline-none" placeholder="A few sentences on the project, timeline, and what you need from us." />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--ink)] px-7 py-4 text-sm font-medium text-cloud transition-colors hover:bg-primary"
            >
              {sent ? "Thanks — we'll be in touch." : (<>Send enquiry <ArrowUpRight className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[color:var(--cloud)] py-24">
        <div className="container-tight grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-accent">/ FAQ</p>
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
                <dt className="font-display text-lg text-foreground">{item.q}</dt>
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
        className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-3 text-base focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
      <div>
        <p className="eyebrow text-muted-foreground">{label}</p>
        <p className="mt-1 whitespace-pre-line text-foreground">{value}</p>
      </div>
    </div>
  );
}
