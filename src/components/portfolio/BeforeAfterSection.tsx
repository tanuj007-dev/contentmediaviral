import { useEffect, useRef } from "react";
import { Link } from "@/components/RouterLink";
import { Reveal } from "@/components/Reveal";
import {
  FaArrowRight,
  FaComment,
  FaHeart,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";

const CASES = [
  {
    title: "Coffee Brand Reel",
    beforeDesc: "Basic product showcase with minimal engagement",
    afterDesc: "Cinematic storytelling, trending audio & strong hook",
    afterOverlay: "Brewed to Perfection",
    beforeVideo: "download (1).mp4",
    afterVideo: "download (2) (1).mp4",
    duration: "0:15",
    before: { views: "1.2K", likes: "48", comments: "3" },
    after: { views: "128K", likes: "6.4K", comments: "312" },
    growth: "+10.6x",
  },
  {
    title: "Skincare Tip Reel",
    beforeDesc: "Talking head with low retention and weak hook",
    afterDesc: "Hook in 1s, fast cuts, text overlays & value-packed content",
    afterOverlay: "3 Skincare Tips You Need to Know",
    beforeVideo: "Untitled Design (5) (1)(1).mp4",
    afterVideo: "Download (5).mp4",
    duration: "0:22",
    before: { views: "2.1K", likes: "72", comments: "6" },
    after: { views: "94K", likes: "7.1K", comments: "278" },
    growth: "+44.7x",
  },
  {
    title: "Fitness Reel",
    beforeDesc: "Low-energy edit with no strong narrative",
    afterDesc: "Motivational hook, dynamic edits & trending music",
    afterOverlay: "Discipline Today Strength Tomorrow",
    beforeVideo: "videoplayback (1).webm",
    afterVideo: "videoplayback (4).webm",
    duration: "0:18",
    before: { views: "1.8K", likes: "55", comments: "4" },
    after: { views: "156K", likes: "11.2K", comments: "520" },
    growth: "+86.6x",
  },
] as const;

const ROW_TEMPLATE =
  "min-[1100px]:grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)_92px] min-[1100px]:items-stretch min-[1100px]:gap-5";
const ROW_GRID = `grid grid-cols-1 gap-4 ${ROW_TEMPLATE}`;

function mediaUrl(file: string) {
  return `/${encodeURIComponent(file)}`;
}

function VideoThumb({
  file,
  duration,
  dimmed = false,
  overlay,
}: {
  file: string;
  duration: string;
  dimmed?: boolean;
  overlay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group/thumb relative aspect-[9/16] w-[100px] shrink-0 overflow-hidden rounded-[14px] border border-[var(--border)] bg-black shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover/card:scale-[1.02] sm:w-[112px]"
    >
      <video
        ref={videoRef}
        src={mediaUrl(file)}
        muted
        loop
        playsInline
        preload="metadata"
        className={`h-full w-full object-cover transition-[filter] duration-500 ${
          dimmed ? "saturate-[0.55] brightness-[0.82]" : "saturate-110"
        }`}
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/20 to-transparent p-2 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[10px]">
          {overlay}
        </div>
      )}
      <div className="absolute left-1.5 top-1.5 flex items-center gap-1 rounded-[6px] bg-black/80 px-1.5 py-[3px] text-[8px] font-semibold text-white backdrop-blur-sm">
        <FaInstagram className="text-[7px]" />
        Reel
      </div>
      <div className="absolute bottom-1.5 right-1.5 rounded-[4px] bg-black/85 px-1.5 py-[2px] text-[8px] font-medium text-white">
        {duration}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/50 text-[10px] text-white backdrop-blur-sm">
          ▶
        </span>
      </div>
    </div>
  );
}

