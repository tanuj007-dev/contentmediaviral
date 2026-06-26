import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollToHash } from "@/components/ScrollToHash";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const LinkedInPage = lazy(() => import("@/pages/LinkedInPage"));
const PodcastRepurposingPage = lazy(() => import("@/pages/PodcastRepurposingPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));

function PageLoader() {
  return <div className="min-h-screen bg-[var(--bg)]" aria-hidden />;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/linkedin" element={<LinkedInPage />} />
          <Route path="/podcast-repurposing" element={<PodcastRepurposingPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
