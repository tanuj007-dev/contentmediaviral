const prefetched = new Set<string>();

const ROUTE_IMPORTS: Record<string, () => Promise<unknown>> = {
  "/": () => import("@/pages/HomePage"),
  "/about": () => import("@/pages/AboutPage"),
  "/services": () => import("@/pages/ServicesPage"),
  "/portfolio": () => import("@/pages/PortfolioPage"),
  "/linkedin": () => import("@/pages/LinkedInPage"),
  "/podcast-repurposing": () => import("@/pages/PodcastRepurposingPage"),
};

export function prefetchRoute(href: string) {
  const path = href.split("#")[0] || "/";
  if (prefetched.has(path) || !ROUTE_IMPORTS[path]) return;
  prefetched.add(path);
  void ROUTE_IMPORTS[path]();
}
