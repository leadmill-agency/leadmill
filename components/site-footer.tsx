import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="hazard" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold tracking-tight">
            Lead<span className="text-accent">Mill</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Built by operators of a real commercial sign company. We help sign shops win more
            channel-letter and storefront-sign jobs.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Pages</p>
          <ul className="space-y-2 text-muted">
            <li><Link href="/how-it-works" className="hover:text-foreground">How It Works</Link></li>
            <li><Link href="/fulfillment" className="hover:text-foreground">Fulfillment</Link></li>
            <li><Link href="/who-its-for" className="hover:text-foreground">Who It&apos;s For</Link></li>
            <li><Link href="/apply" className="hover:text-foreground">Apply</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Legal</p>
          <ul className="space-y-2 text-muted">
            <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
          </ul>
          <p className="mt-6 text-xs text-muted">
            Fulfillment services are quoted separately by project and depend on market coverage.
          </p>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} LeadMill. All rights reserved.
      </div>
    </footer>
  );
}
