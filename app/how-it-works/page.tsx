import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From Meta ad to installed sign: how LeadMill generates commercial-sign leads for your shop and backs you up with optional fulfillment.",
};

const steps = [
  {
    n: "01",
    t: "Market Review",
    d: "Before any money moves, we look at your market together: competition, demand, realistic project values, and whether permit and installation coordination are supported in your area. If the numbers don't work, we tell you and part as friends.",
  },
  {
    n: "02",
    t: "Campaign launch",
    d: "We build your local Meta campaign — sign-specific creative, a lead form that filters out yard-sign and DIY buyers, and routing that gets each lead to your phone and inbox within seconds. Typical launch is about a week after access and payment.",
  },
  {
    n: "03",
    t: "Leads come to you",
    d: "Every lead includes the project basics: sign type, new or replacement, timeline, budget signal, and contact details. You get an alert the moment it lands. Speed matters — commercial buyers talk to whoever answers first.",
  },
  {
    n: "04",
    t: "You quote and close",
    d: "Your shop, your brand, your price. You survey, quote, and close the way you always have. We track outcomes in a simple CRM pipeline so we both know what the campaign is actually producing — quotes and closed revenue, not just leads. Don't have someone free to work new leads? Our Closing Desk tier answers, qualifies, and quotes off your price sheet for you.",
  },
  {
    n: "05",
    t: "Fulfillment when you need it",
    d: "Close a job you can't build in-house? Send it to the fulfillment network. Production, freight, permit coordination, engineering, installer sourcing — each component quoted separately, per project. Use all of it, some of it, or none of it.",
  },
  {
    n: "06",
    t: "Weekly reporting",
    d: "Every week you see spend, leads, cost per qualified lead, quotes, closed jobs, and closed revenue. If leads are being missed, we flag it. If the campaign isn't producing, we fix it or pause it — we don't hide behind impressions.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            From Meta ad to installed sign.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            No black box. Here is exactly what happens from the day you apply to the day your
            customer&apos;s sign is on the wall.
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
                <h2 className="display text-2xl sm:text-3xl">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-2xl bg-panel p-6 text-sm text-muted">
          <p className="font-semibold text-foreground">The commitment, plainly:</p>
          <p className="mt-2">
            $2,000/month management fee. You fund ad spend separately ($1,500–$3,000/month
            recommended, paid directly to Meta). 90-day initial commitment. Fulfillment quoted per
            project — no membership fee.
          </p>
          <p className="mt-3">
            <span className="font-semibold text-foreground">Closing Desk tier:</span> we answer
            every lead, qualify it, quote off your price sheet, and book the site survey — your
            shop fabricates and installs. $2,000/month plus 8% of closed job revenue.
          </p>
        </div>
      </section>

      <CtaSection headline="Ready to see your market?" sub="Apply for a Market Review. If your market is open and the fit is right, we'll show you exactly what the program would look like for your shop." />
    </>
  );
}
