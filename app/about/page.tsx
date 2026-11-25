import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Byline } from "@/components/byline";
import { CtaSection } from "@/components/cta-section";
import { JsonLd } from "@/components/json-ld";
import { OwnerCards } from "@/components/owner-cards";
import { cases } from "@/lib/cases";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";
import { AUTHOR, EMAIL, SITE_URL, UPDATED } from "@/lib/site";

const description =
  "Leadmill is run by Rameel Sheikh. It started inside Houston Sign Crafters, his brother's sign company, and now runs the same marketing system for other contractors and trades.";

export const metadata: Metadata = {
  title: "About Leadmill: who runs it and where it started",
  description,
  alternates: { canonical: "/about" },
};

const sections = [
  {
    h: "Where did Leadmill start?",
    p: [
      "Leadmill started inside a working sign shop. I run the marketing for Houston Sign Crafters, my brother's sign company, and we built this system there. It still runs there every week.",
      "In 90 days, that shop's Facebook leads turned into 11 signed jobs worth $74,799. Then we started running the same system for other companies: a sign and wrap shop in Pennsylvania, and a window tint company in Houston.",
    ],
  },
  {
    h: "What does Leadmill do?",
    p: [
      "Leadmill does five things for one flat fee: Facebook and Instagram ads, a rebuilt website, SEO, ChatGPT and AI search, and a CRM and project tracker. All five aim at one result, which is more jobs.",
      "It is done for you. You don't log in to a tool or manage a campaign.",
    ],
  },
  {
    h: "How does Leadmill work with a company?",
    p: [
      "The ads run in your own ad account, and every lead goes to you and nobody else. Your ad account, Facebook page, domain and leads stay yours. The website becomes yours with your first payment after the trial.",
      "The first 21 days are free, and they are the full work. After that it is $1,000 a month, with no contract. You pay Facebook directly for your ads, at least $25 a day.",
    ],
  },
  {
    h: "Why are the first 21 days free?",
    p: [
      "If you have been burned by an agency, you should be skeptical of a page like this one. The free 21 days let you judge the work before you pay us anything.",
      "If this doesn't make sense for your company, I'll tell you on the call.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about`,
          name: "About Leadmill",
          description,
          dateModified: UPDATED.iso,
          about: { "@id": `${SITE_URL}/#organization` },
          mainEntity: { "@id": `${SITE_URL}/about#rameel-sheikh` },
        }}
      />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="font-medium text-accent">About Leadmill</p>
            <h1 className="display mt-3 text-5xl sm:text-6xl lg:text-7xl">Who runs Leadmill?</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              Leadmill is run by Rameel Sheikh. I started it inside a working sign shop: I run the
              marketing for Houston Sign Crafters, my brother&apos;s sign company, and we built this
              system there. Leadmill now runs the same system for other contractors and trades, as
              one done-for-you plan for a flat fee.
            </p>
            <div className="mt-7">
              <Byline />
            </div>
          </div>
          <figure className="flex items-center gap-5 lg:justify-self-end">
            <Image
              src={AUTHOR.photo}
              alt="Rameel Sheikh, founder of Leadmill"
              width={1122}
              height={1451}
              priority
              className="h-40 w-40 shrink-0 rounded-full object-cover object-top sm:h-48 sm:w-48"
            />
            <figcaption>
              <span className="text-xl font-semibold">{AUTHOR.name}</span>
              <span className="block text-muted">{AUTHOR.role}</span>
            </figcaption>
          </figure>
        </div>
        <div className="hazard" />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {sections.map((s) => (
          <div key={s.h} className="border-t border-line py-8 first:border-t-0 first:pt-0">
            <h2 className="display text-3xl sm:text-4xl">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p} className="mt-4 text-lg text-muted">
                {p}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">What results has Leadmill had?</h2>
          <OwnerCards />
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-lg">
            {cases.map((c) => (
              <li key={c.slug}>
                <Link href={`/results/${c.slug}`} className="font-medium underline underline-offset-4">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl sm:text-4xl">How do I reach Leadmill?</h2>
        <p className="mt-4 text-lg text-muted">
          Call{" "}
          <a href={PHONE_HREF} className="font-medium text-foreground underline underline-offset-4">
            {PHONE_DISPLAY}
          </a>
          , email{" "}
          <a href={`mailto:${EMAIL}`} className="font-medium text-foreground underline underline-offset-4">
            {EMAIL}
          </a>
          , or{" "}
          <Link href="/apply" className="font-medium text-foreground underline underline-offset-4">
            book a call
          </Link>
          .
        </p>
      </section>

      <CtaSection />
    </>
  );
}
