
import { SectionEyebrow } from "./SectionEyebrow";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export function AboutSection() {
  return (
    <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="about">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <div className="about-grid grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <div className="about-content">
            <SectionEyebrow>Founder</SectionEyebrow>

            <h2 className="about-h2 mb-7 text-[clamp(32px,4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.035em]">
              Built by <span className="serif">Garvit Vijay.</span>
            </h2>

            <p className="mb-4 text-[17px] leading-[1.7] text-[var(--text-dim)]">
              Content Viral Media is a full-stack content agency for founders and creators who are done
              posting and praying.
            </p>

            <p className="mb-4 text-[17px] leading-[1.7] text-[var(--text-dim)]">
              We do it all — ideation, scripting, editing, posting, weekly strategy, and end-to-end podcast
              production. We edit your podcast, design thumbnails, cut viral clips in every style, and
              repurpose episodes into carousels, newsletters, and posts across LinkedIn, YouTube, and
              Instagram.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-[var(--text-dim)]">
                Connect With Garvit
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(0,0,0,0.55)] text-white backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08] hover:border-[var(--accent)] hover:shadow-[0_0_25px_rgba(124,92,255,0.35)]"
                >
                  <FaLinkedinIn className="text-[18px] transition-colors duration-300 group-hover:text-[var(--accent)]" />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(0,0,0,0.55)] text-white backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08] hover:border-[var(--accent)] hover:shadow-[0_0_25px_rgba(124,92,255,0.35)]"
                >
                  <FaInstagram className="text-[18px] transition-colors duration-300 group-hover:text-[var(--accent)]" />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(0,0,0,0.55)] text-white backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08] hover:border-[var(--accent)] hover:shadow-[0_0_25px_rgba(124,92,255,0.35)]"
                >
                  <FaYoutube className="text-[18px] transition-colors duration-300 group-hover:text-[var(--accent)]" />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(0,0,0,0.55)] text-white backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.08] hover:border-[var(--accent)] hover:shadow-[0_0_25px_rgba(124,92,255,0.35)]"
                >
                  <FaFacebookF className="text-[18px] transition-colors duration-300 group-hover:text-[var(--accent)]" />
                </a>
              </div>
            </div>

            <div className="about-quote mt-8 rounded-r-[var(--radius)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] bg-[var(--bg)] px-7 py-6 text-[22px] italic leading-snug [font-family:var(--font-instrument-serif),serif]">
              One recording session.
              <br />
              Dozens of content pieces.
              <br />
              <span className="accent-text">Zero guesswork.</span>
            </div>
          </div>

          <div className="about-photo relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] md:mx-0">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[rgba(124,92,255,0.05)] to-transparent text-[clamp(60px,8vw,120px)] italic text-[rgba(255,255,255,0.06)] [font-family:var(--font-instrument-serif),serif]"
              aria-hidden
            >
              GARVIT
            </div>

            <div className="badge absolute bottom-6 left-6 right-6 rounded-[var(--radius)] border border-[var(--border-strong)] bg-[rgba(0,0,0,0.7)] px-[18px] py-3.5 text-[13px] text-[var(--text)] backdrop-blur-[12px]">
              7M+ views generated · Personal Branding Specialist · Jaipur, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

