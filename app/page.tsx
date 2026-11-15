import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { StartButton } from "@/components/start-button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";

const faqItems = [
  {
    q: "What does Leadmill do?",
    a: "Five things for one flat fee: Facebook and Instagram ads, a rebuilt website, SEO, ChatGPT and AI search, and a CRM and project tracker. All five aim at one result: more jobs. It is done for you. You don't log in to anything or manage a campaign.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing for the first 21 days. Then $1,000 a month, flat. You also pay Facebook directly for your ads, at least $25 a day. There are no setup fees and no hourly billing.",
  },
  {
    q: "Is there a contract?",
    a: "No. It is month to month. Pause or cancel any time.",
  },
  {
    q: "How fast does it start?",
    a: "Ads go live in week 1. The website is built in weeks 1 and 2, and you review it before it goes live. SEO and AI search start in week 3.",
  },
  {
    q: "Who is it built for?",
    a: "Contractors and trades with a crew: landscapers, painters, remodelers, fence companies, window tinters, sign companies and others. Your customers can be homeowners, businesses or both.",
  },
  {
    q: "What do I have to do?",
    a: "Answer the leads, quote and sell the job, send us photos and videos of finished work, and pay Facebook directly for the ads.",
  },
  {
    q: "Who owns the leads and the accounts?",
    a: "You do. The ads run in your own ad account, and every lead goes to you and nobody else. Your domain name, Facebook page, ad account and leads are always yours.",
  },
  {
    q: "Who owns the website?",
    a: "Leadmill builds and hosts it as part of the plan, so it stays with Leadmill if you cancel. We can also work alongside the person who already runs your site.",
  },
  {
    q: "What does the CRM and project tracker do?",
    a: "The CRM puts every lead in one list with its status, so none gets lost between the ad and the quote. The project tracker follows each job you win until it is finished. We set both up for you.",
  },
  {
    q: "What results do clients see?",
    a: "A four-person sign and wrap shop sold about $24,000 in jobs from $603 in ads. A window tint company got 40 leads in its 21-day trial from about $465 in ads. A Houston sign company sold $74,799 in signs from 90 days of Facebook leads.",
  },
  {
    q: "Do you guarantee closed jobs?",
    a: "No. Anyone who guarantees closed jobs is lying to you. You get 21 days of full work free, so you can judge the leads before you pay us anything.",
  },
  {
    q: "Do you take a percentage of my sale?",
    a: "No. The customer, the price and every dollar of the job are yours.",
  },
  {
    q: "I own a franchise location. Can I still work with you?",
    a: "Yes. Franchise owners use us for Facebook and Instagram ads, alongside what corporate already provides.",
  },
];

const heroStats = [
  { n: "$74,799", l: "in jobs from 90 days of leads" },
  { n: "$24,000", l: "in jobs from $603 in ads" },
  { n: "$0", l: "for your first 21 days" },
];

const whatWeDo = [
  {
    t: "Ads that send leads only to you",
    d: "Facebook and Instagram ads in your own ad account. No lead is ever sold to another contractor.",
    chip: "40 leads in one 21-day trial",
  },
  {
    t: "Built from your own jobs and crew",
    d: "We make the videos and write the ads from your finished work. You send photos; we do the rest.",
    chip: "$19.51 a lead on the best ad",
  },
  {
    t: "A website, SEO and AI search",
    d: "A site rebuilt to turn visitors into quote requests, then the pages and links that get you found on Google and named by ChatGPT.",
    chip: "Website live in weeks 1–2",
  },
  {
    t: "A CRM and project tracker",
    d: "Every lead in one list with its status, and every job you win tracked to the finish. Set up for you.",
    chip: "",
  },
];

// Preview only (Rameel, 2026-11-15: "i just want to see what it looks like"). These are the
// franchises independents compete with, NOT Leadmill clients, so the heading must never say
// "trusted by". Names are set as type, not logo files.
const franchises = [
  { n: "Signarama", c: "font-bold tracking-tight" },
  { n: "FASTSIGNS", c: "font-black italic tracking-tight" },
  { n: "CertaPro Painters", c: "font-semibold" },
  { n: "Five Star Painting", c: "font-medium tracking-wide" },
  { n: "Jani-King", c: "font-black tracking-tight" },
  { n: "Tint World", c: "font-bold italic" },
  { n: "U.S. Lawns", c: "font-semibold tracking-wide" },
  { n: "The Grounds Guys", c: "font-bold tracking-tight" },
];

