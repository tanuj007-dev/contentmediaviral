import {
  FaChartLine,
  FaUserTie,
  FaMicrophoneAlt,
  FaFilm,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const MARQUEE = [
  {
    text: "100M+ Organic Views",
    icon: FaChartLine,
    color: "#22c55e",
  },
  {
    text: "Personal Branding",
    icon: FaUserTie,
    color: "#a855f7",
  },
  {
    text: "Podcast Repurposing",
    icon: FaMicrophoneAlt,
    color: "#f59e0b",
  },
  {
    text: "Cinematic Edits",
    icon: FaFilm,
    color: "#06b6d4",
  },
  {
    text: "YouTube Management",
    icon: FaYoutube,
    color: "#ff0000",
  },
  {
    text: "LinkedIn Authority",
    icon: FaLinkedin,
    color: "#0a66c2",
  },
] as const;

export function MarqueeSection() {
  return (
    <div className="marquee overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] py-[22px]">
      <div className="home-marquee-track">
        {[0, 1].map((dup) =>
          MARQUEE.map(({ text, icon: Icon, color }) => (
            <div
              key={`${dup}-${text}`}
              className="marquee-item flex shrink-0 items-center gap-[60px] text-lg font-medium tracking-[-0.01em] text-[var(--text-dim)] after:text-base after:font-medium after:text-[var(--accent)] after:content-['✦']"
            >
              <span className="flex items-center gap-2">
                <Icon
                  size={20}
                  style={{
                    color,
                    filter: "drop-shadow(0 0 8px rgba(255,255,255,0.12))",
                  }}
                />
                <span>{text}</span>
              </span>
            </div>
          )),
        )}
      </div>
    </div>
  );
}