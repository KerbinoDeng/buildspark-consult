import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    const title = s ? `${s.title} — Kerbino Group` : "Service — Kerbino Group";
    const desc = s?.tagline ?? "A Kerbino Group service line.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="font-display text-4xl">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block underline">
        Back to all services
      </Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <section className="bg-background">
        <div className="container-tight py-10 md:py-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All services
          </Link>

          <div className="mt-6 bento-card-dark md:p-12">
            <p className="eyebrow text-[color:var(--gold)]">
              / Service line {service.number}
            </p>
            <h1 className="mt-3 font-display text-4xl text-cloud md:text-5xl">{service.title}</h1>
            <p className="mt-4 max-w-2xl font-display text-xl text-[color:var(--gold)]">
              {service.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-cloud/80">{service.description}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-cloud"
            >
              Discuss this engagement <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight grid gap-4 md:grid-cols-2 md:gap-5">
          <Card title="Outcomes">
            <ul className="space-y-2 text-sm text-foreground/85">
              {service.outcomes.map((o: string) => (
                <li key={o} className="flex gap-2">
                  <span className="text-[color:var(--gold)]">→</span>
                  {o}
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Deliverables">
            <ul className="space-y-2 text-sm text-foreground/85">
              {service.deliverables.map((d: string) => (
                <li key={d} className="flex gap-2">
                  <span className="text-[color:var(--gold)]">→</span>
                  {d}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="border-t border-border bg-[color:var(--cloud)] py-12">
        <div className="container-tight">
          <p className="eyebrow text-muted-foreground">/ Other service lines</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-sm border border-border bg-background px-3 py-2 text-sm hover:border-[color:var(--gold)]"
              >
                {s.number} · {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bento-card md:p-8">
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
