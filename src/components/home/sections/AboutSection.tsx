import { Link } from "@/components/RouterLink";
import { SectionEyebrow } from "./SectionEyebrow";

export function AboutSection() {
  return (
    <section className="section relative px-5 py-16 md:px-8 md:py-24" id="about">
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <div className="about-grid grid items-start gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16 lg:gap-20">
          <div className="about-content">
            <SectionEyebrow className="mb-7">About</SectionEyebrow>

            <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--text-dim)]">
              <p>
                Most founders with something real to say are invisible online. Not
                because their ideas are weak, but because they have no system turning
                those ideas into content that compounds.
              </p>

              <p className="text-[clamp(22px,3vw,28px)] font-bold leading-snug tracking-[-0.02em] text-white">
                That&apos;s what we fix.
              </p>

              <p>
                I&apos;m Garvit, founder of Content Viral Media. We build
                done-for-you content systems for founders across LinkedIn,
                Instagram, YouTube, and podcast: strategy, scripting, editing,
                posting, and growth, all handled by us. You record or approve. We
                do everything else.
              </p>

              <p>
                In 2+ years, our clients have crossed{" "}
                <span className="font-semibold text-white">100M+ organic views</span>
                , grown to{" "}
                <span className="font-semibold text-white">1M+ followers</span>, and
                started getting inbound leads from content they didn&apos;t have to
                stress over.
              </p>

              <p>
                We work with 3–5 clients at a time. If you&apos;re a founder
                who&apos;s serious about being the most recognized voice in your
                niche, and you&apos;re done doing it alone, let&apos;s talk.
              </p>
            </div>

            <Link
              href="/#inquire"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3.5 text-[15px] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--accent-glow)]"
            >
              Book a free 30-min call
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="about-photo relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] md:sticky md:top-28 md:mx-0">
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
