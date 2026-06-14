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
  { img: project1, sector: "Civic infrastructure", title: "Bayview Transit Interchange", meta: "Owner's representative · $310M · 2024", body: "Multi-modal interchange uniting commuter rail, BRT, and ferry. Led the owner's program through 4 phases under an active operating site." },
  { img: project2, sector: "Commercial high-rise", title: "One Harbour Plaza", meta: "Pre-construction · 42 floors · 2023", body: "Estimating, VE, and tender management for a Class A office tower. Reduced base bid by 11% without compromising façade strategy." },
  { img: hero, sector: "Industrial", title: "Mariposa Cold Storage Facility", meta: "Project management · $84M · 2022", body: "180,000 sq.ft. automated cold storage facility on a brownfield. Coordinated three EPC packages and a phased commissioning plan." },
  { img: project1, sector: "Healthcare", title: "St. Helena Medical Center Expansion", meta: "Construction oversight · $145M · 2021", body: "Two new clinical wings while keeping the hospital fully operational. Zero patient-impact incidents over 28 months on site." },
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
                <p className="mt-5 text-base text-foreground/80">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
