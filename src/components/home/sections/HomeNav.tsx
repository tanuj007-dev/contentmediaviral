import { Link } from "@/components/RouterLink";

const NAV_LINKS = [
  ["About", "/about"],
  ["Services", "/services"],
  ["LinkedIn", "/linkedin"],
  ["Portfolio", "/portfolio"],
  ["Podcast Repurposing", "/podcast-repurposing"],
] as const;

export function HomeNav() {
  return (
    <nav
      id="nav"
      className="home-top-nav fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-transparent bg-[rgba(10,10,10,0.6)] px-5 py-3.5 backdrop-blur-[14px] transition-all duration-300 ease-out md:px-8 md:py-[18px]"
    >
      <Link
        href="/"
        className="logo flex items-center gap-2.5 text-base font-bold tracking-[-0.02em] text-[var(--text)] no-underline"
      >
        <span className="logo-mark flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--accent)] text-[13px] font-extrabold text-white">
          CV
        </span>
        Content Viral Media
      </Link>
      <ul className="nav-links hidden list-none items-center gap-8 text-sm font-medium min-[901px]:flex">
        {NAV_LINKS.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-[var(--text-dim)] no-underline transition-colors hover:text-[var(--text)]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="#inquire"
        className="nav-cta rounded-full bg-[var(--accent)] px-[18px] py-2.5 text-[13px] font-semibold text-white no-underline transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_6px_20px_var(--accent-glow)]"
      >
        Book a Call →
      </Link>
    </nav>
  );
}
