import { SectionHeader } from "./SectionHeader";

const FAQ = [
  [
    "How much time do I actually need to put in?",
    "About two hours a week. Typically that's one recording session (podcast or sit-down) plus a quick approval pass on the content we ship. Everything else (strategy, scripting, editing, posting, repurposing) is on us.",
  ],
  [
    "Do you work with founders outside India?",
    "Yes. We work with founders globally: North America, Europe, India, the Middle East, and SE Asia. Everything's remote, async-friendly, and we adapt timezones for live calls.",
  ],
  [
    "How fast do you start producing content?",
    "Strategy and the first scripts are ready in 4–5 days. First batch of content typically ships in week 2. Full system is humming by week 4.",
  ],
  [
    "What platforms do you cover?",
    "LinkedIn, Instagram, and YouTube as the core three. We also support TikTok, X (Twitter), and email newsletters depending on your level.",
  ],
  [
    "Can I cancel anytime?",
    "No lock-ins. If we're not moving the needle, you can fire us with 30 days notice. Most clients stay longer than 12 months because the system compounds.",
  ],
  [
    "Do you guarantee follower growth?",
    "We don't guarantee specific follower numbers. Anyone who does is lying. What we do guarantee: a complete content system, world-class production, and a strategy that's compounding by month three.",
  ],
  [
    "What if I'm starting from zero?",
    "That's actually our sweet spot. Multiple clients started under 1,000 followers and crossed 10K within 60–90 days. Zero followers means we get to position you cleanly from day one.",
  ],
  [
    "Who owns the content?",
    "You do. Every script, every edit, every asset. We deliver everything in your Drive / Notion. If we ever part ways, you keep the entire system.",
  ],
] as const;

export function FaqSection() {
  return (
    <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="faq">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Common Questions"
          title={
            <>
              Everything you wanted
              <br />
              to ask, <span className="serif accent-text">answered.</span>
            </>
          }
          subtitle="Still have questions? Book a discovery call and we'll go deep on your specific use case."
        />
        <div className="faq-wrap mx-auto max-w-[880px]">
          {FAQ.map(([q, a]) => (
            <div key={q} className="faq-item cursor-pointer border-b border-[var(--border)] py-7">
              <div className="faq-q flex items-center justify-between gap-6 text-[clamp(18px,1.5vw,22px)] font-semibold tracking-tight text-[var(--text)]">
                <span>{q}</span>
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-lg text-[var(--text-dim)] transition-all">
                  +
                </span>
              </div>
              <div className="faq-a pr-14 text-base leading-relaxed text-[var(--text-dim)]">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
