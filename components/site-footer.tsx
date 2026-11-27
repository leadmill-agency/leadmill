import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";

const columns = [
  {
    title: "Service",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/who-its-for", label: "Who it's for" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#faq", label: "Questions" },
    ],
  },
  {
    title: "Client results",
    links: [
      { href: "/results/class-1-graphics", label: "Class 1 Graphics" },
      { href: "/results/dk-tint-solutions", label: "DK Tint Solutions" },
      { href: "/results/houston-sign-crafters", label: "Houston Sign Crafters" },
    ],
  },
  {
    title: "What's included",
    links: [
      { href: "/how-it-works", label: "Facebook and Instagram ads" },
      { href: "/how-it-works", label: "Website rebuild" },
      { href: "/how-it-works", label: "SEO" },
      { href: "/how-it-works", label: "ChatGPT and AI search" },
      { href: "/how-it-works", label: "CRM and project tracker" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/apply", label: "Book a call" },
      { href: PHONE_HREF, label: `Call ${PHONE_DISPLAY}` },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="hazard" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_3.4fr]">
        <div>
          <p className="text-xl font-semibold tracking-tight">
            Lead<span className="text-accent">Mill</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            The marketing department for sign shops. Website, SEO, AI search and a CRM from $399
            a month, with ads on Growth. Free for 14 days. No contract.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 font-semibold">{col.title}</p>
              <ul className="space-y-2 text-muted">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("tel:") ? (
                      <a href={l.href} className="hover:text-foreground">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="hover:text-foreground">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} LeadMill. All rights reserved.
      </div>
    </footer>
  );
}
