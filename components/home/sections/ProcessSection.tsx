"use client";

import Lottie from "lottie-react";
import { SectionHeader } from "./SectionHeader";
import foundationLottie from "@/public/Target.json";
import executionLottie from "@/public/Gears animation.json";
import fullSystemLottie from "@/public/893c142c-ad89-11ee-ba6e-93f23076acee.json";

const STEPS = [
  {
    n: "Foundation",
    t: "Strategy before output. We map who you are before we ship anything.",
    f: [
      "Content direction, ICP identification, brand positioning",
      "Full Notion content system with pipelines and checklists",
      "Initial scripts and content ideas in 4–5 days",
    ],
    lottie: foundationLottie,
  },
  {
    n: "Execution",
    t: "The system starts producing — at world-class quality.",
    f: [
      "End-to-end video editing & cross-platform posting",
      "Full podcast production — edits, thumbnails, viral clips",
      "20–25 content pieces per month",
    ],
    lottie: executionLottie,
  },
  {
    n: "Full System",
    t: "A category-defining brand. Compounding every week.",
    f: [
      "Complete project management & account ownership",
      "60+ content pieces per month across every platform",
      "Multi-platform repurposing engine + organic lead gen",
    ],
    lottie: fullSystemLottie,
  },
] as const;

export function ProcessSection() {
  return (
    <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="process">
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
            <div
              key={s.n}
              className="step reveal relative z-[1] flex min-w-0 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.08] bg-white/[0.04] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[transform,border-color,box-shadow] before:pointer-events-none before:absolute before:inset-0 before:rounded-[var(--radius-xl)] before:bg-gradient-to-b before:from-white/[0.06] before:to-transparent hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-[0_12px_40px_rgba(124,92,255,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] md:px-8 md:pb-10 md:pt-8"
            >
              <ProcessCardAccent animationData={s.lottie} />

              <div className="relative z-[1] min-w-0 pr-[136px]">
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
            </div>
          ))}
        </div>
        <div className="process-note mt-14 text-center text-[17px] text-[var(--text-dim)]">
          <span className="accent-text font-semibold">Month-to-month.</span> No
          lock-ins. Cancel anytime.
        </div>
      </div>
    </section>
  );
}

function ProcessCardAccent({
  animationData,
}: {
  animationData: object;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-0 right-0 z-[2] flex h-[112px] w-[126px] translate-x-[6%] -translate-y-[4%] items-center justify-center overflow-hidden rounded-bl-[20px] bg-white"
    >
      <Lottie
        animationData={animationData}
        loop
        className="h-[88%] w-[88%]"
      />
    </div>
  );
}
