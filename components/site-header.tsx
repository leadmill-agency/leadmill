import Link from "next/link";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/fulfillment", label: "Fabrication" },
  { href: "/who-its-for", label: "Who it's for" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <Link href="/apply" className="block bg-ink py-2 text-center text-sm text-white transition hover:opacity-90">
        $500/month partner program for print, wrap &amp; sign shops — limited availability by market.{" "}
        <span className="font-semibold text-accent-bright">Check yours →</span>
      </Link>
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
        <div className="flex items-center gap-3">
          <a
            href="sms:+19362618323?body=Hey%20LeadMill%20%E2%80%94%20I%20run%20a%20shop%20and%20want%20more%20sign%20leads.%20Shop%20name%3A%20"
            className="rounded-[10px] border border-line px-3 py-2 text-sm font-medium transition hover:border-ink sm:px-4"
          >
            Text us now
          </a>
          <Link
            href="/apply"
            className="rounded-[10px] bg-ink px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book a time
          </Link>
        </div>
      </div>
    </header>
  );
}
