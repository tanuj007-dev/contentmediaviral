import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

const BEFORE_LIST = [
  "Weak hooks that don't stop the scroll",
  "Very basic editing with no rhythm, no retention",
  "Camera quality unclear, audio messy",
  "Bad font choice and editing style",
  "Storytelling that loses the viewer in 5 seconds",
  "No clear messaging or positioning",
  "Editing competes with the content",
  "Poor CTAs, weak audio, no consistency",
] as const;

const AFTER_LIST = [
  "Strong, story-driven hooks built for the first 3 seconds",
  "Custom editing style that matches your brand voice",
  "Cinematic camera direction, clean audio",
  "Premium fonts, premium colors, premium feel",
  "Storytelling that earns watch-through and shares",
  "Clear messaging and value-driven content",
  "Editing complements the message, not competes",
  "CTAs and hooks tested for actual conversion",
] as const;

type GlassSpotlightCardProps = {
  variant: "before" | "after";
  title: string;
  children: ReactNode;
};

function GlassSpotlightCard({
  variant,
  title,
  children,
}: GlassSpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 120, damping: 28 });
  const spotlightY = useSpring(mouseY, { stiffness: 120, damping: 28 });
  const smoothSpotlightOpacity = useSpring(spotlightOpacity, {
    stiffness: 160,
    damping: 30,
  });

  const isBefore = variant === "before";

  const spotlightGlow = useMotionTemplate`radial-gradient(200px circle at ${spotlightX}px ${spotlightY}px, ${
    isBefore ? "rgba(255,255,255,0.07)" : "rgba(124,92,255,0.14)"
  }, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    handleMouseMove(e);
    spotlightOpacity.set(0.85);
  };

  const handleMouseLeave = () => {
    spotlightOpacity.set(0);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-[20px] px-7 py-8 backdrop-blur-md md:rounded-[24px] md:px-9 md:py-10 ${
        isBefore
          ? "border border-white/10 bg-white/[0.04]"
          : "border border-[#7c5cff]/25 bg-[#7c5cff]/[0.06]"
      }`}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlightGlow, opacity: smoothSpotlightOpacity }}
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative">
        <h3 className="mb-7 text-xl font-bold leading-snug text-white md:mb-8 md:text-[1.65rem]">
          {title}
        </h3>
        {children}
      </div>
    </article>
  );
}

function BeforeCard() {
  return (
    <GlassSpotlightCard variant="before" title="Without Content Viral Media">
      <ul className="divide-y divide-white/8">
        {BEFORE_LIST.map((line) => (
          <li
            key={line}
            className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
          >
            <FaTimes
              className="mt-1 shrink-0 text-[13px] text-white/30"
              aria-hidden
            />
            <span className="text-[15px] leading-snug text-white/60 md:text-base">
              {line}
            </span>
          </li>
        ))}
      </ul>
    </GlassSpotlightCard>
  );
}

function AfterCard() {
  return (
    <GlassSpotlightCard variant="after" title="With Content Viral Media">
      <ul className="divide-y divide-white/10">
        {AFTER_LIST.map((line) => (
          <li
            key={line}
            className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
          >
            <span
              className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] text-white ring-1 ring-white/20"
              aria-hidden
            >
              <FaCheck />
            </span>
            <span className="text-[15px] leading-snug text-white/85 md:text-base">
              {line}
            </span>
          </li>
        ))}
      </ul>
    </GlassSpotlightCard>
  );
}

export function ContentRedesignSection() {
  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--bg)] px-5 py-20 md:px-8 md:py-[120px]">
      <div className="mx-auto max-w-[var(--max-w)]">
        <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
          Content Redesign
        </div>
        <h2 className="mb-6 max-w-[900px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em] text-[var(--text)]">
          A <span className="serif accent-text">redesign</span>
          <br />
          changes everything.
        </h2>
        <p className="mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
          What founders looked like before us and after. The hooks, the cuts,
          the positioning. All upgraded.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6"
        >
          <BeforeCard />
          <AfterCard />
        </motion.div>
      </div>
    </section>
  );
}
