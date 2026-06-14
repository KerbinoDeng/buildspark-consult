import { createFileRoute } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import hero from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Meridian Consulting" },
      { name: "description", content: "Selected commercial, civic, and industrial construction programs managed by Meridian Consulting." },
      { property: "og:title", content: "Projects — Meridian Consulting" },
      { property: "og:description", content: "Selected construction and program management work." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    img: project1, sector: "Civic infrastructure", title: "Bayview Transit Interchange", meta: "Owner's representative · $310M · 2024",
    problem: "An ageing interchange had to absorb 40% more daily riders while remaining fully operational throughout a four-phase rebuild.",
    solution: "We embedded an owner's team across design, contractor coordination, and stakeholder liaison — sequencing works around live commuter schedules.",
    result: "Delivered on time, 6% under approved budget, with zero service-day closures and an industry safety award for the site team.",
  },
  {
    img: project2, sector: "Commercial high-rise", title: "One Harbour Plaza", meta: "Pre-construction · 42 floors · 2023",
    problem: "Tender returns came in 18% over the developer's hard cost cap, threatening the project's financing close.",
    solution: "Led a value-engineering sprint across façade, MEP, and structural packages; restructured the trade tender into early-works + GMP.",
    result: "Re-tendered base bid 11% below original, locked GMP within 30 days, and preserved the architect's façade intent.",
  },
  {
    img: hero, sector: "Industrial", title: "Mariposa Cold Storage Facility", meta: "Project management · $84M · 2022",
    problem: "A brownfield site with contaminated soils and three parallel EPC packages risked a 9-month commissioning slip.",
    solution: "Built an integrated master schedule, co-located the EPC leads weekly, and ran a phased commissioning model with the operator.",
    result: "Commissioned 6 weeks ahead of revised baseline; first product through the racks 11 days after substantial completion.",
  },
  {
    img: project1, sector: "Healthcare", title: "St. Helena Medical Center Expansion", meta: "Construction oversight · $145M · 2021",
    problem: "Two new clinical wings had to be built without disrupting a 320-bed hospital running at 94% occupancy.",
    solution: "Acted as owner's rep across infection-control logistics, after-hours tie-ins, and a dedicated clinical liaison protocol.",
    result: "28 months on site with zero patient-impact incidents and HCAHPS scores held steady through every phase.",
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border bg-background py-24">
        <div className="container-tight">
          <p className="eyebrow text-accent">/ Projects</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Programs we've led to handover.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            A sample of recent work across civic, commercial, industrial, and healthcare
            construction. Engagements typically run 18–48 months.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight space-y-24">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid items-center gap-10 md:grid-cols-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="md:col-span-7 [direction:ltr]">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-5 [direction:ltr]">
                <p className="eyebrow text-accent">{p.sector}</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.meta}</p>
                <dl className="mt-6 space-y-4 text-sm">
                  <div><dt className="eyebrow text-muted-foreground">Problem</dt><dd className="mt-1 text-foreground/80">{p.problem}</dd></div>
                  <div><dt className="eyebrow text-muted-foreground">Solution</dt><dd className="mt-1 text-foreground/80">{p.solution}</dd></div>
                  <div><dt className="eyebrow text-accent">Result</dt><dd className="mt-1 font-medium text-foreground">{p.result}</dd></div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
