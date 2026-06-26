import { LongFormVideoCard } from "./LongFormVideoCard";

function publicVideoUrl(filename: string) {
  return `/${encodeURIComponent(filename)}`;
}

const SHOWCASE = [
  {
    id: "long-form-1",
    src: publicVideoUrl("Untitled Design (3) (1)(1).mp4"),
  },
  {
    id: "long-form-2",
    src: publicVideoUrl("download.mp4"),
  },
  {
    id: "long-form-3",
    src: publicVideoUrl("Untitled design (4).mov"),
  },
] as const;

function ScribbleAccent() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -top-5 right-0 h-6 w-14 text-[#a78bfa] md:-top-6 md:h-7 md:w-16"
      viewBox="0 0 64 28"
      fill="none"
    >
      <path
        d="M4 20C14 8 22 6 34 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 12C38 4 48 4 58 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 24C28 18 40 20 52 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LongFormSection() {
  return (
    <section className="relative bg-[var(--bg)] px-5 py-20 md:px-8 md:py-[120px]">
      <div className="mx-auto w-full max-w-[min(100%,1580px)]">
        <h2 className="mb-4 max-w-[900px] text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
          Long form that sets{" "}
          <span className="relative inline-block">
            <ScribbleAccent />
            <span className="serif accent-text">the standard</span>
          </span>
        </h2>
        <p className="mb-10 max-w-[720px] text-[clamp(16px,1.2vw,20px)] leading-relaxed text-[var(--text-dim)] md:mb-12">
          Podcast trailers. YouTube edits. B2B videos. Brand films.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {SHOWCASE.map((item) => (
            <LongFormVideoCard key={item.id} src={item.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
