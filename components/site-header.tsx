import Link from "next/link";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/who-its-for", label: "Who it's for" },
  { href: "/fulfillment", label: "Fabrication" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Lead<span className="text-accent">Mill</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+19362618323"
            className="hidden text-sm font-medium text-muted transition hover:text-foreground sm:inline"
          >
            (936) 261-8323
          </a>
          <Link
            href="/apply"
            className="rounded-[10px] bg-ink px-3 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:px-4"
          >
            Schedule a call
          </Link>
        </div>
      </div>
    </header>
  );
}
