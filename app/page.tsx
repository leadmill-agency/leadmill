import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import RoiCalculator from "@/components/roi-calculator";

const faqItems = [
  {
    q: "What does Leadmill actually do?",
    a: "We generate illuminated-sign leads for your shop, and fabricate at trade pricing when you want us to.",
  },
  {
    q: "Who owns the customer?",
    a: "You do — the relationship, the retail price, and every dollar of the sale.",
  },
  {
    q: "Does Leadmill handle permits or installation?",
    a: "No. That local work is yours — it's exactly why the customer stays yours.",
  },
  {
    q: "Does Leadmill take a percentage of my sale?",
    a: "No. No revenue share, ever.",
  },
  {
    q: "Who pays for the ads?",
    a: "You fund your own Meta ad budget, paid directly to Meta.",
  },
  {
    q: "Is fabrication included in the $1,000?",
    a: "No — fabrication is quoted per project at trade pricing, and it's always optional.",
  },
  {
    q: "Do you guarantee closed jobs?",
    a: "No. Anyone who guarantees closed jobs is lying to you.",
  },
  {
    q: "Do you serve Houston?",
    a: "No — Greater Houston is our own shop's market and is excluded.",
  },
];

const leadmillDoes = [
  "Meta campaign setup and management",
  "Ad creative built for illuminated-sign buyers",
  "Lead capture and sign-specific qualification",
  "Automated follow-up so leads don't go cold",
  "Trade fabrication of illuminated exterior signs, quoted per job",
];

