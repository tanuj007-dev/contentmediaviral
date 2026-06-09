import { FaCheck, FaTimes } from "react-icons/fa";
import { Reveal } from "@/components/Reveal";

const BEFORE_LIST = [
  "Weak hooks that don't stop the scroll",
  "Very basic editing — no rhythm, no retention",
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
          What founders looked like before us — and after. The hooks, the cuts,
          the positioning. All upgraded.
        </p>
        <Reveal>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-white px-7 py-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)] md:rounded-[24px] md:px-9 md:py-10">
              <h3 className="mb-7 text-xl font-bold leading-snug text-[#0a0a0a] md:mb-8 md:text-[1.65rem]">
                Without Content Viral Media
              </h3>
              <ul className="divide-y divide-[#ececec]">
                {BEFORE_LIST.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
                  >
                    <FaTimes
                      className="mt-1 shrink-0 text-[13px] text-[#b0b0b0]"
                      aria-hidden
                    />
                    <span className="text-[15px] leading-snug text-[#6b6b6b] md:text-base">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-[#7c5cff] via-[#6a4ef5] to-[#5227ff] px-7 py-8 shadow-[0_20px_60px_rgba(124,92,255,0.35)] md:rounded-[24px] md:px-9 md:py-10">
              <h3 className="mb-7 text-xl font-bold leading-snug text-white md:mb-8 md:text-[1.65rem]">
                With Content Viral Media
              </h3>
              <ul className="divide-y divide-white/20">
                {AFTER_LIST.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
                  >
                    <span
                      className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white/15 text-[10px] text-white ring-1 ring-white/35"
                      aria-hidden
                    >
                      <FaCheck />
                    </span>
                    <span className="text-[15px] leading-snug text-white/95 md:text-base">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
