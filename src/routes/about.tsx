import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KSL Advisory" },
      { name: "description", content: "The Kerbino Strategy & Leadership Group Ltd. — a specialist management consultancy in governance, crisis leadership, and public-sector strategy across East Africa." },
      { property: "og:title", content: "About — KSL Advisory" },
      { property: "og:description", content: "Founded by Kerbino Yel Deng, DBA candidate at USIU-Africa. Strategy Designed. Leaders Built." },
      { property: "og:url", content: "https://buildspark-consult.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://buildspark-consult.lovable.app/about" }],
  }),
  component: AboutPage,
});

const values = [
  { n: "I", title: "Integrity", body: "We operate with honesty, transparency, and ethical rigour in every engagement." },
  { n: "II", title: "Excellence", body: "We hold ourselves to the highest professional and academic standards in every deliverable." },
  { n: "III", title: "Impact", body: "We measure our success by the tangible improvements our clients achieve." },
  { n: "IV", title: "Adaptability", body: "We design solutions that work in real-world complexity, not just ideal conditions." },
  { n: "V", title: "Collaboration", body: "We build lasting partnerships grounded in trust, respect, and shared purpose." },
  { n: "VI", title: "Courage", body: "We provide honest, evidence-based counsel — even when the message is difficult." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-border bg-background">
        <div className="container-tight py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-12">
              <p className="eyebrow text-[color:var(--gold)]">/ About</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-cloud md:text-7xl">
                Strategy Designed.<br /><span className="text-[color:var(--gold)]">Leaders Built.</span>
              </h1>
              <p className="mt-6 max-w-xl text-cloud/80">
                The Kerbino Strategy &amp; Leadership Group Ltd. is a specialist management
                consultancy headquartered in Nairobi, with operations across East Africa
                and South Sudan.
              </p>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-4 md:gap-5">
              <div className="bento-card flex flex-col justify-between"><p className="eyebrow text-[color:var(--gold)]">HQ</p><p className="font-display text-3xl">Nairobi</p></div>
              <div className="bento-card flex flex-col justify-between bg-[color:var(--cloud)]"><p className="eyebrow text-[color:var(--ink)]">Operating regions</p><p className="font-display text-lg leading-tight">South Sudan · Kenya · Uganda · Ethiopia · EAC</p></div>
              <div className="bento-card col-span-2 flex flex-col justify-between"><p className="eyebrow text-[color:var(--gold)]">Founder</p><p className="font-display text-2xl">Kerbino Yel Deng — Founder &amp; CEO</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="py-16 md:py-24">
        <div className="container-tight grid gap-4 md:grid-cols-3 md:gap-5">
          <div className="bento-card md:p-10">
            <p className="eyebrow text-[color:var(--gold)]">Vision</p>
            <p className="mt-4 text-foreground/85">
              To be the leading strategy and leadership consultancy in East Africa, recognised
              for building institutions and leaders that deliver with excellence — even in the
              most complex and crisis-prone environments.
            </p>
          </div>
          <div className="bento-card-dark md:p-10">
            <p className="eyebrow text-[color:var(--gold)]">Mission</p>
            <p className="mt-4 text-cloud/85">
              To equip governments, organisations, and leaders across Africa with the strategic
              frameworks, leadership capabilities, and institutional systems they need to
              perform, adapt, and deliver — at scale, under pressure, and with integrity.
            </p>
          </div>
          <div className="bento-card md:p-10 flex flex-col justify-between">
            <p className="eyebrow text-[color:var(--gold)]">Tagline</p>
            <p className="mt-4 font-display text-3xl italic">
              Strategy Designed.<br /><span className="text-[color:var(--gold)]">Leaders Built.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-y border-border bg-[color:var(--cloud)] py-20 md:py-24">
        <div className="container-tight grid gap-4 md:grid-cols-12 md:gap-5">
          <div className="md:col-span-5 bento-card-dark md:p-10">
            <p className="eyebrow text-[color:var(--gold)]">/ Founder</p>
            <h2 className="mt-4 font-display text-4xl text-cloud md:text-5xl">Kerbino Yel Deng</h2>
            <p className="mt-2 text-[color:var(--gold)]">Founder &amp; CEO</p>
            <p className="mt-6 text-cloud/80 text-sm">
              Doctoral research: Crisis Leadership &amp; Public Service Delivery in South Sudan
              · Chandaria School of Business, USIU-Africa.
            </p>
          </div>
          <div className="md:col-span-7 bento-card md:p-10">
            <p className="text-foreground/85">
              Kerbino Yel Deng bridges high-level strategic thinking with practical,
              context-specific implementation. He brings extensive experience in strategic
              leadership, governance advisory, public-sector reform, and organisational
              development across South Sudan and the East Africa region.
            </p>
            <p className="mt-4 text-foreground/85">
              His academic and professional career — combining DBA-level research with
              hands-on regional practice — makes KSL Advisory uniquely positioned to serve
              both institutional clients and development partners operating in complex
              environments.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-[color:var(--gold)]">—</span> Strategic management, crisis leadership, governance reform</li>
              <li className="flex gap-2"><span className="text-[color:var(--gold)]">—</span> Regional experience: South Sudan, Kenya, East Africa</li>
              <li className="flex gap-2"><span className="text-[color:var(--gold)]">—</span> Peer-reviewed publications on crisis leadership and governance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH — FOUR PHASES */}
      <section className="py-20 md:py-24">
        <div className="container-tight">
          <p className="eyebrow text-[color:var(--gold)]">/ Our approach</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">Four phases. One disciplined arc.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4 md:gap-5">
            {[
              { n: "01", t: "Diagnose", b: "Rapid institutional assessment, stakeholder mapping, and context analysis." },
              { n: "02", t: "Design", b: "Evidence-based strategy and leadership framework, co-developed with the client." },
              { n: "03", t: "Deliver", b: "Structured implementation with clear milestones and performance indicators." },
              { n: "04", t: "Embed", b: "Capacity transfer, training, and follow-up to sustain results beyond the engagement." },
            ].map((p, i) => {
              const dark = i % 2 === 1;
              return (
                <article key={p.n} className={`${dark ? "bento-card-dark" : "bento-card"} md:p-8`}>
                  <p className="font-display text-3xl text-[color:var(--gold)]">{p.n}</p>
                  <h3 className={`mt-3 font-display text-xl ${dark ? "text-cloud" : ""}`}>{p.t}</h3>
                  <p className={`mt-3 text-sm ${dark ? "text-cloud/75" : "text-muted-foreground"}`}>{p.b}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 md:py-24">
        <div className="container-tight">
          <p className="eyebrow text-[color:var(--gold)]">/ Core values</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">What we hold the line on.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-6 md:gap-5">
            {values.map((p, i) => {
              const dark = i === 1 || i === 3 || i === 5;
              return (
                <article key={p.n} className={`${dark ? "bento-card-dark" : "bento-card"} md:col-span-2 md:p-8`}>
                  <p className="font-display text-3xl text-[color:var(--gold)]">{p.n}</p>
                  <h3 className={`mt-3 font-display text-xl ${dark ? "text-cloud" : ""}`}>{p.title}</h3>
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
              Partner with KSL Advisory.
            </h2>
            <Link
              to="/contact"
              className="md:col-span-4 md:text-right inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-7 py-4 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--gold)] md:justify-end"
            >
              Book a discovery call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
