const STATS = [
  ["100", "M+", "0M+", "Organic Views Generated"],
  ["100", "+", "0+", "Founders & Creators"],
  ["1000", "+", "0+", "Content Pieces Produced"],
] as const;

export function StatsSection() {
  return (
    <>
      <style>{`
        @keyframes statGlow {
          0% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
          100% {
            filter: brightness(1);
          }
        }

        .stat:hover .stat-number {
          animation: statGlow 2s ease-in-out infinite;
        }
      `}</style>

      <section className="stats border-b border-[var(--border)] px-5 py-16 md:px-8 md:py-24">
        <div className="stats-grid mx-auto grid max-w-[var(--max-w)] grid-cols-2 divide-x-0 divide-y divide-[var(--border)] border-b border-[var(--border)] md:grid-cols-4 md:divide-x md:divide-y-0 md:border md:border-[var(--border)]">
          {STATS.map(([target, suf, initial, label], index) => (
            <div
              key={label}
              className="stat reveal group px-5 py-6 md:px-8 md:py-6"
            >
              <div
                className={`stat-number bg-clip-text text-[clamp(48px,5.5vw,84px)] font-extrabold leading-none tracking-[-0.04em] text-transparent transition-all duration-500 ease-out transform-gpu group-hover:scale-110 group-hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "bg-gradient-to-b from-[#ffffff] to-[#777777] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    : "bg-gradient-to-b from-[#c084fc] via-[#a855f7] to-[#7c3aed] group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.45)]"
                }`}
                data-target={target}
                data-suffix={suf}
              >
                {initial}
              </div>

              <div className="stat-label mt-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-dim)]">
                {label}
              </div>
            </div>
          ))}

          <div className="stat reveal group px-5 py-6 md:px-8 md:py-6">
            <div className="flex items-baseline gap-1.5">
              <span className="stat-number bg-gradient-to-b from-[#c084fc] via-[#a855f7] to-[#7c3aed] bg-clip-text text-[clamp(48px,5.5vw,84px)] font-extrabold leading-none tracking-[-0.04em] text-transparent transition-all duration-500 ease-out transform-gpu group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                2+
              </span>

              <span className="text-sm font-medium text-[var(--text-dim)]">
                years
              </span>
            </div>

            <div className="stat-label mt-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-dim)]">
              Building Brands
            </div>
          </div>
        </div>
      </section>
    </>
  );
}