import { SectionHeader } from "./SectionHeader";

const COMPARE_ROWS = [
  ["Strategy + Positioning", "✓ Built-in", "Maybe", "Rarely", "Add-on"],
  ["Signature Video Edits", "✓ World-class", "Depends on hire", "Inconsistent", "Often template-based"],
  ["Multi-Platform Posting", "✓ LinkedIn · IG · YT", "Usually 1–2 platforms", "No", "Limited"],
  ["Founder Time Required", "~2 hrs / week", "10+ hrs / week", "5+ hrs / week", "5+ hrs / week"],
  ["End to End Content System", "Permanent", "Variable", "3–12 months"],
  ["Speed to First Asset", "4–5 days", "30+ days", "Variable", "2–3 weeks"],
  ["All-In Monthly Cost", "Single retainer", "$8K+ / mo", "Per-project", "High retainer"],
] as const;

const ALTERNATIVES = [
  { label: "In-House Hire", index: 2 },
  { label: "Freelancer", index: 3 },
  { label: "Other Agencies", index: 4 },
] as const;

type CompareRow = (typeof COMPARE_ROWS)[number];

function CompareMobileCard({ row }: { row: CompareRow }) {
  const [feat, us, a, b, c] = row;
  const values = [a, b, c];

  return (
    <article className="rounded-[16px] border border-[var(--border)] bg-[var(--bg)] p-4 sm:rounded-[18px] sm:p-5">
      <h3 className="mb-4 text-sm font-semibold leading-snug text-[var(--text)] sm:text-[15px]">
        {feat}
      </h3>

      <div className="mb-4 rounded-xl border border-[rgba(124,92,255,0.28)] bg-[rgba(124,92,255,0.08)] px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
          Content Viral Media
        </p>
        <p className="mt-1 text-sm font-semibold leading-snug text-[var(--accent)] sm:text-[15px]">
          {us}
        </p>
      </div>

      <dl className="space-y-3">
        {ALTERNATIVES.map(({ label, index }) => (
          <div
            key={label}
            className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-b-0 last:pb-0"
          >
            <dt className="text-xs font-medium text-[var(--text-muted)] sm:text-sm">
              {label}
            </dt>
            <dd className="max-w-[58%] text-right text-xs leading-snug font-medium text-[var(--text-dim)] sm:text-sm">
              {values[index - 2]}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function CompareSection() {
  return (
    <section className="section compare border-y border-[var(--border)] bg-[var(--bg-2)] px-4 py-16 sm:px-5 md:px-8 md:py-20 lg:py-[130px]">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Why Not The Alternatives"
          title={
            <>
              Other options exist.
              <br />
              None of them <span className="serif accent-text">do this.</span>
            </>
          }
          subtitle="Here's how we stack up against in-house, freelancers, and traditional agencies."
        />

        {/* Mobile: stacked cards */}
        <div className="reveal mt-8 flex flex-col gap-3 sm:mt-10 md:hidden">
          {COMPARE_ROWS.map((row) => (
            <CompareMobileCard key={row[0]} row={row} />
          ))}
        </div>

        {/* Tablet + desktop: comparison table */}
        <div className="compare-table-wrap reveal relative mt-10 hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-[var(--bg)] to-transparent lg:hidden" />
          <div className="overflow-x-auto rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg)] [-webkit-overflow-scrolling:touch]">
            <table className="compare-table w-full min-w-[720px] border-collapse lg:min-w-[800px]">
              <thead>
                <tr>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-4 text-left text-[11px] font-semibold uppercase tracking-wider text-[var(--text-dim)] lg:p-5 lg:text-xs" />
                  <th className="us border-b border-[var(--border)] bg-[var(--accent)] p-4 text-left text-[11px] font-bold uppercase tracking-wider text-white lg:p-5 lg:text-xs">
                    Content Viral Media
                  </th>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-4 text-left text-[11px] font-semibold uppercase tracking-wider text-[var(--text-dim)] lg:p-5 lg:text-xs">
                    In-House Hire
                  </th>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-4 text-left text-[11px] font-semibold uppercase tracking-wider text-[var(--text-dim)] lg:p-5 lg:text-xs">
                    Freelancer
                  </th>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-4 text-left text-[11px] font-semibold uppercase tracking-wider text-[var(--text-dim)] lg:p-5 lg:text-xs">
                    Other Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([feat, us, a, b, c]) => (
                  <tr key={feat}>
                    <td className="compare-feature border-b border-[var(--border)] p-4 text-[13px] font-semibold text-[var(--text)] lg:p-5 lg:text-[15px]">
                      {feat}
                    </td>
                    <td className="us border-b border-[var(--border)] bg-[rgba(124,92,255,0.04)] p-4 text-[13px] font-semibold text-[var(--accent)] lg:p-5 lg:text-[15px]">
                      {us}
                    </td>
                    <td className="x border-b border-[var(--border)] p-4 text-[13px] text-[var(--text-muted)] lg:p-5 lg:text-[15px]">
                      {a}
                    </td>
                    <td className="x border-b border-[var(--border)] p-4 text-[13px] text-[var(--text-muted)] lg:p-5 lg:text-[15px]">
                      {b}
                    </td>
                    <td className="x border-b border-[var(--border)] p-4 text-[13px] text-[var(--text-muted)] lg:p-5 lg:text-[15px]">
                      {c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
