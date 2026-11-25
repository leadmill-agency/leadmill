// Site-wide facts used by metadata, the sitemap, structured data and the page bylines.

export const SITE_URL = "https://www.leadmill.co";
export const SITE_NAME = "Leadmill";
// Already shown on the privacy and terms pages.
export const EMAIL = "hello@leadmill.co";

export const AUTHOR = {
  name: "Rameel Sheikh",
  role: "Founder, Leadmill",
  photo: "/founder.png",
  url: "/about",
};

// The date the trade, results and about pages were last reviewed. Change it only when the
// content changes (AI search playbook, section 3C).
export const UPDATED = { iso: "2026-11-25", label: "November 25, 2026" };

// Structured data: who Leadmill is and who runs it. Rendered once, in the root layout.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "Leadmill is the growth department for contractors and the trades: Facebook and Instagram ads, a rebuilt website, SEO, ChatGPT and AI search, and a CRM and project tracker for one flat fee.",
      email: EMAIL,
      telephone: "+1-936-261-8323",
      areaServed: "US",
      founder: { "@id": `${SITE_URL}/about#rameel-sheikh` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/about#rameel-sheikh`,
      name: AUTHOR.name,
      jobTitle: "Founder",
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}${AUTHOR.photo}`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd({ path, headline, description, image }: { path: string; headline: string; description: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished: UPDATED.iso,
    dateModified: UPDATED.iso,
    author: { "@id": `${SITE_URL}/about#rameel-sheikh` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
  };
}
