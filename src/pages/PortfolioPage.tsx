import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@/components/RouterLink";
import { Nav } from "@/components/Nav";
import { PageMeta } from "@/components/PageMeta";
import { ResultsMarquee } from "@/components/home/sections/ResultsMarquee";
import BeforeAfterSection from "@/components/portfolio/BeforeAfterSection";
import { SiteFooter } from "@/components/SiteFooter";

function publicVideoUrl(filename: string) {
  return `/${encodeURIComponent(filename)}`;
}

const phoneBase =
  "group relative aspect-[9/19.5] cursor-pointer overflow-hidden rounded-[18px] border-[3px] border-[#181818] transition-[transform,box-shadow] duration-300 ease-out after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.6)]";

const playBase =
  "absolute left-1/2 top-1/2 z-[2] flex h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[rgba(255,255,255,0.4)] bg-[rgba(0,0,0,0.65)] text-xs text-white backdrop-blur-[4px] transition-all duration-300 group-hover:scale-[1.15] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]";

const viewsBase =
  "absolute bottom-2.5 left-2 right-2 z-[2] rounded-md bg-[rgba(0,0,0,0.7)] px-2 py-1 text-center text-[10px] font-semibold text-[var(--text)] backdrop-blur-[6px]";

function PortfolioVideoCard({
  file,
  views,
}: {
  file: string;
  views: string;
}) {
  const tileRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [hasError, setHasError] = useState(false);
  const src = publicVideoUrl(file);

  useEffect(() => {
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(hoverMq.matches);
    update();
    hoverMq.addEventListener("change", update);
    return () => hoverMq.removeEventListener("change", update);
  }, []);

  const pause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  }, []);

  const play = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !shouldLoad || hasError) return;
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, [shouldLoad, hasError]);

  useEffect(() => {
    const el = tileRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else if (!canHover) {
          pause();
        }
      },
      { rootMargin: "160px", threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pause, canHover]);

  const handleTap = (e: React.MouseEvent) => {
    if (canHover) return;
    e.stopPropagation();
    if (isPlaying) pause();
    else void play();
  };

  return (
    <div
      ref={tileRef}
      className={`${phoneBase} bg-[#0a0a0a] md:cursor-default`}
      onMouseEnter={canHover ? play : undefined}
      onMouseLeave={canHover ? pause : undefined}
      onClick={handleTap}
      role={canHover ? undefined : "button"}
      aria-label={canHover ? undefined : isPlaying ? "Pause video" : "Play video"}
    >
      <div
        aria-hidden
        className={`absolute inset-0 z-0 bg-gradient-to-br from-[#1a1035] via-[#3a2470] to-[#14082e] transition-opacity duration-500 ease-out ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldLoad && !hasError && (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-500 ease-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setVideoReady(true)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
        />
      )}

      <div
        className={`${playBase} ease-out ${
          isPlaying
            ? "pointer-events-none scale-90 opacity-0"
            : "opacity-100 group-hover:scale-[1.15] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]"
        }`}
      >
        ▶
      </div>
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
      { file: "download (1).mp4", v: "" },
      { file: "download (2) (1).mp4", v: "" },
      { file: "download (3).mov", v: "" },
      { file: "download (4).mov", v: "" },
    ],
  },
  {
    title: "Storytelling",
    count: "04 SAMPLES",
    three: false,
    items: [
      { file: "Untitled Design (5) (1)(1).mp4", v: "" },
      { file: "Untitled Design (6).mp4", v: "" },
      { file: "Download (5).mp4", v: "" },
      { file: "Untitled Design (7).mp4", v: "" },
    ],
  },
  {
    title: "Meta ads",
    count: "03 SAMPLES",
    three: true,
    items: [
      { file: "Untitled Design (8).mp4", v: "" },
      { file: "Untitled Design (9).mp4", v: "" },
      { file: "Untitled Design (10).mp4", v: "CTR 5.1x" },
    ],
  },
  {
    title: "Street style interviews",
    count: "03 SAMPLES",
    three: true,
    items: [
      { file: "Untitled Design (11).mp4", v: "1.8M views" },
      { file: "Download (6).mp4", v: "920K views" },
      { file: "Untitled design (2) (1).mp4", v: "1.3M views" },
    ],
  },
  {
    title: "Podcast & long-form",
    count: "04 SAMPLES",
    three: false,
    items: [
      { file: "videoplayback (1).webm", v: "68% retention" },
      { file: "videoplayback (4).webm", v: "890K views" },
      { file: "videoplayback (5).webm", v: "1.2M views" },
      { file: "videoplayback (6).webm", v: "540K views" },
    ],
  },
  {
    title: "AI Voiceover Reels",
    count: "03 SAMPLES",
    three: true,
    items: [
      { file: "Download (9).mp4", v: "1.6M views" },
      { file: "download (7) (1) (1).mp4", v: "2.3M views" },
      { file: "Download (8).mp4", v: "980K views" },
    ],
  },
] as const;

export default function PortfolioPage() {
  return (
    <>
      <PageMeta
        title="Portfolio | Content Viral Media"
        description="The full Content Viral Media portfolio: best edits and real results from our content work."
      />
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
            A complete look at what we ship every month: best edits and the
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
                  <PortfolioVideoCard
                    key={`${block.title}-${idx}`}
                    file={p.file}
                    views={p.v}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] py-10 md:py-14">
        <ResultsMarquee />
      </section>

      <BeforeAfterSection />

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

      <SiteFooter />
    </>
  );
}
