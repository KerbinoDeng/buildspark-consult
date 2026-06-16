import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { subscribeNewsletter } from "@/lib/leads.functions";

export function SiteFooter() {
  const subscribe = useServerFn(subscribeNewsletter);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "");
    try {
      const res = await subscribe({ data: { email, source: "footer" } });
      setState(res.ok ? "ok" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setState("error");
    }
  }

  return (
    <footer className="mt-24 bg-[color:var(--ink)] text-cloud">
      <div className="container-tight grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <div className="font-display text-xl">
            <span className="text-[color:var(--gold)]">Kerbino</span> Group
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[color:var(--gold)]">
            Strategy Designed. Leaders Built.
          </p>
          <p className="mt-4 max-w-sm text-sm text-cloud/70">
            Kerbino Group — a specialist management
            consultancy in governance, crisis leadership, and public-sector strategy
            across East Africa and South Sudan.
          </p>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Firm</p>
          <ul className="mt-4 space-y-2 text-sm text-cloud/80">
            <li><Link to="/about" className="hover:text-cloud">About</Link></li>
            <li><Link to="/team/kerbino" className="hover:text-cloud">Founder</Link></li>
            <li><Link to="/services" className="hover:text-cloud">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-cloud">Case studies</Link></li>
            <li><Link to="/insights" className="hover:text-cloud">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-cloud">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cloud/80">
            <li>info@kslgroup.co</li>
            <li>+254 743 978 678</li>
            <li>+211 927 272 752</li>
            <li>Nairobi · Juba</li>
            <li>
              <a
                href="https://www.linkedin.com/company/ksl-group"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cloud"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Insights briefing</p>
          <p className="mt-4 text-sm text-cloud/70">
            Quarterly notes on governance, crisis leadership, and institutional reform.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              required
              maxLength={255}
              placeholder="you@organisation.org"
              className="min-w-0 flex-1 rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-sm text-cloud placeholder:text-cloud/40 focus:border-[color:var(--gold)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="rounded-sm bg-[color:var(--gold)] px-4 py-2 text-sm font-semibold text-[color:var(--ink)] hover:bg-cloud disabled:opacity-60"
            >
              {state === "ok" ? "Done" : state === "sending" ? "…" : "Subscribe"}
            </button>
          </form>
          {state === "error" && <p className="mt-2 text-xs text-destructive">Could not subscribe. Try again.</p>}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-start justify-between gap-2 py-6 text-xs text-cloud/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kerbino Group. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-cloud">Privacy</Link>
            <Link to="/terms" className="hover:text-cloud">Terms</Link>
            <span>Nairobi · Operating across East Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
