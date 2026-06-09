import instagramServiceImg from "@/public/account not found _ Funny iphone wallpaper, Instagram, Aesthetic template.jpg";
import { SectionHeader } from "./SectionHeader";
import { ServiceRow } from "./ServiceRow";

const SERVICES = [
  {
    num: "01",
    name: "Personal Branding for Founders",
    desc: "Positioning, scripting, and authority-building content.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=360&auto=format&fit=crop&q=80",
  },
  {
    num: "02",
    name: "Instagram & LinkedIn Management",
    desc: "End-to-end posting, captions, engagement, growth.",
    image: instagramServiceImg.src,
    imageFit: "contain" as const,
  },
  {
    num: "03",
    name: "Video Editing Services",
    desc: "Cinematic, storytelling, meta ads, UGC, AI voiceover.",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f3a6d?w=500&h=360&auto=format&fit=crop&q=80",
  },
  {
    num: "04",
    name: "Podcast Repurposing",
    desc: "Full edits, viral clips, carousels, newsletters from one episode.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a7672bbd?w=500&h=360&auto=format&fit=crop&q=80",
  },
  {
    num: "05",
    name: "UGC Creation",
    desc: "Employee-led, native, conversion-focused content.",
    image:
      "https://images.unsplash.com/photo-1617806110386-53b9662cacca?w=500&h=360&auto=format&fit=crop&q=80",
  },
  {
    num: "06",
    name: "YouTube Channel Management",
    desc: "Scripts, edits, thumbnails, SEO — full channel ownership.",
    image:
      "https://images.unsplash.com/photo-1626819014513-bf62a507b569?w=500&h=360&auto=format&fit=crop&q=80",
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
