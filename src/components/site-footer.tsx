import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[color:var(--ink)] text-cloud">
      <div className="container-tight grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
            <li><Link to="/projects" className="hover:text-cloud">Projects</Link></li>
            <li><Link to="/services" className="hover:text-cloud">Services</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cloud/80">
            <li>hello@meridian.co</li>
            <li>+1 (415) 555 0144</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cloud/50">Office</p>
          <p className="mt-4 text-sm text-cloud/80">
            440 Pine Street<br />Floor 12<br />San Francisco, CA 94104
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-start justify-between gap-2 py-6 text-xs text-cloud/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Meridian Consulting. All rights reserved.</p>
          <p>Licensed General Contractor · CSLB #1098432</p>
        </div>
      </div>
    </footer>
  );
}
