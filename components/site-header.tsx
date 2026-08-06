import Link from "next/link";

const nav = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/fulfillment", label: "Fulfillment" },
  { href: "/who-its-for", label: "Who It's For" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="display text-2xl tracking-wide">
          Lead<span className="text-accent">Mill</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/apply"
          className="display bg-accent px-4 py-2 text-sm text-accent-ink transition hover:brightness-110"
        >
          Apply for a Market Review
        </Link>
      </div>
    </header>
  );
}
