import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Byline } from "@/components/byline";
import { CtaSection } from "@/components/cta-section";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { caseBySlug, cases } from "@/lib/cases";
import { articleJsonLd, faqJsonLd } from "@/lib/site";

// The trade pages are parked (Rameel, 2026-11-25), so the results pages point to How it works.
const tradePage = {
  sign: { href: "/how-it-works", label: "How Leadmill works" },
  tint: { href: "/how-it-works", label: "How Leadmill works" },
};

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) return {};
  return {
    title: c.page.title,
    description: c.page.description,
    alternates: { canonical: `/results/${c.slug}` },
  };
}

export default async function ResultPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseBySlug(slug);
  if (!c) notFound();
  const { page } = c;
  const others = cases.filter((o) => o.slug !== c.slug);
  const trade = tradePage[c.trade];

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          path: `/results/${c.slug}`,
          headline: page.title,
          description: page.description,
          image: c.photo,
        })}
      />
      <JsonLd data={faqJsonLd(page.faq)} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="font-medium text-accent">
            {c.slug === "houston-sign-crafters" ? "Where Leadmill started" : "Client result"} · {c.what}
          </p>
          <h1 className="display mt-3 max-w-4xl text-5xl sm:text-6xl">{page.question}</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted sm:text-xl">{page.answer}</p>
          <div className="mt-7">
            <Byline />
          </div>
        </div>
        <div className="hazard" />
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <figure className="relative">
            <Image
              src={c.photo}
              alt={c.photoAlt}
              width={1400}
              height={1050}
              priority
              className="h-64 w-full rounded-lg object-cover sm:h-80"
            />
            <span className="absolute bottom-3 left-3 flex h-14 items-center rounded-md bg-white px-3">
              <Image src={c.logo} alt={`${c.name} logo`} width={c.logoW} height={c.logoH} className="h-9 w-auto" />
            </span>
          </figure>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
            {page.facts.map((f) => (
              <div key={f.l} className="border-t border-white/20 pt-4">
                <dd className="display text-5xl sm:text-6xl">{f.n}</dd>
                <dt className="mt-2 text-white/75">{f.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {page.sections.map((s) => (
          <div key={s.h} className="border-t border-line py-8 first:border-t-0 first:pt-0">
            <h2 className="display text-3xl sm:text-4xl">{s.h}</h2>
            {s.p.map((p) => (
              <p key={p} className="mt-4 text-lg text-muted">
                {p}
              </p>
            ))}
          </div>
        ))}

        {c.quote && (
          <blockquote className="mt-4 border-l-2 border-accent-bright pl-5">
            <p className="text-2xl leading-snug">&ldquo;{c.quote}&rdquo;</p>
            <footer className="mt-2 text-muted">{c.who}</footer>
          </blockquote>
        )}

        {page.extra && (
          <figure className="mt-10">
            <Image
              src={page.extra.src}
              alt={page.extra.alt}
              width={page.extra.w}
              height={page.extra.h}
              className="w-full rounded-lg border border-line"
            />
            <figcaption className="mt-2 text-sm text-muted">{page.extra.caption}</figcaption>
          </figure>
        )}

        <p className="mt-10 text-lg">
          <Link href={trade.href} className="font-medium underline underline-offset-4">
            {trade.label}
          </Link>
          <span className="text-muted">: what we do, what it costs and how the first 14 days go.</span>
        </p>
      </section>

      <section className="border-y border-line bg-panel">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="display text-4xl sm:text-5xl">Questions about this result</h2>
          <FaqList items={page.faq} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">Other results</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/results/${o.slug}`} className="block rounded-2xl border border-line bg-panel p-6 transition hover:border-foreground">
                <p className="font-medium text-muted">{o.what}</p>
                <p className="display mt-2 text-4xl">{o.big.n}</p>
                <p className="mt-1 text-muted">{o.big.l}</p>
                <p className="mt-4 font-medium underline underline-offset-4">{o.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaSection />
    </>
  );
}
