import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ARTICLES } from "@/lib/content";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const a = ARTICLES.find((x) => x.slug === params.slug);
    const title = a ? `${a.title} — KSL Insights` : "Insights — KSL Advisory";
    const desc = a?.dek ?? "Insights from KSL Advisory.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="font-display text-4xl">Article not found</h1>
      <Link to="/insights" className="mt-4 inline-block underline">
        Back to insights
      </Link>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <article className="py-12 md:py-20">
      <div className="container-tight max-w-3xl">
        <Link
          to="/insights"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All insights
        </Link>

        <p className="mt-6 eyebrow text-[color:var(--gold)]">
          {article.category} · {article.date} · {article.readTime}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{article.title}</h1>
        <p className="mt-4 text-lg text-foreground/80">{article.dek}</p>

        <div className="mt-10 space-y-5 text-foreground/85 leading-relaxed">
          {article.body.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-14 bento-card-dark md:p-8">
          <p className="eyebrow text-[color:var(--gold)]">/ Discuss this with us</p>
          <h2 className="mt-3 font-display text-2xl text-cloud">
            Want to apply this in your institution?
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-cloud"
          >
            Book a discovery call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
