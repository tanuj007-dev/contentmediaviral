import Link from "next/link";

const SOCIALS = [
  ["https://instagram.com/growithgarvit", "IG", true],
  ["#", "in", false],
  ["#", "YT", false],
  ["#", "𝕏", false],
] as const;

const SERVICE_LINKS = [
  "Personal Branding",
  "IG & LinkedIn Mgmt",
  "Video Editing",
  "Podcast Repurposing",
  "UGC Creation",
  "YouTube Management",
] as const;

export function HomeFooter() {
  return (
    <footer className="home-site-footer overflow-hidden border-t border-[var(--border)] bg-[var(--bg-2)] px-5 pb-10 pt-16 md:px-8 md:pb-10 md:pt-20">
      <div className="footer-inner mx-auto max-w-[var(--max-w)]">
        <div className="footer-mega footer-mega-text mb-14 select-none text-center text-[clamp(48px,12vw,200px)] font-extrabold leading-[0.85] tracking-[-0.04em]">
          Content Viral Media
        </div>
        <div className="footer-top grid grid-cols-2 gap-8 border-b border-[var(--border)] pb-14 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 flex items-center gap-2.5 text-xl font-bold tracking-tight">
              <span className="logo-mark flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--accent)] text-[13px] font-extrabold text-white">
                CV
              </span>{" "}
              Content Viral Media
            </h3>
            <p className="mb-6 max-w-[360px] text-sm leading-relaxed text-[var(--text-dim)]">
              The remote content team for founders &amp; creators who refuse to stay unknown. Systems, not posts.
              Built by Garvit Vijay.
            </p>
            <div className="footer-socials flex gap-2.5">
              {SOCIALS.map(([href, lab, ext]) => (
                <a
                  key={lab}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="footer-social flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[13px] font-bold text-[var(--text-dim)] no-underline transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                >
                  {lab}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">Services</h4>
            <ul className="flex list-none flex-col gap-3">
              {SERVICE_LINKS.map((t) => (
                <li key={t}>
                  <Link href="#services" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">Company</h4>
            <ul className="flex list-none flex-col gap-3">
              <li>
                <Link href="#about" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  About Garvit
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#results" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  Results
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#inquire" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">Contact</h4>
            <ul className="flex list-none flex-col gap-3 text-sm">
              <li>
                <a href="mailto:Garvit@contentviralmedia.com" className="text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  Garvit@contentviralmedia.com
                </a>
              </li>
              <li>
                <a href="tel:+918890603113" className="text-[var(--text)] no-underline hover:text-[var(--accent)]">
                  +91 8890 603 113
                </a>
              </li>
              <li className="text-[var(--text)]">Jaipur, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[var(--text-muted)]">
          <div>© 2026 Content Viral Media · Built by Garvit Vijay</div>
          <div className="footer-bottom-right flex gap-6">
            <a href="#" className="no-underline hover:text-[var(--text)]">
              Privacy
            </a>
            <a href="#" className="no-underline hover:text-[var(--text)]">
              Terms
            </a>
            <Link href="#inquire" className="no-underline hover:text-[var(--text)]">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
