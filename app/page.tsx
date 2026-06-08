import type { Metadata } from "next";
import "./home-tailwind.css";
import HomePartA from "@/components/home/HomePartA";
import HomePartB from "@/components/home/HomePartB";
import { HomeClient } from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Content Viral Media — A content engine for founders.",
  description:
    "We turn one recording into a full month of content — across LinkedIn, Instagram & YouTube. 100M+ organic views generated. Built by Garvit Vijay.",
};

export default function Page() {
  return (
    <>
      <HomePartA />
      <HomePartB />
      <HomeClient />
    </>
  );
}
