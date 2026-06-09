import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { CaseStudySection } from "@/components/home/sections/CaseStudySection";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Content Viral Media helped founders scale their personal brands — from 7,005 to 80,600 followers in eight months.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28">
        <CaseStudySection />
      </main>
    </>
  );
}
