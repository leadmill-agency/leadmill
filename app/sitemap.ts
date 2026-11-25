import type { MetadataRoute } from "next";
import { cases } from "@/lib/cases";
import { SITE_URL, UPDATED } from "@/lib/site";

// Every public page. Proposal pages, /thank-you and /call are left out on purpose.
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: UPDATED.iso,
    changeFrequency: "monthly",
    priority,
  });
  return [
    page("", 1),
    ...cases.map((c) => page(`/results/${c.slug}`, 0.8)),
    page("/how-it-works", 0.7),
    page("/who-its-for", 0.7),
    page("/about", 0.7),
    page("/apply", 0.6),
    page("/contact", 0.5),
    page("/privacy", 0.2),
    page("/terms", 0.2),
  ];
}
