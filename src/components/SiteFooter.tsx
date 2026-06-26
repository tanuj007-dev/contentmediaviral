import { Link } from "@/components/RouterLink";

const SOCIALS = [
  ["https://instagram.com/growithgarvit", "IG", true],
  ["#", "in", false],
  ["#", "YT", false],
  ["#", "𝕏", false],
] as const;

const SERVICE_LINKS = [
  { label: "Personal Branding", href: "/services" },
  { label: "IG & LinkedIn Mgmt", href: "/services" },
  { label: "Video Editing", href: "/services" },
  { label: "Podcast Repurposing", href: "/podcast-repurposing" },
  { label: "UGC Creation", href: "/services" },
] as const;

const COMPANY_LINKS = [
  { label: "About Garvit", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/#faq" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer overflow-hidden border-t border-white/10 bg-black px-5 pb-10 pt-16 md:px-8 md:pb-10 md:pt-20">
      <div className="mx-auto max-w-[var(--max-w)]">
        <div className="footer-mega-text mb-14 select-none text-center text-[clamp(48px,12vw,200px)] font-extrabold leading-[0.85] tracking-[-0.04em]">
          Content Viral Media
        </div>

        <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-14 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--accent)] text-[11px] font-extrabold lowercase text-white">
                cv
              </span>
              Content Viral Media
            </h3>
            <p className="mb-6 max-w-[360px] text-sm leading-relaxed text-[var(--text-dim)]">
              The remote content team for founders &amp; creators who refuse to
              stay unknown. Systems, not posts. Built by Garvit Vijay.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(([href, lab, ext]) => (
                <a
                  key={lab}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#161616] text-[13px] font-bold text-[var(--text-dim)] no-underline transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  {lab}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Services
            </h4>
            <ul className="flex list-none flex-col gap-3">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Company
            </h4>
            <ul className="flex list-none flex-col gap-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white no-underline transition-colors hover:text-[var(--accent)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Contact
            </h4>
            <ul className="flex list-none flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:Garvit@contentviralmedia.com"
                  className="text-white no-underline transition-colors hover:text-[var(--accent)]"
                >
                  Garvit@contentviralmedia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918890603113"
                  className="text-white no-underline transition-colors hover:text-[var(--accent)]"
                >
                  +91 8890 603 113
                </a>
              </li>
              <li className="text-white">Jaipur, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[var(--text-muted)]">
          <div>© 2026 Content Viral Media · Built by Garvit Vijay</div>
          <div className="flex gap-6">
            <a href="#" className="no-underline transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="no-underline transition-colors hover:text-white">
              Terms
            </a>
            <Link
              href="/#inquire"
              className="no-underline transition-colors hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
