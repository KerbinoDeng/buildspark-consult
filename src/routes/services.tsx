import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Compass,
  ShieldAlert,
  Users,
  Landmark,
  FileSearch,
  GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — The KSL Group" },
      { name: "description", content: "Six service lines: strategic planning, crisis leadership, executive development, governance reform, policy research, and training & facilitation." },
      { property: "og:title", content: "Services — The KSL Group" },
      { property: "og:description", content: "Six integrated service lines for governments, institutions, and development partners across East Africa." },
      { property: "og:url", content: "https://buildspark-consult.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://buildspark-consult.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Compass, n: "01", slug: "strategic-planning",
    title: "Strategic Planning & Institutional Development",
    body: "We design strategic frameworks and institutional systems that allow organisations to perform, adapt, and deliver — at scale, under pressure, and with integrity.",
    points: [
      "Multi-year strategic plan design",
      "Institutional architecture & operating-model design",
      "Mandate, vision, and value-system formulation",
      "Change-management & implementation roadmaps",
    ],
  },
  {
    icon: ShieldAlert, n: "02", slug: "crisis-leadership",
    title: "Crisis Leadership Advisory & Capacity Building",
    body: "DBA-level expertise in crisis leadership for fragile and conflict-affected settings, grounded in original peer-reviewed research from South Sudan.",
    points: [
      "Crisis-leadership diagnostics & playbooks",
      "Executive coaching under crisis conditions",
      "Scenario-planning & stress-testing",
      "Institutional resilience frameworks",
    ],
  },
  {
    icon: Users, n: "03", slug: "executive-leadership-development",
    title: "Executive Leadership Development & Coaching",
    body: "One-to-one coaching and cohort programmes that build leaders capable of delivering with integrity in complex political and operational environments.",
    points: [
      "C-suite & ministerial coaching",
      "Cohort leadership academies",
      "360° leadership diagnostics",
      "Succession & talent-pipeline design",
    ],
  },
  {
    icon: Landmark, n: "04", slug: "governance-and-accountability",
    title: "Governance, Accountability & Public Sector Reform",
    body: "Advisory to governments, oversight institutions, and development partners on governance reform, accountability systems, and public-sector performance.",
    points: [
      "Governance diagnostic & reform roadmaps",
      "Accountability framework design",
      "Legislative and oversight capacity building",
      "Anti-corruption, transparency, and PFM advisory",
    ],
  },
  {
    icon: FileSearch, n: "05", slug: "research-and-policy",
    title: "Research, Policy Analysis & Advisory",
    body: "High-quality policy research, institutional analyses, and strategic advisory for governments, multilaterals, NGOs, and academic institutions.",
    points: [
      "Policy research & analysis",
      "Institutional performance evaluations",
      "Monitoring & evaluation frameworks",
      "Stakeholder consultations & policy dialogue",
    ],
  },
  {
    icon: GraduationCap, n: "06", slug: "training-and-facilitation",
    title: "Training, Facilitation & Workshop Design",
    body: "Custom training programmes and facilitated workshops designed to build internal capacity rather than create consultant dependency.",
    points: [
      "Bespoke workshop & curriculum design",
      "Strategy-retreat facilitation",
      "Train-the-trainer programmes",
      "Multi-stakeholder dialogue facilitation",
    ],
  },
];

const packages = [
  {
    name: "Discovery engagement",
    price: "From $8k",
    duration: "2–3 weeks",
    body: "Diagnostic review of your institution's strategic, governance, or leadership challenge. Independent findings and a written recommendation memo.",
    features: ["Document & stakeholder review", "Confidential interviews", "Findings memo + roadmap"],
    featured: false,
  },
  {
    name: "Retained advisory",
    price: "From $15k / mo",
    duration: "6–12 months",
    body: "Embedded strategic advisory — Principal-led, with quarterly leadership work, monthly governance reviews, and on-call counsel.",
    features: ["Partner-led delivery", "Monthly governance reviews", "Executive coaching"],
    featured: true,
  },
  {
    name: "Programme & research",
    price: "Custom",
    duration: "Engagement-based",
    body: "Multi-month research, evaluation, or reform-design engagements for governments, multilaterals, and INGOs.",
    features: ["Original empirical research", "Stakeholder consultations", "Final report + dissemination"],
    featured: false,
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-background">
        <div className="container-tight py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-12">
              <p className="eyebrow text-[color:var(--gold)]">/ Services</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-cloud md:text-7xl">
                Six service lines.<br />One integrated practice.
              </h1>
              <p className="mt-6 max-w-xl text-cloud/80">
                Standalone engagements or fully integrated advisory packages — every brief
                tailored to context, capacity, and objectives.
              </p>
            </div>
            <div className="md:col-span-4 bento-card flex flex-col justify-between">
              <p className="eyebrow text-[color:var(--gold)]">Engagement</p>
              <div>
                <p className="font-display text-5xl">6+</p>
                <p className="mt-2 text-sm text-muted-foreground">Months typical retained engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE LINES */}
      <section className="py-16 md:py-24">
        <div className="container-tight space-y-4 md:space-y-5">
          {services.map((s, i) => {
            const dark = i % 2 === 1;
            return (
              <article key={s.n} className={dark ? "bento-card-dark md:p-12" : "bento-card md:p-12"}>
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <p className={`eyebrow ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"}`}>{s.n}</p>
                    <s.icon className={`mt-4 h-8 w-8 ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--ink)]"}`} strokeWidth={1.5} />
                    <h2 className={`mt-6 font-display text-2xl md:text-3xl ${dark ? "text-cloud" : ""}`}>{s.title}</h2>
                  </div>
                  <div className="md:col-span-5">
                    <p className={dark ? "text-cloud/80" : "text-muted-foreground"}>{s.body}</p>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${dark ? "text-[color:var(--gold)]" : "text-foreground"}`}
                    >
                      Full detail <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <ul className={`md:col-span-4 space-y-3 text-sm ${dark ? "text-cloud/85" : "text-foreground/85"}`}>
                    {s.points.map((p) => (
                      <li key={p} className={`flex gap-2 border-t pt-3 first:border-t-0 first:pt-0 ${dark ? "border-white/10" : "border-border"}`}>
                        <span className="text-[color:var(--gold)]">—</span>{p}
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
          <p className="eyebrow text-[color:var(--gold)]">/ Engagement shapes</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Starting points.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every brief is scoped to fit, but most engagements begin from one of three shapes.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {packages.map((p) => (
              <div key={p.name} className={`${p.featured ? "bento-card-dark md:p-8" : "bento-card md:p-8"}`}>
                {p.featured && <p className="eyebrow text-[color:var(--gold)]">/ Most engaged</p>}
                <h3 className={`mt-2 font-display text-2xl ${p.featured ? "text-cloud" : ""}`}>{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? "text-cloud/60" : "text-muted-foreground"}`}>{p.duration}</p>
                <p className={`mt-6 font-display text-3xl ${p.featured ? "text-[color:var(--gold)]" : ""}`}>{p.price}</p>
                <p className={`mt-6 text-sm ${p.featured ? "text-cloud/80" : "text-foreground/80"}`}>{p.body}</p>
                <ul className={`mt-6 space-y-2 text-sm ${p.featured ? "text-cloud/85" : ""}`}>
                  {p.features.map((f) => (<li key={f} className="flex gap-2"><span className="text-[color:var(--gold)]">—</span>{f}</li>))}
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
              Ready to scope your engagement?
            </h2>
            <Link
              to="/contact"
              className="md:col-span-4 md:text-right inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-7 py-4 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--gold)] md:justify-end"
            >
              Book a discovery call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
