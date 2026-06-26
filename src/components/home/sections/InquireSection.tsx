import { lazy, Suspense } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

const InquirePhoneField = lazy(() =>
  import("./InquirePhoneField").then((m) => ({ default: m.InquirePhoneField })),
);

const PERKS = ["30-minute discovery call", "Custom plan delivered after", "No pressure, no pitch"] as const;

const SERVICE_CHIPS = [
  ["personal-branding", "Personal Branding"],
  ["video-editing", "Video Editing"],
  ["podcast", "Podcast Repurposing"],
  ["ig-linkedin", "IG & LinkedIn"],
  ["youtube", "YouTube"],
  ["ugc", "UGC"],
] as const;

export function InquireSection() {
  return (
    <section className="inquire-section relative overflow-hidden px-5 py-20 md:px-8 md:py-[130px]" id="inquire">
      <div
        className="inquire-glow pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.1),transparent_60%)] blur-[60px]"
        aria-hidden
      />
      <div className="inquire-inner relative z-[2] mx-auto grid max-w-[var(--max-w)] grid-cols-1 items-start gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="inquire-left pt-1">
          <SectionEyebrow>Let&apos;s Work Together</SectionEyebrow>
          <h2 className="inquire-h2 mb-7 text-[clamp(40px,5vw,80px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Book a
            <br />
            discovery call.
          </h2>
          <p className="inquire-sub mb-9 max-w-[480px] text-[17px] leading-relaxed text-[var(--text-dim)]">
            Limited spots. We only work with brands we can actually move. If we&apos;re not the right fit,
            we&apos;ll tell you on the call.
          </p>
          <ul className="inquire-perks mb-10 flex list-none flex-col gap-3.5">
            {PERKS.map((t) => (
              <li key={t} className="flex items-center gap-3 text-[15px] text-[var(--text)]">
                <span className="perk-tick flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[var(--accent-dim)] text-xs font-bold text-[var(--accent)]">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="inquire-contact flex flex-col gap-4 border-t border-[var(--border)] pt-8">
            <a href="mailto:Garvit@contentviralmedia.com" className="contact-line flex flex-col gap-1 no-underline text-[var(--text)] transition-colors hover:text-[var(--accent)]">
              <span className="contact-line-label mono text-[11px] tracking-wider text-[var(--text-muted)]">
                EMAIL
              </span>
              Garvit@contentviralmedia.com
            </a>
            <a href="tel:+918890603113" className="contact-line flex flex-col gap-1 no-underline text-[var(--text)] transition-colors hover:text-[var(--accent)]">
              <span className="contact-line-label mono text-[11px] tracking-wider text-[var(--text-muted)]">
                PHONE
              </span>
              +91 8890 603 113
            </a>
            <a
              href="https://instagram.com/growithgarvit"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-line flex flex-col gap-1 no-underline text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              <span className="contact-line-label mono text-[11px] tracking-wider text-[var(--text-muted)]">
                INSTAGRAM
              </span>
              @growithgarvit
            </a>
          </div>
        </div>
        <div className="inquire-form-wrap relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-7 before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] before:content-[''] md:p-10">
          <form id="inquireForm" className="inquire-form" noValidate>
            <h3 className="form-h3 mb-1 text-2xl font-bold tracking-tight">Tell us about your brand</h3>
            <p className="form-sub mb-7 text-sm text-[var(--text-dim)]">
              We&apos;ll respond from Garvit@contentviralmedia.com within 24 hours.
            </p>
            <div className="form-row grid grid-cols-1 gap-3.5 md:grid-cols-2">
              <div className="form-field mb-4">
                <label htmlFor="f-name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  Full Name
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  placeholder="Garvit Vijay"
                  required
                  className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none transition-[border,background] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                />
              </div>
              <div className="form-field mb-4">
                <label htmlFor="f-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  Email
                </label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  placeholder="you@brand.com"
                  required
                  className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none transition-[border,background] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                />
              </div>
            </div>
            <div className="form-field mb-4">
              <label htmlFor="f-phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                Phone Number
              </label>
              <Suspense
                fallback={
                  <div
                    aria-hidden
                    className="h-[52px] w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)]"
                  />
                }
              >
                <InquirePhoneField />
              </Suspense>
            </div>
            <div className="form-field mb-4">
              <label htmlFor="f-type" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                You are
              </label>
              <select
                id="f-type"
                name="company"
                required
                className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
              >
                <option value="">Select one</option>
                <option value="brand">Are you a brand</option>
                <option value="creator">Are you a creator</option>
              </select>
            </div>
            <div className="form-field mb-4">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                I&apos;m interested in
              </span>
              <div className="chip-group flex flex-wrap gap-2">
                {SERVICE_CHIPS.map(([v, lab]) => (
                  <label
                    key={v}
                    className="chip cursor-pointer rounded-full border border-[var(--border)] bg-[var(--bg)] has-[:checked]:border-[var(--accent)] has-[:checked]:bg-[var(--accent-dim)]"
                  >
                    <input type="checkbox" name="services" value={v} className="peer sr-only" />
                    <span className="block px-4 py-2 text-[13px] font-medium text-[var(--text-dim)] transition-colors peer-checked:text-[var(--text)]">
                      {lab}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-field mb-4">
              <label htmlFor="f-budget" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                Monthly Budget
              </label>
              <select
                id="f-budget"
                name="budget"
                className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
              >
                <option value="">Select a range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1-3k">$1,000 - $3,000</option>
                <option value="3-7k">$3,000 - $7,000</option>
                <option value="7k+">$7,000+</option>
                <option value="discuss">Let&apos;s discuss</option>
              </select>
            </div>
            <div className="form-field mb-4">
              <label htmlFor="f-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                Tell us more
              </label>
              <textarea
                id="f-message"
                name="message"
                rows={4}
                placeholder="What are you trying to build? What's the audience? What's worked or not worked so far?"
                className="min-h-[100px] w-full resize-y rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] leading-normal text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
              />
            </div>
            <button
              type="submit"
              className="form-submit group mt-2 flex w-full items-center justify-center gap-3 rounded-full border-none bg-[var(--accent)] px-7 py-4 text-[15px] font-semibold text-white transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--accent-glow)]"
            >
              <span>Submit Inquiry</span>
              <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black text-[11px] transition-transform group-hover:-rotate-45">
                →
              </span>
            </button>
            <div className="form-success">
              <div className="success-tick mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-[28px] font-bold text-white">
                ✓
              </div>
              <h4 className="mb-3 text-2xl font-bold tracking-tight">Thanks, your inquiry is in.</h4>
              <p className="text-[15px] leading-relaxed text-[var(--text-dim)]">
                We&apos;ll review your details and reply within 24 hours from{" "}
                <strong className="text-[var(--text)]">Garvit@contentviralmedia.com</strong>. Keep an eye on your
                inbox.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
