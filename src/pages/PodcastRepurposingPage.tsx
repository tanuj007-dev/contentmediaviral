import { Nav } from "@/components/Nav";
import { ProcessSection } from "@/components/home/sections/ProcessSection";
import { WhySection } from "@/components/home/sections/WhySection";
import { PageMeta } from "@/components/PageMeta";
import PodcastRepurposingSection from "@/components/podcast/PodcastRepurposingSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function PodcastRepurposingPage() {
  return (
    <>
      <PageMeta
        title="Podcast Repurposing | Content Viral Media"
        description="One podcast, endless possibilities. We turn long-form episodes into high-impact short-form content across every platform."
      />
      <Nav />

      <main className="min-h-screen bg-[var(--bg)] pt-24 text-[var(--text)] md:pt-28">
        <PodcastRepurposingSection />
        <WhySection />
        <ProcessSection />
      </main>
      <SiteFooter />
    </>
  );
}
