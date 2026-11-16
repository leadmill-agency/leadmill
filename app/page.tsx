import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { StartButton } from "@/components/start-button";

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

// Sources in 16_CASE_STUDIES.md ("Homepage totals"). $12M is Rameel's figure (11/15). Ad return:
// 7.6x, about 40x and 7x across the three case studies. Leads a year: the three clients run at
// about 130, 46 and 24 a month, a mean of 67 a month (about 800 a year); the middle one is about 550.
const heroStats = [
  { n: "$12M", l: "in client pipeline" },
  { n: "5x+", l: "return on ad spend" },
  { n: "530+", l: "average leads a year per client" },
];

// Each row: the benefit as the headline, how we do it, then one fact that backs it.
const whatWeDo = [
  {
    t: "Ads that bring quote requests every week",
    d: "Facebook and Instagram ads made from your own jobs, in your own ad account. Every lead goes only to you.",
    chip: "Average 30+ leads in month one",
  },
  {
    t: "A website that turns visitors into quote requests",
    d: "Rebuilt so a visitor sees your work and asks for a quote in one step.",
    chip: "42 quote requests in month one",
  },
  {
    t: "Found on Google and named by ChatGPT",
    d: "Service pages, blog posts and links, so customers find you when they search.",
    chip: "4.5x the Google visits",
  },
  {
    t: "A CRM and project tracker so no lead gets lost",
    d: "Every lead in one list with its status, and every job tracked to the finish.",
    chip: "Average $34,000 in jobs won",
  },
];

// One card per case study, Owner.com style: photo, one big number, who it is.
const ownerCards = [
  {
    photo: "/cases/class1-sign.jpg",
    alt: "Monument sign made by Class 1 Graphics",
    n: "$24,000",
    l: "in jobs from $603 in ads",
    who: "Brendan Moyer",
    role: "Owner of Class 1 Graphics",
  },
  {
    photo: "/cases/dk-install.jpg",
    alt: "DK Tint Solutions installers applying window film",
    n: "40 leads",
    l: "in a 21-day trial",
    who: "Danial",
    role: "Owner of DK Tint Solutions",
  },
  {
    photo: "/work/elite.jpg",
    alt: "Exterior sign made by Houston Sign Crafters",
    n: "$74,799",
    l: "in jobs from 90 days of leads",
    who: "Houston Sign Crafters",
    role: "Where Leadmill started",
  },
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

      {/* Hero: the offer on the left, the four parts of the system on the right. Sized to fit one laptop screen. */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:py-10">
          <div>
            <h1 className="display rise text-6xl sm:text-7xl lg:text-[4.25rem]">
              The growth department for{" "}
              <span className="text-accent">contractors</span>.
            </h1>
            <p className="rise-2 mt-5 max-w-xl text-lg text-muted sm:text-xl">
              Ads, a website, SEO, AI search and a CRM, all done for you and built to bring you
              more jobs. Free for 21 days, then $1,000 a month. No contract.
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
              <StartButton source="hero" className="btn-primary text-lg" />
              <Link href="/apply" className="btn-secondary text-lg">
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
          <ul className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0">
            {ownerCards.map((c) => (
              <li
                key={c.role}
                className="relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl bg-ink sm:w-[46%] lg:w-auto"
              >
                <Image
                  src={c.photo}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 370px, 78vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent px-6 pb-6 pt-24 text-white">
                  <p className="display text-5xl">{c.n}</p>
                  <p className="mt-1 text-xl font-medium text-white/75">{c.l}</p>
                  <p className="mt-4 text-sm">
                    {c.who}
                    <span className="block text-white/75">{c.role}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
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
            Shared leads, long contracts and an agency that keeps your accounts. Contractors tell
            the same story about lead sellers and marketing companies. This is the other deal.
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
