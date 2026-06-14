import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardList, HardHat, PackageSearch, MapPin, Mail, Phone } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Consulting — Project, Procurement & Construction Management" },
      { name: "description", content: "Independent consultancy delivering project management, procurement, and construction management for complex builds across East Africa." },
      { property: "og:title", content: "Meridian Consulting" },
      { property: "og:description", content: "Project management, procurement, and construction management." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO BENTO */}
      <section className="border-b border-border bg-background">
        <div className="container-tight py-10 md:py-14">
          <div className="grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-12 md:gap-5">
            {/* Headline */}
            <div className="md:col-span-8 md:row-span-2 bento-card-dark overflow-hidden md:p-12">
              <img src={heroImg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <p className="eyebrow text-cloud/70">Nairobi · Juba · East Africa</p>
                <div>
                  <h1 className="font-display text-5xl leading-[1.02] md:text-7xl">
                    Project, procurement<br />&amp; construction <em className="not-italic text-[color:var(--steel)]">management.</em>
                  </h1>
                  <p className="mt-6 max-w-xl text-base text-cloud/80 md:text-lg">
                    An independent consultancy embedded with owners and developers — leading the
                    program, sourcing the trades, and running the site to handover.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-cloud px-6 py-3 text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--steel)] hover:text-cloud transition-colors">
                      Book a consultation <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link to="/projects" className="inline-flex items-center gap-2 rounded-sm border border-cloud/30 px-6 py-3 text-sm font-medium text-cloud hover:bg-white/5">
                      See our work
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat: years */}
            <div className="md:col-span-4 bento-card flex flex-col justify-between">
              <p className="eyebrow text-[color:var(--steel)]">Practice</p>
              <div>
                <p className="font-display text-6xl md:text-7xl">22<span className="text-[color:var(--steel)]">.</span></p>
                <p className="mt-2 text-sm text-muted-foreground">Years delivering across East Africa</p>
              </div>
            </div>

            {/* Stat: value managed */}
            <div className="md:col-span-4 bento-card flex flex-col justify-between bg-[color:var(--cloud)]">
              <p className="eyebrow text-[color:var(--primary)]">Under management</p>
              <div>
                <p className="font-display text-5xl md:text-6xl">$2.4B</p>
                <p className="mt-2 text-sm text-muted-foreground">Construction value across 184 projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS — BENTO */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-[color:var(--steel)]">/ What we do</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Three disciplines.<br />One accountable team.</h2>
            </div>
            <p className="md:col-span-5 text-muted-foreground">
              Partner-led delivery from feasibility to handover. Engage Meridian as a
              full project office or a single specialist.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-6 md:gap-5">
            <Pillar
              span="md:col-span-3 lg:col-span-2"
              icon={ClipboardList}
              num="01"
              title="Project Management"
              body="Schedule, cost, scope, and risk under one accountable lead — from feasibility through handover."
              bullets={["Critical-path schedule control", "Monthly cost & forecast reports", "Risk register & change management"]}
            />
            <Pillar
              span="md:col-span-3 lg:col-span-2"
              dark
              icon={PackageSearch}
              num="02"
              title="Procurement"
              body="Tender strategy, vendor qualification, and contract negotiation that protect the budget without slowing the build."
              bullets={["Tender packaging & evaluation", "Cross-border sourcing", "GMP negotiation"]}
            />
            <Pillar
              span="md:col-span-6 lg:col-span-2"
              icon={HardHat}
              num="03"
              title="Construction Management"
              body="Owner's representative on site — contractor coordination, safety governance, and QA through handover."
              bullets={["Daily site supervision", "Safety & compliance audits", "Quality assurance"]}
            />
          </div>
        </div>
      </section>

      {/* WORK + PROOF BENTO */}
      <section className="border-t border-border bg-[color:var(--cloud)] py-20 md:py-28">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-[color:var(--primary)]">/ Selected work</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Recent programs.</h2>
            </div>
            <Link to="/projects" className="hidden text-sm font-medium md:inline-flex">All projects →</Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
            <WorkCard className="md:col-span-7" img={project1} eyebrow="Civic infrastructure" title="Bayview Transit Interchange" meta="Owner's rep · $310M · 2024" />
            <WorkCard className="md:col-span-5" img={project2} eyebrow="Commercial high-rise" title="One Harbour Plaza" meta="Pre-construction · 42 floors · 2023" />

            {/* Testimonial tile */}
            <figure className="md:col-span-5 bento-card-dark flex flex-col justify-between">
              <p className="eyebrow text-cloud/60">Client</p>
              <blockquote className="font-display text-2xl leading-snug">
                "Meridian ran the program like it was their own balance sheet. We closed two months early."
              </blockquote>
              <figcaption className="text-sm">
                <span className="font-medium text-cloud">M. Achieng</span>
                <span className="block text-cloud/60">Director of Development, Tatu Holdings</span>
              </figcaption>
            </figure>

            {/* KPI tile */}
            <div className="md:col-span-3 bento-card flex flex-col justify-between">
              <p className="eyebrow text-[color:var(--steel)]">On budget</p>
              <p className="font-display text-6xl">97%</p>
              <p className="text-sm text-muted-foreground">Delivery vs. approved budget</p>
            </div>

            {/* KPI tile */}
            <div className="md:col-span-4 bento-card flex flex-col justify-between bg-[color:var(--ink)] text-cloud">
              <p className="eyebrow text-cloud/60">Partner-led</p>
              <p className="font-display text-4xl leading-tight">Every engagement is run by a named partner — not a junior bench.</p>
              <Link to="/about" className="inline-flex items-center gap-1 text-sm text-cloud/80 hover:text-cloud">Meet the team <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-10">
              <p className="eyebrow text-cloud/60">/ Start here</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Have a build that needs a steadier hand?</h2>
              <p className="mt-4 max-w-xl text-cloud/70">A partner reviews every enquiry. Most are answered within one business day.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-cloud px-6 py-3 text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--steel)] hover:text-cloud transition-colors">
                Book a consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-4 bento-card flex flex-col gap-5">
              <p className="eyebrow text-[color:var(--steel)]">Direct</p>
              <ContactLine icon={Mail} text="kerbinoyel@gmail.com" />
              <ContactLine icon={Phone} text="+254 743 978 678" />
              <ContactLine icon={Phone} text="+211 927 272 752" />
              <ContactLine icon={MapPin} text="Nairobi · Juba" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({
  span, icon: Icon, num, title, body, bullets, dark,
}: { span: string; icon: typeof ClipboardList; num: string; title: string; body: string; bullets: string[]; dark?: boolean }) {
  const base = dark ? "bento-card-dark" : "bento-card";
  return (
    <article className={`${span} ${base} flex flex-col gap-6 md:p-8`}>
      <div className="flex items-start justify-between">
        <Icon className="h-7 w-7" strokeWidth={1.5} />
        <span className={`eyebrow ${dark ? "text-cloud/50" : "text-muted-foreground"}`}>{num}</span>
      </div>
      <h3 className="font-display text-3xl">{title}</h3>
      <p className={`text-sm ${dark ? "text-cloud/75" : "text-muted-foreground"}`}>{body}</p>
      <ul className="mt-auto space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className={`flex gap-2 border-t pt-2 ${dark ? "border-white/10" : "border-border"}`}>
            <span className={dark ? "text-[color:var(--steel)]" : "text-[color:var(--steel)]"}>—</span>{b}
          </li>
        ))}
      </ul>
    </article>
  );
}

function WorkCard({ className, img, eyebrow, title, meta }: { className?: string; img: string; eyebrow: string; title: string; meta: string }) {
  return (
    <Link to="/projects" className={`group block overflow-hidden rounded-sm border border-border bg-card ${className ?? ""}`}>
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="flex items-start justify-between gap-6 p-6">
        <div>
          <p className="eyebrow text-[color:var(--steel)]">{eyebrow}</p>
          <h3 className="mt-2 font-display text-2xl">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
        </div>
        <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

function ContactLine({ icon: Icon, text }: { icon: typeof Mail; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Icon className="h-4 w-4 text-[color:var(--steel)]" strokeWidth={1.5} />
      <span className="text-foreground/85">{text}</span>
    </div>
  );
}
