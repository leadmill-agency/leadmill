import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How the Leadmill partner model works: we generate illuminated-sign opportunities and fabricate at trade pricing. Your shop sells, permits, and installs.",
};

const steps = [
  {
    n: "01",
    t: "Market check",
    d: "Apply and we look at your market together: competition, demand, and whether partner availability is open in your area. If the numbers don't work for your shop, we tell you and part as friends.",
  },
  {
    n: "02",
    t: "Campaign launch",
    d: "We build your local Meta campaign — creative built around illuminated exterior signage, lead forms that filter out yard-sign and DIY buyers, and routing that gets each lead to your phone and inbox fast.",
  },
  {
    n: "03",
    t: "Leads come to you, qualified",
    d: "Every lead includes the project basics: sign type, new or replacement, timeline, budget signal, and contact details. Automated follow-up keeps them warm until your team connects.",
  },
  {
    n: "04",
    t: "You quote and close",
    d: "Your shop, your brand, your retail price. You survey the site, quote the project, and close the customer the way you always have.",
  },
  {
    n: "05",
    t: "Send us the fabrication order",
    d: "When you want Leadmill to build the sign, submit the approved artwork, specs, and field measurements. We quote the fabrication wholesale, you approve, we build and ship.",
  },
  {
    n: "06",
    t: "You deliver the project",
    d: "Your shop handles permitting, installation, and the customer relationship through closeout. Your customer never hears from Leadmill.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            From your first campaign to your fabrication partner.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            No black box. Here is exactly what happens from the day you apply to the day your
            customer&apos;s sign is on their wall.
          </p>
        </div>
        <div className="hazard" />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ol className="space-y-6">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-6 rounded-2xl border border-line bg-panel p-6 sm:p-8">
              <span className="display shrink-0 text-4xl text-accent sm:text-5xl">{s.n}</span>
              <div>
                <h2 className="text-2xl font-semibold">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-2xl bg-panel p-6 text-sm text-muted">
          <p className="font-semibold text-foreground">The commitment, plainly:</p>
          <p className="mt-2">
            $1,000/month partner membership after a free 21-day trial. You fund your Meta ad spend separately ($500–$1,000/month
            is a sensible test, paid directly to Meta). Fabrication is quoted per project at trade
            pricing. No revenue share — you keep every dollar of your retail sale.
          </p>
        </div>
      </section>

      <CtaSection headline="Ready to see your market?" sub="Apply and we'll tell you honestly whether the model fits your shop and your area." />
    </>
  );
}
