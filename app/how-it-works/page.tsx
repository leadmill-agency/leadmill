import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Leadmill works for sign shops: a website that wins quotes, SEO, ChatGPT and AI search, and a CRM and project tracker, with Facebook, Instagram and Google ads on Growth. The full work is free for 14 days, then from $399 a month.",
};

const steps = [
  {
    n: "01",
    t: "Book a call",
    d: "We look at your shop and your area together: competition, demand, and whether the numbers work. If they don't, we tell you and part as friends.",
  },
  {
    n: "02",
    t: "Setup: a few short steps on your side",
    d: "You give us access to your domain and Google Business Profile, and send photos and videos of finished signs. On Growth, you also give us your Facebook page and ad accounts and put your card on them. We do the rest.",
  },
  {
    n: "03",
    t: "Your website gets rebuilt",
    d: "We rebuild your site so it looks like the best shop in town and turns more visitors into quote requests: a quote button on every page, tap to call or text, and your best signs up front. Already have a web person? We work with them.",
  },
  {
    n: "04",
    t: "Google and ChatGPT",
    d: "We add pages for each sign type and town, blog posts, and links from other trusted sites, so Google shows your shop to local searchers. We also work on getting your shop named when buyers ask ChatGPT and Google's AI who to call.",
  },
  {
    n: "05",
    t: "On Growth: ads go live",
    d: "We build Facebook, Instagram and Google ads from your own signs, with a lead form that screens out small jobs. Each lead goes straight to your phone and email.",
  },
  {
    n: "06",
    t: "Day 15: you decide",
    d: "Keep going at $399 a month for Core or $800 a month for Growth, or walk. No contract. You quote, sell and install every job the way you always have, and your customer never hears from Leadmill.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            What happens after you schedule a call.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            No black box. Here is what we do in your 14 free days, in order, and what happens on
            day 15.
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
            $399 a month for Core, or $800 a month for Growth, after a free 14-day trial. On Growth
            you pay Facebook and Google directly for your ads. No contract and no revenue share: you
            keep every dollar of your sale.
          </p>
        </div>
      </section>

      <CtaSection headline="Ready to start?" />
    </>
  );
}
