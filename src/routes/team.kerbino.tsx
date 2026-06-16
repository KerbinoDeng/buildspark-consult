import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, Linkedin, GraduationCap, BookOpen } from "lucide-react";

export const Route = createFileRoute("/team/kerbino")({
  head: () => ({
    meta: [
      { title: "Dr. Kerbino Yel Deng — Founder, Kerbino Group" },
      {
        name: "description",
        content:
          "Founder and Principal Consultant at Kerbino Group. DBA candidate in crisis leadership and governance, with advisory work across South Sudan and East Africa.",
      },
      { property: "og:title", content: "Dr. Kerbino Yel Deng — Founder, Kerbino Group" },
      {
        property: "og:description",
        content:
          "Principal Consultant. Doctoral research in crisis leadership and public-sector delivery in fragile contexts.",
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <>
      <section className="bg-background">
        <div className="container-tight py-12 md:py-20">
          <div className="grid gap-4 md:grid-cols-12 md:gap-5">
            <div className="md:col-span-8 bento-card-dark md:p-12">
              <p className="eyebrow text-[color:var(--gold)]">/ Founder</p>
              <h1 className="mt-4 font-display text-4xl text-cloud md:text-6xl">
                Kerbino Yel Deng
              </h1>
              <p className="mt-3 font-display text-xl text-[color:var(--gold)]">
                Founder &amp; CEO
              </p>
              <p className="mt-6 max-w-2xl text-cloud/80 md:text-lg">
                Kerbino founded Kerbino Group to bridge what he saw as a persistent gap between
                rigorous academic work on institutions and the day-to-day practice of leading
                them in complex, crisis-prone settings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:kerbino@kerbinogroup.com"
                  className="inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-cloud"
                >
                  <Mail className="h-4 w-4" /> Email Kerbino
                </a>
                <a
                  href="https://www.linkedin.com/in/kerbino-yel-deng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--gold)]/40 px-5 py-3 text-sm font-medium text-cloud hover:bg-white/5"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-[color:var(--gold)]/40 px-5 py-3 text-sm font-medium text-cloud hover:bg-white/5"
                >
                  Book a discovery call <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <aside className="md:col-span-4 bento-card flex flex-col gap-4 md:p-8">
              <p className="eyebrow text-[color:var(--gold)]">At a glance</p>
              <Fact icon={GraduationCap} label="Doctoral candidate" value="DBA, Chandaria School of Business, USIU-Africa" />
              <Fact icon={BookOpen} label="Research focus" value="Crisis leadership & public-sector delivery in fragile states" />
              <Fact icon={Mail} label="Direct" value="kerbino@kerbinogroup.com" />
              <Fact icon={Phone} label="Kenya" value="+254 743 978 678" />
              <Fact icon={Phone} label="South Sudan" value="+211 927 272 752" />
              <Fact icon={Linkedin} label="LinkedIn" value="linkedin.com/in/kerbino-yel-deng" />
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-tight grid gap-4 md:grid-cols-12 md:gap-5">
          <div className="md:col-span-5">
            <p className="eyebrow text-[color:var(--gold)]">/ Background</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A practitioner-scholar.</h2>
          </div>
          <div className="md:col-span-7 bento-card md:p-10 space-y-4 text-foreground/85">
            <p>
              Kerbino's doctoral research at USIU-Africa examines how senior leaders in
              public-sector institutions in South Sudan and East Africa make and sustain
              decisions during institutional and political crises. The work draws on original
              field data and combines comparative case analysis with practitioner interviews.
            </p>
            <p>
              In parallel, he has advised ministries, oversight institutions, and regional
              INGOs on governance reform, executive leadership development, and crisis-period
              decision making. He sits on convening committees for public-sector leadership
              forums in the region.
            </p>
            <p>
              He works in English and Arabic, and is regularly invited to speak on
              accountability and institutional reform in fragile contexts.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[color:var(--cloud)] py-16">
        <div className="container-tight grid gap-4 md:grid-cols-3 md:gap-5">
          <Card title="Research areas">
            Crisis leadership · Governance & accountability · Public-sector reform · Oversight
            institution effectiveness
          </Card>
          <Card title="Selected engagements">
            National ministries · Independent oversight institutions · Regional INGOs ·
            Bilateral development partners
          </Card>
          <Card title="Speaking & teaching">
            Guest lectures and panels on institutional leadership in fragile states. Available
            for keynote and convening engagements.
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight bento-card-dark md:p-12">
          <p className="eyebrow text-[color:var(--gold)]">/ Work with Kerbino</p>
          <h2 className="mt-3 font-display text-3xl text-cloud md:text-4xl">
            Engage the principal directly.
          </h2>
          <p className="mt-3 max-w-2xl text-cloud/75">
            Discovery calls are taken personally for the first conversation. Subsequent
            engagements are scoped jointly and delivered by the Kerbino Group team.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-cloud"
          >
            Request a call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Fact({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" strokeWidth={1.5} />
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bento-card md:p-8">
      <h3 className="font-display text-xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
