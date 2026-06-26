import { Link } from "@/components/RouterLink";
import { Nav } from "@/components/Nav";
import { PageMeta } from "@/components/PageMeta";
import FreeResourcesSection from "@/components/linkedin/FreeResourcesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { FaLinkedinIn } from "react-icons/fa";

export default function LinkedInPage() {
  return (
    <>
      <PageMeta
        title="LinkedIn Personal Branding | Content Viral Media"
        description="Build a LinkedIn presence that compounds. Authority positioning, content production, and growth systems for founders by Content Viral Media."
      />
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--text)]">
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-center md:px-8 md:pt-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(124,92,255,0.14),transparent_65%)]"
            aria-hidden
          />

          <div className="relative z-[1] mx-auto max-w-[1200px]">
            <p className="mb-8 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-sm">
              <span aria-hidden className="text-base">
                <FaLinkedinIn />
              </span>
              LinkedIn Authority Studio
            </p>

            <h1 className="mb-10 text-[clamp(40px,7.5vw,88px)] font-extrabold leading-[1.02] tracking-[-0.04em]">
              Don&apos;t be another founder.
              <br />
              Be a{" "}
              <span className="serif accent-text">category leader.</span>
            </h1>

            <div className="mx-auto mb-12 max-w-[640px] space-y-5 text-[clamp(16px,1.4vw,19px)] leading-[1.65] text-[var(--text-dim)]">
              <p>Think of 5 founders right now.</p>
              <p>
                You didn&apos;t think of their companies first. You thought of
                their faces. Their story. The thing they stand for.
              </p>
              <p>
                That&apos;s not an accident.{" "}
                <span className="font-medium text-[var(--text)]">
                  That&apos;s architecture.
                </span>
              </p>
              <p>
                Founder branding is the only moat that compounds while you sleep.
                It outlasts your product, survives your pivots, and walks into
                rooms before you do.
              </p>
              <p className="font-medium text-[var(--text)]">
                Your network has a ceiling. Your name doesn&apos;t.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#inquire"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--accent)] px-8 py-4 text-[15px] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--accent-glow)] sm:w-auto"
              >
                Book a Free Call →
              </Link>
              <a
                href="#free-resources"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border-strong)] px-8 py-4 text-[15px] font-semibold text-[var(--text)] no-underline transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto"
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        <FreeResourcesSection />
      </main>
      <SiteFooter />
    </>
  );
}
