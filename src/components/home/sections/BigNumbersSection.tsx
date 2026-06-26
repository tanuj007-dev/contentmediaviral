import { ResultsMarquee } from "./ResultsMarquee";

export function BigNumbersSection() {
  return (
    <section
      id="results"
      className="big-numbers overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] py-10 md:py-14"
    >
      <ResultsMarquee />
    </section>
  );
}
