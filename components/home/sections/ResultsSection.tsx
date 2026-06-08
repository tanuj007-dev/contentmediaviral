import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

const RESULTS = [
  {
    handle: "@sharmajiinvests",
    meta: "Kritika Sharma · Finance Creator",
    before: "7,005",
    after: "80.6K",
    detail: "18M views · 1.6M likes generated",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    handle: "@shri_dhanlaxmi_rajputi",
    meta: "Fashion Boutique · Instagram",
    before: "319",
    after: "10K",
    detail: "1.2M reach in 30 days · UGC-led growth",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    handle: "@gabe_einhorn",
    meta: "Personal Brand · Faith-Based Creator",
    before: "1.2K",
    after: "15K",
    detail: "5.2M reach generated across content ecosystem",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

export function ResultsSection() {
  return (
    <section
      id="results"
      className="relative px-5 py-20 md:px-8 md:py-[130px]"
    >
      <div className="mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Case Studies"
          title={
            <>
              Real creators.
              <br />
              Real growth.
              <span className="serif accent-text"> Real results.</span>
            </>
          }
          subtitle="We don't sell promises. We build audiences, attention, and authority."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {RESULTS.map((item) => (
            <div
              key={item.handle}
              className="group overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--accent)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.handle}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <div className="mb-1 text-sm font-semibold text-[var(--accent)]">
                    {item.handle}
                  </div>
                  <div className="text-xs text-white/70">
                    {item.meta}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex-1 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 text-center">
                    <div className="text-3xl font-black tracking-tight">
                      {item.before}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      Before
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-[var(--accent)]">
                    →
                  </div>

                  <div className="flex-1 rounded-2xl border border-[rgba(124,92,255,.3)] bg-[var(--accent-dim)] p-4 text-center">
                    <div className="text-3xl font-black tracking-tight text-[var(--accent)]">
                      {item.after}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      After
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[var(--text-dim)]">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] px-8 py-4 text-sm font-semibold transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
          >
            See All Success Stories

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-rotate-45">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}