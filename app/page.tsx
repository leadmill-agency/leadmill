import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { OwnerCards } from "@/components/owner-cards";
import { cases } from "@/lib/cases";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";
import { faqItems, heroStats, whatWeDo } from "@/lib/offer";

const plans = [
  {
    name: "Core",
    price: "$399",
    blurb: "Get found and turn more visitors into sign quotes.",
    spend: null as string | null,
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
    spend: "Plus your ad spend, at least $25 a day, paid to Facebook and Google",
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
  { t: "Switch any time", d: "Busy season? Drop to Core and keep the website and SEO running." },
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

      {/* Hero: the offer on the left, a finished sign on the right. Sized to fit one laptop screen. */}
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
            <div className="rise-3 mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href="/apply" className="btn-primary text-lg">
                Book a call
              </Link>
              <a href={PHONE_HREF} className="font-medium text-accent-text">
                Or call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <figure className="rise-2 relative">
            <Image
              src="/work/slickcity.jpg"
              alt="Lit channel letters for Slick City Action Park at dusk"
              width={1600}
              height={1194}
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="h-72 w-full rounded-2xl object-cover sm:h-96 lg:h-[32rem]"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-lg bg-white px-3.5 py-2.5 text-sm leading-snug">
              Channel letters for Slick City Action Park
            </figcaption>
          </figure>
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

      {/* What you get: the four parts of the plan, each with a label. */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-medium text-accent-text">What is Leadmill?</p>
            <h2 className="display mt-3 text-5xl sm:text-6xl">
              A service. Not a lead site, not an agency.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted sm:text-xl">
              Your website, SEO, AI search and ads, run for you for one flat price. Every lead goes
              to you and nobody else, and your domain, Google profile and ad accounts stay yours.
            </p>
          </div>
          <ol className="self-start rounded-2xl border border-line bg-panel">
            {whatWeDo.map((w, i) => (
              <li
                key={w.t}
                className={`grid grid-cols-[2.25rem_1fr] gap-x-2 px-5 py-5 sm:px-7 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <p className="display pt-0.5 text-xl text-muted">0{i + 1}</p>
                <div>
                  <h3 className="font-semibold leading-snug sm:text-[1.1rem]">{w.t}</h3>
                  <p className="mt-1 leading-snug text-muted">{w.d}</p>
                  <p className="mt-2.5 inline-block rounded-md bg-ink px-2.5 py-1 text-sm font-medium text-white">
                    {w.chip}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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
                    ? "bg-ink text-white shadow-[0_18px_50px_-18px_oklch(0.23_0.02_262/0.45)]"
                    : "border border-line bg-background"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="display text-4xl">{p.name}</h3>
                  {p.featured && (
                    <span className="rounded-md bg-accent-bright px-2.5 py-1 text-sm font-semibold text-accent-ink">
                      Includes Core
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-lg ${p.featured ? "text-white/75" : "text-muted"}`}>{p.blurb}</p>
                <p className="display mt-6 text-7xl">
                  {p.price}
                  <span className={`text-3xl ${p.featured ? "text-white/70" : "text-muted"}`}> a month</span>
                </p>
                <p className={`mt-1 text-sm ${p.featured ? "text-white/70" : "text-muted"}`}>
                  {p.spend ?? "After 14 days free"}
                </p>
                <div className={`mt-7 border-t pt-6 ${p.featured ? "border-white/20" : "border-line"}`}>
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
                    className={
                      p.featured
                        ? "inline-block rounded-[10px] bg-white px-8 py-4 text-lg font-medium text-ink transition hover:opacity-90"
                        : "btn-secondary text-lg"
                    }
                  >
                    Book a call
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <dl className="mt-10 grid gap-x-8 sm:grid-cols-2">
            {planFacts.map((f) => (
              <div key={f.t} className="border-t border-ink py-5">
                <dt className="text-lg font-semibold">{f.t}</dt>
                <dd className="mt-1 text-muted">{f.d}</dd>
              </div>
            ))}
          </dl>
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

      {/* Wholesale fabrication */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-medium text-accent-text">Wholesale fabrication</p>
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
              src="/work/karma.jpg"
              alt="Lit channel letters on a brick storefront for Karma Kolache and Macarons"
              width={1122}
              height={1402}
              className="h-56 w-full rounded-2xl object-cover object-[50%_15%] sm:h-72"
            />
            <Image
              src="/work/bridge3.jpg"
              alt="Lit channel letters for Bridge 3 Mission Ready Learning Lab at dusk"
              width={1289}
              height={1600}
              className="mt-8 h-56 w-full rounded-2xl object-cover object-[50%_15%] sm:h-72"
            />
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
