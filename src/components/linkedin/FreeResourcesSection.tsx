import { Link } from "@/components/RouterLink";
import {
  FaArrowRight,
  FaCommentDots,
  FaDownload,
  FaExternalLinkAlt,
  FaFileAlt,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";

const RESOURCES = [
  {
    icon: FaUser,
    badge: "PDF Framework",
    title: "LinkedIn Profile Positioning",
    description:
      "A breakdown of the profile elements we optimize to improve credibility, authority, and inbound discovery for founders.",
    bullets: [
      "Positioning structure",
      "Credibility placement",
      "Profile conversion gaps",
      "Strategic profile examples",
    ],
    cta: "Download Framework",
    ctaIcon: FaDownload,
    href: "/#inquire",
    external: false,
  },
  {
    icon: FaFileAlt,
    badge: "Swipe File",
    title:
      "The Viral Content Engine (150+ High-Performing Hooks Analyzed Every Month)",
    description:
      "Our content team studies and reverse-engineers hundreds of founder posts every month to identify:",
    bullets: [
      "emerging hook patterns",
      "retention structures",
      "narrative psychology",
    ],
    extra:
      "This research directly shapes the storytelling systems behind our highest-performing founder brands. Get a closer look at the hook structures and content frameworks we use internally.",
    cta: "Download Swipe File",
    ctaIcon: FaDownload,
    href: "/#inquire",
    external: false,
  },
  {
    icon: FaPaperPlane,
    badge: "Process PDF",
    title: "Relationship-Led Outreach Infrastructure",
    description:
      "Our outreach campaigns are built around precision, not volume. Every campaign involves:",
    bullets: [
      "ICP mapping",
      "manual prospect research",
      "outreach sequencing",
      "founder-level positioning",
      "follow-up architecture",
    ],
    extra:
      "This is the same process behind campaigns that opened conversations with CEOs, CHROs, luxury hospitality leaders, and healthcare operators. Explore the strategic thinking behind our outreach systems.",
    cta: "Download Process PDF",
    ctaIcon: FaDownload,
    href: "/#inquire",
    external: false,
  },
  {
    icon: FaCommentDots,
    badge: "Tool",
    title: "DM Sense",
    description:
      "Most LinkedIn outreach fails because the messaging sounds transactional, generic, or low-trust. DM Sense analyzes your outreach message across:",
    bullets: [
      "response probability",
      "trust signals",
      "positioning clarity",
      "spam-risk patterns",
      "conversational flow",
    ],
    extra:
      "Built using insights from hundreds of real founder outreach campaigns.",
    cta: "Analyze Your Message",
    ctaIcon: FaExternalLinkAlt,
    href: "/#inquire",
    external: true,
  },
] as const;

export default function FreeResourcesSection() {
  return (
    <section
      id="free-resources"
      className="border-t border-[var(--border)] bg-[var(--bg)] px-5 py-12 md:px-8 md:py-16"
    >
      <div className="mx-auto max-w-[var(--max-w)]">
        <header className="mb-8 text-center md:mb-10">
          <p className="mb-3 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-sm">
            <span aria-hidden className="text-sm">
              ✦
            </span>
            Free Resources
          </p>
          <h2 className="mb-3 text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[var(--text)]">
            How we <span className="serif accent-text">dominate</span> LinkedIn
          </h2>
          <p className="mx-auto max-w-[640px] text-base leading-relaxed text-[var(--text-dim)] md:text-lg">
            The exact frameworks and templates we use to generate 500M+
            impressions.
          </p>
        </header>

        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-4 md:grid-cols-2">
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>

        <footer className="mt-8 text-center md:mt-10">
          <p className="mb-4 text-base text-[var(--text-dim)] md:text-lg">
            We take only 10 new clients per quarter. Apply now to secure your
            spot.
          </p>
          <Link
            href="/#inquire"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-[15px] font-semibold text-white no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--accent-glow)]"
          >
            Book a Free Audit
          </Link>
        </footer>
      </div>
    </section>
  );
}

function ResourceCard({
  resource,
}: {
  resource: (typeof RESOURCES)[number];
}) {
  const Icon = resource.icon;
  const CtaIcon = resource.ctaIcon;

  return (
    <article className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
        <Icon aria-hidden className="text-lg" />
      </div>

      <div className="mb-2.5 flex flex-wrap items-start gap-2">
        <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-[var(--text)] sm:text-xl">
          {resource.title}
        </h3>
        <span className="shrink-0 rounded-full bg-[var(--accent-dim)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--accent)]">
          {resource.badge}
        </span>
      </div>

      <p className="mb-3 text-[15px] leading-relaxed text-[var(--text-dim)]">
        {resource.description}
      </p>

      <ul className="mb-3 flex flex-col gap-1.5">
        {resource.bullets.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-[var(--text-dim)]"
          >
            <span
              aria-hidden
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
            />
            {item}
          </li>
        ))}
      </ul>

      {"extra" in resource && resource.extra && (
        <p className="mb-4 text-sm leading-relaxed text-[var(--text-dim)]">
          {resource.extra}
        </p>
      )}

      <a
        href={resource.href}
        target={resource.external ? "_blank" : undefined}
        rel={resource.external ? "noopener noreferrer" : undefined}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] no-underline transition-opacity hover:opacity-80"
      >
        <CtaIcon aria-hidden className="text-xs" />
        {resource.cta}
        <FaArrowRight aria-hidden className="text-[10px]" />
      </a>
    </article>
  );
}
