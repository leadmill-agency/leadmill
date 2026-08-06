import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Fulfillment",
  description:
    "Optional fulfillment for closed commercial-sign jobs: production quoting, freight, permit coordination, engineering, and installer sourcing — quoted per project.",
};

const components = [
  ["Sign production", "Channel letters, cabinet signs, and exterior signage built to your approved drawings and specs."],
  ["Freight", "Packaging and shipping coordination from factory to your shop or the job site."],
  ["Permit coordination", "Application prep, submission, and correction handling in supported jurisdictions."],
  ["Engineering", "Stamped drawings and structural calcs coordinated when the jurisdiction requires them."],
  ["Installer sourcing", "Vetted, insured installers in supported markets — with pricing before you commit."],
  ["Installation coordination", "Scheduling, site requirements, and completion documentation for the install."],
];

export default function FulfillmentPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Fulfillment network</p>
          <h1 className="display mt-2 max-w-3xl text-5xl sm:text-6xl">
            Sell the Job. We Can Help You Deliver It.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            The most expensive words in the sign business are &quot;we don&apos;t do those.&quot;
            LeadMill&apos;s fulfillment network lets you say yes to channel-letter and storefront-sign
            projects without buying equipment or hiring crews.
          </p>
        </div>
        <div className="hazard" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">What the Network Covers</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {components.map(([t, d]) => (
            <div key={t} className="border border-line bg-panel p-6">
              <h3 className="display text-2xl">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">How Pricing Works</h2>
          <ul className="mt-6 space-y-4 text-muted">
            <li className="flex gap-3"><span className="text-accent">■</span> Every project is quoted separately. Production, freight, permits, engineering, and installation are individual line items — you see each one.</li>
            <li className="flex gap-3"><span className="text-accent">■</span> You mark it up. You control the retail price to your customer. Our quote is your cost.</li>
            <li className="flex gap-3"><span className="text-accent">■</span> Payment before production. New accounts pay in full before fabrication starts, and nothing is built without your signed drawing approval.</li>
            <li className="flex gap-3"><span className="text-accent">■</span> No membership fee during the pilot. Agency clients get network access included.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">What We Won&apos;t Promise</h2>
        <p className="mt-4 text-muted">
          Permit and installation coordination depend on where the job is. Some jurisdictions and
          markets are fully supported; others are production-and-freight only. Before you commit to
          anything, we tell you exactly what&apos;s covered in your market — in writing. No
          nationwide promises where coverage doesn&apos;t exist.
        </p>
      </section>

      <CtaSection headline="Want the Backend Without Building It?" />
    </>
  );
}
