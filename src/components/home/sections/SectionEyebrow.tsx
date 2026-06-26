export function SectionEyebrow({
  children,
  className = "mb-7",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-eyebrow inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-[''] ${className}`}>
      {children}
    </div>
  );
}
