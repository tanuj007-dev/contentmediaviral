import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

const SERVICES = [
  ["01", "Personal Branding for Founders", "Positioning, scripting, and authority-building content."],
  ["02", "Instagram & LinkedIn Management", "End-to-end posting, captions, engagement, growth."],
  ["03", "Video Editing Services", "Cinematic, storytelling, meta ads, UGC, AI voiceover."],
  ["04", "Podcast Repurposing", "Full edits, viral clips, carousels, newsletters from one episode."],
  ["05", "UGC Creation", "Employee-led, native, conversion-focused content."],
  ["06", "YouTube Channel Management", "Scripts, edits, thumbnails, SEO — full channel ownership."],
] as const;

export function ServicesSection() {
  return (
    <section
      className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]"
      id="services"
    >
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Let your brand&apos;s <span className="serif accent-text">vision</span>
              <br />
              become reality.
            </>
          }
          subtitle="Six services. One unified content engine."
          subtitleClassName="section-subtitle mb-16 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]"
        />
        <div className="services-list border-t border-[var(--border)]">
          {SERVICES.map(([num, name, desc]) => (
            <Link
              key={num}
              href="#inquire"
              className="service-row group relative grid grid-cols-[60px_1fr_44px] items-center gap-4 border-b border-[var(--border)] py-6 text-[var(--text)] no-underline transition-[padding,background] duration-300 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-500 after:[transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] after:content-[''] hover:bg-[var(--bg-2)] hover:px-4 hover:after:scale-x-100 min-[969px]:grid-cols-[80px_1fr_1.5fr_auto] min-[969px]:gap-8 min-[969px]:px-2 min-[969px]:py-8 min-[969px]:hover:px-6"
            >
              <div className="service-num mono text-sm text-[var(--text-muted)]">{num}</div>
              <div className="service-name text-[clamp(22px,2.4vw,36px)] font-bold leading-tight tracking-[-0.025em]">
                {name}
              </div>
              <div className="service-desc hidden text-[15px] leading-normal text-[var(--text-dim)] min-[969px]:block">
                {desc}
              </div>
              <div className="service-arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-base text-[var(--text-dim)] transition-all group-hover:rotate-[-45deg] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
