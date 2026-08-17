import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import RoiCalculator from "@/components/roi-calculator";

const faqItems = [
  {
    q: "What does Leadmill actually do?",
    a: "We help qualified print, wrap, graphics, and sign shops generate local illuminated exterior sign opportunities, then provide trade fabrication when your shop wants us to build the sign.",
  },
  {
    q: "Who owns the customer?",
    a: "You do. Your shop controls the customer relationship, retail price, sales process, and collections. Leadmill never solicits your end customer.",
  },
  {
    q: "Does Leadmill install the sign?",
    a: "No. Your shop handles installation, or uses its own local installer.",
  },
  {
    q: "Does Leadmill handle permitting?",
    a: "No. Your shop handles permitting directly or through its own permit resource.",
  },
  {
    q: "Does Leadmill take a percentage of my sale?",
    a: "No. There is no revenue share. You keep every dollar of the retail sale.",
  },
  {
    q: "Who pays for the ads?",
    a: "Your shop funds its own Meta ad budget, paid directly to Meta. Leadmill manages the campaign as part of the partner membership.",
  },
  {
    q: "Is fabrication included in the $500?",
    a: "No. Fabrication is quoted separately at trade pricing for each project. You mark it up and sell at your own retail price.",
  },
  {
    q: "Can I send you fabrication jobs that didn't come from Leadmill ads?",
    a: "Yes — please do. The goal is to become your ongoing fabrication partner. Qualifying projects are welcome no matter how you won the customer.",
  },
  {
    q: "Is this only for channel letters?",
    a: "No. Leadmill fabricates supported categories of illuminated exterior signage — front-lit, halo-lit, cabinets, and more. Channel letters are one common example.",
  },
  {
    q: "Where is the fabrication based?",
    a: "Our fabrication network is anchored by a UL-certified commercial sign facility in Houston, Texas. You're working with a U.S. operation that picks up the phone in your time zone.",
  },
  {
    q: "Do you guarantee closed jobs?",
    a: "No. Anyone who guarantees closed jobs is lying to you. We generate qualified opportunities; your shop sells them. We only take on shops we believe can win the work.",
  },
  {
    q: "Do you serve Houston?",
    a: "No. Greater Houston is our fabrication operation's home market and is excluded from the partner program.",
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
              Leadmill runs local Meta campaigns that put commercial sign buyers on your phone —
              built by operators of a real commercial sign company. You sell under your brand and
              keep every dollar. When a job needs fabrication, our UL-certified Houston facility
              builds it at trade pricing.
            </p>
            <p className="rise-3 mt-5 text-lg font-semibold">
              $500/month &#43; your ad spend (~$750/mo to start) — about $1,250 all-in. No revenue
              share.
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
                Our own commercial sign shop&apos;s Meta ad account — the exact system partners
                get. Your market&apos;s costs will differ, and you&apos;ll see every number,
                every week.
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
            <div className="mt-6 max-w-xl space-y-4 text-muted">
              <p>
                Ask most shop owners where their work comes from and the answer is referrals,
                repeat customers, and a Google profile. That&apos;s real — but some months they
                carry you and some months they vanish, and you can&apos;t hire, plan, or grow
                around a lead source you don&apos;t control.
              </p>
              <p>
                The agencies that promise to fix that mostly haven&apos;t set foot in a shop.
                They&apos;ll count a yard-sign inquiry as a win and bill you either way. We run a
                sign shop — we know what a real commercial sign buyer looks like, in an ad
                account and on the phone.
              </p>
            </div>
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
                d: "We launch and manage local Meta campaigns focused on illuminated exterior signage in your market.",
              },
              {
                n: "2",
                t: "Your shop sells the project",
                d: "You own the lead, the customer, the retail price, and the sales process — under your brand.",
              },
              {
                n: "3",
                t: "You deliver the job",
                d: "Survey, permitting, installation — your shop, your way. Your local expertise is exactly why the customer stays yours.",
              },
              {
                n: "4",
                t: "Optional: we fabricate",
                d: "Need the sign built? Our UL-certified Houston facility quotes it at trade pricing and ships it. Plenty of partners never use it.",
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
                Fabricate in-house? Skip this section — the leads are yours and you keep the full
                margin. For shops that want the sign built for them, here&apos;s an illustrative
                storefront-sign project using numbers from our own operating experience.
              </p>
              <p className="mt-4 max-w-md text-muted">
                The point isn&apos;t the exact dollars. It&apos;s the shape of the deal: you sell
                at your retail price, pay trade prices for the parts you outsource, and keep the
                spread — on a product line you don&apos;t have to build a department for.
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
                Illustrative only — fabrication is quoted per project, and you set your own retail
                price. Sell the same job at $7,000 and the spread is yours: that&apos;s the point
                of owning the customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Run your own numbers */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">Run your own numbers.</h2>
        <p className="mt-5 max-w-2xl text-muted">
          Don&apos;t take our defaults — drag every slider to whatever you believe. The starting
          values are our own shop&apos;s real campaign numbers and a conservative close rate.
          This is the math you&apos;re actually deciding on.
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
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Before Leadmill was a partner program, it was us running Meta campaigns for{" "}
                <span className="font-medium text-foreground">Houston Sign Crafters</span>, a
                commercial sign company with a UL-certified fabrication facility in Houston. The
                campaigns put real illuminated-sign opportunities in front of their sales team, and
                the work on this page came off their production floor.
              </p>
              <p>
                That relationship ran deep enough that HSC became the anchor of Leadmill&apos;s
                fabrication network. It&apos;s the whole model in one story: ads that create sign
                work, and a fabricator behind them. Now we&apos;re bringing both sides of it to
                shops outside Houston.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why $500 */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">
          Why only $500? Because we&apos;re not an agency.
        </h2>
        <div className="mt-6 space-y-4 text-left text-muted sm:text-center">
          <p>
            Traditional agencies make all their money on the retainer, so the retainer has to be
            big. Leadmill makes money when you sell signs — because we&apos;re the fabricator behind
            them. The $500 membership covers the growth system. Fabrication is quoted per job at
            trade pricing, you set the retail price, and there&apos;s no revenue share.
          </p>
          <p className="font-medium text-foreground">
            When you win, we build. That&apos;s the whole model.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-accent-bright bg-background p-8 text-left">
          <h3 className="text-2xl font-semibold">Leadmill Partner</h3>
          <p className="mt-4 text-4xl font-semibold">
            $500<span className="text-lg font-normal text-muted">/month</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            &#43; your Meta ad spend (~$750/month at the $25/day start, paid directly to Meta) —
            about $1,250 all-in
          </p>
          <p className="mt-3 rounded-lg bg-panel px-3 py-2 text-sm">
            <span className="font-semibold">Founding-partner rate.</span>{" "}
            <span className="text-muted">$500 locks in for as long as you stay active — the
            rate rises as markets fill.</span>
          </p>
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
              <h3 className="text-xl font-semibold">The shop that got burned</h3>
              <p className="mt-2 text-muted">
                You already tried a marketing agency. They sent yard-sign and birthday-banner leads,
                counted them as wins, and billed you anyway — because they didn&apos;t know a lighted
                building sign from a coroplast yard sign.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">The shop that refers the sign job away</h3>
              <p className="mt-2 text-muted">
                A customer you&apos;ve served for years asks for a $6,000 lit storefront sign. You
                don&apos;t fabricate illuminated signage, so you hand them to a sign company — and
                watch the highest-ticket job in the relationship walk out the door.
              </p>
            </div>
          </div>
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
                  "Room in the budget for a real ad-spend test",
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
                  "Can't invest anything in advertising",
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
                  If you&apos;ve been burned by a marketing agency before, you should be skeptical of
                  this page. Anyone can buy a domain and claim they generate leads.
                </p>
                <p>
                  Here&apos;s what makes us different, plainly: I&apos;m not a marketer who picked
                  sign shops off a list of niches. We operate a commercial sign business — the shop
                  in this photo. We quote illuminated signage, fabricate it, and run Meta campaigns
                  for local businesses every single week. We know what a storefront-sign buyer looks
                  like in an ad account, and we know what a raceway is when your lead asks about one.
                </p>
                <p>
                  We&apos;ve been on both sides of this — running the ad campaigns and building the
                  signs. That&apos;s why the membership is $500 instead of $2,000: we&apos;d rather
                  be the fabrication partner behind your wins than another agency invoice. If your
                  market doesn&apos;t make sense for this, I&apos;ll tell you on the call and
                  we&apos;ll part as friends.
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
        sub="Limited partner availability by market. Tell us about your shop — if the numbers don't work, we'll say so and part as friends."
      />
    </>
  );
}
