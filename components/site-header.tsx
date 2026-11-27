import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/fabrication", label: "Fabrication" },
  { href: "/#results", label: "Results" },
  { href: "/who-its-for", label: "Who it's for" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Lead<span className="text-accent">Mill</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-medium text-muted transition hover:text-foreground md:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/apply"
            className="inline-block rounded-[10px] bg-ink px-3 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:px-4"
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
}
