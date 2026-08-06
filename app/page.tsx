import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";

const faqItems = [
  {
    q: "Do I need to manufacture channel letters?",
    a: "No. Many of our best-fit shops outsource channel letters entirely. Our fulfillment network can quote production for closed jobs, or you can keep using your existing wholesaler.",
  },
  {
    q: "What if I already have a wholesaler?",
    a: "Keep them. Fulfillment is optional and quoted per project. Plenty of shops use us for leads only and fulfill through their existing relationships.",
  },
  {
    q: "Do I keep the customer?",
    a: "Yes, always. The lead goes to you, you close the job, you set the retail price, and the customer is yours. We stay behind the scenes.",
  },
  {
    q: "How much ad spend is required?",
    a: "We recommend $1,500–$3,000 per month in ad spend, funded by you and paid directly to Meta. That's separate from the management fee.",
  },
  {
    q: "Is fulfillment required?",
    a: "No. It's there when you need it — production, permit coordination, installer sourcing — and every component is quoted separately per project.",
  },
  {
    q: "Can you handle permits and installation everywhere?",
    a: "No, and we won't pretend otherwise. Permit and installation coordination depend on market coverage. We tell you exactly what's supported in your market before you commit.",
  },
  {
    q: "Is my market exclusive?",
    a: "Pilot clients get local protection while they're active — we won't run campaigns for a competing shop in your practical service area. We don't sell permanent citywide exclusivity.",
  },
  {
    q: "How quickly do I need to answer leads?",
    a: "Fast. Commercial sign buyers get quotes from whoever answers first. We expect leads contacted within minutes, not days — and we track it. If leads get ignored, we pause the campaign rather than waste your money.",
  },
  {
    q: "What if nobody on my team has time to work new leads?",
    a: "That's what the Closing Desk tier is for. We answer every lead, qualify it, quote off your price sheet, and book the site survey — your shop fabricates and installs. $2,000/month plus 8% of closed job revenue.",
  },
  {
    q: "Do you guarantee closed jobs?",
    a: "No. Anyone who guarantees closed jobs is lying to you. We generate qualified opportunities and track them honestly. Closing is your job — or ours, on the Closing Desk tier — and we only take on shops we believe can win the work.",
  },
  {
    q: "Do you serve Houston?",
    a: "No. Greater Houston is excluded from the program.",
  },
];

const usedToTake = [
  "A fabrication shop with channel-letter benders and LED inventory",
  "Someone who knows permits, engineering stamps, and landlord criteria",
  "An install crew with a bucket truck and liability coverage",
  "A steady source of commercial buyers — not walk-ins and yard signs",
  "A salesperson free to chase every quote for weeks",
];

const withLeadmill = [
  "Qualified commercial-sign leads arriving from your local Meta campaign",
  "You quote and close under your own brand, at your own price",
  "Wholesale production quoted per job through the fulfillment network",
  "Permit, engineering, and installer coordination where coverage exists",
  "A Closing Desk option if nobody on your team can work the leads",
];

const timeline = [
  {
    k: "Week 1",
    t: "Your campaign goes live",
    d: "We review your market together, build sign-specific creative, and launch your local Meta campaign. Lead routing lands every inquiry on your phone and inbox within seconds.",
  },
  {
    k: "Weeks 2–4",
    t: "Leads start arriving",
    d: "Each lead comes with project basics: sign type, timeline, budget signal, contact details. You call fast, survey, and quote. We track every outcome in the CRM so nothing slips.",
  },
  {
    k: "Days 30–60",
    t: "Your pipeline takes shape",
    d: "Quotes go out, jobs close, and fulfillment quotes production for anything your shop can't build in-house. Weekly reporting shows spend, leads, quotes, and closed revenue — not vanity metrics.",
  },
  {
    k: "Day 90",
    t: "You decide on the numbers",
    d: "The 90-day commitment ends with a simple review: leads, quotes, closed jobs, and revenue against what you spent. If the math works, we scale. If it doesn't, we part as friends.",
  },
];

