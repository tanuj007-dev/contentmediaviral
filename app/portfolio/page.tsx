import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The full Content Viral Media portfolio — best edits, personal brands, YouTube channels, success stories.",
};

const phoneBase =
  "group relative aspect-[9/19.5] cursor-pointer overflow-hidden rounded-[18px] border-[3px] border-[#181818] transition-[transform,box-shadow] duration-300 ease-out after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.6)]";

const playBase =
  "absolute left-1/2 top-1/2 z-[2] flex h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[rgba(255,255,255,0.4)] bg-[rgba(0,0,0,0.65)] text-xs text-white backdrop-blur-[4px] transition-all duration-300 group-hover:scale-[1.15] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]";

const viewsBase =
  "absolute bottom-2.5 left-2 right-2 z-[2] rounded-md bg-[rgba(0,0,0,0.7)] px-2 py-1 text-center text-[10px] font-semibold text-[var(--text)] backdrop-blur-[6px]";

function Phone({
  gradient,
  views,
}: {
  gradient: string;
  views: string;
}) {
  return (
    <div className={`${phoneBase} ${gradient}`}>
      <div className={playBase}>▶</div>
      <div className={viewsBase}>{views}</div>
    </div>
  );
}

const editsSections = [
  {
    title: "Cinematic edits",
    count: "04 SAMPLES",
    three: false,
    items: [
      { g: "bg-gradient-to-br from-[#ff006e] to-[#8338ec]", v: "2.4M views" },
      { g: "bg-gradient-to-br from-[#f72585] to-[#7c5cff]", v: "1.1M views" },
      { g: "bg-gradient-to-br from-[#4338ca] to-[#06b6d4]", v: "890K views" },
      { g: "bg-gradient-to-br from-[#f72585] to-[#560bad]", v: "3.8M views" },
    ],
  },
  {
    title: "Storytelling",
    count: "04 SAMPLES",
    three: false,
    items: [
      { g: "bg-gradient-to-br from-[#7c5cff] to-[#c084fc]", v: "560K views" },
      { g: "bg-gradient-to-br from-[#6366f1] to-[#06b6d4]", v: "1.5M views" },
      { g: "bg-gradient-to-br from-[#a78bfa] to-[#f472b6]", v: "720K views" },
      { g: "bg-gradient-to-br from-[#a78bfa] to-[#f472b6]", v: "2.1M views" },
    ],
  },
  {
    title: "Meta ads",
    count: "03 SAMPLES",
    three: true,
    items: [
      { g: "bg-gradient-to-br from-[#ec4899] to-[#f472b6]", v: "CTR 4.2x" },
      { g: "bg-gradient-to-br from-[#4338ca] to-[#06b6d4]", v: "CTR 3.8x" },
      { g: "bg-gradient-to-br from-[#f72585] to-[#b5179e]", v: "CTR 5.1x" },
    ],
  },
  {
    title: "Street style interviews",
    count: "03 SAMPLES",
    three: true,
    items: [
      { g: "bg-gradient-to-br from-[#7c5cff] to-[#a78bfa]", v: "1.8M views" },
      { g: "bg-gradient-to-br from-[#ff006e] to-[#8338ec]", v: "920K views" },
      { g: "bg-gradient-to-br from-[#4338ca] to-[#06b6d4]", v: "1.3M views" },
    ],
  },
  {
    title: "Podcast & long-form",
    count: "04 SAMPLES",
    three: false,
    items: [
      { g: "bg-gradient-to-br from-[#f72585] to-[#560bad]", v: "68% retention" },
      { g: "bg-gradient-to-br from-[#6366f1] to-[#06b6d4]", v: "890K views" },
      { g: "bg-gradient-to-br from-[#a78bfa] to-[#f472b6]", v: "1.2M views" },
      { g: "bg-gradient-to-br from-[#f72585] to-[#b5179e]", v: "540K views" },
    ],
  },
  {
    title: "AI Voiceover Reels",
    count: "03 SAMPLES",
    three: true,
    items: [
      { g: "bg-gradient-to-br from-[#a78bfa] to-[#f472b6]", v: "1.6M views" },
      { g: "bg-gradient-to-br from-[#f72585] to-[#7c5cff]", v: "2.3M views" },
      { g: "bg-gradient-to-br from-[#7c5cff] to-[#c084fc]", v: "980K views" },
    ],
  },
] as const;

