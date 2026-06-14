import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Meridian Consulting" },
      { name: "description", content: "An independent project management and construction consultancy founded in 2003 in San Francisco." },
      { property: "og:title", content: "About — Meridian Consulting" },
      { property: "og:description", content: "About Meridian Consulting." },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { n: "I", title: "Owner-aligned, always.", body: "We hold no contractor relationships, no kickbacks, no upsells. Our only client is the owner." },
  { n: "II", title: "Partner-led delivery.", body: "Every engagement is led by a partner with twenty-plus years of site experience — not delegated to a junior bench." },
  { n: "III", title: "Plain reporting.", body: "Honest schedule and cost reporting, weekly. We don't pretty up the dashboard the week before the steering committee." },
  { n: "IV", title: "On the ground.", body: "We measure quality from the slab, not the spreadsheet. Our team is on site, in the trailer, in the meetings." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-background py-24">
        <div className="container-tight grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-accent">/ About</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Twenty-two years.<br />One discipline.
            </h1>
          </div>
          <p className="md:col-span-5 text-lg text-muted-foreground">
            Meridian was founded in 2003 by three program managers tired of watching
            owners absorb the cost of contractor-led consultancies. We've been
            independent ever since.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-tight grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <img src={aboutImg} alt="Engineers reviewing plans on site" loading="lazy" width={1400} height={1000} className="aspect-[4/3] w-full rounded-sm object-cover" />
          </div>
          <div className="md:col-span-5 self-center">
            <h2 className="font-display text-3xl md:text-4xl">A team you'll actually meet.</h2>
            <p className="mt-5 text-foreground/80">
              We're 38 people — engineers, schedulers, estimators, and program managers.
              No offshore desk, no white-labelled subcontractors. The partner who pitches
              your project is the partner who runs it.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 rule-top pt-8">
              <div><dt className="text-sm text-muted-foreground">Founded</dt><dd className="font-display text-2xl">2003</dd></div>
              <div><dt className="text-sm text-muted-foreground">Team</dt><dd className="font-display text-2xl">38</dd></div>
              <div><dt className="text-sm text-muted-foreground">Practices</dt><dd className="font-display text-2xl">4</dd></div>
              <div><dt className="text-sm text-muted-foreground">HQ</dt><dd className="font-display text-2xl">SF</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--cloud)] py-24">
        <div className="container-tight">
          <p className="eyebrow text-accent">/ Principles</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            What we hold the line on.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="bg-background p-10">
                <p className="font-display text-3xl text-accent">{p.n}</p>
                <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
