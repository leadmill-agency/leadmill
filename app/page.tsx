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

const growth = [
  "Meta Ads management",
  "AI-assisted creative",
  "Lead forms",
  "Lead routing",
  "CRM pipeline",
  "Performance reporting",
];

const fulfillment = [
  "Production quoting",
  "Freight coordination",
  "Permit coordination",
  "Engineering coordination",
  "Installer sourcing",
  "Installation coordination",
];

const vslUrl = process.env.NEXT_PUBLIC_VSL_URL;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-texture absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="eyebrow">For established sign, wrap, print & graphics shops</p>
          <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">
            Get More Channel-Letter Jobs{" "}
            <span className="text-accent">Without Building a Factory</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            LeadMill runs Meta Ads for established sign, wrap, print, and graphics shops. You own
            the customer. When needed, our fulfillment network can help coordinate production,
            permitting, and installation.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/apply"
              className="display bg-accent px-8 py-4 text-lg text-accent-ink transition hover:brightness-110"
            >
              Apply for a Market Review
            </Link>
            <Link
              href="/how-it-works"
              className="display border border-line px-8 py-4 text-lg transition hover:border-accent"
            >
              See the Process
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted">
            <span className="text-accent">■</span> Built by operators of a real commercial sign company.
          </p>
          {vslUrl && (
            <div className="mt-12 max-w-3xl border border-line bg-panel p-2">
              <video src={vslUrl} controls preload="metadata" className="w-full" />
              <p className="px-3 py-2 text-xs text-muted">
                Watch: how the program works, who it&apos;s for, and what to expect (5 minutes).
              </p>
            </div>
          )}
        </div>
        <div className="hazard" />
      </section>

      {/* Problem / identity */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">Sound familiar?</p>
        <h2 className="display mt-2 max-w-3xl text-4xl sm:text-5xl">
          More Leads Do Not Help If You Cannot Deliver the Job
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          If you run an established shop, you&apos;re probably one of these three owners.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "The referral-dependent shop",
              d: "You do good work, so referrals and repeat customers keep you alive. But some months they carry you and some months they vanish — and you can't hire, plan, or grow around a lead source you don't control.",
            },
            {
              t: "The shop that turns work away",
              d: "A $10,000 channel-letter job walks in and you pass on it. No fabrication capacity, no permit experience, no installer. You keep the $500 banner work and watch the real margin go to a competitor.",
            },
            {
              t: "The shop that got burned",
              d: "You already tried a marketing agency. They sent yard-sign and birthday-banner leads, counted them as wins, and billed you anyway — because they didn't know a channel letter from a coroplast sign.",
            },
          ].map((card) => (
            <div key={card.t} className="border border-line bg-panel p-6">
              <h3 className="display text-2xl">{card.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{card.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What changed */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">Why this works now</p>
          <h2 className="display mt-2 max-w-3xl text-4xl sm:text-5xl">
            Three Things Changed in the Sign Business
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Production went wholesale",
                d: "You no longer need a factory to sell channel letters. Wholesale fabrication and fulfillment networks build to spec and ship anywhere — the shops winning big storefront jobs are selling and installing, not fabricating.",
              },
              {
                n: "2",
                t: "Sign buyers moved online",
                d: "New business owners don't drive around looking for a sign shop anymore. They search, scroll, and fill out a form — and the shop that shows up first and answers first wins the project.",
              },
              {
                n: "3",
                t: "Local targeting got precise",
                d: "Meta can put your shop in front of business owners in your service radius for a fraction of what old advertising cost. Most sign shops still haven't noticed. The ones that have are taking the commercial work.",
              },
            ].map((s) => (
              <div key={s.n} className="border-l-2 border-accent pl-5">
                <span className="display text-4xl text-accent">{s.n}</span>
                <h3 className="display mt-2 text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-2 text-4xl sm:text-5xl">Three Steps. You Stay in Control.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "We launch your local Meta campaign",
                d: "Sign-specific ads targeting commercial buyers in your service area. Leads come to you in minutes with a qualified project brief.",
              },
              {
                n: "02",
                t: "You contact and close the customer",
                d: "Your shop, your name, your price. You quote and close the job the way you always have — just with more at-bats.",
              },
              {
                n: "03",
                t: "Use fulfillment when needed",
                d: "Closed a job you can't build? Our network can quote production, coordinate permits, and source installation — per project, only when you ask.",
              },
            ].map((s) => (
              <div key={s.n} className="border border-line bg-panel-2 p-6">
                <span className="display text-4xl text-accent">{s.n}</span>
                <h3 className="display mt-3 text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
          <Link href="/how-it-works" className="mt-8 inline-block text-sm text-accent hover:brightness-110">
            See the full process →
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">What LeadMill includes</p>
        <h2 className="display mt-2 text-4xl sm:text-5xl">Growth Up Front. Fulfillment Behind You.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border border-line bg-panel p-8">
            <h3 className="display text-3xl">Growth</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {growth.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-line bg-panel p-8">
            <h3 className="display text-3xl">Fulfillment Access</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {fulfillment.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-accent" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-xs text-muted">
              Fulfillment services are quoted separately by project and depend on market coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">Built for Real Shops, Not Everyone</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-line bg-panel-2 p-8">
              <h3 className="display text-2xl text-accent">Good fit</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {[
                  "Established shops with a track record",
                  "Commercial customer base",
                  "Fast lead response",
                  "Ability to fund ad spend",
                  "Desire for larger projects",
                  "Willingness to track lead outcomes",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-accent">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-line bg-panel-2 p-8">
              <h3 className="display text-2xl text-muted">Not a fit</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {[
                  "Brand-new businesses",
                  "Hobby shops",
                  "Residential-only companies",
                  "Owners who cannot answer leads",
                  "Shops seeking guaranteed revenue",
                  "Greater Houston competitors",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-danger">✕</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="/who-its-for" className="mt-8 inline-block text-sm text-accent hover:brightness-110">
            Full fit checklist →
          </Link>
        </div>
      </section>

      {/* Why LeadMill */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">Why LeadMill</p>
        <h2 className="display mt-2 text-4xl sm:text-5xl">Built From Inside the Sign Business</h2>
        <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Real operating experience", "We run commercial sign campaigns and projects ourselves — this isn't theory."],
            ["Sign-specific creative", "Ads built around storefront signage, channel letters, and commercial buyers — not generic 'local business' templates."],
            ["Channel letters understood", "Faces, returns, raceways, LED specs, landlord criteria — we speak the language your leads speak."],
            ["Commercial project economics", "Campaigns designed around $5k–$25k project values, not $500 banner tickets."],
            ["Optional backend fulfillment", "Production, permitting, and installation coordination when you want it. Never forced."],
            ["You keep the customer", "Your brand, your relationship, your retail price. We stay invisible to your customer."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-accent pl-4">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="display text-center text-4xl sm:text-5xl">Straight Answers</h2>
          <div className="mt-10">
            <Faq items={faqItems} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
