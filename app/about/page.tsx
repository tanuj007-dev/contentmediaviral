import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { AboutSection } from "@/components/home/sections/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Garvit Vijay — founder of Content Viral Media. Full-stack content agency for founders and creators.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28">
        <AboutSection />
      </main>
    </>
  );
}
