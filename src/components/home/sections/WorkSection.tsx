import { Link } from "@/components/RouterLink";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

function publicVideoUrl(filename: string) {
  return `/${encodeURIComponent(filename)}`;
}

const WORK = [
  {
    id: "data-room",
    file: "Your data room should tell your story for you. Include the right documents and evidence so an in.mp4",
    
    views: "Talking Head videos",
  },
  {
    id: "investor-pitch",
    file: "You nailed the pitch. The investor seemed interested. And then\u2026 nothing. Here\u2019s why investors gh.mp4",
     
    views: "AI Voiceovers Videos",
  },
  {
    id: "founder-story",
    file: "Started at 13. Called \u201Ctoo young.\u201DSold a company before most picked their stream.Built before th.mp4",
   
    views: "Storytelling Videos",
  },
  {
    id: "cinematic-reel",
    file: "Untitled design (2) (1).mp4",
   
    views: "Street Style Interviews",
  },
] as const;

type WorkItem = (typeof WORK)[number];

function WorkVideoCard({ item }: { item: WorkItem }) {
  const tileRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [hasError, setHasError] = useState(false);
  const src = publicVideoUrl(item.file);

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

  const handleThumbClick = (e: React.MouseEvent) => {
    if (canHover) return;
    e.preventDefault();
    e.stopPropagation();
    if (isPlaying) pause();
    else void play();
  };

  return (
    <div ref={tileRef} className="min-w-0">
      <Link
        href="/portfolio"
        className="work-tile group block no-underline"
        onMouseEnter={canHover ? play : undefined}
        onMouseLeave={canHover ? pause : undefined}
        onFocus={canHover ? play : undefined}
        onBlur={canHover ? pause : undefined}
      >
        <div
          className="work-thumb relative aspect-[9/16] max-h-[320px] cursor-pointer overflow-hidden rounded-[14px] border-2 border-[#181818] bg-[#0a0a0a] sm:max-h-none sm:rounded-[18px] sm:border-[3px] md:cursor-default"
          onClick={handleThumbClick}
          role={canHover ? undefined : "button"}
          aria-label={canHover ? undefined : isPlaying ? "Pause video" : "Play video"}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-[#1a1035] via-[#3a2470] to-[#14082e]"
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
              className="relative z-[1] h-full w-full object-cover"
              onPlaying={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
            />
          )}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]"
          />

          <div
            className={`play absolute left-1/2 top-1/2 z-[3] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.4)] bg-[rgba(0,0,0,0.65)] text-[10px] text-white backdrop-blur-sm transition-all duration-300 sm:h-10 sm:w-10 sm:text-xs ${
              isPlaying
                ? "scale-90 opacity-0"
                : "opacity-100 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]"
            }`}
          >
            ▶
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-16 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="work-tile-info mt-2 flex justify-center sm:mt-3">
          <span className="work-tile-views text-center text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] sm:text-[11px]">
            {item.views}
          </span>
        </div>
      </Link>
    </div>
  );
}

function AnimatedWorkTile({
  item,
  index,
  disableScrollFx,
  leftX,
  rightX,
  opacity,
}: {
  item: WorkItem;
  index: number;
  disableScrollFx: boolean;
  leftX: MotionValue<number>;
  rightX: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  return (
    <motion.div
      className="min-w-0"
      style={{
        x: disableScrollFx ? 0 : index < 2 ? leftX : rightX,
        opacity: disableScrollFx ? 1 : opacity,
      }}
    >
      <WorkVideoCard item={item} />
    </motion.div>
  );
}

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [disableScrollFx, setDisableScrollFx] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setDisableScrollFx(mobileMq.matches || motionMq.matches);
    };

    update();
    mobileMq.addEventListener("change", update);
    motionMq.addEventListener("change", update);

    return () => {
      mobileMq.removeEventListener("change", update);
      motionMq.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-x-hidden px-4 py-16 sm:px-5 md:px-8 md:py-20 lg:py-[130px]"
      id="work"
    >
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <div className="work-header mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:gap-6 md:flex-row md:items-end">
          <div className="min-w-0">
            <SectionEyebrow>Selected Work</SectionEyebrow>

            <h2 className="section-title max-w-[940px] text-[clamp(28px,7vw,76px)] font-extrabold leading-[1.05] tracking-[-0.035em] sm:leading-none">
              A glimpse of what we{" "}
              <span className="serif accent-text">ship.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="btn btn-secondary group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full border border-[var(--border-strong)] px-6 py-3.5 text-[14px] font-semibold text-[var(--text)] no-underline hover:bg-[var(--surface)] sm:w-fit sm:justify-start sm:px-7 sm:py-4 sm:text-[15px]"
          >
            View Full Portfolio{" "}
            <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--text)] text-[11px] text-black transition-transform group-hover:-rotate-45">
              →
            </span>
          </Link>
        </div>

        <div className="work-preview reveal grid grid-cols-2 gap-2.5 overflow-hidden sm:gap-3.5 lg:grid-cols-4">
          {WORK.map((item, index) => (
            <AnimatedWorkTile
              key={item.id}
              item={item}
              index={index}
              disableScrollFx={disableScrollFx}
              leftX={leftX}
              rightX={rightX}
              opacity={opacity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
