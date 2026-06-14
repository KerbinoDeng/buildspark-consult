import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { subscribeNewsletter } from "@/lib/leads.functions";
import { ArrowUpRight, Download } from "lucide-react";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — The KSL Group" },
      { name: "description", content: "Research-grounded analysis on governance, crisis leadership, and public-sector reform from The KSL Group." },
      { property: "og:title", content: "Insights — The KSL Group" },
      { property: "og:description", content: "Research notes on governance, crisis leadership, and institutional reform." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const subscribe = useServerFn(subscribeNewsletter);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  return (
    <>
      <section className="border-b border-border bg-background py-24">
        <div className="container-tight">
          <p className="eyebrow text-[color:var(--gold)]">/ Insights</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Evidence-grounded<br />analysis.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Research notes on governance, crisis leadership, and public-sector reform —
            written by the practitioners who do the work.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="border-b border-border bg-[color:var(--cloud)] py-16">
        <div className="container-tight grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-[color:var(--gold)]">/ Free briefing</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              The KSL Crisis Leadership Framework — a practitioner's guide.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              The four-pillar framework we use with senior leadership teams in fragile
              contexts — distilled into a PDF you can use this week.
            </p>
            {state === "ok" && (
              <a
                href="/ksl-crisis-leadership-framework.pdf"
                download
                className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)]"
              >
                <Download className="h-4 w-4" /> Download the PDF
              </a>
            )}
          </div>
          <form
            className="md:col-span-4 flex gap-2"
            onSubmit={async (e) => {
              e.preventDefault();
              setState("sending");
              const fd = new FormData(e.currentTarget);
              try {
                const res = await subscribe({ data: { email: String(fd.get("email") ?? ""), source: "lead-magnet-crisis" } });
                if (res.ok) { setState("ok"); (e.target as HTMLFormElement).reset(); } else setState("error");
              } catch { setState("error"); }
            }}
          >
            <input
              type="email"
              name="email"
              required
              maxLength={255}
              placeholder="you@organisation.org"
              className="min-w-0 flex-1 rounded-sm border border-border bg-card px-4 py-3 text-sm focus:border-[color:var(--gold)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="rounded-sm bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] disabled:opacity-60"
            >
              {state === "ok" ? "Sent" : state === "sending" ? "…" : "Send it"}
            </button>
          </form>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-20">
        <div className="container-tight divide-y divide-border border-y border-border">
          {ARTICLES.map((p) => (
            <article key={p.slug} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="eyebrow text-[color:var(--gold)]">{p.category}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.date} · {p.readTime}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-2xl md:text-3xl leading-snug">
                  <Link
                    to="/insights/$slug"
                    params={{ slug: p.slug }}
                    className="hover:text-[color:var(--gold)]"
                  >
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">{p.dek}</p>
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  Read the article <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