const vslUrl = process.env.NEXT_PUBLIC_VSL_URL;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="rise text-lg text-muted">
              For established sign, wrap, print &amp; graphics shops:
            </p>
            <h1 className="display rise-2 mt-3 text-5xl sm:text-6xl md:text-7xl">
              Win more <span className="text-accent">channel-letter jobs</span> without building a
              factory.
            </h1>
            <p className="rise-3 mx-auto mt-6 max-w-2xl text-lg text-muted">
              LeadMill runs your local Meta ads and sends qualified commercial-sign leads straight
              to your phone. You close and keep the customer. Our fulfillment network builds what
              your shop can&apos;t.
            </p>
            <div className="rise-3 mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/apply" className="btn-primary text-lg">
                Apply for a Market Review
              </Link>
              <Link href="/how-it-works" className="btn-secondary text-lg">
                See the process
              </Link>
            </div>
            <p className="rise-3 mt-4 text-sm text-muted">
              Takes about 3 minutes. No payment required to apply.
            </p>
          </div>

          {vslUrl && (
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line">
              <video src={vslUrl} controls preload="metadata" className="w-full" />
            </div>
          )}

          {/* Product-in-context: real install + the lead alert your phone gets */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            <Image
              src="/work/copper.jpg"
              alt="Backlit channel letters for Copper Espresso Bar, installed above a storefront at dusk"
              width={1600}
              height={1200}
              priority
              className="h-[420px] w-full rounded-t-2xl object-cover sm:h-[520px]"
            />
            <div className="absolute left-4 top-6 w-72 rounded-xl bg-background/95 p-4 text-left shadow-xl backdrop-blur sm:left-10 sm:top-10">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-accent">New lead — just now</p>
                <span className="h-2 w-2 rounded-full bg-accent-bright" />
              </div>
              <p className="mt-2 text-sm font-semibold">Storefront channel letters</p>
              <p className="mt-1 text-sm text-muted">
                New location, ~18 ft fascia. Wants a quote this week.
              </p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-white">
                  Call now
                </span>
                <span className="rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-muted">
                  View details
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hazard" />
      </section>

      {/* The trade-off, reframed */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">
          Winning big sign jobs used to mean building the whole backend yourself.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-panel p-8 sm:p-10">
            <p className="text-lg font-semibold">What it used to take</p>
            <ul className="mt-6 space-y-4 text-muted">
              {usedToTake.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-danger">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-ink p-8 text-white sm:p-10">
            <p className="text-lg font-semibold">
              What it takes with Lead<span className="text-accent-bright">Mill</span>
            </p>
            <ul className="mt-6 space-y-4 text-white/80">
              {withLeadmill.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-accent-bright">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Real work strip */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display max-w-xl text-3xl sm:text-4xl">
              The kind of work your leads will ask for.
            </h2>
            <p className="max-w-sm text-sm text-muted">
              Channel letters and storefront signage produced and installed through our fulfillment
              network&apos;s shops.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: "/work/luce.jpg", alt: "Halo-lit channel letters for Luce Avenue Coffee Roasters, glowing at night" },
              { src: "/work/karma.jpg", alt: "Dimensional letters for Karma Kolache & Macarons on a brick tower facade" },
              { src: "/work/slickcity.jpg", alt: "Large front-lit channel letters for Slick City Action Park at dusk" },
              { src: "/work/nautica.jpg", alt: "Front-lit channel letters for Nautical Bowls above a brick storefront" },
            ].map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={800}
                height={1000}
                className={`w-full rounded-xl object-cover ${i % 2 === 1 ? "mt-6 h-64 sm:h-80" : "h-64 sm:h-80"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 90-day timeline */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">What the first 90 days look like.</h2>
            <p className="mt-5 max-w-md text-muted">
              A 90-day initial commitment, $2,000/month, ad spend funded by you. No long contract,
              no black box — a weekly report and a hard look at the numbers at the end.
            </p>
            <Link href="/how-it-works" className="mt-6 inline-block font-medium text-accent">
              See the full process →
            </Link>
          </div>
          <ol className="space-y-10 border-l border-line pl-8">
            {timeline.map((step) => (
              <li key={step.k} className="relative">
                <span className="absolute -left-[41px] top-1 h-2.5 w-2.5 rounded-full bg-accent-bright ring-4 ring-background" />
                <p className="text-sm font-semibold text-accent">{step.k}</p>
                <h3 className="mt-1 text-xl font-semibold">{step.t}</h3>
                <p className="mt-2 text-muted">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sound familiar */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <h2 className="display text-center text-4xl sm:text-5xl">
            If you run an established shop, one of these is probably you.
          </h2>
          <div className="mt-14 space-y-12">
            <div>
              <h3 className="text-xl font-semibold">The referral-dependent shop</h3>
              <p className="mt-2 text-muted">
                You do good work, so referrals and repeat customers keep you alive. But some months
                they carry you and some months they vanish — and you can&apos;t hire, plan, or grow
                around a lead source you don&apos;t control.
              </p>
            </div>
            <div className="border-y border-line py-12">
              <h3 className="text-xl font-semibold">The shop that turns work away</h3>
              <p className="mt-2 text-muted">
                A $10,000 channel-letter job walks in and you pass on it. No fabrication capacity,
                no permit experience, no installer. You keep the $500 banner work and watch the real
                margin go to a competitor.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">The shop that got burned</h3>
              <p className="mt-2 text-muted">
                You already tried a marketing agency. They sent yard-sign and birthday-banner leads,
                counted them as wins, and billed you anyway — because they didn&apos;t know a channel
                letter from a coroplast sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two ways to run it */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="display max-w-2xl text-4xl sm:text-5xl">Two ways to run it.</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Both include the same campaign, lead routing, CRM, and weekly reporting. The difference
            is who works the leads.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-background p-8 sm:p-10">
              <h3 className="text-2xl font-semibold">Growth</h3>
              <p className="mt-1 text-muted">Your team closes — we send the leads.</p>
              <p className="mt-6 text-3xl font-semibold">
                $2,000<span className="text-lg font-normal text-muted">/month</span>
              </p>
              <p className="mt-1 text-sm text-muted">+ your ad spend, paid directly to Meta</p>
              <ul className="mt-8 space-y-3 text-sm text-muted">
                <li>Meta campaign setup and management</li>
                <li>Sign-specific ad creative</li>
                <li>Lead routing to your phone and inbox</li>
                <li>CRM pipeline and outcome tracking</li>
                <li>Weekly performance reporting</li>
                <li>Fulfillment network access</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-accent-bright bg-background p-8 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">Closing Desk</h3>
                <span className="rounded-full bg-accent-bright px-3 py-1 text-xs font-semibold text-accent-ink">
                  For shops with no free hands
                </span>
              </div>
              <p className="mt-1 text-muted">We answer, qualify, and quote — you build and install.</p>
              <p className="mt-6 text-3xl font-semibold">
                $2,000<span className="text-lg font-normal text-muted">/month</span>
                <span className="text-lg font-normal text-muted"> + 8% of closed jobs</span>
              </p>
              <p className="mt-1 text-sm text-muted">+ your ad spend, paid directly to Meta</p>
              <ul className="mt-8 space-y-3 text-sm text-muted">
                <li>Everything in Growth</li>
                <li>Every lead answered and qualified for you</li>
                <li>Quotes prepared from your own price sheet</li>
                <li>Site surveys booked to your calendar</li>
                <li>You approve every quote before it goes out</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">
            Fulfillment — production, freight, permits, engineering, installation — is quoted
            separately per project on both tiers, and only when you ask.{" "}
            <Link href="/fulfillment" className="font-medium text-accent">
              How fulfillment works →
            </Link>
          </p>
        </div>
      </section>

      {/* Fit */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">Built for real shops, not everyone.</h2>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-semibold">A good fit looks like:</p>
            <ul className="mt-5 space-y-3 text-muted">
              {[
                "An established shop with a track record",
                "A commercial customer base",
                "Someone who answers new leads fast",
                "Room in the budget to fund ad spend",
                "An appetite for larger projects",
                "Willingness to track lead outcomes in a CRM",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent">✓</span> {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-muted">We&apos;re not for:</p>
            <ul className="mt-5 space-y-3 text-muted">
              {[
                "Brand-new businesses or hobby shops",
                "Residential-only companies",
                "Owners who can't answer leads",
                "Shops seeking guaranteed revenue",
                "Greater Houston competitors",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-danger">✕</span> {i}
                </li>
              ))}
            </ul>
            <Link href="/who-its-for" className="mt-6 inline-block font-medium text-accent">
              Full fit checklist →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <h2 className="display text-center text-4xl sm:text-5xl">Straight answers.</h2>
          <div className="mt-10">
            <Faq items={faqItems} />
          </div>
        </div>
      </section>

      <CtaSection
        headline="See if your market is open"
        sub="One shop per market during the pilot. Tell us about yours — if the numbers don't work, we'll say so and part as friends."
      />
    </>
  );
}
