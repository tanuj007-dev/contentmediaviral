"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const onPortfolio = pathname === "/portfolio";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-transparent px-5 py-[14px] backdrop-blur-[14px] transition-all duration-300 ease-out md:px-8 md:py-[18px]",
        scrolled
        
          ? "border-[var(--border)] bg-[rgba(10,10,10,0.85)] py-3 md:py-[14px]"
          : "bg-[rgba(10,10,10,0.6)]",
      ].join(" ")}
    >
      <Link
        href="/"
        className="flex items-center gap-2.5 text-base font-bold tracking-[-0.02em] text-[var(--text)] no-underline"
      >
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--accent)] text-[13px] font-extrabold text-white">
          CV
        </span>
        Content Viral Media
      </Link>
      <ul className="hidden list-none items-center gap-8 text-sm font-medium min-[901px]:flex">
        <li>
          <Link
            href="/#about"
            className="text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#services"
            className="text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/#process"
            className="text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={
              onPortfolio
                ? "text-[var(--text)] no-underline transition-colors duration-200"
                : "text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
            }
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/#results"
            className="text-[var(--text-dim)] no-underline transition-colors duration-200 hover:text-[var(--text)]"
          >
            Results
          </Link>
        </li>
      </ul>
      <Link
        href="/#inquire"
        className="rounded-full bg-[var(--accent)] px-[18px] py-2.5 text-[13px] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[0_6px_20px_var(--accent-glow)]"
      >
        Book a Call →
      </Link>
    </nav>
  );
}
