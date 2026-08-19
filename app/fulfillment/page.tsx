import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Trade Fabrication",
  description:
    "Trade-only fabrication of illuminated exterior signage for Leadmill partners. Sell under your brand, set your retail price — we build the sign.",
};

const products = [
  ["Front-lit channel letters", "The storefront standard — faces illuminated, built to your approved specs."],
  ["Halo / reverse-lit letters", "Light projects behind the letter for a premium glow against the wall."],
  ["Illuminated cabinet signs", "One continuous illuminated face for logos that work better as a single piece."],
  ["Illuminated logo and cloud signs", "Shaped sign bodies that keep detailed logos together."],
];

export default function FabricationPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            Trade fabrication for illuminated exterior signage.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Sell the project under your own brand. Leadmill fabricates the supported illuminated
            sign products you order from us — quoted per project at trade pricing, anchored by a
            UL-certified commercial sign facility in Houston, Texas.
          </p>
        </div>
        <div className="hazard" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">How the trade relationship works</h2>
            <ul className="mt-6 space-y-4 text-muted">
              {[
                "You own the end customer — Leadmill never solicits them",
                "You set the retail price and keep the full retail margin",
                "Fabrication is quoted per project, wholesale",
                "Send us jobs from any source — Leadmill ads, referrals, your existing customers",
                "You provide approved artwork, specs, and field measurements",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent">✓</span> {i}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl bg-panel p-5 text-sm font-medium">
              Leadmill does not provide permitting or installation. Your shop owns the local work —
              that&apos;s exactly why the customer stays yours.
            </p>
            <div className="mt-4 rounded-xl bg-panel p-5 text-sm">
              <p className="font-semibold">Where your signs are built</p>
              <p className="mt-1.5 text-muted">
                Our network is anchored by a UL-certified commercial sign manufacturing facility in
                Houston, Texas — the same production floor behind the work on this page. Questions
                about a spec get answered by people who bend the metal, in your time zone.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/work/luce.jpg"
              alt="Halo-lit exterior sign glowing at night"
              width={800}
              height={1000}
              className="h-64 w-full rounded-xl object-cover sm:h-80"
            />
            <Image
              src="/work/copper.jpg"
              alt="Backlit exterior sign above a storefront at dusk"
              width={800}
              height={1000}
              className="mt-6 h-64 w-full rounded-xl object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">What we fabricate.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {products.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-line bg-background p-6">
                <h3 className="text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Have a project outside these categories? Send the specs — if it&apos;s within our
            production capability, we&apos;ll quote it.
          </p>
        </div>
      </section>

      <CtaSection
        headline="Want a fabrication partner behind your shop?"
        sub="Partner membership is $1,000/month after a free 21-day trial, and includes the demand-generation system. Fabrication is quoted per job."
      />
    </>
  );
}
