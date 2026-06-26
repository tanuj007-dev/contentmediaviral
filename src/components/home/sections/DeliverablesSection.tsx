import { SectionHeader } from "./SectionHeader";

const DELIVERABLES = [
  {
    num: "01",
    title: "Personal Branding",
    description:
      "We craft a magnetic identity that makes you the go-to voice in your space, from positioning and messaging to visual presence.",
  },
  {
    num: "02",
    title: "Scripting & Research",
    description:
      "Deep-dive research and compelling scripts that resonate, engineered for retention, shareability, and authority.",
  },
  {
    num: "03",
    title: "Pre-Production",
    description:
      "Full planning and coordination: shot lists, storyboards, scheduling, so every shoot runs flawlessly before the camera rolls.",
  },
  {
    num: "04",
    title: "Post-Production & Edits",
    description:
      "Cinematic edits, colour grading, sound design, and motion graphics, polished to platform perfection for every format.",
  },
  {
    num: "05",
    title: "Distribution",
    description:
      "Strategic publishing, SEO-optimised descriptions, thumbnails, and cross-platform scheduling to maximise your reach and impact.",
  },
  {
    num: "06",
    title: "Full Agency Support",
    description:
      "We embed ourselves in your brand as a true creative partner, always on, always building, always growing your presence.",
  },
] as const;

const TOTAL = DELIVERABLES.length;

function DeliverableTimelineCard({
  item,
  isLast,
}: {
  item: (typeof DELIVERABLES)[number];
  isLast: boolean;
}) {
  return (
    <li className="relative flex gap-0">
      {/* Timeline column: line + badge */}
      <div className="relative flex w-14 shrink-0 flex-col items-center sm:w-16 md:w-[72px]">
        {!isLast && (
          <div
            aria-hidden
            className="absolute left-1/2 top-14 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/60 to-[var(--accent)]/20"
          />
        )}
        <div
          className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white shadow-[0_0_28px_var(--accent-glow)] ring-4 ring-[var(--bg-2)] sm:h-[52px] sm:w-[52px] sm:text-base"
          aria-hidden
        >
          {item.num}
        </div>
      </div>

      {/* Card */}
      <article className="group mb-8 min-w-0 flex-1 rounded-2xl border border-[var(--border)] border-b-2 border-b-[var(--accent)] bg-[var(--surface)] px-6 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(124,92,255,0.28)] hover:shadow-[0_16px_48px_rgba(124,92,255,0.12)] sm:mb-10 sm:rounded-[20px] sm:px-8 sm:py-8 md:mb-12">
        <p className="mono mb-3 text-xs tracking-[0.12em] text-[var(--accent)] sm:mb-4">
          / {item.num} of 0{TOTAL}
        </p>
        <h3 className="mb-3 text-[clamp(22px,3vw,32px)] font-bold leading-tight tracking-[-0.03em] text-[var(--text)] sm:mb-4">
          {item.title}
        </h3>
        <p className="max-w-[640px] text-[15px] leading-relaxed text-[var(--text-dim)] sm:text-base">
          {item.description}
        </p>
      </article>
    </li>
  );
}

export function DeliverablesSection() {
  return (
    <section className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="What You Get"
          title={
            <>
              Everything you need to{" "}
              <span className="serif accent-text">own your niche.</span>
            </>
          }
          subtitle="From the first idea to the final distribution, we handle your entire content operation so you can focus on what you do best."
          subtitleClassName="section-subtitle mb-12 max-w-[720px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)] md:mb-16"
          titleClassName="section-title mb-5 max-w-[940px] text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] md:mb-6"
        />

        <ol className="relative mx-auto max-w-[820px] list-none pl-0">
          {DELIVERABLES.map((item, index) => (
            <DeliverableTimelineCard
              key={item.num}
              item={item}
              isLast={index === DELIVERABLES.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
