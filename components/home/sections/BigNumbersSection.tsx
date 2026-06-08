const BIG_NUMS = [
  ["18M", true, "Views on a single account"],
  ["1.6M", false, "Likes generated"],
  ["24.1M", true, "Views in 30 days"],
  ["5.2M", false, "Reach (single brand)"],
  ["10x", true, "Follower growth"],
  ["3,189", false, "Follows from one reel"],
] as const;

export function BigNumbersSection() {
  return (
    <section className="big-numbers overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] py-24">
      <div className="animate-scroll-slow flex w-max gap-20 whitespace-nowrap">
        {[0, 1].map((dup) =>
          BIG_NUMS.map(([num, acc, label], i) => (
            <div key={`${dup}-${i}`} className="big-num-item flex items-baseline gap-4">
              <span
                className={
                  acc
                    ? "big-num-gradient-acc text-[clamp(72px,9vw,140px)] font-black leading-none tracking-[-0.05em]"
                    : "big-num-gradient text-[clamp(72px,9vw,140px)] font-black leading-none tracking-[-0.05em]"
                }
              >
                {num}
              </span>
              <span className="text-[clamp(15px,1.2vw,20px)] font-medium text-[var(--text-dim)]">
                {label}
              </span>
            </div>
          )),
        )}
      </div>
    </section>
  );
}
