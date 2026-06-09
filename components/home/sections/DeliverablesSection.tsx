"use client";

import Lottie from "lottie-react";
import { SectionHeader } from "./SectionHeader";
import strategyLottie from "@/public/growth and profit.json";
import productionLottie from "@/public/7915fb40-1175-11ee-b592-875609e20080.json";
import growthLottie from "@/public/6e55457e-116d-11ee-a091-ef1bd4874750 (1).json";

const DELIV = [
  {
    title: "Strategy",
    description:
      "We map your brand, audience, and content direction before anything goes live.",
    lottie: strategyLottie,
    scale: 1.65,
  },
  {
    title: "Production",
    description:
      "Scripts, edits, thumbnails, and posting — the full pipeline handled for you.",
    lottie: productionLottie,
    scale: 1.6,
  },
  {
    title: "Growth",
    description:
      "Weekly dashboards and monthly reports show what's actually moving the needle.",
    lottie: growthLottie,
    scale: 1.15,
  },
] as const;

export function DeliverablesSection() {
  return (
    <section className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="What You Get"
          title={
            <>
              Every piece <span className="serif accent-text">delivered.</span>
              <br />
              Nothing in your way.
            </>
          }
          subtitle="A full breakdown of what we ship every month — strategy, production, and growth."
          subtitleClassName="section-subtitle mb-16 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]"
        />
        <div className="deliv-grid grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {DELIV.map((d) => (
            <div
              key={d.title}
              className="deliv-card reveal flex flex-col items-center rounded-[28px] border border-white/[0.08] bg-[#161616] px-6 pb-10 pt-8 text-center transition-[transform,border-color] hover:-translate-y-1 hover:border-[rgba(124,92,255,0.25)] md:px-8 md:pb-12 md:pt-10"
            >
              <DeliverableVisual animationData={d.lottie} scale={d.scale} />
              <h4 className="mb-3 text-xl font-bold tracking-tight text-white md:text-[1.35rem]">
                {d.title}
              </h4>
              <p className="max-w-[260px] text-sm leading-relaxed text-[var(--text-dim)] md:text-[15px]">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverableVisual({
  animationData,
  scale,
}: {
  animationData: object;
  scale: number;
}) {
  return (
    <div
      className="mb-8 flex h-[220px] w-full max-w-[320px] items-center justify-center overflow-visible"
      aria-hidden
    >
      <div
        className="h-full w-full"
        style={{ transform: `scale(${scale})` }}
      >
        <Lottie animationData={animationData} loop className="h-full w-full" />
      </div>
    </div>
  );
}
