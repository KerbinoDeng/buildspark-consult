import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, HardHat, LineChart, Ruler, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Consulting — Project Management & Construction" },
      { name: "description", content: "Independent project management and construction consultancy for complex commercial, civic, and industrial builds." },
      { property: "og:title", content: "Meridian Consulting" },
      { property: "og:description", content: "Project management and construction consultancy." },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "184", v: "Projects delivered" },
  { k: "$2.4B", v: "Construction value managed" },
  { k: "97%", v: "On-budget delivery" },
  { k: "22", v: "Years in practice" },
];

const services = [
  { icon: LineChart, title: "Project Management", body: "End-to-end leadership from feasibility through handover — schedule, cost, scope, and risk under a single accountable team." },
  { icon: HardHat, title: "Construction Oversight", body: "Owner's-representative site supervision, contractor coordination, safety governance, and quality assurance." },
  { icon: Ruler, title: "Pre-Construction", body: "Estimating, value engineering, constructability review, and tender management to de-risk the build before mobilisation." },
  { icon: ShieldCheck, title: "Advisory & Audit", body: "Independent program audits, dispute support, claims analysis, and recovery planning for projects in distress." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[color:var(--ink)] text-cloud">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/80 to-transparent" />

        <div className="container-tight relative grid min-h-[88vh] grid-cols-1 items-end gap-12 py-24 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-cloud/70">Est. 2003 · San Francisco</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] sm:text-7xl md:text-[5.5rem]">
              Building the<br />
              <span className="italic text-[color:var(--steel)]">complicated</span> things.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-cloud/80">
              Meridian is an independent consultancy embedded with owners and developers
              across commercial, civic, and industrial construction. We lead the program —
              you keep the keys.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-cloud px-6 py-3 text-sm font-medium text-[color:var(--ink)] transition-transform hover:-translate-y-0.5"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-sm border border-cloud/30 px-6 py-3 text-sm font-medium text-cloud transition-colors hover:bg-white/5"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background">
        <div className="container-tight grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.v}>
              <p className="font-display text-4xl tracking-tight text-foreground md:text-5xl">{s.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28">
        <div className="container-tight">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-accent">/ Services</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                A full delivery team, hired by the floor.
              </h2>
            </div>
            <p className="md:col-span-7 md:col-start-6 text-lg text-muted-foreground">
              We slot into your organisation as a complete project office or as a single
              specialist — without the overhead of a tier-one consultancy.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="group bg-card p-10 transition-colors hover:bg-muted">
                <s.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[color:var(--cloud)] py-28">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow text-accent">/ Selected work</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Recent programs.</h2>
            </div>
            <Link to="/projects" className="hidden text-sm font-medium md:inline-flex">
              All projects →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ProjectCard
              img={project1}
              eyebrow="Civic infrastructure"
              title="Bayview Transit Interchange"
              meta="Owner's rep · $310M · 2024"
            />
            <ProjectCard
              img={project2}
              eyebrow="Commercial high-rise"
              title="One Harbour Plaza"
              meta="Pre-construction · 42 floors · 2023"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-tight">
          <div className="rule-top pt-16">
            <div className="grid items-end gap-10 md:grid-cols-12">
              <h2 className="md:col-span-8 font-display text-4xl leading-tight md:text-6xl">
                Have a build that needs a steadier hand?
              </h2>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--ink)] px-7 py-4 text-sm font-medium text-cloud hover:bg-primary"
                >
                  Book an intro call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({
  img, eyebrow, title, meta,
}: { img: string; eyebrow: string; title: string; meta: string }) {
  return (
    <Link to="/projects" className="group block">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h3 className="mt-2 font-display text-2xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
        </div>
        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
