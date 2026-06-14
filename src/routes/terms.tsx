import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — KSL Advisory" },
      { name: "description", content: "Terms governing use of the KSL Advisory website and digital materials." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-tight max-w-3xl">
        <p className="eyebrow text-[color:var(--gold)]">/ Legal</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">Terms of Use</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2026</p>

        <div className="mt-8 space-y-6 text-foreground/85">
          <Block title="1. Acceptance">
            By accessing kslgroup.co or any KSL digital materials, you agree to these terms. If
            you do not accept them, please do not use the site.
          </Block>
          <Block title="2. Informational use only">
            Content on this website — including frameworks, articles, and downloadable
            resources — is provided for general informational purposes. It does not constitute
            legal, financial, or institutional advice and should not be relied on as a
            substitute for a formal engagement.
          </Block>
          <Block title="3. Intellectual property">
            All site content is owned by KSL Advisory or
            licensed to it. The KSL name and the KSL Crisis Leadership Framework are
            proprietary. You may share and quote our public materials with attribution; you may
            not republish them in full without written permission.
          </Block>
          <Block title="4. No warranty">
            The site is provided "as is" without warranty of any kind. We make no guarantees
            regarding uptime, accuracy, or fitness for a particular purpose.
          </Block>
          <Block title="5. Limitation of liability">
            To the maximum extent permitted by law, KSL is not liable for indirect,
            incidental, or consequential damages arising from use of the site.
          </Block>
          <Block title="6. Governing law">
            These terms are governed by the laws of the Republic of Kenya. Any dispute will be
            subject to the exclusive jurisdiction of the Kenyan courts.
          </Block>
          <Block title="7. Contact">
            Questions about these terms: <a className="underline" href="mailto:info@kslgroup.co">info@kslgroup.co</a>.
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
      <p className="mt-2">{children}</p>
    </section>
  );
}
