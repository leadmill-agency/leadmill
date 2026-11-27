import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { OwnerCards } from "@/components/owner-cards";
import { cases } from "@/lib/cases";
import { faqItems, heroStats, whatWeDo } from "@/lib/offer";

const notThis = [
  {
    label: "Not a lead site",
    t: "Your leads are yours alone",
    d: "Lead sites sell one customer to several shops. Every quote request from your website, your Google listing and your ads goes to you and nobody else.",
  },
  {
    label: "Not an agency",
    t: "Flat fee, no contract",
    d: "One monthly price covers your website, SEO and AI search, with ads on Growth. No retainer, no hourly billing, no fee to leave.",
  },
  {
    label: "A managed service",
    t: "We do the work. You keep the accounts",
    d: "We build and run your website, SEO, Google listing and ads. You don't log in to a tool. Your domain, Google profile, ad accounts and leads stay yours.",
  },
];

const plans = [
  {
    name: "Core",
    price: "$399",
    blurb: "Get found and turn more visitors into sign quotes.",
    lead: null as string | null,
    items: [
      "A rebuilt website that turns visitors into quote requests",
      "Hosting and small edits every month",
      "SEO: a page for every sign type and town you serve",
      "ChatGPT and AI search",
      "Google Business Profile kept up to date",
      "A CRM and project tracker, set up for you",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$800",
    blurb: "Core, plus ads that bring sign leads every week.",
    lead: "Everything in Core, plus:",
    items: [
      "Facebook and Instagram ads, built from your own signs",
      "Google Ads for people searching for a sign company",
      "New ad videos as your work changes",
      "Every lead sent to you and nobody else",
    ],
    featured: true,
  },
];

const planFacts = [
  { t: "Month to month", d: "No contract. Pause ads or cancel any time." },
  { t: "No setup fee", d: "The first 14 days are the full work, free." },
  { t: "Switch any time", d: "Busy season? Drop to Core and keep the website and SEO running." },
  { t: "Ad spend is yours", d: "On Growth, you pay Facebook and Google directly." },
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero: the offer on the left, the four parts of the system on the right. Sized to fit one laptop screen. */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:py-10">
          <div>
            <h1 className="display rise text-6xl sm:text-7xl lg:text-[4.25rem]">
              The marketing department for{" "}
              <span className="text-accent">sign shops</span>.
            </h1>
            <p className="rise-2 mt-5 max-w-xl text-lg text-muted sm:text-xl">
              A website that wins quotes, SEO, AI search and a CRM, with ads when you want more.
              Done for you by people who run a sign shop. Free for 14 days, then from $399 a month.
            </p>
            <dl className="rise-2 mt-6 grid max-w-xl grid-cols-3 gap-x-6 border-y border-line py-4">
              {heroStats.map((s) => (
                <div key={s.l}>
                  <dd className="display text-4xl sm:text-5xl">{s.n}</dd>
                  <dt className="mt-1 text-sm text-muted">{s.l}</dt>
                </div>
              ))}
            </dl>
            <div className="rise-3 mt-6 flex flex-wrap gap-3">
              <Link href="/apply" className="btn-primary text-lg">
                Book a call
              </Link>
            </div>
          </div>
          <ol className="rise-2 self-start rounded-2xl border border-line bg-panel lg:self-center">
            {whatWeDo.map((w, i) => (
              <li
                key={w.t}
                className={`grid grid-cols-[2.25rem_1fr] gap-x-2 px-5 py-4 sm:px-6 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <p className="display pt-0.5 text-xl text-muted">0{i + 1}</p>
                <div>
                  <h2 className="font-semibold leading-snug sm:text-[1.05rem]">{w.t}</h2>
                  <p className="mt-1 text-[0.95rem] leading-snug text-muted">{w.d}</p>
                  <p className="mt-2 inline-block rounded-md bg-ink px-2.5 py-1 text-sm font-medium text-white">
                    {w.chip}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Owner cards: one result per client. Scrolls sideways on a phone, three across on a desktop. */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <h2 className="display text-4xl sm:text-5xl">Grow like these owners</h2>
            <a href="#results" className="font-medium underline underline-offset-4">
              Read their stories
            </a>
          </div>
          <OwnerCards />
        </div>
      </section>

      {/* What Leadmill is */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-medium text-accent">What is Leadmill?</p>
          <h2 className="display mt-3 text-5xl sm:text-7xl">
            A service. Not a lead site, not an agency.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted">
            Sign shop owners tell the same story about lead sellers and marketing companies. This
            is the other deal: your website, SEO, AI search and ads, run for you, for one flat price.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {notThis.map((c, i) => (
            <div
              key={c.label}
              className={`rounded-2xl p-8 ${
                i === 2 ? "bg-ink text-white" : "border border-line bg-panel"
              }`}
            >
              <p className={`font-medium ${i === 2 ? "text-accent-bright" : "text-muted"}`}>
                {c.label}
              </p>
              <h3 className="display mt-3 text-4xl">{c.t}</h3>
              <p className={`mt-4 text-lg ${i === 2 ? "text-white/80" : "text-muted"}`}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="display max-w-4xl text-5xl sm:text-7xl">Two plans. Flat prices.</h2>
          <p className="mt-6 max-w-2xl text-xl text-muted">
            Free for your first 14 days. No setup fee, no hourly billing, no percentage of your
            jobs.
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl p-8 sm:p-10 ${
                  p.featured
                    ? "border-2 border-ink bg-background shadow-[0_18px_50px_-18px_oklch(0.23_0.02_262/0.35)]"
                    : "border border-line bg-background"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="display text-4xl">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-md bg-ink px-2.5 py-1 text-sm font-medium text-white">
                      Includes Core
                    </span>
                  )}
                </div>
                <p className="mt-2 text-lg text-muted">{p.blurb}</p>
                <p className="display mt-6 text-7xl">
                  {p.price}
                  <span className="text-3xl text-muted"> a month</span>
                </p>
                <p className="mt-1 text-sm text-muted">After 14 days free</p>
                <div className="mt-7 border-t border-line pt-6">
                  {p.lead && <p className="mb-3 font-semibold">{p.lead}</p>}
                  <ul className="grid gap-3 text-lg">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-bright text-[0.65rem] font-bold text-accent-ink"
                        >
                          ✓
                        </span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-9">
                  <Link
                    href="/apply"
                    className={`${p.featured ? "btn-primary" : "btn-secondary"} text-lg`}
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <dl className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {planFacts.map((f) => (
              <div key={f.t} className="border-t border-ink py-5">
                <dt className="text-lg font-semibold">{f.t}</dt>
                <dd className="mt-1 text-muted">{f.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Wholesale fabrication */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-medium text-accent">Wholesale fabrication</p>
            <h2 className="display mt-3 text-5xl sm:text-6xl">Sell more signs than you can build.</h2>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Channel letters, halo-lit letters, cabinet signs and monument faces, built at trade
              price and shipped to you in about 4 weeks. You sell the job under your own name, set
              the price and install it. Any shop can order.
            </p>
            <Link href="/fabrication" className="btn-secondary mt-7 text-lg">
              See what we build
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/work/luce.jpg"
              alt="Halo-lit exterior sign glowing at night"
              width={800}
              height={1000}
              className="h-56 w-full rounded-2xl object-cover sm:h-72"
            />
            <Image
              src="/work/copper.jpg"
              alt="Backlit exterior sign above a storefront at dusk"
              width={800}
              height={1000}
              className="mt-8 h-56 w-full rounded-2xl object-cover sm:h-72"
            />
          </div>
        </div>
      </section>

      {/* Client results */}
      <section id="results" className="scroll-mt-16 bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-20 sm:px-6">
          <h2 className="display max-w-4xl text-5xl sm:text-7xl">
            Three companies. Their numbers.
          </h2>
          <div className="mt-14">
            {cases.map((c) => (
              <article
                key={c.name}
                className="grid gap-x-12 gap-y-8 border-t border-white/20 py-12 lg:grid-cols-[0.85fr_1fr_1fr]"
              >
                <figure className="relative">
                  <Image
                    src={c.photo}
                    alt={c.photoAlt}
                    width={1400}
                    height={1050}
                    className="h-64 w-full rounded-lg object-cover sm:h-80 lg:h-full lg:max-h-[26rem]"
                  />
                  <span className="absolute bottom-3 left-3 flex h-14 items-center rounded-md bg-white px-3">
                    <Image
                      src={c.logo}
                      alt={`${c.name} logo`}
                      width={c.logoW}
                      height={c.logoH}
                      className="h-9 w-auto"
                    />
                  </span>
                </figure>
                <div>
                  <h3 className="display text-4xl sm:text-5xl">{c.name}</h3>
                  <p className="mt-2 font-medium text-white/60">{c.what}</p>
                  <p className="mt-5 text-lg text-white/80">{c.story}</p>
                  {c.quote && (
                    <blockquote className="mt-6 border-l-2 border-accent-bright pl-5">
                      <p className="text-2xl leading-snug">&ldquo;{c.quote}&rdquo;</p>
                      <footer className="mt-2 text-white/60">{c.who}</footer>
                    </blockquote>
                  )}
                </div>
                <div>
                  <p className="display text-7xl sm:text-8xl">{c.big.n}</p>
                  <p className="mt-3 text-xl text-white/80">{c.big.l}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-x-8 border-t border-white/20 pt-6">
                    {c.rest.map((st) => (
                      <div key={st.l}>
                        <dd className="display text-4xl">{st.n}</dd>
                        <dt className="mt-1 text-white/70">{st.l}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="font-medium text-muted">Who we are</p>
          <h2 className="display mt-3 max-w-5xl text-5xl sm:text-7xl">
            If you&apos;ve been burned by an agency, you should be skeptical of this page.
          </h2>
          <div className="mt-10 grid gap-x-16 gap-y-8 text-lg text-muted lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5">
              <p>
                Leadmill started inside a working sign shop. I run the marketing for Houston
                Sign Crafters, my brother&apos;s sign company, and we built this system there.
                It still runs there every week.
              </p>
              <p>
                In 90 days, that shop&apos;s Facebook leads turned into 11 signed jobs worth
                $74,799. Then we started running the same system for other companies: a sign
                and wrap shop in Pennsylvania, and a window tint company in Houston.
              </p>
              <p>
                That&apos;s why the first 14 days are free. If this doesn&apos;t make sense for
                your company, I&apos;ll tell you on the call.
              </p>
            </div>
            <div className="flex items-center gap-5 self-start">
              <Image
                src="/founder.png"
                alt="Rameel Sheikh, founder of LeadMill"
                width={1125}
                height={1451}
                className="h-28 w-28 shrink-0 rounded-full object-cover object-top"
              />
              <p className="text-foreground">
                Rameel Sheikh
                <span className="block text-muted">Founder, LeadMill</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="display text-5xl sm:text-7xl">Straight answers.</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
