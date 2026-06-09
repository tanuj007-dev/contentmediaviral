import {
  DeliverablesSection,
  HeroSection,
  HomeNav,
  ManifestoSection,
  MarqueeSection,
  ProcessSection,
  StatsSection,
  WhySection,
  WorkSection,
} from "./sections";

export default function HomePartA() {
  return (
    <>
      <HomeNav />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      {/* <ManifestoSection /> */}
      <WhySection />
      <ProcessSection />
      <DeliverablesSection />
      <WorkSection />
    </>
  );
}
