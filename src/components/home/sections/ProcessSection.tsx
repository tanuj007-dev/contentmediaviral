import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "./SectionHeader";

const STEPS = [
  {
    n: "Foundation",
    t: "Strategy before output. We map who you are before we ship anything.",
    f: [
      "Content direction, ICP identification, brand positioning",
      "Full Notion content system with pipelines and checklists",
      "Initial scripts and content ideas in 4–5 days",
    ],
  },
  {
    n: "Execution",
    t: "The system starts producing at world-class quality.",
    f: [
      "End-to-end video editing & cross-platform posting",
      "Full podcast production: edits, thumbnails, viral clips",
      "20–25 content pieces per month",
    ],
  },
  {
    n: "Full System",
    t: "A category-defining brand. Compounding every week.",
    f: [
      "Complete project management & account ownership",
      "60+ content pieces per month across every platform",
      "Multi-platform repurposing engine + organic lead gen",
    ],
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section relative px-5 py-20 md:px-8 md:py-[10px]" id="process">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="How We Work"
          title={
            <>
              We become your remote
              <br />
              content team in <span className="serif accent-text">three steps.</span>
            </>
          }
          subtitle="Foundation → Execution → Full System. Each step builds on the last. We move you through them sequentially."
        />
        <div className="steps relative mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {STEPS.map((s) => (
            <Reveal
              key={s.n}
              className="step relative z-[1] flex min-w-0 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[transform,border-color,box-shadow] before:pointer-events-none before:absolute before:inset-0 before:rounded-[var(--radius-xl)] before:bg-gradient-to-b before:from-white/[0.06] before:to-transparent hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-[0_12px_40px_rgba(124,92,255,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] md:px-8 md:pb-10 md:pt-8"
            >
              <div className="relative z-[1] min-w-0">
                <h3 className="step-name mb-2 text-[clamp(28px,2.8vw,40px)] font-extrabold leading-tight tracking-[-0.03em]">
                  {s.n}
                </h3>
                <p className="step-tagline mb-7 border-b border-white/[0.08] pb-6 text-[15px] leading-relaxed text-[var(--text-dim)]">
                  {s.t}
                </p>
              </div>
              <ul className="step-features relative z-[1] flex grow list-none flex-col gap-3.5">
                {s.f.map((li) => (
                  <li
                    key={li}
                    className="flex gap-3 text-[15px] leading-relaxed text-[var(--text)] before:mt-px before:shrink-0 before:font-semibold before:text-[var(--accent)] before:content-['→']"
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
 
      </div>
    </section>
  );
}
