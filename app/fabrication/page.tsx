import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wholesale Sign Fabrication for Sign Shops",
  description:
    "Wholesale channel letters, halo-lit letters, cabinet signs and monument faces for sign shops. Trade prices, about 4 weeks, shipped to you to install.",
  alternates: { canonical: "/fabrication" },
  openGraph: {
    title: "Wholesale sign fabrication for sign shops",
    description:
      "Channel letters, halo-lit letters, cabinet signs and monument faces at trade prices, shipped to you to install.",
    url: "/fabrication",
    type: "website",
    images: ["/work/luce.jpg"],
  },
};

const steps = [
  {
    t: "Send the job",
    d: "The artwork file (AI, EPS or PDF), the sizes, the wall or surface it mounts to, and the install address.",
  },
  {
    t: "Get a trade quote",
    d: "Price, lead time and freight, all on one quote, before anything is built.",
  },
  {
    t: "Approve the proof and pay the deposit",
    d: "Production starts once you approve the proof and pay a 50% deposit.",
  },
  {
    t: "We build and ship it",
    d: "Built by our fabrication partner in about 4 weeks from the approved proof, then crated and shipped to you. You install it, and the customer stays yours.",
  },
];

const products = [
  ["Wholesale front-lit channel letters", "The storefront standard. Lit faces, built to your approved drawing."],
  ["Wholesale halo-lit letters", "Reverse-lit letters: light shines behind each letter for a soft glow on the wall."],
  ["Illuminated cabinet signs", "Box signs with one lit face, for logos that read better as a single piece."],
  ["Monument sign faces", "Faces and inserts for new monuments and for refacing old ones."],
];

const faq = [
  {
    q: "What is wholesale sign fabrication?",
    a: "You sell a sign to your customer under your own name, and a fabricator builds it for you at a trade price. You set the retail price, keep the margin and install the sign. Leadmill quotes the job and our fabrication partner builds it.",
  },
  {
    q: "What signs can I order wholesale?",
    a: "Front-lit channel letters, halo-lit (reverse-lit) letters, illuminated cabinet signs and monument sign faces. For anything else, send the specs and we'll tell you whether we can build it.",
  },
  {
    q: "How long does it take?",
    a: "About 4 weeks from the approved proof and deposit. The lead time for each job is on its quote.",
  },
  {
    q: "How does payment work?",
    a: "A 50% deposit starts production. Freight is on the quote, so you see the full cost before anything is built.",
  },
  {
    q: "Do you install the sign or pull the permit?",
    a: "No. We build the sign and ship it to you. Permits and installation stay with your shop, which is why the customer stays yours.",
  },
  {
    q: "Do I need to be a Leadmill client?",
    a: "No. Any sign shop can order wholesale fabrication. It is quoted per job and separate from the monthly plans.",
  },
  {
    q: "What do you need to quote a job?",
    a: "The artwork file (AI, EPS or PDF), the sizes, what the sign mounts to, and the install address for freight.",
  },
];

const deal = [
  ["The customer stays yours", "We never contact your customer. Your name is on the job."],
  ["You set the price", "Buy at trade price, sell at yours, keep the margin."],
  ["Any shop can order", "Quoted per job. You don't need a Leadmill plan."],
  ["Permits and install stay with you", "We build and ship. Your crew handles the site."],
];

export default function FabricationPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${SITE_URL}/fabrication#service`,
              name: "Wholesale sign fabrication",
              serviceType: "Wholesale sign fabrication",
              description:
                "Trade-price fabrication of channel letters, halo-lit letters, illuminated cabinet signs and monument sign faces for sign shops, shipped to the shop to install.",
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: "US",
              audience: { "@type": "BusinessAudience", name: "Sign shops" },
              url: `${SITE_URL}/fabrication`,
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-medium text-accent">Sell the sign. We build it.</p>
            <h1 className="display mt-3 text-5xl sm:text-7xl">Wholesale sign fabrication for sign shops.</h1>
            <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
              Wholesale channel letters, cabinet signs and monument faces at trade price. You sell
              the sign under your own name and set the price. We build it in about 4 weeks and ship
              it to you to install.
            </p>
            <Link href="/apply" className="btn-primary mt-8 text-lg">
              Book a call
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/work/luce.jpg"
              alt="Halo-lit exterior sign glowing at night"
              width={800}
              height={1000}
              className="h-64 w-full rounded-2xl object-cover sm:h-80"
            />
            <Image
              src="/work/copper.jpg"
              alt="Backlit exterior sign above a storefront at dusk"
              width={800}
              height={1000}
              className="mt-8 h-64 w-full rounded-2xl object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">How it works</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-line bg-background p-6">
                <p className="display text-3xl text-accent">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">What we build</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-line bg-panel p-6">
                <h3 className="text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted">
            Something else? Send the specs and we&apos;ll tell you whether we can build it.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">The deal</h2>
          <dl className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {deal.map(([t, d]) => (
              <div key={t} className="border-t border-ink py-5">
                <dt className="text-lg font-semibold">{t}</dt>
                <dd className="mt-1 text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="display text-4xl sm:text-5xl">Wholesale fabrication questions</h2>
          <FaqList items={faq} />
        </div>
      </section>

      <CtaSection
        headline="Have a sign to quote?"
        sub="Book a call and send the file. We'll price it at trade, with lead time and freight."
      />
    </>
  );
}
