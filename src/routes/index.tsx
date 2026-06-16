import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Compass,
  ShieldAlert,
  Users,
  Landmark,
  FileSearch,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Quote,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kerbino Group — Strategy Designed. Leaders Built." },
      { name: "description", content: "Kerbino Group — specialist consultancy in governance, crisis leadership, and public-sector strategy across East Africa and South Sudan." },
      { property: "og:title", content: "Kerbino Group" },
      { property: "og:description", content: "Strategy Designed. Leaders Built. Governance · Crisis Leadership · Public-Sector Strategy." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO — cover-style navy panel with gold rules, mirroring the Kerbino Group document cover */}
      <section className="bg-background">
        <div className="container-tight py-10 md:py-16">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-12 bento-card-dark relative overflow-hidden md:p-16">
              <p className="eyebrow text-[color:var(--gold)]">Nairobi · Juba · East Africa</p>

              <h1 className="mt-8 font-display text-5xl leading-[1.02] text-[color:var(--gold)] md:text-7xl">
                Kerbino Group ADVISORY
              </h1>

              <div className="mt-6 border-t border-[color:var(--gold)]/40 pt-4">
                <p className="font-display text-xl text-cloud md:text-2xl">
                  Kerbino Group
                </p>
              </div>

              <div className="mt-4 border-y border-[color:var(--gold)]/40 py-4">
                <p className="font-display text-2xl italic text-[color:var(--gold)] md:text-3xl">
                  Strategy Designed. Leaders Built.
                </p>
              </div>

              <p className="mt-8 max-w-2xl text-base text-cloud/80 md:text-lg">
                A specialist management consultancy bridging academic rigour and
                practical application — for governments, institutions, and development
                partners operating in complex, crisis-prone environments.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition-colors hover:bg-cloud"
                >
                  Book a 60-min discovery call <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--gold)]/40 px-6 py-3 text-sm font-medium text-cloud hover:bg-white/5"
                >
                  See our six service lines
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[color:var(--gold)]/30 pt-8 text-cloud/85">
                <PillarTag label="Governance" />
                <PillarTag label="Crisis Leadership" />
                <PillarTag label="Public Sector Strategy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 md:py-24">
        <div className="container-tight">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-5">
              <p className="eyebrow text-[color:var(--gold)]">/ Who we are</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                A consultancy built for complex environments.
              </h2>
            </div>
            <div className="md:col-span-7 bento-card md:p-10">
              <p className="text-foreground/85 md:text-lg">
                Kerbino Group is headquartered in Nairobi, with operations across East
                Africa and South Sudan. Founded by Kerbino Yel Deng — a Doctor of
                Business Administration candidate at the Chandaria School of Business,
                USIU-Africa — we deliver transformative results for public institutions,
                private organisations, and development partners.
              </p>
              <p className="mt-4 italic text-foreground/70">
                "Strategy without leadership is a plan without a driver — and leadership
                without strategy is ambition without direction. Kerbino Group delivers both
                simultaneously."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIX SERVICE LINES */}
      <section className="border-t border-border bg-[color:var(--cloud)] py-20 md:py-28">
        <div className="container-tight">
          <div className="grid items-end gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-[color:var(--gold)]">/ What we do</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Six service lines. One integrated practice.
              </h2>
            </div>
            <p className="md:col-span-5 text-muted-foreground">
              Each grounded in evidence-based methodology and tailored to the context,
              capacity, and objectives of every client. Engage one — or all.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-6 md:gap-5">
            <Pillar span="md:col-span-3 lg:col-span-2" icon={Compass} num="01"
              title="Strategic Planning & Institutional Development"
              body="Strategic frameworks and institutional systems that perform, adapt, and deliver — at scale and under pressure." />
            <Pillar span="md:col-span-3 lg:col-span-2" dark icon={ShieldAlert} num="02"
              title="Crisis Leadership Advisory"
              body="DBA-level expertise in crisis leadership for fragile and conflict-affected settings — validated through original South Sudan research." />
            <Pillar span="md:col-span-6 lg:col-span-2" icon={Users} num="03"
              title="Executive Leadership Development"
              body="One-to-one and cohort programmes that build leaders capable of delivering with integrity in complexity." />
            <Pillar span="md:col-span-6 lg:col-span-2" dark icon={Landmark} num="04"
              title="Governance, Accountability & Public Sector Reform"
              body="Governance diagnostics, accountability frameworks, oversight capacity, and public financial management advisory." />
            <Pillar span="md:col-span-3 lg:col-span-2" icon={FileSearch} num="05"
              title="Research, Policy Analysis & Advisory"
              body="Empirically grounded research, institutional evaluations, and policy briefs for governments, multilaterals, and NGOs." />
            <Pillar span="md:col-span-3 lg:col-span-2" dark icon={GraduationCap} num="06"
              title="Training, Facilitation & Workshop Design"
              body="Custom workshops and training programmes that build internal capacity rather than create consultant dependency." />
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink)]">
              Full service detail <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY Kerbino Group */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <p className="eyebrow text-[color:var(--gold)]">/ Why Kerbino Group</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Our competitive edge.</h2>

          <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-5">
            <Edge span="md:col-span-6" n="I" title="Academic Depth"
              body="DBA-level expertise in crisis leadership, governance, and strategic management — grounded in peer-reviewed research on public institutions in fragile settings." />
            <Edge span="md:col-span-6" dark n="II" title="Contextual Intelligence"
              body="Direct, on-the-ground experience of governance realities in South Sudan and East Africa. We do not apply generic frameworks to complex local environments." />
            <Edge span="md:col-span-4" dark n="III" title="Practitioner Edge"
              body="Scholarly rigour combined with hands-on implementation across public sector, civil society, and development-partner contexts." />
            <Edge span="md:col-span-4" n="IV" title="Evidence-Based"
              body="All recommendations grounded in empirical evidence, validated frameworks, and measurable outcome indicators — not opinion or convention." />
            <Edge span="md:col-span-4" n="V" title="Long-Term Partnership"
              body="We invest in sustained client relationships, building internal capacity rather than creating dependency on external consultants." />
          </div>
        </div>
      </section>

      {/* CLIENTS WE SERVE */}
      <section className="border-y border-border bg-[color:var(--cloud)] py-16">
        <div className="container-tight">
          <p className="eyebrow text-center text-muted-foreground">Who we serve</p>
          <ul className="mt-8 grid grid-cols-2 gap-y-6 text-center font-display text-base text-foreground/75 md:grid-cols-6 md:text-lg">
            {[
              "Governments & Ministries",
              "Oversight Institutions",
              "UN & Multilaterals",
              "Bilateral Donors & INGOs",
              "Private Sector",
              "Civil Society & Academia",
            ].map((s) => (
              <li key={s} className="border-l border-border first:border-l-0 md:border-l">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24">
        <div className="container-tight">
          <p className="eyebrow text-[color:var(--gold)]">/ In their words</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">What clients tell us.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className={`${i === 1 ? "bento-card-dark" : "bento-card"} md:p-8 flex flex-col gap-5`}>
                <Quote className={`h-7 w-7 ${i === 1 ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"}`} strokeWidth={1.5} />
                <blockquote className={`font-display text-lg leading-snug ${i === 1 ? "text-cloud" : ""}`}>
                  "{t.quote}"
                </blockquote>
                <figcaption className={`text-xs uppercase tracking-wider ${i === 1 ? "text-cloud/60" : "text-muted-foreground"}`}>
                  {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink)]">
              See selected engagements <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-12">
              <p className="eyebrow text-[color:var(--gold)]">/ Partner with Kerbino Group</p>
              <h2 className="mt-4 font-display text-4xl text-cloud md:text-5xl">
                Let us design your organisation's next strategic chapter — and build the leaders to deliver it.
              </h2>
              <p className="mt-4 max-w-xl text-cloud/70">
                Book a complimentary 60-minute discovery call with our Principal Consultant.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-cloud transition-colors"
              >
                Schedule a discovery call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-4 bento-card flex flex-col gap-5">
              <p className="eyebrow text-[color:var(--gold)]">Direct</p>
              <ContactLine icon={Mail} text="info@kslgroup.co" />
              <ContactLine icon={Phone} text="+254 743 978 678 · Kenya" />
              <ContactLine icon={Phone} text="+211 927 272 752 · South Sudan" />
              <ContactLine icon={MapPin} text="Nairobi · Juba" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PillarTag({ label }: { label: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-base text-[color:var(--gold)] md:text-lg">{label}</p>
    </div>
  );
}

function Pillar({
  span, icon: Icon, num, title, body, dark,
}: { span: string; icon: typeof Compass; num: string; title: string; body: string; dark?: boolean }) {
  const base = dark ? "bento-card-dark" : "bento-card";
  return (
    <article className={`${span} ${base} flex flex-col gap-5 md:p-8`}>
      <div className="flex items-start justify-between">
        <Icon className={`h-7 w-7 ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--ink)]"}`} strokeWidth={1.5} />
        <span className={`eyebrow ${dark ? "text-[color:var(--gold)]" : "text-muted-foreground"}`}>{num}</span>
      </div>
      <h3 className={`font-display text-2xl leading-tight ${dark ? "text-cloud" : ""}`}>{title}</h3>
      <p className={`text-sm ${dark ? "text-cloud/75" : "text-muted-foreground"}`}>{body}</p>
    </article>
  );
}

function Edge({ span, n, title, body, dark }: { span: string; n: string; title: string; body: string; dark?: boolean }) {
  const base = dark ? "bento-card-dark" : "bento-card";
  return (
    <article className={`${span} ${base} md:p-8`}>
      <p className={`font-display text-3xl ${dark ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"}`}>{n}</p>
      <h3 className={`mt-3 font-display text-xl ${dark ? "text-cloud" : ""}`}>{title}</h3>
      <p className={`mt-3 text-sm ${dark ? "text-cloud/75" : "text-muted-foreground"}`}>{body}</p>
    </article>
  );
}

function ContactLine({ icon: Icon, text }: { icon: typeof Mail; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Icon className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={1.5} />
      <span className="text-foreground/85">{text}</span>
    </div>
  );
}
