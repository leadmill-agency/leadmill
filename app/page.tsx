import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";

const faqItems = [
  {
    q: "What does Leadmill actually do?",
    a: "Four things for one flat fee: Facebook and Instagram ads, a better website, SEO, and ChatGPT and AI search. All four aim at one result: more commercial sign jobs.",
  },
  {
    q: "Who is it built for?",
    a: "Independent sign shops and other specialty contractors with a crew.",
  },
  {
    q: "I own a franchise location. Can I still work with you?",
    a: "Yes. Franchise owners use us for Facebook and Instagram ads, alongside what corporate already provides.",
  },
  {
    q: "What do I have to do?",
    a: "Answer the leads, quote and sell the job, send us photos and videos of finished work, and pay Facebook directly for the ads.",
  },
  {
    q: "Can you work with my current website or web person?",
    a: "Yes. We can rebuild your site, or work alongside the person who already runs it.",
  },
  {
    q: "Who owns the website?",
    a: "Leadmill builds and hosts it as part of the plan, so it stays with Leadmill if you cancel. Your domain name, Facebook page, ad account and leads are always yours.",
  },
  {
    q: "Who pays for the ads?",
    a: "You do, straight to Facebook, at least $25 a day. Our fee never includes ad spend.",
  },
  {
    q: "Do you guarantee closed jobs?",
    a: "No. Anyone who guarantees closed jobs is lying to you. We guarantee leads, in the wording at the top of this page.",
  },
  {
    q: "Do you take a percentage of my sale?",
    a: "No. The customer, the price and every dollar of the job are yours.",
  },
  {
    q: "Do you serve Houston?",
    a: "No. Greater Houston is Houston Sign Crafters' market and is excluded.",
  },
];

const buyerPlaces = [
  {
    when: "When they scroll",
    t: "Facebook and Instagram ads",
    d: "Your work in front of local businesses before they search. Leads go straight to your phone.",
    built: "Live in week 1",
  },
  {
    when: "When they search",
    t: "SEO",
    d: "Service pages, blog posts and links, so Google shows you when they search nearby.",
    built: "Starts in week 3",
  },
  {
    when: "When they ask AI",
    t: "ChatGPT and AI search",
    d: "We work on getting you named when buyers ask ChatGPT who to call.",
    built: "Starts in week 3",
  },
  {
    when: "Before they call",
    t: "A better website",
    d: "Rebuilt to look like the best shop in town and turn visitors into quote requests.",
    built: "Built in weeks 1–2",
  },
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
      "A four-person shop. The ads brought a $16,000 sign job and about $8,000 in wrap jobs. He paused them because he was booked through the end of the year, and restarts in January.",
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
      "A one-man sales operation. He stayed on after the trial and has been a paying client since August. The early leads were mostly homeowners, so in October we built a separate campaign for commercial jobs.",
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
      "The sign shop where we built this system, and still run it every week. The sales figure is from 90 days of the shop's own job records.",
    quote: "",
    who: "",
    big: { n: "$74,799", l: "in signs sold from 90 days of Facebook leads" },
    rest: [
      { n: "144", l: "leads in 30 days" },
      { n: "~$23", l: "a lead" },
    ],
  },
];

const work = [
  {
    src: "/work/slickcity.jpg",
    alt: "Large front-lit exterior sign for Slick City Action Park at dusk",
    cap: "Slick City Action Park",
    cls: "col-span-2 h-80 sm:h-[30rem] lg:col-span-1 lg:h-[38rem]",
  },
  {
    src: "/work/luce.jpg",
    alt: "Halo-lit exterior sign for Luce Avenue Coffee Roasters, glowing at night",
    cap: "Luce Avenue Coffee Roasters",
    cls: "h-64 sm:h-96 lg:h-[38rem]",
  },
  {
    src: "/work/karma.jpg",
    alt: "Dimensional letters for Karma Kolache & Macarons on a brick tower facade",
    cap: "Karma Kolache & Macarons",
    cls: "h-64 sm:h-96 lg:h-[38rem]",
  },
];

const franchisePays = [
  "A royalty of about 6% on every sale",
  "A marketing fee on top of the royalty",
  "A website that corporate owns",
  "A territory that corporate sets",
  "A multi-year franchise agreement",
  "Facebook ads still left to the owner",
];

const youGet = [
  "Commercial leads sent straight to your phone",
  "A website that turns visitors into quote requests",
  "Buyers find you on Google and when they ask ChatGPT",
  "Every dollar of every sale stays yours",
  "The only shop we work with in your market",
  "Leave any time. No contract",
];

const steps = [
  { n: "Today", t: "Schedule a call", d: "Two minutes. Pick a time that suits you." },
  { n: "This week", t: "The call", d: "We check your market together. No payment." },
  { n: "Week 1", t: "Ads live", d: "Built from your own work. Your trial starts." },
  { n: "Weeks 1–3", t: "Website, Google, ChatGPT", d: "You review the site before it goes live." },
  { n: "Day 22", t: "You decide", d: "Keep going, or walk. No contract." },
];

