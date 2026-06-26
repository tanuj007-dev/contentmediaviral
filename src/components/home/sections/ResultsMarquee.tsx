const RESULTS_FOLDER = "Untitled (300 x 200 px)";

const RESULT_IMAGES = Array.from({ length: 11 }, (_, i) => `${i + 1}.jpg`);

function publicImageUrl(filename: string) {
  return `/${encodeURIComponent(RESULTS_FOLDER)}/${encodeURIComponent(filename)}`;
}

export function ResultsMarquee() {
  return (
    <div className="animate-scroll-slow flex w-max items-center gap-5 whitespace-nowrap md:gap-7">
      {[0, 1].map((dup) =>
        RESULT_IMAGES.map((file, i) => (
          <div
            key={`${dup}-${i}`}
            className="shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_10px_36px_rgba(0,0,0,0.4)]"
          >
            <img
              src={publicImageUrl(file)}
              alt={`Client analytics result ${i + 1}`}
              width={300}
              height={200}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-[130px] w-[195px] object-cover sm:h-[160px] sm:w-[240px] md:h-[200px] md:w-[300px]"
            />
          </div>
        )),
      )}
    </div>
  );
}
