import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Leadmill works for local trades that sell to businesses: Facebook and Instagram ads, a better website, SEO, and ChatGPT and AI search in one plan. The full work is free for 21 days, then $1,000 a month.",
};

const steps = [
  {
    n: "01",
    t: "Market check",
    d: "Apply and we look at your market together: competition, demand, and whether your area is still open. We take one shop per market. If the numbers don't work for you, we tell you and part as friends.",
  },
  {
    n: "02",
    t: "Setup: a few short steps on your side",
    d: "You give us access to your Facebook page and ad account, put your card on the ad account, and send photos and videos of finished work. We do the rest.",
  },
  {
    n: "03",
    t: "Ads go live",
    d: "We build Facebook and Instagram ads from your own work, with a lead form that screens out small jobs and DIY buyers. Each lead goes straight to your phone and email. Your 21 free days start here.",
  },
  {
    n: "04",
    t: "Your website gets rebuilt",
    d: "We rebuild your site so it looks like the best company in town and turns more visitors into quote requests: a quote button on every page, tap to call or text, and your best work up front. Already have a web person? We work with them.",
  },
  {
    n: "05",
    t: "Google and ChatGPT",
    d: "We add pages for each service and town, blog posts, and links from other trusted sites, so Google shows your company to local searchers. We also work on getting your company named when buyers ask ChatGPT and Google's AI who to call.",
  },
  {
    n: "06",
    t: "Day 22: you decide",
    d: "Keep going at $1,000 a month, or walk. No contract. You quote, sell and deliver every job the way you always have, and your customer never hears from Leadmill.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            What happens after you apply.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            No black box. Here is what we do in your 21 free days, in order, and what happens on
            day 22.
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
            $1,000 a month after a free 21-day trial. You pay Facebook directly for your ads, at
            least $25 a day. No contract and no revenue share: you keep every dollar of your retail
            sale. Our guarantee: 20 commercial leads in your first 60 days of ads, or we keep
            working free until you get them. That needs ad spend of at least $25 a day. A
            commercial lead is a business in your service area asking about a commercial job. The
            guarantee covers our fee, not ad spend.
          </p>
        </div>
      </section>

      <CtaSection headline="Ready to see your market?" sub="Apply and we'll tell you honestly whether the model fits your shop and your area." />
    </>
  );
}
