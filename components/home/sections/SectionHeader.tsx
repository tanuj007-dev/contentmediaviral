import { SectionEyebrow } from "./SectionEyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  titleClassName = "section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]",
  subtitleClassName = "section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]",
}: SectionHeaderProps) {
  return (
    <>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </>
  );
}
