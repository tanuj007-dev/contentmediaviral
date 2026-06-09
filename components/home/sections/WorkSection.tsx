
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

const WORK = [
  ["g1", "CINEMATIC · REEL", "2.4M", "bg-gradient-to-br from-[#ff006e] to-[#8338ec]"],
  ["g2", "PODCAST · LONG-FORM", "890K", "bg-gradient-to-br from-[#f72585] to-[#7c5cff]"],
  ["g3", "STORYTELLING · REEL", "1.5M", "bg-gradient-to-br from-[#4338ca] to-[#06b6d4]"],
  ["g4", "STREET STYLE · INTERVIEW", "1.8M", "bg-gradient-to-br from-[#f72585] to-[#560bad]"],
] as const;

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [disableScrollFx, setDisableScrollFx] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setDisableScrollFx(mobileMq.matches || motionMq.matches);
    };

    update();
    mobileMq.addEventListener("change", update);
    motionMq.addEventListener("change", update);

    return () => {
      mobileMq.removeEventListener("change", update);
      motionMq.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-x-hidden px-4 py-16 sm:px-5 md:px-8 md:py-20 lg:py-[130px]"
      id="work"
    >
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <div className="work-header mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:gap-6 md:flex-row md:items-end">
          <div className="min-w-0">
            <SectionEyebrow>Selected Work</SectionEyebrow>

            <h2 className="section-title max-w-[940px] text-[clamp(28px,7vw,76px)] font-extrabold leading-[1.05] tracking-[-0.035em] sm:leading-none">
              A glimpse of what we{" "}
              <span className="serif accent-text">ship.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="btn btn-secondary group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-[14px] font-semibold text-[var(--text)] no-underline hover:bg-[var(--surface)] sm:w-fit sm:justify-start sm:px-7 sm:py-4 sm:text-[15px]"
          >
            View Full Portfolio{" "}
            <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--text)] text-[11px] text-black transition-transform group-hover:-rotate-45">
              →
            </span>
          </Link>
        </div>

        <div className="work-preview reveal grid grid-cols-2 gap-2.5 overflow-hidden sm:gap-3.5 lg:grid-cols-4">
          {WORK.map(([_, cat, views, grad], index) => (
            <motion.div
              key={cat}
              className="min-w-0"
              style={{
                x: disableScrollFx ? 0 : index < 2 ? leftX : rightX,
                opacity: disableScrollFx ? 1 : opacity,
              }}
            >
              <Link
                href="/portfolio"
                className="work-tile group block no-underline"
              >
                <div
                  className={`work-thumb relative aspect-[9/16] max-h-[320px] overflow-hidden rounded-[14px] border-2 border-[#181818] sm:max-h-none sm:rounded-[18px] sm:border-[3px] ${grad} after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]`}
                >
                  <div className="play absolute left-1/2 top-1/2 z-[2] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.4)] bg-[rgba(0,0,0,0.65)] text-[10px] text-white backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] sm:h-10 sm:w-10 sm:text-xs">
                    ▶
                  </div>
                </div>

                <div className="work-tile-info mt-2 flex flex-col gap-0.5 sm:mt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                  <span className="work-tile-cat line-clamp-2 text-[9px] font-semibold uppercase tracking-wider text-[var(--text-muted)] sm:line-clamp-1 sm:text-[11px]">
                    {cat}
                  </span>
                  <span className="work-tile-views shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] sm:text-[11px]">
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