const partnerDoes = [
  "Sells the project and owns the customer",
  "Sets the retail price and keeps every dollar of it",
  "Handles the site survey and field measurements",
  "Handles permitting and landlord approvals",
  "Handles installation and electrical connection",
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
              For sign, print, wrap &amp; graphics shops:
            </p>
            <h1 className="display rise-2 mt-3 text-5xl sm:text-6xl md:text-7xl">
              More <span className="text-accent">$6,000&#43; sign jobs</span>. Not more junk
              leads.
            </h1>
            <p className="rise-3 mx-auto mt-6 max-w-2xl text-lg text-muted">
              Meta campaigns that put commercial sign buyers on your phone — run by
              people who own a sign shop. You sell. You keep every dollar.
            </p>
            <p className="rise-3 mt-5 text-lg font-semibold">
              First 21 days: you fund only the ad spend (~$20/day) — our work is free. Then
              $1,000/month flat. No revenue share, no contract.
            </p>
            <div className="rise-3 mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/apply" className="btn-primary text-lg">
                Check My Market
              </Link>
              <Link href="/how-it-works" className="btn-secondary text-lg">
                See how it works
              </Link>
            </div>
            <p className="rise-3 mt-4 text-sm text-muted">
              Takes about 2 minutes. Limited partner availability by market.
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
              alt="Backlit exterior sign for Copper Espresso Bar, installed above a storefront at dusk"
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
              <p className="mt-2 text-sm font-semibold">Illuminated storefront sign</p>
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

      {/* Proof band — our own account, real numbers */}
      <section className="border-b border-line bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-accent-bright">Not a promise — a screenshot</p>
              <h2 className="display mt-2 text-4xl sm:text-5xl">
                The same system, running for our own shop.
              </h2>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dd className="text-4xl font-semibold">~$20</dd>
                  <dt className="mt-1 text-sm text-white/70">average cost per qualified lead, last 30 days</dt>
                </div>
                <div>
                  <dd className="text-4xl font-semibold">144</dd>
                  <dt className="mt-1 text-sm text-white/70">sign leads in those 30 days</dt>
                </div>
              </dl>
              <p className="mt-6 max-w-md text-sm text-white/70">
                Our own shop&apos;s account. Your market will differ — you&apos;ll see every
                number, weekly.
              </p>
            </div>
            <Image
              src="/proof-meta-30d.png"
              alt="Meta Ads Manager screenshot: three campaigns, 144 leads in 30 days at $17-26 per lead"
              width={1600}
              height={474}
              className="w-full rounded-xl border border-white/15"
            />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display max-w-2xl text-4xl sm:text-5xl">
              Referrals built your shop. They just can&apos;t be scheduled.
            </h2>
            <p className="mt-6 max-w-xl text-muted">
              Some months they show up. Some months they don&apos;t.
            </p>
          </div>
          <ul className="space-y-4 self-center rounded-2xl bg-panel p-8 text-muted sm:p-10">
            {[
              "Commercial-sign inquiries coming in every week",
              "Every lead qualified before it reaches your phone",
              "Your brand, your customer, your retail price",
              "One shop per market — yours is exclusive",
              "Trade fabrication backup, only if you want it",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 text-accent">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The four-step flow */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="display max-w-2xl text-4xl sm:text-5xl">How the partnership works.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              {
                n: "1",
                t: "Leadmill generates demand",
                d: "Local Meta campaigns for illuminated signage, in your market only.",
              },
              {
                n: "2",
                t: "Your shop sells the project",
                d: "Your lead, your customer, your retail price.",
              },
              {
                n: "3",
                t: "You deliver the job",
                d: "Survey, permits, install — your shop, your way.",
              },
              {
                n: "4",
                t: "Optional: we fabricate",
                d: "Trade-priced from our UL-certified Houston facility. Many partners never use it.",
              },
            ].map((s, i) => (
              <div key={s.n} className="relative rounded-2xl bg-background p-6">
                <span className="text-sm font-semibold text-accent">Step {s.n}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
                {i < 3 && (
                  <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-accent-bright md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample job economics */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="display text-4xl sm:text-5xl">
                If you use our fabrication, one job can look like this.
              </h2>
              <p className="mt-5 max-w-md text-muted">
                Fabricate in-house? Skip this section — the leads are yours either way.
              </p>
            </div>
            <div className="self-center overflow-hidden rounded-2xl border border-line bg-background">
              <div className="border-b border-line bg-ink px-6 py-4 text-white">
                <p className="font-semibold">Example: illuminated storefront sign</p>
                <p className="text-sm text-white/70">
                  New channel-letter set for a local business — a typical $6,000-class project
                </p>
              </div>
              <dl className="divide-y divide-line px-6 text-sm">
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-muted">Your retail price to the customer</dt>
                  <dd className="font-semibold">$6,000</dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-muted">LeadMill trade fabrication</dt>
                  <dd className="font-medium">− $3,200</dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-muted">Local permit (varies by jurisdiction)</dt>
                  <dd className="font-medium">− $600</dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="text-muted">Local installation (your crew or sub)</dt>
                  <dd className="font-medium">− $1,000</dd>
                </div>
                <div className="flex items-center justify-between bg-panel px-6 py-4 -mx-6">
                  <dt className="font-semibold">Your gross profit on the job</dt>
                  <dd className="text-xl font-semibold text-accent">≈ $1,200</dd>
                </div>
              </dl>
              <p className="border-t border-line px-6 py-4 text-xs text-muted">
                Illustrative — quoted per project. You set the retail price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Run your own numbers */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">Run your own numbers.</h2>
        <p className="mt-5 max-w-2xl text-muted">
          Drag the sliders. The defaults are our shop&apos;s real numbers.
        </p>
        <RoiCalculator />
      </section>

      {/* Responsibility split */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">
          A clean split. No gray areas.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink p-8 text-white sm:p-10">
            <p className="text-lg font-semibold">
              Lead<span className="text-accent-bright">Mill</span> handles
            </p>
            <ul className="mt-6 space-y-4 text-white/80">
              {leadmillDoes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-accent-bright">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-panel p-8 sm:p-10">
            <p className="text-lg font-semibold">Your shop handles</p>
            <ul className="mt-6 space-y-4 text-muted">
              {partnerDoes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          Leadmill does not provide permitting or installation — that local expertise is exactly why
          the customer belongs to you.
        </p>
      </section>

      {/* Real work strip */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display max-w-xl text-3xl sm:text-4xl">
              The kind of work you&apos;ll be selling.
            </h2>
            <p className="max-w-sm text-sm text-muted">
              Illuminated exterior signage from the commercial sign company behind Leadmill.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: "/work/luce.jpg", alt: "Halo-lit exterior sign for Luce Avenue Coffee Roasters, glowing at night" },
              { src: "/work/karma.jpg", alt: "Dimensional letters for Karma Kolache & Macarons on a brick tower facade" },
              { src: "/work/slickcity.jpg", alt: "Large front-lit exterior sign for Slick City Action Park at dusk" },
              { src: "/work/nautica.jpg", alt: "Front-lit exterior sign for Nautical Bowls above a brick storefront" },
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

      {/* HSC case study */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Image
            src="/work/karma.jpg"
            alt="Dimensional letters fabricated and installed by Houston Sign Crafters"
            width={800}
            height={1000}
            className="h-96 w-full rounded-2xl object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-accent">How we know this works</p>
            <h2 className="display mt-2 text-4xl sm:text-5xl">
              Our first client became our fabrication anchor.
            </h2>
            <p className="mt-6 max-w-lg text-muted">
              Leadmill started as the campaigns behind{" "}
              <span className="font-medium text-foreground">Houston Sign Crafters</span> — the
              UL-certified shop whose work fills this page, and the anchor of our fabrication
              network. Now both sides of that system run for shops outside Houston.
            </p>
          </div>
        </div>
      </section>

      {/* Why the price */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">
          Why $1,000 and not an agency retainer?
        </h2>
        <div className="mt-6 space-y-2 text-left text-muted sm:text-center">
          <p>Agencies charge you before you&apos;ve seen a lead.</p>
          <p>We work free for 21 days — you fund only the ads.</p>
          <p className="font-medium text-foreground">
            We make our real money when you sell signs. When you win, we build.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-accent-bright bg-background p-8 text-left">
          <h3 className="text-2xl font-semibold">Leadmill Partner</h3>
          <p className="mt-4 text-4xl font-semibold">
            $1,000<span className="text-lg font-normal text-muted">/month</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            &#43; your Meta ad spend, paid directly to Meta. Scale it up or down anytime.
          </p>
          <div className="mt-3 rounded-lg bg-panel px-3 py-2 text-sm">
            <p className="font-semibold">First 21 days free — you only fund the ads.</p>
            <ul className="mt-1.5 space-y-1 text-muted">
              <li>~$20/day to Meta (about $420 total)</li>
              <li>Day 22: continue at $1,000/month, or walk</li>
              <li>No contract. Rate locks while you stay active.</li>
            </ul>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li>Meta campaign setup and management</li>
            <li>Illuminated-sign ad creative</li>
            <li>Lead capture, qualification, and follow-up</li>
            <li>Simple pipeline and reporting</li>
            <li>Access to Leadmill trade fabrication</li>
          </ul>
          <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
            No revenue share. Fabrication quoted separately per project.
          </p>
          <Link href="/apply" className="btn-primary mt-6 w-full text-center">
            Check My Market
          </Link>
        </div>
      </section>

      {/* Fit */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">Built for real shops, not everyone.</h2>
          <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
            <div>
              <p className="text-lg font-semibold">A strong partner looks like:</p>
              <ul className="mt-5 space-y-3 text-muted">
                {[
                  "An established shop with local business customers",
                  "Someone comfortable quoting and selling projects",
                  "Able to handle or coordinate site surveys",
                  "Able to handle permitting and installation locally",
                  "Doing roughly $30k+/month in revenue, with room for a real ad-spend test",
                  "Wants a lead source they actually control",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold text-muted">Probably not a fit:</p>
              <ul className="mt-5 space-y-3 text-muted">
                {[
                  "Needs us to handle permits or installation",
                  "No way to survey or measure a site",
                  "Can't invest anything in advertising, or ad account not in good standing with Meta",
                  "Only wants occasional cheap fabrication",
                  "Greater Houston shops",
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
        </div>
      </section>

      {/* Founder letter */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr]">
            <figure>
              <Image
                src="/founder.png"
                alt="Rameel Sheikh, founder of LeadMill, on the floor of a commercial sign fabrication shop"
                width={1125}
                height={1451}
                className="w-full rounded-2xl object-cover"
              />
              <figcaption className="mt-3 text-sm text-muted">
                Rameel Sheikh, on the production floor.
              </figcaption>
            </figure>
            <div>
              <h2 className="display text-4xl sm:text-5xl">A note from the founder.</h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  If you&apos;ve been burned by an agency, you should be skeptical of this page.
                </p>
                <p>
                  So here&apos;s the plain version: I&apos;m not a marketer who picked your niche
                  off a list. I own the sign shop in this photo. We quote illuminated signage,
                  build it, and run these exact campaigns for ourselves every week — that&apos;s
                  why the first 21 days are free.
                </p>
                <p>
                  If your market doesn&apos;t make sense for this, I&apos;ll tell you on the call
                  and we&apos;ll part as friends.
                </p>
                <p className="text-foreground">— Rameel Sheikh, Founder, LeadMill</p>
              </div>
              <Link href="/apply" className="btn-primary mt-8">
                Check My Market
              </Link>
            </div>
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
        sub="One shop per market. If the numbers don't work for yours, we'll say so."
      />
    </>
  );
}
