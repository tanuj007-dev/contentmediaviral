import {
  AboutSection,
  DeliverablesSection,
  HeroSection,
  HomeNav,
  ManifestoSection,
  MarqueeSection,
  ProcessSection,
  ServicesSection,
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
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <DeliverablesSection />
      <WorkSection />
    </>
  );
}
