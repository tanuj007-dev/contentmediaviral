import {
  BigNumbersSection,
  CompareSection,
  ContentRedesignSection,
  FaqSection,
  HomeFooter,
  InquireSection,
  LongFormSection,
  TestimonialsSection,
} from "./sections";
import { HomeClient } from "./HomeClient";

export default function HomePartB() {
  return (
    <>
      <BigNumbersSection />
      <LongFormSection />
      <TestimonialsSection />
      <ContentRedesignSection />
      <CompareSection />
      <FaqSection />
      <InquireSection />
      <HomeFooter />
      <HomeClient />
    </>
  );
}
