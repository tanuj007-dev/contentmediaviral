import { lazy, Suspense } from "react";
import {
  DeliverablesSection,
  HeroSection,
  HomeNav,
  MarqueeSection,
  StatsSection,
} from "./sections";

const WhySection = lazy(() =>
  import("./sections/WhySection").then((m) => ({ default: m.WhySection })),
);
const WorkSection = lazy(() =>
  import("./sections/WorkSection").then((m) => ({ default: m.WorkSection })),
);

function SectionFallback({ minHeight = "280px" }: { minHeight?: string }) {
  return <div aria-hidden style={{ minHeight }} />;
}

export default function HomePartA() {
  return (
    <>
      <HomeNav />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <Suspense fallback={<SectionFallback minHeight="360px" />}>
        <WhySection />
      </Suspense>
      <DeliverablesSection />
      <Suspense fallback={<SectionFallback minHeight="420px" />}>
        <WorkSection />
      </Suspense>
    </>
  );
}