const bigNumberItems = [
  { num: "18M", acc: true, label: "Views on a single account" },
  { num: "1.6M", acc: false, label: "Likes generated" },
  { num: "24.1M", acc: true, label: "Views in 30 days" },
  { num: "5.2M", acc: false, label: "Reach (single brand)" },
  { num: "10x", acc: true, label: "Follower growth" },
  { num: "3,189", acc: false, label: "Follows from one reel" },
] as const;

const brands = [
  {
    color: "#a78bfa",
    handle: "@sharmajiinvests",
    name: "Kritika Sharma",
    stat: "80.6K",
    statLabel: "followers",
    platform: "Instagram · Finance",
  },
  {
    color: "#ec4899",
    handle: "@pankajshivnani",
    name: "Pankaj Shivnani",
    stat: "92.6K",
    statLabel: "followers",
    platform: "Instagram · Marketing",
  },
  {
    color: "#a78bfa",
    handle: "@kajolrpaswwan",
    name: "Kajol · Bridal Makeup",
    stat: "102K",
    statLabel: "followers",
    platform: "Instagram · Beauty",
  },
  {
    color: "#6366f1",
    handle: "@myselfshivamtiwari",
    name: "Shivam Tiwari · Anchor",
    stat: "71.5K",
    statLabel: "followers",
    platform: "Instagram · Lifestyle",
  },
  {
    color: "#f472b6",
    handle: "@ankur_tharwan",
    name: "Ankur Tharwan",
    stat: "4.8K",
    statLabel: "followers",
    platform: "Instagram · Entrepreneur",
  },
  {
    color: "#7c5cff",
    handle: "@himanshurp_",
    name: "Himanshu · Nexera.Health",
    stat: "11.8K",
    statLabel: "followers",
    platform: "LinkedIn · Health Tech",
  },
  {
    color: "#06b6d4",
    handle: "@snackee.in",
    name: "Snackee — D2C Brand",
    stat: "122K",
    statLabel: "monthly views",
    platform: "Instagram · D2C Snacks",
  },
  {
    color: "#f72585",
    handle: "@coreflex.in",
    name: "CoreFlex — Athleisure",
    stat: "52.5K",
    statLabel: "monthly views",
    platform: "Instagram · D2C Apparel",
  },
] as const;

const ytChannels = [
  {
    initials: "P",
    logo: "bg-gradient-to-br from-[#ff006e] to-[#8338ec]",
    name: "PWians",
    subs: "11.3L subs · 1Cr views/mo",
  },
  {
    initials: "PK",
    logo: "bg-gradient-to-br from-[#6366f1] to-[#06b6d4]",
    name: "Prashant Kirad Hub",
    subs: "2.3L subs · 1Cr views/mo",
  },
  {
    initials: "SS",
    logo: "bg-gradient-to-br from-[#a78bfa] to-[#f472b6]",
    name: "Sainik School Coaching",
    subs: "64K subs · 2.4L views",
  },
  {
    initials: "CY",
    logo: "bg-gradient-to-br from-[#06b6d4] to-[#4338ca]",
    name: "Chandrakanta Yogshala",
    subs: "2.2K subs · 433K views",
  },
  {
    initials: "LT",
    logo: "bg-gradient-to-br from-[#f72585] to-[#b5179e]",
    name: "Lovenish Tanwar",
    subs: "1.1K subs · 113K views",
  },
  {
    initials: "NG",
    logo: "bg-gradient-to-br from-[#7c5cff] to-[#6b4eff]",
    name: "Nikhil Gupta CFA",
    subs: "1K subs · 17.4K views",
  },
] as const;

