import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Proposal pages, the thank-you page and the call page stay out of search.
const disallow = ["/proposal/", "/thank-you", "/call"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // Named so it is plain that search and AI assistants are welcome.
      {
        userAgent: ["OAI-SearchBot", "GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot"],
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
