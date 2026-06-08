import { SectionHeader } from "./SectionHeader";

const TESTS = [
  [
    "t1 bg-gradient-to-br from-[#7c5cff] to-[#ec4899]",
    '"The video edits stop the scroll. Period. ',
    "My retention rate doubled within a month.",
    ` Whatever they're doing, it works."`,
    "Kritika Sharma",
    "@sharmajiinvests · 80K+ followers",
  ],
  [
    "t2 bg-gradient-to-br from-[#6366f1] to-[#06b6d4]",
    '"They turned my podcast into ',
    "my biggest acquisition channel.",
    ` Inbound leads tripled within 90 days. Best money I've spent on content."`,
    "Himanshu Rajpurohit",
    "Founder · Nexera.Health",
  ],
  [
    "t3 bg-gradient-to-br from-[#a78bfa] to-[#f472b6]",
    '"Honestly thought all agencies were the same — these guys are different. ',
    "Strategy actually drives the work.",
    ` Finally."`,
    "Komal Agarwal",
    "Founder · Snackee",
  ],
  [
    "t4 bg-gradient-to-br from-[var(--accent)] to-[#c084fc]",
    '"Two hours a week from me. ',
    "A full month of content from them.",
    ` If you're a founder still trying to do content yourself, you're losing."`,
    "Deepak Keewlani",
    "Founder · CoreFlex",
  ],
  [
    "t5 bg-gradient-to-br from-[#f72585] to-[#7c5cff]",
    '"Before them my brand was invisible. Now ',
    "people DM me about the brand before I open my mouth.",
    ` That's positioning."`,
    "Gabe Einhorn",
    "Founder · Prays + Vryfyid",
  ],
  [
    "t6 bg-gradient-to-br from-[#06b6d4] to-[#4338ca]",
    '"I went from posting once a week to ',
    "15 pieces a week without lifting a finger.",
    ` The team understands my voice better than I do."`,
    "Pankaj Shivnani",
    "Marketing Strategist",
  ],
] as const;

export function TestimonialsSection() {
  return (
    <section className="section relative px-5 py-20 md:px-8 md:py-[130px]">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Founders Talk"
          title={
            <>
              Words from the <span className="serif accent-text">people</span>
              <br />
              we&apos;ve built brands with.
            </>
          }
          subtitle='Real partners we ship with weekly. No anonymous "CEO of company X."'
        />
        <div className="test-grid reveal grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TESTS.map(([pic, q1, hl, q2, name, role]) => (
            <div
              key={name}
              className="test-card flex flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-[transform,border-color] hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <div className="test-stars mb-4 text-[var(--accent)]">★★★★★</div>
              <p className="test-quote mb-7 flex-grow text-base leading-relaxed text-[var(--text)]">
                {q1}
                <span className="h bg-[linear-gradient(180deg,transparent_60%,rgba(124,92,255,0.25)_60%)]">
                  {hl}
                </span>
                {q2}
              </p>
              <div className="test-author flex items-center gap-3 border-t border-[var(--border)] pt-5">
                <div className={`test-pic h-11 w-11 shrink-0 rounded-full ${pic}`} />
                <div className="test-author-info">
                  <div className="n text-sm font-semibold">{name}</div>
                  <div className="r text-xs text-[var(--text-muted)]">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
