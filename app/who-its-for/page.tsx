import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Who It's For",
  description:
    "Leadmill Partner is built for established print, wrap, graphics, and sign shops that can sell, permit, and install locally — and want a trade fabrication partner.",
};

const goodFit = [
  ["Established local customer base", "You already serve local businesses — printing, wraps, graphics, or signs — and they trust you."],
  ["Comfortable selling projects", "Someone at your shop can quote a $5,000+ project and follow up until it closes."],
  ["Can survey and measure", "You can get to the site, photograph it, and take accurate field measurements."],
  ["Can handle permitting", "You handle sign permits directly or through your own permit resource."],
  ["Can install or subcontract it", "You have an install crew, a subcontractor, or both."],
  ["Wants a fabrication partner", "You'd rather order illuminated signage wholesale than build a fabrication department."],
];

const poorFit = [
  ["Needs us to permit or install", "Leadmill doesn't provide permitting or installation. The local work is yours."],
  ["No commercial customer base", "The model is built on selling to local businesses, not walk-in retail."],
  ["Can't fund any ad spend", "The demand engine needs a real test budget — $500–$1,000/month to start. As a rule of thumb, the model fits shops doing roughly $30k+/month in revenue."],
  ["Meta ad account restricted or banned", "Campaigns run in your own ad account. If Meta has restricted your account, resolve that with Meta first — we can't and won't run ads around a restriction."],
  ["Can't sell a $5,000+ project", "Illuminated exterior signage is higher-ticket work. Someone has to close it."],
  ["Only wants cheap one-off fabrication", "The partnership is built for shops growing a signage product line, not occasional price-shopping."],
  ["Greater Houston shops", "Houston is our fabrication operation's home market. No exceptions."],
];

export default function WhoItsForPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            Built for shops that already serve local businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            Partner availability is limited by market. That only works if every partner we take can
            sell, permit, and install locally. Read this honestly before you apply.
          </p>
        </div>
        <div className="hazard" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-accent">Strong fit</h2>
            <div className="mt-6 space-y-4">
              {goodFit.map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-panel p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="text-accent">✓</span> {t}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-muted">Probably not a fit</h2>
            <div className="mt-6 space-y-4">
              {poorFit.map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-panel p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="text-danger">✕</span> {t}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection headline="Think you're a fit?" sub="The application takes about 2 minutes and tells us most of what we need. If it looks right, we'll book a call about your market." />
    </>
  );
}
