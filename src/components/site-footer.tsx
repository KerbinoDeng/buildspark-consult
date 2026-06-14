import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteFooter() {
  const [sent, setSent] = useState(false);

  return (
    <footer className="mt-24 bg-[color:var(--ink)] text-cloud">
      <div className="container-tight grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="inline-block h-2.5 w-2.5 rotate-45 bg-accent" aria-hidden />
            Meridian Consulting
          </div>
          <p className="mt-4 max-w-sm text-sm text-cloud/70">
            Project management and construction consultancy delivering complex builds on time, on
            budget, and to specification.
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
          <form className="mt-4 flex gap-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="min-w-0 flex-1 rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-sm text-cloud placeholder:text-cloud/40 focus:border-accent focus:outline-none"
            />
            <button type="submit" className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-[color:var(--ink)] hover:bg-cloud">
              {sent ? "Subscribed" : "Join"}
            </button>
          </form>
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
