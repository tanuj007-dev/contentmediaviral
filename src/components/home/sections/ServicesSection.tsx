import { SectionHeader } from "./SectionHeader";
import { ServiceRow } from "./ServiceRow";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?w=600&h=450&auto=format&fit=crop&q=80`;

const SERVICES = [
  {
    num: "01",
    name: "Personal Branding for Founders",
    desc: "Positioning, scripting, and authority-building content.",
    image: UNSPLASH("photo-1573496359142-b8d87734a5a2"),
  },
  {
    num: "02",
    name: "Instagram & LinkedIn Management",
    desc: "End-to-end posting, captions, engagement, growth.",
    image: UNSPLASH("photo-1432888498266-38ffec3eaf0a"),
  },
  {
    num: "03",
    name: "Video Editing Services",
    desc: "Cinematic, storytelling, meta ads, UGC, AI voiceover.",
    image: UNSPLASH("photo-1516035069371-29a1b244cc32"),
  },
  {
    num: "04",
    name: "Podcast Repurposing",
    desc: "Full edits, viral clips, carousels, newsletters from one episode.",
    image: UNSPLASH("photo-1765894103859-5a063ecaa4bc"),
  },
  {
    num: "05",
    name: "UGC Creation",
    desc: "Employee-led, native, conversion-focused content.",
    image: UNSPLASH("photo-1529156069898-49953e39b3ac"),
  },
  {
    num: "06",
    name: "YouTube Channel Management",
    desc: "Scripts, edits, thumbnails, SEO, full channel ownership.",
    image: UNSPLASH("photo-1611224923853-80b023f02d71"),
  },
] as const;

export function ServicesSection() {
  return (
    <section
      className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]"
      id="services"
    >
      <div className="section-inner mx-auto max-w-[var(--max-w)]">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Let your brand&apos;s <span className="serif accent-text">vision</span>
              <br />
              become reality.
            </>
          }
          subtitle="Six services. One unified content engine."
          subtitleClassName="section-subtitle mb-16 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]"
        />
        <div className="services-list border-t border-[var(--border)]">
          {SERVICES.map((service) => (
            <ServiceRow key={service.num} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
