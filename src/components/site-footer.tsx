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
          <div className="flex items-center gap-2 font-display text-lg">
            <span className="inline-block h-2.5 w-2.5 rotate-45 bg-[color:var(--steel)]" aria-hidden />
            Meridian Consulting
          </div>
          <p className="mt-4 max-w-sm text-sm text-cloud/70">
            Independent project, procurement, and construction management consultancy delivering
            complex builds across East Africa.
          </p>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Studio</p>
          <ul className="mt-4 space-y-2 text-sm text-cloud/80">
            <li><Link to="/about" className="hover:text-cloud">About</Link></li>
            <li><Link to="/services" className="hover:text-cloud">Services</Link></li>
            <li><Link to="/projects" className="hover:text-cloud">Projects</Link></li>
            <li><Link to="/insights" className="hover:text-cloud">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-cloud">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cloud/80">
            <li>kerbinoyel@gmail.com</li>
            <li>+254 743 978 678</li>
            <li>+211 927 272 752</li>
            <li>Nairobi · Juba</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Newsletter</p>
          <p className="mt-4 text-sm text-cloud/70">Monthly field notes on cost, schedule, and recovery. No spam.</p>
          <form className="mt-4 flex gap-2" onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              required
              maxLength={255}
              placeholder="you@company.com"
              className="min-w-0 flex-1 rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-sm text-cloud placeholder:text-cloud/40 focus:border-[color:var(--steel)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={state === "sending"}
              className="rounded-sm bg-[color:var(--steel)] px-4 py-2 text-sm font-medium text-cloud hover:bg-cloud hover:text-[color:var(--ink)] disabled:opacity-60"
            >
              {state === "ok" ? "Done" : state === "sending" ? "…" : "Join"}
            </button>
          </form>
          {state === "error" && <p className="mt-2 text-xs text-destructive">Could not subscribe. Try again.</p>}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-start justify-between gap-2 py-6 text-xs text-cloud/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Meridian Consulting. All rights reserved.</p>
          <p>Independent project & construction consultancy · Nairobi · Juba</p>
        </div>
      </div>
    </footer>
  );
}
