import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Meridian Consulting" },
      { name: "description", content: "Selected commercial, civic, industrial, and healthcare construction programs managed by Meridian Consulting across East Africa." },
      { property: "og:title", content: "Projects — Meridian Consulting" },
      { property: "og:description", content: "Selected construction and program management work." },
      { property: "og:url", content: "https://buildspark-consult.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://buildspark-consult.lovable.app/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    img: project1, sector: "Civic infrastructure", title: "Bayview Transit Interchange", meta: "Owner's representative · $310M · 2024",
    problem: "An ageing interchange had to absorb 40% more daily riders while remaining fully operational throughout a four-phase rebuild.",
    solution: "We embedded an owner's team across design, contractor coordination, and stakeholder liaison — sequencing works around live commuter schedules.",
    result: "Delivered on time, 6% under approved budget, with zero service-day closures.",
  },
  {
    img: project2, sector: "Commercial high-rise", title: "One Harbour Plaza", meta: "Pre-construction · 42 floors · 2023",
    problem: "Tender returns came in 18% over the developer's hard cost cap, threatening financing close.",
    solution: "Led a value-engineering sprint across façade, MEP, and structural packages; restructured tender into early-works + GMP.",
    result: "Re-tendered base bid 11% below original, locked GMP within 30 days.",
  },
  {
    img: project3, sector: "Industrial", title: "Mariposa Cold Storage Facility", meta: "Project management · $84M · 2022",
    problem: "A brownfield site with contaminated soils and three parallel EPC packages risked a 9-month commissioning slip.",
    solution: "Built an integrated master schedule, co-located EPC leads weekly, ran a phased commissioning model with the operator.",
    result: "Commissioned 6 weeks ahead of revised baseline; first product through the racks 11 days after substantial completion.",
  },
  {
    img: hero, sector: "Healthcare", title: "St. Helena Medical Center Expansion", meta: "Construction management · $145M · 2021",
    problem: "Two new clinical wings had to be built without disrupting a 320-bed hospital running at 94% occupancy.",
    solution: "Acted as owner's rep across infection-control logistics, after-hours tie-ins, and clinical liaison protocols.",
    result: "28 months on site with zero patient-impact incidents.",
  },
];

function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-background">
        <div className="container-tight py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-7 bento-card-dark md:p-12">
              <p className="eyebrow text-cloud/70">/ Projects</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
                Programs we've<br />led to handover.
              </h1>
              <p className="mt-6 max-w-xl text-cloud/80">
                A sample of recent work across civic, commercial, industrial, and healthcare
                construction. Engagements typically run 18–48 months.
              </p>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 gap-4 md:gap-5">
              <div className="bento-card flex flex-col justify-between">
                <p className="eyebrow text-[color:var(--steel)]">Programs</p>
                <p className="font-display text-5xl">184</p>
              </div>
              <div className="bento-card flex flex-col justify-between bg-[color:var(--cloud)]">
                <p className="eyebrow text-[color:var(--primary)]">Value</p>
                <p className="font-display text-5xl">$2.4B</p>
              </div>
              <div className="bento-card col-span-2 flex flex-col justify-between">
                <p className="eyebrow text-[color:var(--steel)]">On-budget delivery</p>
                <p className="font-display text-5xl">97%</p>
                <p className="mt-2 text-sm text-muted-foreground">Across all engagements since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 md:py-24">
        <div className="container-tight space-y-4 md:space-y-5">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={p.title} className="bento-card overflow-hidden p-0">
                <div className={`grid gap-0 md:grid-cols-12 ${reverse ? "md:[direction:rtl]" : ""}`}>
                  <div className="md:col-span-6 [direction:ltr]">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted md:h-full">
                      <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-6 [direction:ltr] p-8 md:p-12">
                    <p className="eyebrow text-[color:var(--steel)]">{p.sector}</p>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.meta}</p>
                    <dl className="mt-6 space-y-4 text-sm">
                      <div><dt className="eyebrow text-muted-foreground">Problem</dt><dd className="mt-1 text-foreground/80">{p.problem}</dd></div>
                      <div><dt className="eyebrow text-muted-foreground">Solution</dt><dd className="mt-1 text-foreground/80">{p.solution}</dd></div>
                      <div><dt className="eyebrow text-[color:var(--steel)]">Result</dt><dd className="mt-1 font-medium">{p.result}</dd></div>
                    </dl>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-tight flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl">Have a similar program?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-cloud hover:bg-[color:var(--steel)]">
            Book a consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
