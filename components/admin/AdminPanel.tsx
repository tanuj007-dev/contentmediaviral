"use client";

import { useCallback, useEffect, useState } from "react";

interface Inquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company?: string;
  services: string[];
  budget?: string;
  message?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  "personal-branding": "Personal Branding",
  "video-editing": "Video Editing",
  podcast: "Podcast Repurposing",
  "ig-linkedin": "IG & LinkedIn",
  youtube: "YouTube",
  ugc: "UGC",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-1k": "Under $1,000",
  "1-3k": "$1,000 — $3,000",
  "3-7k": "$3,000 — $7,000",
  "7k+": "$7,000+",
  discuss: "Let's discuss",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function AdminPanel() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchInquiries = useCallback(async (authToken: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/inquiries", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (!res.ok) {
        if (res.status === 401) throw new Error("Invalid password.");
        throw new Error("Failed to load inquiries.");
      }
      const data = (await res.json()) as { inquiries: Inquiry[] };
      setInquiries(data.inquiries);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setInquiries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-token");
    if (saved) {
      setToken(saved);
      void fetchInquiries(saved);
    }
  }, [fetchInquiries]);

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    sessionStorage.setItem("admin-token", password);
    setToken(password);
    void fetchInquiries(password);
  };

  const onLogout = () => {
    sessionStorage.removeItem("admin-token");
    setToken(null);
    setPassword("");
    setInquiries([]);
    setError(null);
  };

  const onDelete = async (id: string) => {
    if (!token || !confirm("Delete this inquiry?")) return;
    const res = await fetch(`/api/inquiries/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setInquiries((prev) => prev.filter((item) => item.id !== id));
    }
  };

  if (!token) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-16">
        <p className="mono mb-2 text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
          Admin
        </p>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Inquiries</h1>
        <p className="mb-8 text-sm text-[var(--text-dim)]">
          Sign in with your admin password to view submissions.
        </p>
        <form onSubmit={onLogin} className="space-y-4">
          <div>
            <label
              htmlFor="admin-password"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none focus:border-[var(--accent)]"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-full bg-[var(--accent)] px-7 py-4 text-[15px] font-semibold text-white transition hover:-translate-y-0.5"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-[var(--max-w)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-8">
          <div>
            <p className="mono mb-2 text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              Admin
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Inquiries
              <span className="ml-3 text-lg font-medium text-[var(--text-dim)]">
                ({inquiries.length})
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => token && void fetchInquiries(token)}
              disabled={loading}
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] disabled:opacity-50"
            >
              {loading ? "Loading…" : "Refresh"}
            </button>
            <button
              type="button"
              onClick={onLogout}
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]"
            >
              Sign out
            </button>
          </div>
        </div>

        {error && (
          <p className="mb-6 rounded-[var(--radius)] border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        {!loading && inquiries.length === 0 && !error && (
          <p className="text-[var(--text-dim)]">No inquiries yet.</p>
        )}

        <ul className="flex flex-col gap-5">
          {inquiries.map((item) => (
            <li
              key={item.id}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold tracking-tight">{item.name}</h2>
                  <p className="mono mt-1 text-xs text-[var(--text-muted)]">
                    {formatDate(item.createdAt)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void onDelete(item.id)}
                  className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] transition hover:text-red-400"
                >
                  Delete
                </button>
              </div>
              <dl className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <dt className="mono mb-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-[var(--accent)] no-underline hover:underline"
                    >
                      {item.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="mono mb-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${item.countryCode}${item.phone.replace(/\s/g, "")}`}
                      className="no-underline text-[var(--text)] hover:text-[var(--accent)]"
                    >
                      {item.countryCode} {item.phone}
                    </a>
                  </dd>
                </div>
                {item.company && (
                  <div>
                    <dt className="mono mb-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Company
                    </dt>
                    <dd>{item.company}</dd>
                  </div>
                )}
                {item.budget && (
                  <div>
                    <dt className="mono mb-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Budget
                    </dt>
                    <dd>{BUDGET_LABELS[item.budget] ?? item.budget}</dd>
                  </div>
                )}
                {item.services.length > 0 && (
                  <div className="md:col-span-2">
                    <dt className="mono mb-2 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Services
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {item.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-medium"
                        >
                          {SERVICE_LABELS[s] ?? s}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
                {item.message && (
                  <div className="md:col-span-2">
                    <dt className="mono mb-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Message
                    </dt>
                    <dd className="whitespace-pre-wrap leading-relaxed text-[var(--text-dim)]">
                      {item.message}
                    </dd>
                  </div>
                )}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
