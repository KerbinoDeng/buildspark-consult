import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Meridian Consulting" },
      { name: "description", content: "Project management, construction oversight, pre-construction, and advisory services for owners and developers." },
      { property: "og:title", content: "Services — Meridian Consulting" },
      { property: "og:description", content: "End-to-end construction consultancy services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Project Management",
    body: "We act as the owner's program lead from feasibility through handover. Schedule control, cost reporting, scope governance, change management, and stakeholder coordination — under one accountable team.",
    points: ["Master schedule & critical-path control", "Monthly cost reporting & forecasting", "Risk register & mitigation tracking", "Design coordination across disciplines"],
  },
  {
    n: "02",
    title: "Construction Oversight",
    body: "Owner's-representative supervision on site. We hold the contractor to the contract, enforce safety governance, run QA inspections, and keep the program honest week to week.",
    points: ["Daily site supervision", "Contractor & sub coordination", "Safety & compliance audits", "Quality assurance inspections"],
  },
  {
    n: "03",
    title: "Pre-Construction",
    body: "De-risk the build before mobilisation. Independent estimating, value engineering, constructability review, procurement strategy, and tender management.",
    points: ["Cost planning & estimating", "Value engineering workshops", "Tender packaging & evaluation", "Procurement strategy"],
  },
  {
    n: "04",
    title: "Advisory & Audit",
    body: "When projects drift, we recover them. Independent program audits, claims and dispute support, schedule forensics, and turnaround planning.",
    points: ["Program health audits", "Schedule & delay analysis", "Claims & dispute support", "Recovery & turnaround plans"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-background py-24">
        <div className="container-tight">
          <p className="eyebrow text-accent">/ Services</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Four practices.<br />One accountable team.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Engage Meridian as a complete project office or as a single specialist.
            Every engagement is led by a partner — never delegated to a junior bench.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight space-y-px overflow-hidden rounded-sm border border-border bg-border">
          {services.map((s) => (
            <article key={s.n} className="bg-card p-10 md:p-14">
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="font-display text-5xl text-accent">{s.n}</p>
                  <h2 className="mt-4 font-display text-3xl">{s.title}</h2>
                </div>
                <div className="md:col-span-6">
                  <p className="text-lg text-muted-foreground">{s.body}</p>
                </div>
                <ul className="md:col-span-3 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 border-t border-border pt-2 first:border-t-0 first:pt-0">
                      <span className="text-accent">—</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[color:var(--cloud)] py-24">
        <div className="container-tight">
          <p className="eyebrow text-accent">/ Engagements</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">Starting points.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every program is scoped to fit, but most engagements start from one of three shapes.
          </p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
            {[
              { name: "Discovery sprint", price: "From $12k", duration: "2 weeks", body: "Independent review of an active or planned program. Risk register, cost & schedule sanity check, written recommendations.", features: ["Document & contract review", "Stakeholder interviews", "Risk + recovery memo"], featured: false },
              { name: "Owner's representative", price: "From $18k / mo", duration: "6+ months", body: "Embedded program lead on your behalf — cost, schedule, contractor governance, and monthly board reporting.", features: ["Partner-led delivery", "Monthly cost & schedule reports", "On-site supervision"], featured: true },
              { name: "Project recovery", price: "Custom", duration: "Engagement-based", body: "Turnaround leadership for distressed builds. Interim project director within two weeks of signing.", features: ["Forensic schedule analysis", "Claims & dispute support", "Turnaround plan + execution"], featured: false },
            ].map((p) => (
              <div key={p.name} className={`bg-card p-10 ${p.featured ? "ring-1 ring-accent" : ""}`}>
                {p.featured && <p className="eyebrow text-accent">/ Most engaged</p>}
                <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.duration}</p>
                <p className="mt-6 font-display text-3xl">{p.price}</p>
                <p className="mt-6 text-sm text-foreground/80">{p.body}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map((f) => (<li key={f} className="flex gap-2"><span className="text-accent">—</span>{f}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-tight rule-top pt-16">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <h2 className="md:col-span-8 font-display text-4xl md:text-5xl">
              Need a scoping call? We answer within a business day.
            </h2>
            <Link
              to="/contact"
              className="md:col-span-4 md:text-right inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-medium text-[color:var(--ink)] hover:bg-primary hover:text-primary-foreground md:justify-end"
            >
              Book a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