export default function Home() {
  return (
    <>
      {/* Hero: the guarantee, in its approved wording, is the headline */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-14 lg:py-12">
          <div>
            <p className="rise inline-block rounded-full border border-line px-4 py-1.5 text-sm font-medium">
              The growth department for independent shops
            </p>
            <h1 className="display rise mt-5 text-5xl sm:text-6xl lg:text-[4.25rem]">
              <span className="text-accent">20 commercial leads</span> in your first 60 days
              of ads, or we keep working free until you get them.
            </h1>
            <p className="rise-2 mt-5 max-w-xl text-xl text-muted">
              We believe in this enough to work free for your first 21 days. You only pay for
              your ads.
            </p>
            <Link href="/apply" className="btn-primary rise-3 mt-7 text-lg">
              Schedule a call
            </Link>
            <p className="rise-3 mt-7 max-w-lg border-l-2 border-ink pl-4 text-lg">
              <span className="font-semibold">$24,000 in jobs sold from $603 in ads.</span>{" "}
              <span className="text-muted">Class 1 Graphics, Pennsylvania.</span>
            </p>
            <p className="rise-3 mt-6 max-w-lg text-sm text-muted">
              With ad spend of at least $25 a day. A commercial lead is a business in your
              service area asking about a commercial job. The guarantee covers our fee, not ad
              spend.
            </p>
          </div>
          <figure className="rise-2">
            <Image
              src="/work/copper.jpg"
              alt="Backlit exterior sign for Copper Espresso Bar, installed above a storefront at dusk"
              width={1600}
              height={1200}
              priority
              className="h-72 w-full rounded-lg object-cover sm:h-96 lg:h-[36rem]"
            />
            <figcaption className="mt-3 text-sm text-muted">
              Built and installed by Houston Sign Crafters, where we built this system.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Three case studies */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6">
          <h2 className="display max-w-4xl text-5xl sm:text-7xl">
            Three independent shops. Their numbers.
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
          <p className="border-t border-white/20 pt-8 text-lg text-white/70">
            Below: three signs Houston Sign Crafters built and installed. Your numbers will
            differ, and you&apos;ll see them weekly.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {work.map((w) => (
            <figure key={w.src} className={`relative ${w.cls}`}>
              <Image
                src={w.src}
                alt={w.alt}
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12 font-medium text-white sm:px-6 sm:text-lg">
                {w.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Franchise comparison: two panels, the price as the punchline */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="display max-w-4xl text-5xl sm:text-7xl">
          What a franchise gives its shops, without the franchise.
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-muted">
          You already build and install the signs. Often for franchises and brokers, who keep the
          customer and the margin.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-line bg-panel p-8 sm:p-10">
            <h3 className="font-semibold text-muted">What a franchise sign shop pays for</h3>
            <ul className="mt-7 space-y-4 text-lg text-muted">
              {franchisePays.map((i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-panel-2 text-xs"
                  >
                    ✕
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <p className="display text-6xl text-muted sm:text-7xl">$60,000</p>
              <p className="mt-2 text-lg text-muted">a year in royalties, on $1 million in sales</p>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl border-2 border-ink bg-background p-8 shadow-[0_18px_50px_-18px_oklch(0.23_0.02_262/0.35)] sm:p-10">
            <h3 className="font-semibold">What you get with Leadmill</h3>
            <ul className="mt-7 space-y-4 text-lg">
              {youGet.map((i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-bright text-xs font-bold text-accent-ink"
                  >
                    ✓
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <p className="display text-6xl sm:text-7xl">$12,000</p>
              <p className="mt-2 text-lg text-muted">a year: $1,000 a month flat, plus your ad spend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Four places a sign buyer looks */}
      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="display max-w-4xl text-5xl sm:text-7xl">
            A sign buyer looks in four places. We put your shop in all four.
          </h2>
          <ol className="mt-14 border-b border-ink">
            {buyerPlaces.map((p) => (
              <li
                key={p.t}
                className="grid gap-x-10 gap-y-2 border-t border-ink py-8 lg:grid-cols-[11rem_1fr_1.3fr_auto] lg:items-baseline"
              >
                <p className="font-medium text-muted">{p.when}</p>
                <h3 className="display text-3xl sm:text-4xl">{p.t}</h3>
                <p className="text-lg text-muted">{p.d}</p>
                <p className="font-medium lg:w-36 lg:text-right">{p.built}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What happens next */}
      <section id="plan" className="scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="display max-w-4xl text-5xl sm:text-7xl">
            What happens after you schedule a call.
          </h2>
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.t} className="border-t-2 border-ink pt-4">
                <p className="font-medium text-muted">{s.n}</p>
                <h3 className="mt-1 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder letter */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="display max-w-5xl text-5xl sm:text-7xl">
            If you&apos;ve been burned by an agency, you should be skeptical of this page.
          </h2>
          <div className="mt-10 grid gap-x-16 gap-y-8 text-lg text-muted lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5">
              <p>
                I didn&apos;t pick your trade off a list. I run the marketing for Houston Sign
                Crafters, my brother&apos;s sign company, and we use this exact system there
                every week. That&apos;s why the first 21 days are free.
              </p>
              <p>
                If your market doesn&apos;t make sense for this, I&apos;ll tell you on the call.
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
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="display text-5xl sm:text-7xl">Straight answers.</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <CtaSection
        headline="One shop per market. Is yours open?"
        sub="If the numbers don't work for your shop, we'll say so on the call."
      />
    </>
  );
}
