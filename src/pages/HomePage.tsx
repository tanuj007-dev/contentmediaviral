import { lazy, Suspense } from "react";
import HomePartA from "@/components/home/HomePartA";
import { PageMeta } from "@/components/PageMeta";
import "@/styles/home.css";

const HomePartB = lazy(() => import("@/components/home/HomePartB"));

function HomeBelowFoldFallback() {
  return <div className="min-h-[40vh] bg-[var(--bg)]" aria-hidden />;
}

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Content Viral Media | A content engine for founders."
        description="We turn one recording into a full month of content across LinkedIn, Instagram & YouTube. 100M+ organic views generated. Built by Garvit Vijay."
      />
      <HomePartA />
      <Suspense fallback={<HomeBelowFoldFallback />}>
        <HomePartB />
      </Suspense>
    </>
  );
}
