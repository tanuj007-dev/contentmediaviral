import { SectionHeader } from "./SectionHeader";

const COMPARE_ROWS = [
  ["Strategy + Positioning", "✓ Built-in", "Maybe", "Rarely", "Add-on"],
  ["Cinematic Video Edits", "✓ World-class", "Depends on hire", "Inconsistent", "Often template-based"],
  ["Multi-Platform Posting", "✓ LinkedIn · IG · YT", "Usually 1–2 platforms", "No", "Limited"],
  ["Founder Time Required", "~2 hrs / week", "10+ hrs / week", "5+ hrs / week", "5+ hrs / week"],
  ["Lock-In Contracts", "Month-to-month", "Permanent", "Variable", "3–12 months"],
  ["Speed to First Asset", "4–5 days", "30+ days", "Variable", "2–3 weeks"],
  ["All-In Monthly Cost", "Single retainer", "$8K+ / mo", "Per-project", "High retainer"],
] as const;

export function CompareSection() {
  return (
    <section className="section compare border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]">
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
        <div className="compare-table-wrap reveal overflow-x-auto rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg)]">
          <table className="compare-table w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]" />
                <th className="us border-b border-[var(--border)] bg-[var(--accent)] p-5 text-left text-xs font-bold uppercase tracking-wider text-white">
                  Content Viral Media
                </th>
                <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                  In-House Hire
                </th>
                <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                  Freelancer
                </th>
                <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                  Other Agencies
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([feat, us, a, b, c]) => (
                <tr key={feat}>
                  <td className="compare-feature border-b border-[var(--border)] p-5 text-[15px] font-semibold text-[var(--text)]">
                    {feat}
                  </td>
                  <td className="us border-b border-[var(--border)] bg-[rgba(124,92,255,0.04)] p-5 text-[15px] font-semibold text-[var(--accent)]">
                    {us}
                  </td>
                  <td className="x border-b border-[var(--border)] p-5 text-[15px] text-[var(--text-muted)]">{a}</td>
                  <td className="x border-b border-[var(--border)] p-5 text-[15px] text-[var(--text-muted)]">{b}</td>
                  <td className="x border-b border-[var(--border)] p-5 text-[15px] text-[var(--text-muted)]">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