const stories = [
  {
    handle: "@sharmajiinvests",
    name: "Kritika Sharma · Finance",
    before: "7,005",
    beforeLabel: "Before",
    after: "80.6K",
    afterLabel: "After",
    tactics: [
      "18 million views generated",
      "1.6 million likes",
      "Built into a finance brand",
    ],
  },
  {
    handle: "@shri_dhanlaxmi_rajputi",
    name: "Boutique · 60 days",
    before: "319",
    beforeLabel: "Before",
    after: "10K",
    afterLabel: "60 days",
    tactics: [
      "UGC from team members",
      "Show, don't just tell",
      "1.2M reach in 30 days",
    ],
  },
  {
    handle: "@gabe_einhorn · @praysstudios",
    name: "Gabe · Founder of Prays + Vryfyid",
    before: "1.2K",
    beforeLabel: "Before",
    after: "15K",
    afterLabel: "90 days",
    tactics: [
      "Day-in-life + brand challenges",
      "Street style interviews",
      "5.2M reach (Prays) · 4.2M (personal)",
    ],
  },
  {
    handle: "@pankajshivnani",
    name: "Pankaj Shivnani · Marketing Strategist",
    before: "369",
    beforeLabel: "Before",
    after: "92.6K",
    afterLabel: "After",
    tactics: [
      "Marketing-led personal brand",
      "Strategy-first content",
      "Inbound clients via Instagram",
    ],
  },
  {
    handle: "Random reel · Fitness niche",
    name: "From 1 reel · 3,189 follows",
    before: "+3,189",
    beforeLabel: "Followers",
    after: "24.1M",
    afterLabel: "Views",
    tactics: [
      "One viral hook",
      "Retention-first cut",
      "3.6L likes · 4.9L shares",
    ],
  },
  {
    handle: "@himanshurp_",
    name: "Himanshu Rajpurohit · Nexera.Health",
    before: "low",
    beforeLabel: "Pre Tank",
    after: "11.8K",
    afterLabel: "Now",
    tactics: [
      "Post-Shark Tank momentum",
      "LinkedIn + Instagram positioning",
      "Authority in health-tech niche",
    ],
  },
] as const;

const beforeList = [
  "Weak hooks that don't stop the scroll",
  "Very basic editing — no rhythm, no retention",
  "Camera quality unclear, audio messy",
  "Bad font choice and editing style",
  "Storytelling that loses the viewer in 5 seconds",
  "No clear messaging or positioning",
  "Editing competes with the content",
  "Poor CTAs, weak audio, no consistency",
] as const;

const afterList = [
  "Strong, story-driven hooks built for the first 3 seconds",
  "Custom editing style that matches your brand voice",
  "Cinematic camera direction, clean audio",
  "Premium fonts, premium colors, premium feel",
  "Storytelling that earns watch-through and shares",
  "Clear messaging and value-driven content",
  "Editing complements the message, not competes",
  "CTAs and hooks tested for actual conversion",
] as const;

