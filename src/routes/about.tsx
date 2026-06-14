import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Meridian Consulting" },
      { name: "description", content: "Independent project, procurement, and construction management consultancy operating across East Africa from Nairobi and Juba." },
      { property: "og:title", content: "About — Meridian Consulting" },
      { property: "og:description", content: "Independent consultancy serving owners across East Africa." },
      { property: "og:url", content: "https://buildspark-consult.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://buildspark-consult.lovable.app/about" }],
  }),
  component: AboutPage,
});

const principles = [
  { n: "I", title: "Owner-aligned, always.", body: "We hold no contractor relationships, no kickbacks, no upsells. Our only client is the owner." },
  { n: "II", title: "Partner-led delivery.", body: "Every engagement is led by a partner with twenty-plus years of site experience — never delegated to a junior bench." },
  { n: "III", title: "Plain reporting.", body: "Honest schedule and cost reporting, weekly. We don't pretty up the dashboard the week before the steering committee." },
  { n: "IV", title: "On the ground.", body: "We measure quality from the slab, not the spreadsheet. Our team is on site, in the trailer, in the meetings." },
];

function AboutPage() {
  return (
    <>
      {/* HERO BENTO */}
      <section className="border-b border-border bg-background">
        <div className="container-tight py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-12">
              <p className="eyebrow text-cloud/70">/ About</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
                Twenty-two years.<br />One discipline.
              </h1>
              <p className="mt-6 max-w-xl text-cloud/80">
                Meridian is an independent project, procurement, and construction management
                consultancy. We've been embedded with owners and developers across East Africa since 2003.
              </p>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-4 md:gap-5">
              <div className="bento-card flex flex-col justify-between"><p className="eyebrow text-[color:var(--steel)]">Founded</p><p className="font-display text-4xl">2003</p></div>
              <div className="bento-card flex flex-col justify-between bg-[color:var(--cloud)]"><p className="eyebrow text-[color:var(--primary)]">Team</p><p className="font-display text-4xl">38</p></div>
              <div className="bento-card col-span-2 flex flex-col justify-between"><p className="eyebrow text-[color:var(--steel)]">Offices</p><p className="font-display text-3xl">Nairobi · Juba</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-7 overflow-hidden rounded-sm border border-border">
              <img src={aboutImg} alt="Engineers reviewing plans on site" loading="lazy" width={1400} height={1000} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="md:col-span-5 bento-card md:p-10 flex flex-col justify-center">
              <p className="eyebrow text-[color:var(--steel)]">/ Practice</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">A team you'll actually meet.</h2>
              <p className="mt-5 text-foreground/80">
                We're 38 engineers, schedulers, estimators, and program managers. No offshore desk,
                no white-labelled subcontractors. The partner who pitches your project is the partner
                who runs it through handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES BENTO */}
      <section className="border-t border-border bg-[color:var(--cloud)] py-20 md:py-24">
        <div className="container-tight">
          <p className="eyebrow text-[color:var(--steel)]">/ Principles</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">What we hold the line on.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
            {principles.map((p, i) => {
              const dark = i === 1 || i === 2;
              return (
                <article key={p.n} className={`${dark ? "bento-card-dark" : "bento-card"} md:col-span-6 md:p-10`}>
                  <p className={`font-display text-4xl ${dark ? "text-[color:var(--steel)]" : "text-[color:var(--steel)]"}`}>{p.n}</p>
                  <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                  <p className={`mt-3 text-sm ${dark ? "text-cloud/75" : "text-muted-foreground"}`}>{p.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-tight rule-top pt-16">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <h2 className="md:col-span-8 font-display text-4xl md:text-5xl">
              Want to work with us on a project?
            </h2>
            <Link
              to="/contact"
              className="md:col-span-4 md:text-right inline-flex items-center gap-2 rounded-sm bg-[color:var(--ink)] px-7 py-4 text-sm font-medium text-cloud hover:bg-[color:var(--steel)] md:justify-end"
            >
              Book a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
