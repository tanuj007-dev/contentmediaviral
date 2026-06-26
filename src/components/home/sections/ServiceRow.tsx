import { Link } from "@/components/RouterLink";

type ServiceRowProps = {
  num: string;
  name: string;
  desc: string;
  image: string;
  imageFit?: "cover" | "contain";
};

export function ServiceRow({
  num,
  name,
  desc,
  image,
  imageFit = "cover",
}: ServiceRowProps) {
  return (
    <Link
      href="#inquire"
      className="service-row group relative grid grid-cols-[60px_1fr] items-center gap-4 border-b border-[var(--border)] py-6 text-[var(--text)] no-underline transition-[padding,background] duration-300 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-500 after:[transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] after:content-[''] hover:bg-[var(--bg-2)] hover:px-4 hover:after:scale-x-100 min-[969px]:grid-cols-[80px_1fr_1.5fr] min-[969px]:gap-8 min-[969px]:px-2 min-[969px]:py-8 min-[969px]:hover:px-6"
    >
      <div className="service-num mono text-sm text-[var(--text-muted)]">{num}</div>
      <div className="service-name text-[clamp(22px,2.4vw,36px)] font-bold leading-tight tracking-[-0.025em]">
        {name}
      </div>
      <div className="service-desc hidden text-[15px] leading-normal text-[var(--text-dim)] min-[969px]:block">
        {desc}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 z-10 -translate-y-1/2 scale-90 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 min-[969px]:right-6"
      >
        <div className="h-[76px] w-[114px] overflow-hidden rounded-[12px] border border-white/10 bg-[var(--surface)] shadow-[0_12px_36px_rgba(0,0,0,0.45)] sm:h-[88px] sm:w-[132px] sm:rounded-[14px]">
          <img
            src={image}
            alt={name}
            className={`h-full w-full ${
              imageFit === "contain"
                ? "bg-black object-contain object-top"
                : "object-cover"
            }`}
            loading="lazy"
          />
        </div>
      </div>
    </Link>
  );
}
