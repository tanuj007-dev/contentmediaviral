import { SectionHeader } from "./SectionHeader";

const TESTS = [
  {
    avatar: "bg-gradient-to-br from-[#7c5cff] to-[#ec4899]",
    quote:
      "The video edits stop the scroll. Period. My retention rate doubled within a month. Whatever they're doing, it works.",
    name: "Kritika Sharma",
    role: "@sharmajiinvests · 80K+ followers",
  },
  {
    avatar: "bg-gradient-to-br from-[#6366f1] to-[#06b6d4]",
    quote:
      "They turned my podcast into my biggest acquisition channel. Inbound leads tripled within 90 days. Best money I've spent on content.",
    name: "Himanshu Rajpurohit",
    role: "Founder · Nexera.Health",
  },
  {
    avatar: "bg-gradient-to-br from-[#a78bfa] to-[#f472b6]",
    quote:
      "Honestly thought all agencies were the same — these guys are different. Strategy actually drives the work. Finally.",
    name: "Komal Agarwal",
    role: "Founder · Snackee",
  },
  {
    avatar: "bg-gradient-to-br from-[var(--accent,#7c5cff)] to-[#c084fc]",
    quote:
      "Two hours a week from me. A full month of content from them. If you're a founder still trying to do content yourself, you're losing.",
    name: "Deepak Keewlani",
    role: "Founder · CoreFlex",
  },
  {
    avatar: "bg-gradient-to-br from-[#f72585] to-[#7c5cff]",
    quote:
      "Before them my brand was invisible. Now people DM me about the brand before I open my mouth. That's positioning.",
    name: "Gabe Einhorn",
    role: "Founder · Prays + Vryfyid",
  },
  {
    avatar: "bg-gradient-to-br from-[#06b6d4] to-[#4338ca]",
    quote:
      "I went from posting once a week to 15 pieces a week without lifting a finger. The team understands my voice better than I do.",
    name: "Pankaj Shivnani",
    role: "Marketing Strategist",
  },
] as const;

type TestItem = (typeof TESTS)[number];

// Distribute cards across 3 columns (desktop) and 2 columns (tablet)
const COLUMNS: TestItem[][] = [[], [], []];
const COLUMNS_TABLET: TestItem[][] = [[], []];
TESTS.forEach((t, i) => {
  COLUMNS[i % 3].push(t);
  COLUMNS_TABLET[i % 2].push(t);
});

const ALL_TESTIMONIALS: TestItem[] = [...TESTS];

function TestCard({ t }: { t: TestItem }) {
  return (
    <article className="mb-3 flex flex-col rounded-[16px] border border-white/[0.07] bg-[#111] p-5 sm:rounded-[18px] sm:p-6">
      <p className="mb-4 text-[14px] leading-[1.65] text-zinc-400 sm:mb-5 sm:text-[14.5px] sm:leading-[1.7]">
        {t.quote}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div
          className={`h-10 w-10 shrink-0 rounded-full ${t.avatar}`}
          aria-hidden
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-zinc-500">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeColumn({
  cards,
  durationSecs,
  reverse = false,
  className = "",
}: {
  cards: TestItem[];
  durationSecs: number;
  reverse?: boolean;
  className?: string;
}) {
  // Triple-clone so there's always enough content to fill the viewport
  const items = [...cards, ...cards, ...cards];

  return (
    <div className={`relative min-w-0 flex-1 overflow-hidden ${className}`}>
      {/* Fade top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#0a0a0a] to-transparent sm:h-20" />
      {/* Fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent sm:h-20" />

      {/* Scrolling track */}
      <div
        style={{
          animationName: reverse ? "marquee-up-rev" : "marquee-up",
          animationDuration: `${durationSecs}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform",
        }}
      >
        {items.map((t, i) => (
          <TestCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section relative overflow-hidden px-4 py-16 sm:px-5 md:px-8 md:py-20 lg:py-[130px]">
      {/* Keyframes — single injection, no duplication */}
      <style>{`
        @keyframes marquee-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(calc(-100% / 3)); }
        }
        @keyframes marquee-up-rev {
          0%   { transform: translateY(calc(-100% / 3)); }
          100% { transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee-up"] { animation-play-state: paused !important; }
        }
      `}</style>

      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Founders Talk"
          title={
            <>
              Words from the <span className="serif accent-text">people</span>
              <br />
              we&apos;ve built brands with.
            </>
          }
          subtitle='Real partners we ship with weekly. No anonymous "CEO of company X."'
        />

        {/* Mobile: single scrolling column */}
        <div className="reveal mt-8 flex h-[min(460px,62vh)] gap-3 overflow-hidden sm:mt-10 md:hidden">
          <MarqueeColumn cards={ALL_TESTIMONIALS} durationSecs={28} />
        </div>

        {/* Tablet: two columns */}
        <div className="reveal mt-10 hidden h-[560px] gap-3 overflow-hidden md:flex lg:hidden">
          <MarqueeColumn cards={COLUMNS_TABLET[0]} durationSecs={22} />
          <MarqueeColumn cards={COLUMNS_TABLET[1]} durationSecs={26} reverse />
        </div>

        {/* Desktop: three columns */}
        <div className="reveal mt-10 hidden h-[660px] gap-3 overflow-hidden lg:flex">
          <MarqueeColumn cards={COLUMNS[0]} durationSecs={20} />
          <MarqueeColumn cards={COLUMNS[1]} durationSecs={26} reverse />
          <MarqueeColumn cards={COLUMNS[2]} durationSecs={18} />
        </div>
      </div>
    </section>
  );
}