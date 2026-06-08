export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
      {children}
    </div>
  );
}
