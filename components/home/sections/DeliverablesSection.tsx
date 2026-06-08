import { SectionHeader } from "./SectionHeader";

const DELIV = [
  {
    icon: "◆",
    title: "Strategy",
    sub: "Direction · Positioning",
    items: [
      "Brand positioning document",
      "ICP identification & audience mapping",
      "Content pillars & voice guide",
      "30-day content calendar in Notion",
      "Monthly review & strategy call",
    ],
  },
  {
    icon: "▶",
    title: "Production",
    sub: "Scripting · Editing · Posting",
    items: [
      "Full podcast / long-form edits",
      "Viral clips in cinematic, motivational & fast-paced styles",
      "Carousels for LinkedIn & Instagram",
      "Custom thumbnails & cover art",
      "Captions, hooks, and platform-native posting",
      "Newsletter ghostwriting from key takeaways",
    ],
  },
  {
    icon: "↗",
    title: "Growth",
    sub: "Reporting · Optimization",
    items: [
      "Weekly performance dashboards",
      "Monthly analytics report (numbers + next steps)",
      "Hook + cut iteration based on data",
      "Multi-platform repurposing engine",
      "Organic lead generation playbook",
    ],
  },
] as const;

export function DeliverablesSection() {
  return (
    <section className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="What You Get"
          title={
            <>
              Every piece <span className="serif accent-text">delivered.</span>
              <br />
              Nothing in your way.
            </>
          }
          subtitle="A full breakdown of what we ship every month — strategy, production, and growth."
          subtitleClassName="section-subtitle mb-16 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]"
        />
        <div className="deliv-grid grid grid-cols-1 gap-4 md:grid-cols-3">
          {DELIV.map((d) => (
            <div
              key={d.title}
              className="deliv-card reveal rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg)] p-8 transition-[transform,border-color] hover:-translate-y-1 hover:border-[rgba(124,92,255,0.25)]"
            >
              <div className="deliv-icon mb-5 text-2xl text-[var(--accent)]">{d.icon}</div>
              <h4 className="mb-1 text-xl font-bold tracking-tight">{d.title}</h4>
              <div className="deliv-sub mb-6 text-sm text-[var(--text-muted)]">{d.sub}</div>
              <ul className="deliv-list flex list-none flex-col gap-3 text-[15px] text-[var(--text-dim)]">
                {d.items.map((li) => (
                  <li key={li} className="relative pl-4 before:absolute before:left-0 before:text-[var(--accent)] before:content-['·']">
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