function StatsRow({
  views,
  likes,
  comments,
  highlight = false,
}: {
  views: string;
  likes: string;
  comments: string;
  highlight?: boolean;
}) {
  const items = [
    { icon: FaPlay, value: views, label: "Views" },
    { icon: FaHeart, value: likes, label: "Likes" },
    { icon: FaComment, value: comments, label: "Comments" },
  ] as const;

  return (
    <div className="mt-4 flex flex-wrap gap-4 border-t border-[var(--border)] pt-4 sm:gap-6">
      {items.map(({ icon: Icon, value, label }) => (
        <div key={label} className="min-w-[54px]">
          <div className="mb-1 flex items-center gap-1.5">
            <Icon
              className={`text-[10px] ${
                highlight ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
              }`}
            />
            <span
              className={`text-[15px] font-bold leading-none ${
                highlight ? "text-[var(--text)]" : "text-[var(--text-dim)]"
              }`}
            >
              {value}
            </span>
          </div>
          <span className="text-[11px] text-[var(--text-muted)]">{label}</span>
        </div>
      ))}
    </div>
  );
}

function BeforeCard({
  title,
  description,
  video,
  duration,
  stats,
}: {
  title: string;
  description: string;
  video: string;
  duration: string;
  stats: { views: string; likes: string; comments: string };
}) {
  return (
    <article className="group/card flex h-full gap-4 rounded-[16px] border border-[var(--border)] bg-[var(--bg-2)] p-4 transition-[border-color,transform] duration-300 hover:border-white/[0.14] sm:gap-5 sm:p-[18px]">
      <VideoThumb file={video} duration={duration} dimmed />
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-[15px] font-bold leading-tight text-[var(--text)]">
          {title}
        </h3>
        <p className="text-[12px] leading-[1.55] text-[var(--text-dim)] sm:text-[13px]">
          {description}
        </p>
        <StatsRow {...stats} />
      </div>
    </article>
  );
}

function AfterCard({
  title,
  description,
  video,
  duration,
  stats,
  overlay,
}: {
  title: string;
  description: string;
  video: string;
  duration: string;
  stats: { views: string; likes: string; comments: string };
  overlay: string;
}) {
  return (
    <article className="group/card relative flex h-full gap-4 overflow-hidden rounded-[16px] border border-[rgba(124,92,255,0.45)] bg-[var(--bg-2)] p-4 shadow-[0_0_36px_rgba(124,92,255,0.12)] transition-[transform,box-shadow,border-color] duration-300 hover:border-[rgba(124,92,255,0.65)] hover:shadow-[0_0_48px_rgba(124,92,255,0.2)] sm:gap-5 sm:p-[18px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60"
      />
      <VideoThumb file={video} duration={duration} overlay={overlay} />
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-[15px] font-bold leading-tight text-[var(--accent)]">
          {title}
        </h3>
        <p className="text-[12px] leading-[1.55] text-[var(--text-dim)] sm:text-[13px]">
          {description}
        </p>
        <StatsRow {...stats} highlight />
      </div>
    </article>
  );
}

function RowArrow() {
  return (
    <div
      aria-hidden
      className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-[rgba(124,92,255,0.4)] bg-[var(--accent-dim)] text-[12px] text-[var(--accent)] transition-transform duration-300 group-hover/row:scale-110 min-[1100px]:mx-0"
    >
      <FaArrowRight />
    </div>
  );
}

function GrowthBadge({ growth }: { growth: string }) {
  return (
    <aside className="mx-auto flex min-h-[120px] w-full max-w-[200px] flex-col items-center justify-center self-center rounded-[14px] border border-[rgba(124,92,255,0.35)] bg-[var(--accent-dim)] px-3 py-5 text-center transition-[transform,box-shadow] duration-300 group-hover/row:scale-[1.03] group-hover/row:shadow-[0_0_24px_rgba(124,92,255,0.2)] min-[1100px]:mx-0 min-[1100px]:max-w-none min-[1100px]:py-0">
      <span className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
        Growth
      </span>
      <span className="text-[22px] font-extrabold leading-none text-[var(--accent)]">
        {growth}
      </span>
      <span className="mt-1.5 text-[10px] text-[var(--text-muted)]">Views</span>
    </aside>
  );
}

