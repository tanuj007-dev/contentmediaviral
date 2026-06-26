import { useCallback, useEffect, useRef, useState } from "react";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?w=600&h=450&auto=format&fit=crop&q=80`;

const TIMELINE = [
  {
    id: "01",
    layout: "text-center" as const,
    number: "01",
    title: "Personal Branding for Founders",
    body: "Positioning, scripting, and authority-building content.",
    image: UNSPLASH("photo-1573496359142-b8d87734a5a2"),
  },
  {
    id: "02",
    layout: "media-left" as const,
    number: "02",
    title: "Instagram & LinkedIn Management",
    body: "End-to-end posting, captions, engagement, growth.",
    image: UNSPLASH("photo-1432888498266-38ffec3eaf0a"),
  },
  {
    id: "03",
    layout: "media-right" as const,
    number: "03",
    title: "Video Editing Services",
    body: "Cinematic, storytelling, meta ads, UGC, AI voiceover.",
    image: UNSPLASH("photo-1516035069371-29a1b244cc32"),
  },
  {
    id: "04",
    layout: "media-left" as const,
    number: "04",
    title: "Podcast Repurposing",
    body: "Full edits, viral clips, carousels, newsletters from one episode.",
    image: UNSPLASH("photo-1765894103859-5a063ecaa4bc"),
  },
  {
    id: "05",
    layout: "media-right" as const,
    number: "05",
    title: "UGC Creation",
    body: "Employee-led, native, conversion-focused content.",
    image: UNSPLASH("photo-1529156069898-49953e39b3ac"),
  },
  {
    id: "06",
    layout: "media-left" as const,
    number: "06",
    title: "YouTube Channel Management",
    body: "Scripts, edits, thumbnails, SEO, full channel ownership.",
    image: UNSPLASH("photo-1611224923853-80b023f02d71"),
  },
] as const;

type TimelineItem = (typeof TIMELINE)[number];

function getItemImage(item: TimelineItem) {
  if (!("image" in item) || !item.image) return null;
  return {
    src: item.image,
    fit: ("imageFit" in item ? item.imageFit : "cover") as "cover" | "contain",
  };
}

const ANIM = "transition-all duration-700 ease-out will-change-[opacity,transform]";

function motionStyle(
  visible: boolean,
  side: "left" | "right" | "center",
  mobile: boolean,
  delay = 0,
): React.CSSProperties {
  const base = { transitionDelay: visible ? `${delay}ms` : "0ms" };
  if (visible) {
    return { ...base, opacity: 1, transform: "translate(0, 0)" };
  }
  if (mobile) {
    return { ...base, opacity: 0, transform: "translateY(20px)" };
  }
  if (side === "left") {
    return { ...base, opacity: 0, transform: "translateX(-48px)" };
  }
  if (side === "right") {
    return { ...base, opacity: 0, transform: "translateX(48px)" };
  }
  return { ...base, opacity: 0, transform: "translateY(28px)" };
}

function dotStyle(visible: boolean): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "scale(1)" : "scale(0)",
    transitionDelay: visible ? "120ms" : "0ms",
  };
}

export default function ServicesTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineProgress, setLineProgress] = useState(0);
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  const setRowRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      rowRefs.current[i] = el;
    },
    [],
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const h = section.offsetHeight;
        if (h <= 0) return;
        const scrolled = window.scrollY - top + window.innerHeight * 0.15;
        setLineProgress(Math.min(1, Math.max(0, scrolled / h)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rowRefs.current.forEach((node, i) => {
      if (!node) return;
      const obs = new IntersectionObserver(
        ([entry]) => setVisible((p) => ({ ...p, [i]: entry.isIntersecting })),
        { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
      );
      obs.observe(node);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 scroll-mt-28 md:px-8 md:py-[130px]"
      aria-label="Services timeline"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(124,92,255,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[var(--max-w)]">
        <header className="mb-16 md:mb-20">
          <p className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Services
          </p>
          <h2 className="mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em] text-white">
            Let your brand&apos;s{" "}
            <span className="serif accent-text">vision</span>
            <br />
            become reality.
          </h2>
          <p className="max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Six services. One unified content engine.
          </p>
        </header>

        <div className="flex flex-col gap-32 md:gap-40 lg:gap-44">
          <TimelineRow
            key={TIMELINE[0].id}
            item={TIMELINE[0]}
            index={0}
            visible={!!visible[0]}
            isMobile={isMobile}
            rowRef={setRowRef(0)}
          />

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-4 top-0 z-[1] h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--accent)] ring-4 ring-[rgba(124,92,255,0.15)] md:left-1/2"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-4 top-0 z-0 w-px bg-white/[0.08] md:left-1/2"
            >
              <div
                className="w-full bg-gradient-to-b from-[var(--accent)] to-[#a855f7] transition-[height] duration-200 ease-out shadow-[0_0_12px_rgba(124,92,255,0.5)]"
                style={{ height: `${lineProgress * 100}%` }}
              />
            </div>

            <div className="flex flex-col gap-32 md:gap-40 lg:gap-44">
              {TIMELINE.slice(1).map((item, index) => (
                <TimelineRow
                  key={item.id}
                  item={item}
                  index={index + 1}
                  visible={!!visible[index + 1]}
                  isMobile={isMobile}
                  rowRef={setRowRef(index + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  item,
  visible,
  isMobile,
  rowRef,
}: {
  item: TimelineItem;
  index: number;
  visible: boolean;
  isMobile: boolean;
  rowRef: (el: HTMLDivElement | null) => void;
}) {
  const itemImage = getItemImage(item);
  const isCenter = item.layout === "text-center";
  const isMediaRight = item.layout === "media-right";
  const rowPad = isCenter ? "" : "pl-10 md:pl-0";

  return (
    <div
      ref={rowRef}
      className={`relative isolate grid grid-cols-1 items-center gap-10 py-6 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:gap-x-10 md:py-8 lg:gap-x-16 ${rowPad}`}
    >
      {isCenter && (
        <div
          className={`relative z-[1] col-span-1 flex w-full min-w-0 flex-col items-center gap-8 md:col-span-3 md:gap-10 ${ANIM}`}
          style={motionStyle(visible, "center", isMobile)}
        >
          {itemImage ? (
            <ServiceImage
              src={itemImage.src}
              alt={item.title}
              fit={itemImage.fit}
            />
          ) : null}
          <div className="relative z-[1] w-full max-w-[520px] rounded-2xl border border-white/[0.08] bg-[var(--bg-2)] px-6 py-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)] md:px-10 md:py-9">
            <TimelineText item={item} align="center" featured />
          </div>
        </div>
      )}

      {isMediaRight && (
        <>
          <div
            className={`order-2 min-w-0 md:order-1 md:flex md:justify-end md:pr-6 lg:pr-10 ${ANIM}`}
            style={motionStyle(visible, "left", isMobile)}
          >
            <div className="w-full max-w-[300px] md:ml-auto md:text-right">
              <TimelineText item={item} align="right" />
            </div>
          </div>

          <div className="order-3 hidden min-w-0 items-center justify-center md:order-2 md:flex">
            <SpineDot visible={visible} inGrid />
          </div>

          <div
            className={`order-1 min-w-0 md:order-3 md:flex md:justify-start md:pl-6 lg:pl-10 ${ANIM}`}
            style={motionStyle(visible, "right", isMobile, 80)}
          >
            {itemImage ? (
              <ServiceImage
                src={itemImage.src}
                alt={item.title}
                fit={itemImage.fit}
              />
            ) : null}
          </div>
        </>
      )}

      {item.layout === "media-left" && (
        <>
          <div
            className={`min-w-0 md:flex md:justify-end md:pr-6 lg:pr-10 ${ANIM}`}
            style={motionStyle(visible, "left", isMobile)}
          >
            {itemImage ? (
              <ServiceImage
                src={itemImage.src}
                alt={item.title}
                fit={itemImage.fit}
              />
            ) : null}
          </div>

          <div className="hidden min-w-0 items-center justify-center md:flex">
            <SpineDot visible={visible} inGrid />
          </div>

          <div
            className={`min-w-0 md:flex md:justify-start md:pl-6 lg:pl-10 ${ANIM}`}
            style={motionStyle(visible, "right", isMobile, 80)}
          >
            <div className="w-full max-w-[300px]">
              <TimelineText item={item} align="left" />
            </div>
          </div>
        </>
      )}

      {!isCenter && (
        <span
          aria-hidden
          className="absolute left-4 top-6 -translate-x-1/2 font-mono text-[10px] font-semibold text-[var(--accent)] md:hidden"
        >
          {item.number}
        </span>
      )}
    </div>
  );
}

function SpineDot({
  visible,
  className,
  inGrid = false,
}: {
  visible: boolean;
  className?: string;
  inGrid?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`z-[1] h-3 w-3 shrink-0 rounded-full bg-[var(--accent)] ring-4 ring-[rgba(124,92,255,0.15)] ${ANIM} ${
        inGrid ? "relative mx-auto block" : "absolute left-4 -translate-x-1/2 md:left-1/2"
      } ${className ?? ""}`}
      style={dotStyle(visible)}
    />
  );
}

function TimelineText({
  item,
  align,
  featured = false,
}: {
  item: TimelineItem;
  align: "left" | "right" | "center";
  featured?: boolean;
}) {
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-left md:text-right"
        : "text-left";

  const bodyClass =
    align === "center"
      ? "mx-auto max-w-[36ch]"
      : align === "right"
        ? "md:ml-auto md:max-w-[32ch]"
        : "max-w-[32ch]";

  return (
    <div className={alignClass}>
      <span
        className={`mono mb-5 inline-flex items-center justify-center rounded-full border font-semibold ${
          featured
            ? "h-9 w-9 border-[var(--accent)]/40 bg-[var(--accent-dim)] text-xs text-[var(--accent)]"
            : "mb-4 h-7 min-w-[2rem] border-white/10 bg-white/[0.04] px-2.5 text-[11px] text-[var(--text-muted)]"
        }`}
      >
        {item.number}
      </span>
      <h3
        className={`mb-4 font-bold leading-snug tracking-[-0.02em] text-white ${
          featured
            ? "text-[clamp(22px,2.5vw,34px)]"
            : "text-[clamp(18px,2vw,26px)]"
        }`}
      >
        {item.title}
      </h3>
      <p className={`text-[15px] leading-[1.75] text-[var(--text-dim)] md:text-[16px] ${bodyClass}`}>
        {item.body}
      </p>
    </div>
  );
}

function ServiceImage({
  src,
  alt,
  fit = "cover",
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className="group mx-auto w-full max-w-[300px] shrink-0 overflow-hidden rounded-2xl border border-[rgba(124,92,255,0.35)] bg-[var(--surface)] shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-[transform,box-shadow] duration-500 hover:shadow-[0_20px_56px_rgba(124,92,255,0.15)]">
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          decoding="async"
          className={`aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.03] ${
            fit === "contain"
              ? "bg-black object-contain object-top"
              : "object-cover"
          }`}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </div>
  );
}