export default function PortfolioPage() {
  return (
    <>
      <Nav />

      <section className="relative overflow-hidden border-b border-[var(--border)] px-5 pb-20 pt-[180px] md:px-8">
        <div
          className="pointer-events-none absolute left-1/2 top-[30%] z-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(124,92,255,0.08),transparent_60%)] blur-[80px]"
          aria-hidden
        />
        <div className="relative z-[1] mx-auto max-w-[var(--max-w)]">
          <div className="mb-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)]">
            <Link
              href="/"
              className="text-[var(--text-dim)] no-underline transition-colors hover:text-[var(--accent)]"
            >
              Home
            </Link>
            <span className="text-[var(--text-muted)]">/</span>
            <span>Portfolio</span>
          </div>
          <h1 className="mb-8 text-[clamp(56px,10vw,160px)] font-extrabold leading-[0.92] tracking-[-0.05em]">
            The <span className="serif accent-text">portfolio.</span>
          </h1>
          <p className="max-w-[720px] text-[clamp(17px,1.3vw,22px)] leading-normal text-[var(--text-dim)]">
            A complete look at what we ship every month — best edits, the
            brands we&apos;ve built, the YouTube channels we run, and the
            receipts to back it all up.{" "}
            <strong className="font-semibold text-[var(--text)]">
              No mockups. No anonymized &quot;Client A&quot;.
            </strong>
          </p>
          <div className="mt-12 flex flex-wrap gap-8 border-t border-[var(--border)] pt-8">
            {(
              [
                ["Total Views", "100M+"],
                ["Brands Built", "100+"],
                ["Content Pieces", "1,000+"],
                ["Years", "2+"],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1.5">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {label}
                </span>
                <span className="text-[22px] font-bold tracking-[-0.02em] text-[var(--accent)]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-8 md:py-[120px]">
        <div className="mx-auto max-w-[var(--max-w)]">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Best Edits
          </div>
          <h2 className="mb-6 max-w-[900px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Edits that <span className="serif accent-text">stop the scroll.</span>
          </h2>
          <p className="mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Six categories. Every cut built for retention from frame one.
          </p>

          {editsSections.map((block) => (
            <div key={block.title} className="mb-24 last:mb-0">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
                <div className="serif text-[clamp(28px,3.6vw,48px)] font-normal leading-none tracking-[-0.02em]">
                  {block.title}
                </div>
                <div className="mono text-[13px] text-[var(--text-dim)]">
                  {block.count}
                </div>
              </div>
              <div
                className={
                  block.three
                    ? "grid grid-cols-2 gap-3.5 min-[541px]:grid-cols-3 min-[969px]:grid-cols-3"
                    : "grid grid-cols-2 gap-3.5 min-[541px]:grid-cols-3 min-[969px]:grid-cols-4"
                }
              >
                {block.items.map((p, idx) => (
                  <Phone
                    key={`${block.title}-${idx}`}
                    gradient={p.g}
                    views={p.v}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] py-[100px]">
        <div className="flex w-max animate-scroll-slow gap-20 whitespace-nowrap">
          {[0, 1].map((dup) =>
            bigNumberItems.map((item, i) => (
              <div
                key={`${dup}-${i}`}
                className="flex items-baseline gap-4"
              >
                <span
                  className={
                    item.acc
                      ? "big-num-gradient-acc text-[clamp(72px,9vw,140px)] font-black leading-none tracking-[-0.05em]"
                      : "big-num-gradient text-[clamp(72px,9vw,140px)] font-black leading-none tracking-[-0.05em]"
                  }
                >
                  {item.num}
                </span>
                <span className="text-[clamp(15px,1.2vw,20px)] font-medium text-[var(--text-dim)]">
                  {item.label}
                </span>
              </div>
            )),
          )}
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-8 md:py-[120px]">
        <div className="mx-auto max-w-[var(--max-w)]">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Personal Brands
          </div>
          <h2 className="mb-6 max-w-[900px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Brands we&apos;ve <span className="serif accent-text">built.</span>
          </h2>
          <p className="mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Live handles. Real numbers.
          </p>
          <Reveal>
            <div className="grid grid-cols-2 gap-3 min-[969px]:grid-cols-4">
              {brands.map((b) => (
                <div
                  key={b.handle}
                  style={
                    { "--brand-color": b.color } as CSSProperties
                  }
                  className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-6 py-7 transition-[transform,border-color] duration-300 before:absolute before:left-0 before:right-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-[var(--brand-color,var(--accent))] before:transition-transform before:duration-500 before:ease-out before:content-[''] hover:-translate-y-[3px] hover:border-[var(--brand-color,var(--accent))] hover:before:scale-x-100"
                >
                  <div className="mono mb-2 text-[13px] font-medium text-[var(--accent)]">
                    {b.handle}
                  </div>
                  <div className="mb-4 text-base font-semibold tracking-[-0.01em]">
                    {b.name}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[28px] font-extrabold leading-none tracking-[-0.03em]">
                      {b.stat}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.08em] text-[var(--text-dim)]">
                      {b.statLabel}
                    </span>
                  </div>
                  <div className="mt-3.5 border-t border-[var(--border)] pt-3.5 text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                    {b.platform}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[120px]">
        <div className="mx-auto max-w-[var(--max-w)]">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            YouTube Management
          </div>
          <h2 className="mb-6 max-w-[900px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Channels under our
            <br />
            <span className="serif accent-text">full ownership.</span>
          </h2>
          <p className="mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            From scripting to thumbnails to SEO — we run these channels end to
            end.
          </p>
          <Reveal>
            <div className="grid grid-cols-1 gap-3.5 min-[769px]:grid-cols-3">
              {ytChannels.map((ch) => (
                <div
                  key={ch.name}
                  className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-[3px] hover:border-[var(--border-strong)]"
                >
                  <div
                    className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white ${ch.logo}`}
                  >
                    {ch.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 truncate text-[15px] font-semibold">
                      {ch.name}
                    </div>
                    <div className="mono text-xs font-medium text-[var(--accent)]">
                      {ch.subs}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-8 md:py-[120px]">
        <div className="mx-auto max-w-[var(--max-w)]">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Success Stories
          </div>
          <h2 className="mb-6 max-w-[900px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Real founders.
            <br />
            Real receipts.{" "}
            <span className="serif accent-text">No mockups.</span>
          </h2>
          <p className="mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Six brands. Six different starting points. One thing in common —
            every single one moved.
          </p>
          <Reveal>
            <div className="grid grid-cols-1 gap-4 min-[969px]:grid-cols-3">
              {stories.map((s) => (
                <div
                  key={s.handle}
                  className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-2)] p-8 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[rgba(124,92,255,0.3)]"
                >
                  <div className="mono mb-1 text-[13px] font-medium text-[var(--accent)]">
                    {s.handle}
                  </div>
                  <div className="mb-6 text-lg font-bold tracking-[-0.01em]">
                    {s.name}
                  </div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex-1 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5">
                      <span className="mb-1.5 block text-2xl font-extrabold leading-none tracking-[-0.03em]">
                        {s.before}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                        {s.beforeLabel}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-[var(--accent)]">
                      →
                    </span>
                    <div className="flex-1 rounded-[var(--radius)] border border-[rgba(124,92,255,0.3)] bg-[var(--accent-dim)] px-4 py-3.5">
                      <span className="mb-1.5 block text-2xl font-extrabold leading-none tracking-[-0.03em] text-[var(--accent)]">
                        {s.after}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                        {s.afterLabel}
                      </span>
                    </div>
                  </div>
                  <ul className="flex list-none flex-col gap-2 border-t border-[var(--border)] pt-5">
                    {s.tactics.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2.5 text-[13.5px] leading-[1.45] text-[var(--text-dim)]"
                      >
                        <span className="shrink-0 text-[var(--accent)]">→</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[120px]">
        <div className="mx-auto max-w-[var(--max-w)]">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Content Redesign
          </div>
          <h2 className="mb-6 max-w-[900px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            A <span className="serif accent-text">redesign</span>
            <br />
            changes everything.
          </h2>
          <p className="mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            What founders looked like before us — and after. The hooks, the
            cuts, the positioning. All upgraded.
          </p>
          <Reveal>
            <div className="grid grid-cols-1 gap-4 min-[769px]:grid-cols-2">
              <div className="overflow-hidden rounded-[var(--radius-xl)] bg-[#f5f5f5] px-8 py-12 text-[#0a0a0a] min-[769px]:px-10 min-[769px]:py-12">
                <div className="mono mb-8 inline-block rounded-full bg-[#1a1a1a] px-3.5 py-1.5 text-xs text-white">
                  BEFORE US
                </div>
                <ul className="flex list-none flex-col gap-3.5">
                  {beforeList.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-[15px] leading-normal before:flex before:h-[22px] before:w-[22px] before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-[#1a1a1a] before:text-[11px] before:font-bold before:text-[#f5f5f5] before:content-['✗']"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg-2)] px-8 py-12 min-[769px]:px-10 min-[769px]:py-12">
                <div className="mono mb-8 inline-block rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-xs text-white">
                  AFTER US
                </div>
                <ul className="flex list-none flex-col gap-3.5">
                  {afterList.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-[15px] leading-normal text-[var(--text)] before:flex before:h-[22px] before:w-[22px] before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-[var(--accent)] before:text-[11px] before:font-bold before:text-white before:content-['✓']"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 text-center md:px-8 md:py-[130px]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(124,92,255,0.1),transparent_60%)] blur-[50px]"
          aria-hidden
        />
        <div className="relative z-[2] mx-auto max-w-[900px]">
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Ready to talk?
          </div>
          <h2 className="mb-8 text-[clamp(40px,6vw,96px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Let&apos;s build <span className="serif accent-text">your</span>
            <br />
            content engine.
          </h2>
          <p className="mx-auto mb-10 max-w-[540px] text-lg text-[var(--text-dim)]">
            Limited spots. We only work with brands we can actually move.
          </p>
          <Link
            href="/#inquire"
            className="group inline-flex items-center gap-3 rounded-full border-none bg-[var(--accent)] px-7 py-4 text-[15px] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--accent-glow)]"
          >
            Book a Free 1:1 Call{" "}
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black text-[11px] text-[var(--accent)] transition-transform duration-[250ms] group-hover:-rotate-45">
              →
            </span>
          </Link>
        </div>
      </section>

      <footer className="overflow-hidden border-t border-[var(--border)] bg-[var(--bg-2)] px-5 pb-8 pt-16 md:px-8 md:pb-10 md:pt-20">
        <div className="mx-auto max-w-[var(--max-w)]">
          <div className="footer-mega-text mb-14 select-none text-center text-[clamp(48px,12vw,200px)] font-extrabold leading-[0.85] tracking-[-0.04em]">
            Content Viral Media
          </div>
          <div className="grid grid-cols-2 gap-8 border-b border-[var(--border)] pb-14 min-[769px]:grid-cols-[2fr_1fr_1fr_1fr] min-[769px]:gap-12">
            <div className="min-[769px]:col-auto">
              <h3 className="mb-4 flex items-center gap-2.5 text-xl font-bold tracking-[-0.02em]">
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--accent)] text-[13px] font-extrabold text-white">
                  CV
                </span>{" "}
                Content Viral Media
              </h3>
              <p className="mb-6 max-w-[360px] text-sm leading-relaxed text-[var(--text-dim)]">
                The remote content team for founders &amp; creators who refuse
                to stay unknown. Systems, not posts. Built by Garvit Vijay.
              </p>
              <div className="flex gap-2.5">
                <a
                  href="https://instagram.com/growithgarvit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[13px] font-bold text-[var(--text-dim)] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  IG
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[13px] font-bold text-[var(--text-dim)] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  in
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[13px] font-bold text-[var(--text-dim)] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  YT
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[13px] font-bold text-[var(--text-dim)] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  𝕏
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                Services
              </h4>
              <ul className="flex list-none flex-col gap-3">
                {[
                  "Personal Branding",
                  "IG & LinkedIn Mgmt",
                  "Video Editing",
                  "Podcast Repurposing",
                  "UGC Creation",
                  "YouTube Management",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/#services"
                      className="text-sm text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                Company
              </h4>
              <ul className="flex list-none flex-col gap-3">
                <li>
                  <Link
                    href="/#about"
                    className="text-sm text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    About Garvit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#process"
                    className="text-sm text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-sm text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#results"
                    className="text-sm text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#inquire"
                    className="text-sm text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-dim)]">
                Contact
              </h4>
              <ul className="flex list-none flex-col gap-3 text-sm text-[var(--text)]">
                <li>
                  <a
                    href="mailto:Garvit@contentviralmedia.com"
                    className="text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    Garvit@contentviralmedia.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918890603113"
                    className="text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    +91 8890 603 113
                  </a>
                </li>
                <li>Jaipur, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[var(--text-muted)]">
            <div>© 2026 Content Viral Media · Built by Garvit Vijay</div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--text)]"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--text)]"
              >
                Terms
              </a>
              <Link
                href="/#inquire"
                className="text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--text)]"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