const notThis = [
  {
    label: "Not a lead site",
    t: "Your leads are yours alone",
    d: "Lead sites sell one customer to several contractors. Ours come from ads in your own account and go to you and nobody else.",
  },
  {
    label: "Not an agency",
    t: "Flat fee, no contract",
    d: "No retainer, no hourly billing, no fee to leave. You get 21 days of full work before you pay us anything.",
  },
  {
    label: "A managed service",
    t: "We do the work. You keep the accounts",
    d: "You don't log in to a tool or manage a campaign. Your ad account, Facebook page, domain and leads stay yours.",
  },
];

const planIncludes = [
  "Facebook and Instagram ads, built from your own work",
  "A rebuilt website that turns visitors into quote requests",
  "SEO: service pages, blog posts and links",
  "ChatGPT and AI search",
  "A CRM and project tracker, set up for you",
  "Every lead sent to you and nobody else",
];

const planFacts = [
  { t: "Month to month", d: "No contract. Pause or cancel any time." },
  { t: "No setup fee", d: "The first 21 days are the full work, free." },
  { t: "Fast start", d: "Ads live in week 1." },
  { t: "Ad spend is yours", d: "You pay Facebook directly, at least $25 a day." },
];

const cases = [
  {
    name: "Class 1 Graphics",
    photo: "/cases/class1-sign.jpg",
    photoAlt: "Monument sign for Living Hope Church, made by Class 1 Graphics",
    logo: "/cases/class1-logo.png",
    logoW: 700,
    logoH: 248,
    what: "Signs and vehicle wraps · Palmyra, Pennsylvania",
    story:
      "A four-person shop. The ads brought a $16,000 sign job and about $8,000 in wrap jobs. They brought in so much work that he paused them: he was booked through the end of the year.",
    quote: "This is the best results we've had so far with advertising… especially for the price.",
    who: "Brendan Moyer, owner",
    big: { n: "$24,000", l: "in jobs sold from $603 in ads" },
    rest: [
      { n: "24", l: "leads in the first month" },
      { n: "$19.51", l: "a lead on the best ad" },
    ],
  },
  {
    name: "DK Tint Solutions",
    photo: "/cases/dk-install.jpg",
    photoAlt: "DK Tint Solutions installers applying window film inside a restaurant",
    logo: "/cases/dk-logo.png",
    logoW: 400,
    logoH: 400,
    what: "Commercial window tinting · Greater Houston",
    story:
      "A one-man sales operation. Four jobs inside the free trial brought in $3,271 from about $465 in ads. When he asked for more commercial work, we built a campaign for it: leads at $8.07 each.",
    quote: "The amount of leads has been crazy bro I love it.",
    who: "Danial, owner",
    big: { n: "40 leads", l: "in the 21-day trial, from about $465 in ads" },
    rest: [
      { n: "$3,271", l: "from 4 jobs done inside the trial" },
      { n: "$8.07", l: "a lead on the commercial ad" },
    ],
  },
  {
    name: "Houston Sign Crafters",
    photo: "/work/elite.jpg",
    photoAlt: "Exterior sign for Elite Career Institute of Texas, made by Houston Sign Crafters",
    logo: "/cases/hsc-logo.png",
    logoW: 700,
    logoH: 142,
    what: "Commercial signs · Houston",
    story:
      "This is where Leadmill started. We built the system for this Houston sign company, and it still runs there every week. In 90 days, its Facebook leads turned into 11 signed jobs.",
    quote: "",
    who: "",
    big: { n: "$74,799", l: "in signs sold from 90 days of Facebook leads" },
    rest: [
      { n: "144", l: "leads in 30 days" },
      { n: "~$23", l: "a lead" },
    ],
  },
];

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

      {/* Hero: the full offer on the left, what we do with a result on the right */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-16">
          <div>
            <h1 className="display rise text-6xl sm:text-7xl">
              The growth department for{" "}
              <span className="text-accent">contractors</span>.
            </h1>
            <p className="rise-2 mt-6 max-w-xl text-xl text-muted">
              We run your Facebook and Instagram ads, rebuild your website, handle your SEO and AI
              search, and set up your CRM and project tracker. Every lead goes to you and nobody
              else. All done for you. Free for 21 days, then $1,000 a month. No contract.
            </p>
            <dl className="rise-2 mt-8 grid max-w-xl grid-cols-3 gap-x-6 border-y border-line py-5">
              {heroStats.map((s) => (
                <div key={s.l}>
                  <dd className="display text-4xl sm:text-5xl">{s.n}</dd>
                  <dt className="mt-1 text-sm text-muted">{s.l}</dt>
                </div>
              ))}
            </dl>
            <div className="rise-3 mt-8 flex flex-wrap gap-3">
              <StartButton source="hero" className="btn-primary text-lg" />
              <Link href="/apply" className="btn-secondary text-lg">
                Book a call
              </Link>
            </div>
            <p className="rise-3 mt-4 text-sm text-muted">
              $0 today. You only pay Facebook for your ads. Or call{" "}
              <a href={PHONE_HREF} className="underline underline-offset-4">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>
          <ol className="rise-2 self-start rounded-2xl border border-line bg-panel">
            {whatWeDo.map((w, i) => (
              <li
                key={w.t}
                className={`grid grid-cols-[2.5rem_1fr] gap-x-2 px-6 py-6 sm:px-8 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <p className="display pt-0.5 text-2xl text-muted">0{i + 1}</p>
                <div>
                  <h2 className="text-lg font-semibold">{w.t}</h2>
                  <p className="mt-1 text-muted">{w.d}</p>
                  {w.chip && (
                    <p className="mt-3 inline-block rounded-md bg-ink px-2.5 py-1 text-sm font-medium text-white">
                      {w.chip}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Franchise names (preview) */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-center font-medium text-muted">
            Built for the independents who compete with franchise marketing departments
          </p>
          <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-7 text-center sm:grid-cols-4">
            {franchises.map((f) => (
              <li key={f.n} className={`text-2xl text-foreground/45 sm:text-[1.7rem] ${f.c}`}>
                {f.n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Leadmill is */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="display max-w-4xl text-5xl sm:text-7xl">
          A service. Not a lead site, not an agency.
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-muted">
          Shared leads, long contracts and an agency that keeps your accounts. Contractors tell
          the same story about lead sellers and marketing companies. This is the other deal.
        </p>
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
          <h2 className="display max-w-4xl text-5xl sm:text-7xl">One plan. One price.</h2>
          <p className="mt-6 max-w-2xl text-xl text-muted">
            A flat monthly fee, fully managed. No setup fee, no hourly billing, no percentage of
            your jobs.
          </p>
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="rounded-2xl border-2 border-ink bg-background p-8 shadow-[0_18px_50px_-18px_oklch(0.23_0.02_262/0.35)] sm:p-10">
              <p className="font-medium text-muted">Free for your first 21 days, then</p>
              <p className="display mt-2 text-7xl sm:text-8xl">
                $1,000<span className="text-3xl text-muted sm:text-4xl"> a month</span>
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-3.5 border-t border-line pt-7 text-lg sm:grid-cols-2">
                {planIncludes.map((i) => (
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
              <div className="mt-9 flex flex-wrap gap-3">
                <StartButton source="pricing" className="btn-primary text-lg" />
                <Link href="/apply" className="btn-secondary text-lg">
                  Book a call
                </Link>
              </div>
            </div>
            <dl className="grid content-start gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
              {planFacts.map((f) => (
                <div key={f.t} className="border-t border-ink py-5">
                  <dt className="text-lg font-semibold">{f.t}</dt>
                  <dd className="mt-1 text-muted">{f.d}</dd>
                </div>
              ))}
            </dl>
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
                $74,799. Then we started running the same system for other contractors: a sign
                and wrap shop in Pennsylvania, and a window tint company in Houston.
              </p>
              <p>
                That&apos;s why the first 21 days are free. If this doesn&apos;t make sense for
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
