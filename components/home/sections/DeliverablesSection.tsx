import type { IconType } from "react-icons";
import {
  FaBolt,
  FaFileAlt,
  FaShareAlt,
  FaUser,
  FaVideo,
} from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { SectionHeader } from "./SectionHeader";

const DELIVERABLES: {
  num: string;
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    num: "01",
    title: "Personal Branding",
    description:
      "We craft a magnetic identity that makes you the go-to voice in your space — from positioning and messaging to visual presence.",
    icon: FaUser,
  },
  {
    num: "02",
    title: "Scripting & Research",
    description:
      "Deep-dive research and compelling scripts that resonate — engineered for retention, shareability, and authority.",
    icon: FaFileAlt,
  },
  {
    num: "03",
    title: "Pre-Production",
    description:
      "Full planning and coordination — shot lists, storyboards, scheduling — so every shoot runs flawlessly before the camera rolls.",
    icon: FaVideo,
  },
  {
    num: "04",
    title: "Post-Production & Edits",
    description:
      "Cinematic edits, colour grading, sound design, and motion graphics — polished to platform perfection for every format.",
    icon: FiEdit3,
  },
  {
    num: "05",
    title: "Distribution",
    description:
      "Strategic publishing, SEO-optimised descriptions, thumbnails, and cross-platform scheduling to maximise your reach and impact.",
    icon: FaShareAlt,
  },
  {
    num: "06",
    title: "Full Agency Support",
    description:
      "We embed ourselves in your brand as a true creative partner — always on, always building, always growing your presence.",
    icon: FaBolt,
  },
];

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
          subtitle="From the first idea to the final distribution — we handle your entire content operation so you can focus on what you do best."
          subtitleClassName="section-subtitle mb-12 max-w-[720px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)] md:mb-14"
          titleClassName="section-title mb-5 max-w-[940px] text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] md:mb-6"
        />

        <div className="deliv-grid reveal overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:rounded-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.num}
                  className="deliv-card group relative flex min-h-[280px] flex-col bg-[var(--bg-3)] p-7 transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[var(--surface)] hover:shadow-[0_16px_48px_rgba(124,92,255,0.12)] sm:min-h-[300px] sm:p-8 lg:min-h-[320px]"
                >
                  <span className="absolute right-7 top-7 text-sm font-medium text-[var(--text-muted)] sm:right-8 sm:top-8">
                    {item.num}
                  </span>

                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#0a0a0a] text-white transition-colors duration-300 group-hover:bg-[var(--accent)]">
                    <Icon className="text-[18px]" aria-hidden />
                  </div>

                  <h3 className="mb-3 pr-10 text-lg font-bold leading-snug tracking-tight text-[var(--text)] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[var(--text-dim)]">
                    {item.description}
                  </p>

                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--accent)] transition-[width] duration-300 ease-out group-hover:w-full"
                    aria-hidden
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
