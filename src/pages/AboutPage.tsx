import { Nav } from "@/components/Nav";
import { AboutSection } from "@/components/home/sections/AboutSection";
import { PageMeta } from "@/components/PageMeta";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About | Content Viral Media"
        description="Meet Garvit Vijay, founder of Content Viral Media. Full-stack content agency for founders and creators."
      />
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28">
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
