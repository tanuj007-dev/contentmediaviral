import { useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";
import {
  FaArrowDown,
  FaArrowRight,
  FaBolt,
  FaChartBar,
  FaClosedCaptioning,
  FaClock,
  FaCog,
  FaDollarSign,
  FaExpand,
  FaInstagram,
  FaLinkedinIn,
  FaPlay,
  FaRedo,
  FaStepForward,
  FaTiktok,
  FaVolumeUp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const WORKFLOWS = [
  {
    title: " ",
    titleHighlights: ["The US Market"],
    hosts: ["", ""],
    video: "videoplayback (4).webm",
    duration: "1:15:20",
    current: "32:45",
    progress: 38,
    clips: [
      { text: "focusing on the 'what'", highlight: "'what'", highlightStyle: "white" as const, views: "12.4K", video: "download (2) (1).mp4" },
      { text: "it's a compound effect", highlight: "compound", highlightStyle: "gold" as const, views: "9.7K", video: "Download (5).mp4" },
      { text: "why timing matters", highlight: "timing", highlightStyle: "gold" as const, views: "15.3K", video: "Untitled Design (11).mp4" },
      { text: "build global from day one", highlight: "global", highlightStyle: "gold" as const, views: "11.1K", video: "Download (6).mp4" },
    ],
  },
  {
    title: "",
    titleHighlights: [""],
    hosts: ["", ""],
    video: "videoplayback (5).webm",
    duration: "58:12",
    current: "18:03",
    progress: 31,
    clips: [
      { text: "your environment shapes you", highlight: "environment", highlightStyle: "gold" as const, views: "11.2K", video: "videoplayback (1).webm" },
      { text: "healing is a daily choice", highlight: "daily", highlightStyle: "gold" as const, views: "14.8K", video: "download (1).mp4" },
      { text: "feel it. process it. release it.", highlight: "process", highlightStyle: "gold" as const, views: "7.6K", video: "Untitled Design (5) (1)(1).mp4" },
      { text: "you can rewire your mind", highlight: "rewire", highlightStyle: "gold" as const, views: "10.3K", video: "Download (9).mp4" },
    ],
  },
] as const;

const BENEFITS = [
  {
    icon: FaChartBar,
    title: "Wider Reach",
    text: "Reach new audiences on every major platform.",
  },    
  {
    icon: FaRedo,
    title: "More Engagement",
    text: "Short-form content drives higher engagement and visibility.",
  },
  {
    icon: FaClock,
    title: "Save Time",
    text: "We handle the editing so you can focus on creating powerful conversations.",
  },
  {
    icon: FaDollarSign,
    title: "Grow Faster",
    text: "More content. More reach. More impact.",
  },
] as const;

const SOCIAL_ICON_CLASS =
  "bg-[rgba(124,92,255,0.2)] text-[#c4a0ff] ring-1 ring-[rgba(168,85,247,0.45)]";

const SOCIALS = [
  { icon: FaYoutube, label: "YouTube Shorts" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaTiktok, label: "TikTok" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaXTwitter, label: "X" },
] as const;

function mediaUrl(file: string) {
  return `/${encodeURIComponent(file)}`;
}

function PanelPill({
  children,
  tone,
}: {
  children: string;
  tone: "left" | "right";
}) {
  return (
    <div className="mb-2.5 flex justify-center sm:mb-3">
      <span
        className={`inline-block rounded-full border bg-[#0a0a0a] px-5 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.16em] sm:text-[9px] ${
          tone === "left"
            ? "border-white/40 text-white"
            : "border-[rgba(168,85,247,0.65)] text-[#c4a0ff] shadow-[0_0_12px_rgba(124,92,255,0.15)]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function HighlightedPhrase({
  text,
  phrase,
  style = "gold",
  className = "",
}: {
  text: string;
  phrase: string;
  style?: "gold" | "white";
  className?: string;
}) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(phrase.toLowerCase());
  if (idx === -1) {
    return <span className={className}>{text}</span>;
  }
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + phrase.length);
  const after = text.slice(idx + phrase.length);
  const highlightClass =
    style === "white"
      ? "font-extrabold text-white"
      : "font-extrabold text-[#facc15]";
  return (
    <span className={className}>
      {before}
      <span className={highlightClass}>{match}</span>
      {after}
    </span>
  );
}

function LongFormPlayer({
  title,
  titleHighlights,
  hosts,
  video,
  duration,
  current,
  progress,
}: {
  title: string;
  titleHighlights: readonly string[];
  hosts: readonly string[];
  video: string;
  duration: string;
  current: string;
  progress: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef.current;
        if (!el) return;
        if (entry.isIntersecting) void el.play().catch(() => undefined);
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-white/20 bg-[#0c0c0c] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={mediaUrl(video)}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div className="absolute inset-x-0 bottom-[52px] flex flex-col items-start p-4 sm:bottom-[54px] sm:p-5">
          <p className="mb-2 max-w-[78%] text-left text-[clamp(11px,1.45vw,16px)] font-extrabold uppercase leading-[1.2] tracking-tight text-white">
            <HighlightedPhrase
              text={title}
              phrase={titleHighlights[0] ?? ""}
              style="gold"
            />
          </p>
          <div className="flex flex-wrap gap-1.5">
            {hosts.map((h) => (
              <span
                key={h}
                className="rounded-full bg-black/55 px-2 py-0.5 text-[7.5px] font-bold uppercase tracking-wide text-white/95 backdrop-blur-sm sm:text-[8px]"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#111] px-3 py-2 sm:px-3.5">
        <div className="mb-1.5 h-[3px] overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[#ff0000]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between gap-2 text-[8.5px] text-white/65 sm:text-[9.5px]">
          <div className="flex items-center gap-2">
            <FaPlay className="text-[9px] text-white" />
            <FaStepForward className="text-[8px] text-white/75" />
            <FaVolumeUp className="text-[9px] text-white/75" />
            <span className="font-medium text-white/90">
              {current} / {duration}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaClosedCaptioning className="text-[9px]" />
            <FaCog className="text-[9px]" />
            <FaExpand className="text-[9px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ClipCard({
  text,
  highlight,
  highlightStyle = "gold",
  views,
  video,
}: {
  text: string;
  highlight: string;
  highlightStyle?: "gold" | "white";
  views: string;
  video: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef.current;
        if (!el) return;
        if (entry.isIntersecting) void el.play().catch(() => undefined);
        else el.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[9/16] w-full overflow-hidden rounded-[9px] border border-white/12 bg-black"
    >
      <video
        ref={videoRef}
        src={mediaUrl(video)}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/15 to-black/35" />
      <div className="absolute left-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-[3px] bg-black/75 text-[6px] text-white sm:h-[17px] sm:w-[17px] sm:text-[7px]">
        <FaInstagram />
      </div>
      <p className="absolute inset-x-1 bottom-[24%] text-center text-[6.5px] font-extrabold uppercase leading-[1.25] tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-[7px]">
        <HighlightedPhrase
          text={text}
          phrase={highlight}
          style={highlightStyle}
        />
      </p>
      <span className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 text-[7px] font-semibold text-white sm:text-[7.5px]">
        <FaPlay className="text-[4px]" />
        {views}
      </span>
    </div>
  );
}

function RepurposedPanel({
  clips,
}: {
  clips: (typeof WORKFLOWS)[number]["clips"];
}) {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-2xl border border-[rgba(168,85,247,0.55)] bg-[#080808] p-2 shadow-[0_0_28px_rgba(124,92,255,0.12)] sm:p-2.5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_100%_90%_at_50%_50%,rgba(124,92,255,0.12),transparent_68%)]"
        />
        <div className="relative grid grid-cols-4 gap-1 sm:gap-1.5">
          {clips.map((clip) => (
            <ClipCard key={clip.text} {...clip} />
          ))}
        </div>
      </div>

      <div className="relative mt-2 flex flex-col items-center sm:mt-3">
        <svg
          aria-hidden
          className="pointer-events-none mb-0.5 h-12 w-full max-w-[300px] text-[#a855f7] sm:max-w-[340px]"
          viewBox="0 0 300 48"
          fill="none"
          preserveAspectRatio="none"
        >
          {[37.5, 112.5, 187.5, 262.5].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1={0}
              x2={x}
              y2={22}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 4"
              strokeLinecap="round"
              opacity="0.6"
            />
          ))}
          <line
            x1={37.5}
            y1={22}
            x2={262.5}
            y2={22}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx={150} cy={22} r={2.25} fill="currentColor" opacity="0.85" />
          <line
            x1={150}
            y1={24}
            x2={150}
            y2={46}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>

        <div className="flex items-center gap-1.5 rounded-full border border-[rgba(168,85,247,0.35)] bg-[#111] px-3 py-2 shadow-[0_4px_20px_rgba(124,92,255,0.2)] sm:gap-2 sm:px-3.5">
          {SOCIALS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md sm:h-8 sm:w-8 ${SOCIAL_ICON_CLASS}`}
              title={label}
            >
              <Icon className="text-[10px] sm:text-[11px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TransitionArrow() {
  return (
    <div className="flex justify-center lg:self-center">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-[2px] shadow-[0_0_28px_rgba(168,85,247,0.7)] sm:h-11 sm:w-11"
        style={{
          background: "linear-gradient(135deg, #7c5cff 0%, #a855f7 50%, #d946ef 100%)",
        }}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#050505]">
          <FaArrowDown className="text-xs text-white sm:text-sm lg:hidden" />
          <FaArrowRight className="hidden text-xs text-white sm:text-sm lg:block" />
        </div>
      </div>
    </div>
  );
}

function WorkflowRow({
  workflow,
}: {
  workflow: (typeof WORKFLOWS)[number];
}) {
  return (
    <Reveal className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_48px_minmax(0,1.15fr)] lg:items-center lg:gap-4 xl:gap-6">
      <div>
        <PanelPill tone="left">Long-form Podcast</PanelPill>
        <LongFormPlayer
          title={workflow.title}
          titleHighlights={workflow.titleHighlights}
          hosts={workflow.hosts}
          video={workflow.video}
          duration={workflow.duration}
          current={workflow.current}
          progress={workflow.progress}
        />
      </div>

      <TransitionArrow />

      <div>
        <PanelPill tone="right">Repurposed Content</PanelPill>
        <RepurposedPanel clips={workflow.clips} />
      </div>
    </Reveal>
  );
}

export default function PodcastRepurposingSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 md:px-8 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,92,255,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1160px]">
        <Reveal>
          <header className="mb-12 text-center md:mb-14">
            <h1 className="mb-4 text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
              One Podcast.{" "}
              <span className="serif accent-text drop-shadow-[0_0_24px_rgba(124,92,255,0.55)]">
                Endless
              </span>{" "}
              Possibilities.
            </h1>
            <p className="mx-auto max-w-[580px] text-[13px] leading-relaxed text-white/55 md:text-[14px]">
              We turn your long-form podcast into high-impact content across
              platforms to maximize reach and engagement.
            </p>
          </header>
        </Reveal>

        <div className="mb-12 flex flex-col gap-8 md:mb-14 md:gap-10">
          {WORKFLOWS.map((workflow) => (
            <WorkflowRow key={workflow.title} workflow={workflow} />
          ))}
        </div>

        <Reveal className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 md:mb-14 md:p-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_0_20px_rgba(124,92,255,0.45)] sm:mb-4 sm:h-11 sm:w-11">
                  <Icon className="text-sm" />
                </div>
                <h3 className="mb-2 text-[15px] font-bold text-white">{title}</h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-dim)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <footer className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_0_16px_rgba(124,92,255,0.4)]">
                <FaBolt className="text-sm" />
              </div>
            </div>
            <p className="text-[clamp(16px,2vw,20px)] font-medium leading-relaxed text-white">
              Ready to maximize your podcast&apos;s potential?
            </p>
            <p className="mt-1 text-[clamp(16px,2vw,20px)] font-medium leading-relaxed text-[var(--text-dim)]">
              Let&apos;s turn your episodes into content that{" "}
              <span className="font-semibold text-[var(--accent)]">
                works everywhere.
              </span>
            </p>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
