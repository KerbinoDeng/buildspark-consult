import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Meridian Consulting" },
      { name: "description", content: "Field notes and analysis on construction program management, cost control, and project recovery from the Meridian team." },
      { property: "og:title", content: "Insights — Meridian Consulting" },
      { property: "og:description", content: "Field notes on construction program management and project recovery." },
    ],
  }),
  component: InsightsPage,
});

const posts = [
  {
    tag: "Cost control",
    date: "May 2026",
    title: "Why owner's contingency runs out at month 14 — and how to stop it.",
    excerpt: "A pattern we see across mid-rise commercial builds: cost growth is non-linear. Here's the early-warning data we track to flag drift before it compounds.",
    read: "7 min read",
  },
  {
    tag: "Recovery",
    date: "Apr 2026",
    title: "Five signals a construction program is in quiet distress.",
    excerpt: "Late RFIs, optimistic look-aheads, contractor staffing churn — the symptoms that show up months before the schedule formally slips.",
    read: "5 min read",
  },
  {
    tag: "East Africa",
    date: "Mar 2026",
    title: "Procuring for projects across Kenya and South Sudan: what changes.",
    excerpt: "Cross-border procurement, customs windows, and currency exposure that owners underestimate when expanding regionally.",
    read: "9 min read",
  },
  {
    tag: "Pre-construction",
    date: "Feb 2026",
    title: "The value-engineering workshop we run before every GMP.",
    excerpt: "A two-day framework that consistently pulls 8–12% out of base bids without compromising design intent.",
    read: "6 min read",
  },
];

function InsightsPage() {
  return (
    <>
      <section className="border-b border-border bg-background py-24">
        <div className="container-tight">
          <p className="eyebrow text-accent">/ Insights</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Field notes from<br />the program office.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Practical analysis on cost, schedule, and recovery — written by the partners
            who run the projects, not a marketing desk.
          </p>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="border-b border-border bg-[color:var(--cloud)] py-16">
        <div className="container-tight grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-accent">/ Free download</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              The 12-point checklist owners use before signing a GMP.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              The same pre-contract review we run for our clients — distilled into a
              one-page PDF.
            </p>
          </div>
          <form
            className="md:col-span-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              f.reset();
              alert("Check your inbox — the checklist is on its way.");
            }}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="min-w-0 flex-1 rounded-sm border border-border bg-card px-4 py-3 text-sm focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-sm bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-cloud hover:bg-primary"
            >
              Send it
            </button>
          </form>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-20">
        <div className="container-tight divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <article key={p.title} className="grid gap-6 py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="eyebrow text-accent">{p.tag}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.date} · {p.read}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-2xl md:text-3xl leading-snug">{p.title}</h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">{p.excerpt}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
