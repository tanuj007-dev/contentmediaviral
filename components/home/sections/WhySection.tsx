"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const WHY = [
  ["01 / 04", "Strategy first, content second.", "We start by mapping your ICP, positioning, and content pillars. Without strategy, posting is just noise."],
  ["02 / 04", "One recording, full month of content.", "A single 2-hour podcast or sit-down becomes 60+ pieces — clips, carousels, threads, newsletters, posts."],
  ["03 / 04", "Built for retention, not vanity.", "Hooks tested for the first 3 seconds. Cuts paced for max watch-through. Every frame earns its place."],
  ["04 / 04", "Month-to-month. No lock-ins.", "If we're not moving the needle, fire us. We earn renewal every month — and most clients stay 12+."],
] as const;

export function WhySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section 
      ref={containerRef} 
      id="why" 
      className="relative h-[400vh] border-y border-[var(--border)] bg-[var(--bg-2)]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Decorative Text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <h2 className="text-[18vw] font-black tracking-tight select-none">SYSTEMS</h2>
        </div>

        <div className="section-inner relative z-10 mx-auto grid w-full max-w-[var(--max-w)] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT SIDE: Static Info */}
          <div className="flex items-center">
            <div>
              <SectionHeader
                eyebrow="Why Founders Pick Us"
                title={<>Most agencies post.<br />We <span className="serif accent-text">build systems.</span></>}
                subtitle="Anyone can edit a video. Few can engineer a content engine that compounds month after month."
                subtitleClassName="section-subtitle mb-2 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]"
              />
              
              <div className="mt-10 flex gap-3">
                {WHY.map((_, i) => {
                  const activeColor = useTransform(smoothProgress, [i / WHY.length, (i + 1) / WHY.length], ["#2a2a2a", "var(--accent)"]);
                  return (
                    <motion.div
                      key={i}
                      style={{ backgroundColor: activeColor }}
                      className="h-1.5 w-12 rounded-full"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Card Stack */}
          <div className="relative mx-auto h-[520px] w-full max-w-[600px]">
            {WHY.map(([num, title, body], i) => {
              const start = i / WHY.length;
              const end = (i + 1) / WHY.length;

              // Animation Mapping
              // 1. Enter: From bottom (600px) to center (0)
              const y = useTransform(smoothProgress, [start - 0.15, start], [600, 0]);
              // 2. Rotate: Tilt entry
              const rotate = useTransform(smoothProgress, [start - 0.15, start], [10, 0]);
              // 3. Scale/Opacity: Exit shrink and fade
              const scale = useTransform(smoothProgress, [end - 0.2, end], [1, 0.9]);
              const opacity = useTransform(smoothProgress, [end - 0.2, end], [1, 0]);
              const blur = useTransform(smoothProgress, [end - 0.2, end], [0, 4]);

              return (
                <motion.div
                  key={num}
                  style={{ 
                    y, 
                    rotate, 
                    scale, 
                    opacity, 
                    filter: `blur(${blur}px)`,
                    zIndex: i 
                  }}
                  className="absolute inset-0"
                >
                  <div className="flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--bg)] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--accent)]/5 blur-3xl" />
                    
                    <div>
                      <div className="mono mb-8 text-xs tracking-[0.14em] text-[var(--accent)]">{num}</div>
                      <h3 className="mb-6 text-[clamp(28px,3vw,46px)] font-bold leading-[1.05] tracking-[-0.03em]">{title}</h3>
                      <p className="max-w-[500px] text-base leading-relaxed text-[var(--text-dim)] md:text-lg">{body}</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-[var(--border)] pt-8">
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
                        <span className="mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-dim)]">Active</span>
                      </div>
                      <span className="text-5xl font-black opacity-[0.08] md:text-7xl">0{i + 1}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}