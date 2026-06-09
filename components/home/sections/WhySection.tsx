"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const WHY = [
  [
    "01 / 04",
    "Strategy first, content second.",
    "We start by mapping your ICP, positioning, and content pillars. Without strategy, posting is just noise.",
  ],
  [
    "02 / 04",
    "One recording, full month of content.",
    "A single 2-hour podcast or sit-down becomes 60+ pieces — clips, carousels, threads, newsletters, posts.",
  ],
  [
    "03 / 04",
    "Built for retention, not vanity.",
    "Hooks tested for the first 3 seconds. Cuts paced for max watch-through. Every frame earns its place.",
  ],
  [
    "04 / 04",
    "Month-to-month. No lock-ins.",
    "If we're not moving the needle, fire us. We earn renewal every month — and most clients stay 12+.",
  ],
] as const;

const CARD_COUNT = WHY.length;
const SCROLL_HEIGHT_VH = 380;

const SPRING = { stiffness: 90, damping: 32, mass: 0.85, restDelta: 0.0008 };

type WhyItem = (typeof WHY)[number];

function WhyCardContent({
  num,
  title,
  body,
  compact = false,
}: {
  num: string;
  title: string;
  body: string;
  compact?: boolean;
}) {
  return (
    <>
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[var(--accent)]/5 blur-3xl sm:h-40 sm:w-40" />

      <div>
        <div className="mono mb-5 text-xs tracking-[0.14em] text-[var(--accent)] sm:mb-8">
          {num}
        </div>
        <h3
          className={`mb-4 font-bold leading-[1.08] tracking-[-0.03em] sm:mb-6 ${
            compact
              ? "text-[clamp(22px,5vw,32px)]"
              : "text-[clamp(26px,3vw,46px)] leading-[1.05]"
          }`}
        >
          {title}
        </h3>
        <p className="max-w-[500px] text-[15px] leading-relaxed text-[var(--text-dim)] sm:text-base md:text-lg">
          {body}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border)] pt-6 sm:pt-8">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
          <span className="mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-dim)]">
            Active
          </span>
        </div>
        <span className="text-4xl font-black opacity-[0.08] sm:text-5xl md:text-7xl">
          {num.slice(0, 2).trim()}
        </span>
      </div>
    </>
  );
}

function ProgressDot({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / CARD_COUNT;
  const end = (index + 1) / CARD_COUNT;

  const backgroundColor = useTransform(
    progress,
    [start, end],
    ["#2a2a2a", "var(--accent)"],
    { clamp: true },
  );

  const scale = useTransform(progress, [start, end], [1, 1.08], { clamp: true });

  return (
    <motion.div
      style={{ backgroundColor, scale }}
      className="h-1.5 w-10 rounded-full will-change-transform sm:w-12"
    />
  );
}

function AnimatedWhyCard({
  index,
  item,
  progress,
}: {
  index: number;
  item: WhyItem;
  progress: MotionValue<number>;
}) {
  const [num, title, body] = item;
  const start = index / CARD_COUNT;
  const end = (index + 1) / CARD_COUNT;
  const enterStart = Math.max(0, start - 0.1);

  const y = useTransform(
    progress,
    [enterStart, start, end],
    [520, 0, 0],
    { clamp: true },
  );
  const rotate = useTransform(
    progress,
    [enterStart, start, end],
    [8, 0, 0],
    { clamp: true },
  );
  const scale = useTransform(
    progress,
    [enterStart, start, end - 0.18, end],
    [0.96, 1, 1, 0.92],
    { clamp: true },
  );
  const opacity = useTransform(
    progress,
    [enterStart, start, end - 0.18, end - 0.04],
    [0, 1, 1, 0],
    { clamp: true },
  );
  const blurAmount = useTransform(
    progress,
    [end - 0.18, end - 0.04],
    [0, 6],
    { clamp: true },
  );
  const filter = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <motion.div
      style={{
        y,
        rotate,
        scale,
        opacity,
        filter,
        zIndex: index + 1,
      }}
      className="absolute inset-0 will-change-transform"
    >
      <div className="flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg)] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:rounded-[32px] sm:p-10 lg:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <WhyCardContent num={num} title={title} body={body} />
      </div>
    </motion.div>
  );
}

export function WhySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setReduceMotion(motionMq.matches);

    update();
    motionMq.addEventListener("change", update);

    return () => motionMq.removeEventListener("change", update);
  }, []);

  const header = (
    <SectionHeader
      eyebrow="Why Founders Pick Us"
      title={
        <>
          Most agencies post.
          <br />
          We <span className="serif accent-text">build systems.</span>
        </>
      }
      subtitle="Anyone can edit a video. Few can engineer a content engine that compounds month after month."
      subtitleClassName="section-subtitle mb-2 max-w-[680px] text-[clamp(16px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]"
      titleClassName="section-title mb-5 max-w-[940px] text-[clamp(30px,5vw,76px)] font-extrabold leading-[1.02] tracking-[-0.035em] sm:mb-6 sm:leading-none"
    />
  );

  return (
    <section
      id="why"
      className="border-y border-[var(--border)] bg-[var(--bg-2)]"
    >
      {/* Mobile + tablet: readable static stack */}
      <div className="px-4 py-16 sm:px-5 md:px-8 md:py-20 lg:hidden">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          {header}
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5">
            {WHY.map(([num, title, body]) => (
              <article
                key={num}
                className="relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg)] p-6 sm:rounded-[24px] sm:p-8"
              >
                <WhyCardContent num={num} title={title} body={body} compact />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: sticky scroll card stack */}
      <div
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: reduceMotion ? "auto" : `${SCROLL_HEIGHT_VH}vh` }}
      >
        {!reduceMotion ? (
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
              <h2 className="select-none text-[18vw] font-black tracking-tight">
                SYSTEMS
              </h2>
            </div>

            <div className="section-inner relative z-10 mx-auto grid w-full max-w-[var(--max-w)] grid-cols-2 gap-16 px-8 xl:gap-20">
              <div className="flex items-center">
                <div>
                  {header}
                  <div className="mt-10 flex gap-3">
                    {WHY.map((_, i) => (
                      <ProgressDot key={i} index={i} progress={smoothProgress} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mx-auto h-[min(520px,72vh)] w-full max-w-[600px]">
                {WHY.map((item, i) => (
                  <AnimatedWhyCard
                    key={item[0]}
                    index={i}
                    item={item}
                    progress={smoothProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="section-inner mx-auto max-w-[var(--max-w)] px-8 py-20">
            {header}
            <div className="mt-10 flex flex-col gap-5">
              {WHY.map(([num, title, body]) => (
                <article
                  key={num}
                  className="relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--bg)] p-8"
                >
                  <WhyCardContent num={num} title={title} body={body} />
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
