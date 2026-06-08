import { SectionHeader } from "./SectionHeader";

const FOUNDERS = [
  ["f1 bg-gradient-to-br from-[#7c5cff] to-[#ec4899]", "Nikhil Gupta", "portfolio management · finance", "Founder of a stock research firm. We turn deep finance insights into viral content — building trust, authority, and audience across Instagram & LinkedIn."],
  ["f2 bg-gradient-to-br from-[#6366f1] to-[#06b6d4]", "Himanshu Rajpurohit", "nexera.health · shark tank india", "We manage LinkedIn & Instagram for a Shark Tank India founder — keeping post-Tank visibility alive and positioning him as an authority in his niche."],
  ["f3 bg-gradient-to-br from-[#a78bfa] to-[#f472b6]", "Komal Agarwal", "founder · snackee", `21-day "becoming a CEO" journey turned into binge-worthy content — custom scripts, humorous storytelling, and a unique editing style for Snackee.`],
  ["f4 bg-gradient-to-br from-[var(--accent)] to-[#c084fc]", "Deepak Keewlani", "founder · corelex", "Documented his 24-day brand launch — high-converting scripts, custom storytelling voice, and full Instagram management with brand fonts and palette."],
] as const;

export function FoundersSection() {
  return (
    <section
      className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]"
      id="founders"
    >
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Founders We Work With"
          title={
            <>
              Real <span className="serif accent-text">founders.</span>
              <br />
              Real businesses.
            </>
          }
          subtitle="A few of the brands and people we ship with every week."
        />
        <div className="founders-grid reveal grid grid-cols-1 gap-4 md:grid-cols-2">
          {FOUNDERS.map(([pic, name, role, body]) => (
            <div
              key={name}
              className="founder-card grid grid-cols-[auto_1fr] items-start gap-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 transition-[transform,border-color] hover:-translate-y-1 hover:border-[var(--border-strong)] md:gap-7 md:p-9"
            >
              <div className={`founder-pic h-20 w-20 shrink-0 rounded-full border-[3px] border-[var(--accent)] md:h-24 md:w-24 ${pic}`} />
              <div>
                <h4 className="mb-1 text-2xl font-extrabold tracking-tight">{name}</h4>
                <div className="founder-role mono mb-3 text-xs uppercase tracking-wide text-[var(--text-muted)]">
                  {role}
                </div>
                <p className="text-[14.5px] leading-relaxed text-[var(--text-dim)]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
