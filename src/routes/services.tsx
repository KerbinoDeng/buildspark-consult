import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardList, HardHat, PackageSearch } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Meridian Consulting" },
      { name: "description", content: "Project management, procurement, and construction management for owners and developers across East Africa." },
      { property: "og:title", content: "Services — Meridian Consulting" },
      { property: "og:description", content: "End-to-end consultancy services from feasibility to handover." },
      { property: "og:url", content: "https://buildspark-consult.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://buildspark-consult.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: ClipboardList, n: "01", title: "Project Management", body: "We act as the owner's program lead from feasibility through handover. Schedule, cost, scope, and risk under one accountable team.", points: ["Critical-path schedule control", "Monthly cost & forecast reports", "Risk register & change management", "Design coordination"] },
  { icon: PackageSearch, n: "02", title: "Procurement", body: "Tender strategy, vendor qualification, and contract negotiation that protect the budget without slowing the build. Cross-border sourcing across the region.", points: ["Tender packaging & evaluation", "Vendor pre-qualification", "Cross-border sourcing & logistics", "Contract negotiation & GMP lock-in"] },
  { icon: HardHat, n: "03", title: "Construction Management", body: "Owner's representative on site — contractor governance, safety, QA, and handover. We hold the contractor to the contract, every week.", points: ["Daily site supervision", "Contractor & sub coordination", "Safety & compliance audits", "Quality assurance & handover"] },
];

const packages = [
  { name: "Discovery sprint", price: "From $12k", duration: "2 weeks", body: "Independent review of an active or planned program. Risk register, cost & schedule sanity check, written recommendations.", features: ["Document & contract review", "Stakeholder interviews", "Risk + recovery memo"], featured: false },
  { name: "Owner's representative", price: "From $18k / mo", duration: "6+ months", body: "Embedded program lead on your behalf — cost, schedule, contractor governance, and monthly board reporting.", features: ["Partner-led delivery", "Monthly cost & schedule reports", "On-site supervision"], featured: true },
  { name: "Project recovery", price: "Custom", duration: "Engagement-based", body: "Turnaround leadership for distressed builds. Interim project director within two weeks of signing.", features: ["Forensic schedule analysis", "Claims & dispute support", "Turnaround plan + execution"], featured: false },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-background">
        <div className="container-tight py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-12">
              <p className="eyebrow text-cloud/70">/ Services</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
                Three disciplines.<br />One accountable team.
              </h1>
              <p className="mt-6 max-w-xl text-cloud/80">
                Project management, procurement, and construction management — engage Meridian
                as a complete project office or as a single specialist. Every engagement is partner-led.
              </p>
            </div>
            <div className="md:col-span-4 bento-card flex flex-col justify-between">
              <p className="eyebrow text-[color:var(--steel)]">Engagement</p>
              <div>
                <p className="font-display text-5xl">6+</p>
                <p className="mt-2 text-sm text-muted-foreground">Months typical engagement length</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="py-16 md:py-24">
        <div className="container-tight space-y-4 md:space-y-5">
          {services.map((s, i) => {
            const dark = i % 2 === 1;
            return (
              <article key={s.n} className={dark ? "bento-card-dark md:p-12" : "bento-card md:p-12"}>
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <p className={`eyebrow ${dark ? "text-cloud/60" : "text-[color:var(--steel)]"}`}>{s.n}</p>
                    <s.icon className="mt-4 h-8 w-8" strokeWidth={1.5} />
                    <h2 className="mt-6 font-display text-3xl md:text-4xl">{s.title}</h2>
                  </div>
                  <div className="md:col-span-5">
                    <p className={dark ? "text-cloud/80" : "text-muted-foreground"}>{s.body}</p>
                  </div>
                  <ul className={`md:col-span-4 space-y-3 text-sm ${dark ? "text-cloud/85" : "text-foreground/85"}`}>
                    {s.points.map((p) => (
                      <li key={p} className={`flex gap-2 border-t pt-3 first:border-t-0 first:pt-0 ${dark ? "border-white/10" : "border-border"}`}>
                        <span className="text-[color:var(--steel)]">—</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-t border-border bg-[color:var(--cloud)] py-20 md:py-24">
        <div className="container-tight">
          <p className="eyebrow text-[color:var(--steel)]">/ Engagements</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Starting points.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every program is scoped to fit, but most engagements start from one of three shapes.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {packages.map((p) => (
              <div key={p.name} className={`${p.featured ? "bento-card-dark md:p-8" : "bento-card md:p-8"}`}>
                {p.featured && <p className="eyebrow text-cloud/70">/ Most engaged</p>}
                <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-cloud/60" : "text-muted-foreground"}`}>{p.duration}</p>
                <p className="mt-6 font-display text-3xl">{p.price}</p>
                <p className={`mt-6 text-sm ${p.featured ? "text-cloud/80" : "text-foreground/80"}`}>{p.body}</p>
                <ul className={`mt-6 space-y-2 text-sm ${p.featured ? "text-cloud/85" : ""}`}>
                  {p.features.map((f) => (<li key={f} className="flex gap-2"><span className="text-[color:var(--steel)]">—</span>{f}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-tight rule-top pt-16">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <h2 className="md:col-span-8 font-display text-4xl md:text-5xl">
              Need a scoping call? We answer within a business day.
            </h2>
            <Link
              to="/contact"
              className="md:col-span-4 md:text-right inline-flex items-center gap-2 rounded-sm bg-[color:var(--ink)] px-7 py-4 text-sm font-medium text-cloud hover:bg-[color:var(--steel)] md:justify-end"
            >
              Book a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
