
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

const WORK = [
  ["g1", "CINEMATIC · REEL", "2.4M", "bg-gradient-to-br from-[#ff006e] to-[#8338ec]"],
  ["g2", "PODCAST · LONG-FORM", "890K", "bg-gradient-to-br from-[#f72585] to-[#7c5cff]"],
  ["g3", "STORYTELLING · REEL", "1.5M", "bg-gradient-to-br from-[#4338ca] to-[#06b6d4]"],
  ["g4", "STREET STYLE · INTERVIEW", "1.8M", "bg-gradient-to-br from-[#f72585] to-[#560bad]"],
] as const;

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="section relative px-5 py-20 md:px-8 md:py-[130px]"
      id="work"
    >
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <div className="work-header mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionEyebrow>Selected Work</SectionEyebrow>

            <h2 className="section-title max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
              A glimpse of what we{" "}
              <span className="serif accent-text">ship.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="btn btn-secondary group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[var(--border-strong)] px-7 py-4 text-[15px] font-semibold text-[var(--text)] no-underline hover:bg-[var(--surface)]"
          >
            View Full Portfolio{" "}
            <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--text)] text-[11px] text-black transition-transform group-hover:-rotate-45">
              →
            </span>
          </Link>
        </div>

        <div className="work-preview reveal overflow-hidden grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {WORK.map(([_, cat, views, grad], index) => (
            <motion.div
              key={cat}
              style={{
                x: index < 2 ? leftX : rightX,
                opacity,
              }}
            >
              <Link
                href="/portfolio"
                className="work-tile group block no-underline"
              >
                <div
                  className={`work-thumb relative aspect-[9/16] overflow-hidden rounded-[18px] border-[3px] border-[#181818] ${grad} after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]`}
                >
                  <div className="play absolute left-1/2 top-1/2 z-[2] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.4)] bg-[rgba(0,0,0,0.65)] text-xs text-white backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                    ▶
                  </div>
                </div>

                <div className="work-tile-info mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  <span className="work-tile-cat">{cat}</span>
                  <span className="work-tile-views text-[var(--accent)]">
                    {views}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

