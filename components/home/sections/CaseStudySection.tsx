import { SectionHeader } from "./SectionHeader";

const CASE_RESULTS = [
  ["10x", "Follower Growth"],
  ["18M", "Total Views"],
  ["1.6M", "Likes Generated"],
  ["8mo", "Time to Scale"],
] as const;

const CASE_TACTICS = [
  "Built a hook-first content engine — 4 reels per week",
  "Custom editing language with finance-native typography",
  "Repurposed every reel into LinkedIn carousels and threads",
  "Monthly analytics review → next month's content slate",
] as const;

export function CaseStudySection() {
  return (
    <section className="section case relative px-5 py-20 md:px-8 md:py-[130px]">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Case Study Spotlight"
          title={
            <>
              From{" "}
              <span className="strike relative inline-block text-[var(--text-muted)] after:absolute after:left-[-2%] after:right-[-2%] after:top-[52%] after:h-1 after:rounded-sm after:bg-[var(--accent)] after:content-[''] after:[transform:rotate(-1.5deg)]">
                7,005
              </span>{" "}
              to <span className="serif accent-text">80,600</span> followers.
            </>
          }
          subtitle="How we turned an investor's Instagram into one of India's fastest-growing finance brands — in eight months."
        />
        <div className="case-grid reveal grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="case-meta mb-4 text-sm text-[var(--text-dim)]">@sharmajiinvests · Instagram · 8 months</div>
            <h3 className="case-h2 mb-6 text-[clamp(24px,3vw,36px)] font-extrabold leading-tight tracking-tight">
              A complete content system. <span className="serif accent-text">10x</span> audience.
            </h3>
            <div className="case-quote rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-2)] p-6 text-lg leading-relaxed text-[var(--text-dim)]">
              &quot;They don&apos;t just edit videos. They built me a brand. Every piece feels intentional, every
              metric improved month over month.&quot;
              <div className="case-quote-author mt-4 text-base font-semibold text-[var(--text)]">
                Kritika Sharma
                <span className="mt-1 block text-sm font-normal text-[var(--text-muted)]">
                  Founder · @sharmajiinvests · Private Markets Analyst
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="case-results mb-8 grid grid-cols-2 gap-3">
              {CASE_RESULTS.map(([n, l]) => (
                <div
                  key={l}
                  className="case-result-tile rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-center"
                >
                  <div className="case-result-num text-2xl font-extrabold text-[var(--accent)]">{n}</div>
                  <div className="case-result-label text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <div className="case-tactics-title mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              What we did
            </div>
            <ul className="case-tactics flex list-none flex-col gap-3 text-[15px] text-[var(--text-dim)]">
              <li className="flex gap-2 before:shrink-0 before:text-[var(--accent)] before:content-['→']">
                <span>
                  Repositioned her as <em className="text-[var(--text)]">India&apos;s go-to private markets explainer</em>
                </span>
              </li>
              {CASE_TACTICS.map((li) => (
                <li key={li} className="flex gap-2 before:shrink-0 before:text-[var(--accent)] before:content-['→']">
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
