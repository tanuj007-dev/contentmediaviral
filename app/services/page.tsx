import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ServicesSection } from "@/components/home/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal branding, Instagram & LinkedIn management, video editing, podcast repurposing, UGC, and YouTube channel management.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28">
        <ServicesSection />
      </main>
    </>
  );
}
