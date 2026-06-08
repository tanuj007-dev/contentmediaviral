import { SectionEyebrow } from "./SectionEyebrow";

export function ManifestoSection() {
  return (
    <section className="manifesto border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-24 text-center md:px-8 md:py-40">
      <div className="manifesto-inner mx-auto max-w-[980px]">
        <SectionEyebrow>Manifesto</SectionEyebrow>
        <h2 className="mb-12 text-[clamp(40px,5.5vw,80px)] font-extrabold leading-none tracking-[-0.04em]">
          Posting isn&apos;t the problem.
          <br />
          <span className="serif accent-text">Strategy is.</span>
        </h2>
        <div className="manifesto-paras mx-auto flex max-w-[720px] flex-col gap-7 text-[clamp(17px,1.4vw,22px)] leading-[1.6] text-[var(--text-dim)]">
          <p>
            Most founders post and pray. They publish into the void, hope something hits, and call it a
            content strategy.
          </p>
          <p>
            It isn&apos;t one.{" "}
            <strong className="font-semibold text-[var(--text)]">A content engine is a system</strong> — it
            knows your audience, your message, and your cadence before a single asset gets shipped.
          </p>
          <p>We build that system. You show up to record. The compounding takes care of itself.</p>
        </div>
      </div>
    </section>
  );
}
