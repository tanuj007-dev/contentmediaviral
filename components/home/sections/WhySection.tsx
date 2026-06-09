"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Lightfall from "@/components/Lightfall";
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
const SCROLL_HEIGHT_VH = 280;

const SPRING = { stiffness: 90, damping: 32, mass: 0.85, restDelta: 0.0008 };

const CARD_LIGHTFALL = [
  {
    colors: ["#A78BFA", "#7C5CFF", "#C084FC"],
    backgroundColor: "#12082e",
  },
  {
    colors: ["#7C5CFF", "#5227FF", "#A6C8FF"],
    backgroundColor: "#0f0a24",
  },
  {
    colors: ["#FF9FFC", "#7C5CFF", "#5227FF"],
    backgroundColor: "#140a2a",
  },
  {
    colors: ["#06b6d4", "#7C5CFF", "#A78BFA"],
    backgroundColor: "#0a1028",
  },
] as const;

type WhyItem = (typeof WHY)[number];

function WhyCardShell({
  index,
  children,
  compact = false,
  enableEffects = false,
  paused = false,
}: {
  index: number;
  children: React.ReactNode;
  compact?: boolean;
  enableEffects?: boolean;
  paused?: boolean;
}) {
  const theme = CARD_LIGHTFALL[index % CARD_LIGHTFALL.length];

  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--bg)] shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:rounded-[22px] lg:rounded-[28px] lg:shadow-[0_16px_48px_rgba(0,0,0,0.08)]`}
    >
      {enableEffects ? (
        <div className="pointer-events-none absolute inset-0">
          <Lightfall
            colors={[...theme.colors]}
            backgroundColor={theme.backgroundColor}
            speed={0.55}
            streakCount={2}
            streakWidth={0.85}
            streakLength={1.1}
            glow={0.9}
            density={0.4}
            twinkle={0.65}
            zoom={2.4}
            backgroundGlow={0.45}
            opacity={0.7}
            mouseInteraction={false}
            dpr={1}
            paused={paused}
            mixBlendMode="screen"
          />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7c5cff]/14 via-transparent to-[#5227ff]/10" />
      )}

      <div
        className={`relative z-10 flex h-full flex-col justify-between ${
          compact ? "p-5 sm:p-6" : "p-5 sm:p-6 lg:p-7"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

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
      <div>
        <div className="mono mb-3 text-xs tracking-[0.14em] text-[var(--accent)] sm:mb-4">
          {num}
        </div>
        <h3
          className={`mb-3 font-bold leading-[1.08] tracking-[-0.03em] sm:mb-4 ${
            compact
              ? "text-[clamp(22px,5vw,32px)]"
              : "text-[clamp(26px,3vw,46px)] leading-[1.05]"
          }`}
        >
          {title}
        </h3>
        <p className="max-w-[500px] text-[15px] leading-relaxed text-white sm:text-base md:text-lg">
          {body}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4 sm:mt-5 sm:pt-5">
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
  enableEffects,
  activeIndex,
}: {
  index: number;
  item: WhyItem;
  progress: MotionValue<number>;
  enableEffects: boolean;
  activeIndex: number;
}) {
  const [num, title, body] = item;
  const start = index / CARD_COUNT;
  const end = (index + 1) / CARD_COUNT;
  const enterStart = Math.max(0, start - 0.1);

  const y = useTransform(
    progress,
    [enterStart, start, end],
    [400, 0, 0],
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
      <WhyCardShell
        index={index}
        enableEffects={enableEffects}
        paused={index !== activeIndex}
      >
        <WhyCardContent num={num} title={title} body={body} />
      </WhyCardShell>
    </motion.div>
  );
}

export function WhySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [enableEffects, setEnableEffects] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    setActiveIndex(
      Math.min(CARD_COUNT - 1, Math.max(0, Math.floor(value * CARD_COUNT))),
    );
  });

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMq = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      const reduced = motionMq.matches;
      setReduceMotion(reduced);
      setEnableEffects(desktopMq.matches && !reduced);
    };

    update();
    motionMq.addEventListener("change", update);
    desktopMq.addEventListener("change", update);

    return () => {
      motionMq.removeEventListener("change", update);
      desktopMq.removeEventListener("change", update);
    };
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
      eyebrowClassName="mb-4"
      subtitleClassName="section-subtitle mb-0 max-w-[680px] text-[clamp(16px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]"
      titleClassName="section-title mb-3 max-w-[940px] text-[clamp(30px,5vw,76px)] font-extrabold leading-[1.02] tracking-[-0.035em] sm:mb-4 sm:leading-none"
    />
  );

  return (
    <section
      id="why"
      className="border-y border-[var(--border)] bg-[var(--bg-2)]"
    >
      {/* Mobile + tablet: readable static stack */}
      <div className="px-4 py-12 sm:px-5 md:px-8 md:py-16 lg:hidden">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          {header}
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-4">
            {WHY.map(([num, title, body], index) => (
              <WhyCardShell key={num} index={index} compact>
                <WhyCardContent num={num} title={title} body={body} compact />
              </WhyCardShell>
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
          <div className="sticky top-0 flex h-[82vh] min-h-[520px] items-center overflow-hidden py-8">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
              <h2 className="select-none text-[18vw] font-black tracking-tight">
                SYSTEMS
              </h2>
            </div>

            <div className="section-inner relative z-10 mx-auto grid w-full max-w-[var(--max-w)] grid-cols-2 gap-10 px-8 xl:gap-12">
              <div className="flex items-center">
                <div>
                  {header}
                  <div className="mt-6 flex gap-2.5">
                    {WHY.map((_, i) => (
                      <ProgressDot key={i} index={i} progress={smoothProgress} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mx-auto h-[min(400px,58vh)] w-full max-w-[540px]">
                {WHY.map((item, i) => (
                  <AnimatedWhyCard
                    key={item[0]}
                    index={i}
                    item={item}
                    progress={smoothProgress}
                    enableEffects={enableEffects}
                    activeIndex={activeIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="section-inner mx-auto max-w-[var(--max-w)] px-8 py-14">
            {header}
            <div className="mt-7 flex flex-col gap-4">
              {WHY.map(([num, title, body], index) => (
                <WhyCardShell key={num} index={index}>
                  <WhyCardContent num={num} title={title} body={body} />
                </WhyCardShell>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
