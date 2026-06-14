import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The KSL Group" },
      { name: "description", content: "How The KSL Group collects, uses, and protects personal data." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-tight max-w-3xl">
        <p className="eyebrow text-[color:var(--gold)]">/ Legal</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

        <div className="prose-ksl mt-8 space-y-6 text-foreground/85">
          <Block title="1. Who we are">
            The Kerbino Strategy &amp; Leadership Group Ltd. ("KSL", "we", "our") is a
            specialist management consultancy registered in Kenya, with operations in Nairobi
            and Juba. For privacy enquiries, write to{" "}
            <a className="underline" href="mailto:info@kslgroup.co">info@kslgroup.co</a>.
          </Block>

          <Block title="2. What we collect">
            We collect (a) information you submit through our contact form — name, email,
            optional phone number, organisation, and the contents of your enquiry; (b)
            newsletter signups — your email address and the page you signed up from; and (c)
            basic, non-identifying request information that any website receives, such as the
            page requested and browser type.
          </Block>

          <Block title="3. Why we use it">
            Contact submissions are used to respond to your enquiry and, where appropriate, to
            scope a possible engagement. Newsletter signups are used to send occasional KSL
            insights and analysis. We do not sell your data or share it with advertisers.
          </Block>

          <Block title="4. Lawful basis (GDPR / Kenya DPA)">
            We process the data above on the basis of your consent (when you submit a form)
            and our legitimate interest in operating and improving our consultancy practice.
            You can withdraw consent at any time by emailing us.
          </Block>

          <Block title="5. How we store it">
            Data is held in our managed cloud database with row-level access controls. Only
            approved KSL personnel can view contact submissions and subscriber lists.
          </Block>

          <Block title="6. Your rights">
            You can request a copy of the personal data we hold on you, ask us to correct or
            delete it, or unsubscribe from communications at any time. Send requests to{" "}
            <a className="underline" href="mailto:info@kslgroup.co">info@kslgroup.co</a> and we
            will respond within 30 days.
          </Block>

          <Block title="7. Cookies">
            This website does not currently use third-party advertising cookies. Strictly
            necessary cookies may be set to support sign-in to the KSL admin area.
          </Block>

          <Block title="8. Changes">
            We may update this policy from time to time. Material changes will be flagged on
            this page with a revised "last updated" date.
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl">{title}</h2>
      <p className="mt-2 text-foreground/85">{children}</p>
    </section>
  );
}
