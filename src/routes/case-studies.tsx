import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/content";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Kerbino Group" },
      {
        name: "description",
        content:
          "Selected anonymised engagements from Kerbino Group — governance diagnostics, crisis leadership advisory, and oversight-institution reform across South Sudan and East Africa.",
      },
      { property: "og:title", content: "Case Studies — Kerbino Group" },
      {
        property: "og:description",
        content:
          "Selected anonymised engagements: governance reform, crisis leadership, and oversight-institution capacity in fragile contexts.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <section className="bg-background">
        <div className="container-tight py-12 md:py-20">
          <div className="bento-card-dark md:p-12">
            <p className="eyebrow text-[color:var(--gold)]">/ Case studies</p>
            <h1 className="mt-3 font-display text-4xl text-cloud md:text-6xl">
              Selected engagements.
            </h1>
            <p className="mt-4 max-w-2xl text-cloud/80 md:text-lg">
              Client identities are withheld where confidentiality requires. Outcomes are
              verifiable through references on request.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-tight space-y-5">
          {CASE_STUDIES.map((c, i) => (
            <article key={c.slug} className={`${i % 2 === 0 ? "bento-card" : "bento-card-dark"} md:p-10`}>
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p
                    className={`eyebrow ${
                      i % 2 === 0 ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} · {c.sector}
                  </p>
                  <h2
                    className={`mt-3 font-display text-2xl md:text-3xl ${
                      i % 2 === 0 ? "" : "text-cloud"
                    }`}
                  >
                    {c.client}
                  </h2>
                  <dl
                    className={`mt-4 space-y-2 text-sm ${
                      i % 2 === 0 ? "text-muted-foreground" : "text-cloud/70"
                    }`}
                  >
                    <Row k="Region" v={c.region} />
                    <Row k="Duration" v={c.duration} />
                  </dl>
                </div>
                <div className="md:col-span-8 space-y-4">
                  <Block dark={i % 2 !== 0} title="Challenge">
                    {c.challenge}
                  </Block>
                  <Block dark={i % 2 !== 0} title="Approach">
                    {c.approach}
                  </Block>
                  <div>
                    <h3
                      className={`font-display text-sm uppercase tracking-wider ${
                        i % 2 === 0 ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"
                      }`}
                    >
                      Outcomes
                    </h3>
                    <ul
                      className={`mt-2 space-y-1 text-sm ${
                        i % 2 === 0 ? "text-foreground/85" : "text-cloud/85"
                      }`}
                    >
                      {c.outcomes.map((o) => (
                        <li key={o} className="flex gap-2">
                          <span className="text-[color:var(--gold)]">→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight bento-card-dark md:p-12">
          <p className="eyebrow text-[color:var(--gold)]">/ Could be your institution next</p>
          <h2 className="mt-3 font-display text-3xl text-cloud md:text-4xl">
            Scope a confidential engagement.
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-cloud"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/40 pb-1.5">
      <dt className="uppercase tracking-wider text-xs">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}

function Block({ title, children, dark }: { title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div>
      <h3 className="font-display text-sm uppercase tracking-wider text-[color:var(--gold)]">
        {title}
      </h3>
      <p className={`mt-2 text-sm ${dark ? "text-cloud/85" : "text-foreground/85"}`}>{children}</p>
    </div>
  );
}
