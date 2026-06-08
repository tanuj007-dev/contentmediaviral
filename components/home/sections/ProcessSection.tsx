"client";
import { SectionHeader } from "./SectionHeader";
import {
  HiOutlineClipboardList,
  HiOutlineVideoCamera,
} from "react-icons/hi";

import { HiOutlineRocketLaunch } from "react-icons/hi2";

const STEPS = [
  {
    b: "01",
    n: "Foundation",
    t: "Strategy before output. We map who you are before we ship anything.",
    f: [
      "Content direction, ICP identification, brand positioning",
      "Full Notion content system with pipelines and checklists",
      "Initial scripts and content ideas in 4–5 days",
    ],
    icon: HiOutlineClipboardList,
  },
  {
    b: "02",
    n: "Execution",
    t: "The system starts producing — at world-class quality.",
    f: [
      "End-to-end video editing & cross-platform posting",
      "Full podcast production — edits, thumbnails, viral clips",
      "20–25 content pieces per month",
    ],
    icon: HiOutlineVideoCamera,
  },
  {
    b: "03",
    n: "Full System",
    t: "A category-defining brand. Compounding every week.",
    f: [
      "Complete project management & account ownership",
      "60+ content pieces per month across every platform",
      "Multi-platform repurposing engine + organic lead gen",
    ],
    icon: HiOutlineRocketLaunch,
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="process">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(0deg); }
        }
        .step:hover .icon-container {
          transform: scale(1.08) rotate(8deg) !important;
          background: rgba(124, 92, 255, 0.15);
        }
        .icon-container {
          transition: all 300ms ease;
        }
      `}</style>
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
        <div className="steps relative mt-14 grid grid-cols-1 gap-4 before:pointer-events-none before:absolute before:left-[5%] before:right-[5%] before:top-[60px] before:z-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--accent)_20%,var(--accent)_80%,transparent)] before:opacity-40 before:content-[''] md:grid-cols-3 md:gap-6">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.b}
                className="step reveal relative z-[1] flex flex-col rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg)] p-8 transition-[transform,border-color] hover:-translate-y-1.5 hover:border-[var(--border-strong)] md:px-8 md:pb-10 md:pt-10"
              >
                <div className="step-badge -ml-2 -mt-14 mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-sm font-semibold text-[var(--accent)] mono md:-mt-14">
                  {s.b}
                </div>
                
                <div 
                  className="icon-container mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(124,92,255,0.08)] text-[var(--accent)]"
                  style={{ 
                    animation: `float 3s ease-in-out infinite ${index * 0.5}s` 
                  }}
                >
                  <Icon size={24} />
                </div>

                <h3 className="step-name mb-2 text-[clamp(28px,2.8vw,40px)] font-extrabold leading-tight tracking-[-0.03em]">
                  {s.n}
                </h3>
                <p className="step-tagline mb-7 border-b border-[var(--border)] pb-6 text-[15px] leading-normal text-[var(--text-dim)]">
                  {s.t}
                </p>
                <ul className="step-features flex flex-grow list-none flex-col gap-3.5">
                  {s.f.map((li) => (
                    <li key={li} className="flex gap-3 text-[15px] leading-normal text-[var(--text)] before:mt-px before:shrink-0 before:font-semibold before:text-[var(--accent)] before:content-['→']">
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="process-note mt-14 text-center text-[17px] text-[var(--text-dim)]">
          <span className="accent-text font-semibold">Month-to-month.</span> No lock-ins. Cancel anytime.
        </div>
      </div>
    </section>
  );
}