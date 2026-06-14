import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import {
  ensureMyAdminRole,
  listContactSubmissions,
  listNewsletterSubscribers,
} from "@/lib/admin.functions";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — KSL Advisory" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

type Submission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  project_type: string | null;
  message: string;
};
type Subscriber = { id: string; created_at: string; email: string; source: string | null };

function AdminPage() {
  const navigate = useNavigate();
  const ensure = useServerFn(ensureMyAdminRole);
  const fetchSubs = useServerFn(listContactSubmissions);
  const fetchNews = useServerFn(listNewsletterSubscribers);

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [tab, setTab] = useState<"contacts" | "subscribers">("contacts");

  useEffect(() => {
    (async () => {
      const res = await ensure();
      setIsAdmin(res.isAdmin);
      if (res.isAdmin) {
        const [c, n] = await Promise.all([fetchSubs(), fetchNews()]);
        setSubmissions((c.rows ?? []) as Submission[]);
        setSubscribers((n.rows ?? []) as Subscriber[]);
      }
      setLoading(false);
    })();
  }, [ensure, fetchSubs, fetchNews]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  function exportCsv(rows: Subscriber[]) {
    const header = "email,source,signed_up_at\n";
    const body = rows
      .map((r) => `${r.email},${r.source ?? ""},${r.created_at}`)
      .join("\n");
    const blob = new Blob([header + body], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ksl-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return (
      <div className="container-tight py-24 text-center text-muted-foreground">Loading…</div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container-tight py-24 text-center">
        <h1 className="font-display text-3xl">Access denied</h1>
        <p className="mt-3 text-muted-foreground">
          Your account isn't on the admin allowlist. Ask the principal to add your email.
        </p>
        <Button onClick={handleSignOut} variant="outline" className="mt-6">
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container-tight">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-[color:var(--gold)]">/ Admin</p>
            <h1 className="mt-2 font-display text-4xl">KSL dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {submissions.length} contact submission{submissions.length === 1 ? "" : "s"} ·{" "}
              {subscribers.length} newsletter subscriber{subscribers.length === 1 ? "" : "s"}
            </p>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            Sign out
          </Button>
        </div>

        <div className="mt-8 flex gap-2 border-b border-border">
          <TabBtn active={tab === "contacts"} onClick={() => setTab("contacts")}>
            Contact submissions
          </TabBtn>
          <TabBtn active={tab === "subscribers"} onClick={() => setTab("subscribers")}>
            Newsletter
          </TabBtn>
        </div>

        {tab === "contacts" ? (
          <div className="mt-6 space-y-4">
            {submissions.length === 0 ? (
              <p className="text-sm text-muted-foreground">No submissions yet.</p>
            ) : (
              submissions.map((s) => (
                <article key={s.id} className="bento-card md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg">
                      {s.name} <span className="text-muted-foreground">· {s.email}</span>
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {new Date(s.created_at).toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    {s.company && <span>Company: {s.company}</span>}
                    {s.phone && <span>Phone: {s.phone}</span>}
                    {s.project_type && <span>Topic: {s.project_type}</span>}
                  </div>
                  <p className="mt-3 whitespace-pre-wrap text-sm text-foreground/90">
                    {s.message}
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <a
                      className="underline"
                      href={`mailto:${s.email}?subject=Re: your enquiry to KSL Advisory`}
                    >
                      Reply by email
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        ) : (
          <div className="mt-6">
            <div className="mb-4 flex justify-end">
              <Button
                size="sm"
                variant="outline"
                onClick={() => exportCsv(subscribers)}
                disabled={subscribers.length === 0}
              >
                Export CSV
              </Button>
            </div>
            <div className="bento-card overflow-x-auto md:p-0">
              <table className="w-full text-sm">
                <thead className="border-b border-border text-left text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Source</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((r) => (
                    <tr key={r.id} className="border-b border-border/60">
                      <td className="px-4 py-3">{r.email}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.source ?? "—"}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(r.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                  {subscribers.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-4 py-6 text-center text-muted-foreground">
                        No subscribers yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-b-2 border-[color:var(--gold)] text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