function ComparisonRow({
  item,
  index,
}: {
  item: (typeof CASES)[number];
  index: number;
}) {
  return (
    <Reveal className={`group/row ${ROW_GRID}`}>
      <div className="min-[1100px]:contents">
        <div className="mb-1 flex justify-center min-[1100px]:hidden">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-dim)]">
            Before
          </span>
        </div>
        <BeforeCard
          title={item.title}
          description={item.beforeDesc}
          video={item.beforeVideo}
          duration={item.duration}
          stats={item.before}
        />
        <RowArrow />
        <div className="mb-1 flex justify-center min-[1100px]:hidden">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            After
            <span aria-hidden>✦</span>
          </span>
        </div>
        <AfterCard
          title={item.title}
          description={item.afterDesc}
          video={item.afterVideo}
          duration={item.duration}
          stats={item.after}
          overlay={item.afterOverlay}
        />
        <GrowthBadge growth={item.growth} />
      </div>
      <span
        aria-hidden
        className="mono -mt-1 text-center text-[10px] text-[var(--text-muted)] min-[1100px]:hidden"
      >
        {String(index + 1).padStart(2, "0")} / 03
      </span>
    </Reveal>
  );
}

function SummaryBox() {
  return (
    <Reveal className="overflow-hidden rounded-[16px] border border-[rgba(124,92,255,0.3)] bg-[var(--surface)] shadow-[0_0_40px_rgba(124,92,255,0.08)]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-b border-[var(--border)] p-6 md:border-b-0 md:border-r md:p-8">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-dim)]">
            <span className="text-[15px] leading-none">↘</span>
            Before
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {[
              ["Low Reach", "2K – 3K Avg Views"],
              ["Low Engagement", "<100 Likes"],
              [
                "Minimal Impact",
                "Content gets lost. No real connection.",
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="mb-1 text-[12px] font-semibold text-[var(--text)]">
                  {label}
                </p>
                <p className="text-[13px] leading-relaxed text-[var(--text-dim)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[radial-gradient(ellipse_at_80%_50%,rgba(124,92,255,0.08),transparent_70%)] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
            <span className="text-[15px] leading-none">↗</span>
            After
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {[
              ["High Reach", "90K – 150K Avg Views"],
              ["High Engagement", "6K+ Likes"],
              [
                "Real Impact",
                "Content that connects. Growth that lasts.",
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="mb-1 text-[12px] font-semibold text-[var(--text)]">
                  {label}
                </p>
                <p className="text-[13px] leading-relaxed text-[var(--text-dim)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function BeforeAfterSection() {
  return (
    <section
      id="before-after"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg)] px-5 py-16 md:px-8 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(124,92,255,0.1),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1180px]">
        <Reveal>
          <header className="mb-10 text-center md:mb-12">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
              Before &amp; After
            </p>
            <h2 className="mb-4 text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[var(--text)]">
              Content that transforms. Results that{" "}
              <span className="serif accent-text">speak.</span>
            </h2>
            <p className="mx-auto max-w-[600px] text-[14px] leading-[1.65] text-[var(--text-dim)] md:text-[15px]">
              From forgettable to scroll-stopping. See how strategic content
              turns into real engagement and growth.
            </p>
          </header>
        </Reveal>

        <div className={`mb-5 hidden gap-5 min-[1100px]:grid ${ROW_TEMPLATE}`}>
          <div className="flex justify-center">
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-dim)]">
              Before
            </span>
          </div>
          <div />
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              After
              <span aria-hidden className="text-[10px]">
                ✦
              </span>
            </span>
          </div>
          <div />
        </div>

        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:gap-7">
          {CASES.map((item, index) => (
            <ComparisonRow key={item.title} item={item} index={index} />
          ))}
        </div>

        <SummaryBox />

        <Reveal>
          <footer className="mt-12 text-center md:mt-14">
            <div className="mb-4 flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--accent)] to-[#5c3fd9] text-white shadow-[0_4px_20px_var(--accent-glow)]">
                <FaInstagram className="text-[17px]" />
              </div>
            </div>
            <p className="text-[clamp(16px,2vw,20px)] font-semibold leading-snug text-[var(--text)]">
              Ready to transform your content?
              <br />
              Let&apos;s create results that{" "}
              <span className="serif accent-text">speak.</span>
            </p>
            <Link
              href="/#inquire"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_var(--accent-glow)]"
            >
              Book a Free Call
              <FaArrowRight className="text-[11px]" />
            </Link>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
