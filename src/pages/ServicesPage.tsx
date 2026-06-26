import { Nav } from "@/components/Nav";
import ServicesTimeline from "@/components/ServicesTimeline";
import { PageMeta } from "@/components/PageMeta";
import { SiteFooter } from "@/components/SiteFooter";

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services | Content Viral Media"
        description="Personal branding, Instagram & LinkedIn management, video editing, podcast repurposing, UGC, and YouTube channel management."
      />
      <Nav />
      <main className="min-h-screen pt-24 md:pt-28">
        <ServicesTimeline />
      </main>
      <SiteFooter />
    </>
  );
}
