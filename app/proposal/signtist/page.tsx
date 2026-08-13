import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proposal — The Signtist",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Gio Moscol & John (The Signtist, Long Island).
// Prepared 2026-08-13 after the first market call.

export default function SigntistProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">
        Gio &amp; John — The Signtist
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Long Island, NY · Prepared by Rameel Sheikh, LeadMill · August 13, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            Three agencies in a year over-promised and delivered junk leads — generic creative,
            someone else&apos;s footage, no understanding of what a real sign job is.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Radius targeting doesn&apos;t work on an island. Half the circle is water, and
            upstate jobs aren&apos;t worth the bridges.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You don&apos;t want window-graphics and bodega inquiries. You sell serious work —
            channel letters, pylons, monuments, building programs — at $5,000&#43;.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Your own videos already outperform what the agencies made. The creative should be
            YOUR work and YOUR story — a 60-year shop, your designs, your installs.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            November through January goes quiet. The pipeline you build this fall decides
            your winter.</li>
        </ul>
      </section>

      {/* The plan */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">The plan</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Targeting: counties, not circles</h3>
            <p className="mt-2 text-sm text-muted">
              Nassau and Suffolk County targeting — no radius, no water, no upstate. We can add
              or remove specific towns as you learn what your installers will drive to. NYC
              boroughs stay off unless you decide the job size justifies the bridge.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Creative: your work, your story</h3>
            <p className="mt-2 text-sm text-muted">
              Ads built from your photos, videos, and mockups — the Signtist legacy, John&apos;s
              hand-drawn designs, your installs standing five years later. Serious signage only:
              no decals, no wraps, no interior work in any ad. You approve every ad before it
              runs, and if you want to be in them, we produce that with your sign-off.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Qualification before your phone rings</h3>
            <p className="mt-2 text-sm text-muted">
              Every lead answers a form first: sign type, budget range, timeline, business
              address. Small-job and interior inquiries get filtered before they reach you —
              fewer leads than the junk-net approach, better ones.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Reporting you can hold me to</h3>
            <p className="mt-2 text-sm text-muted">
              Weekly: spend, leads, cost per lead, quotes sent, jobs closed. Real numbers, not
              impressions. If something isn&apos;t working, you&apos;ll see it the same week I do.
            </p>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Honest expectations</h2>
        <p className="mt-4 max-w-2xl text-muted">
          The campaign I showed you on our call — our own sign shop&apos;s — ran 72 leads in 30
          days on about $2,600 in spend, roughly $36 per lead. At your $25/day start
          (~$750/month), that same math pencils to about 20–30 qualified leads a month once the
          campaign settles in, and I&apos;ll be pushing to beat it. Closing is then a numbers
          game — shops in our experience close on the order of one in ten of these on
          $6,000–$20,000 work, and that depends on follow-up speed, which you clearly have. I
          won&apos;t put a guaranteed count in writing, and after the agencies you&apos;ve dealt
          with, I&apos;d expect you to be skeptical of anyone who does. What I do guarantee: you
          see every lead, every dollar, every week — and it&apos;s month to month, so if the math
          doesn&apos;t work, fire me.
        </p>
      </section>

      {/* Pricing */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border-2 border-accent-bright">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">The deal</h2>
          </div>
          <div className="grid gap-6 p-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">$500<span className="text-base font-normal text-muted">/month</span></p>
              <p className="mt-1 text-sm text-muted">Flat. No percentage, no setup fee, no contract — month to month.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">$25<span className="text-base font-normal text-muted">/day ad spend</span></p>
              <p className="mt-1 text-sm text-muted">(~$750/month) paid by you directly to Meta. Scale up only when you want to.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">~1 week</p>
              <p className="mt-1 text-sm text-muted">From payment to campaign live, assuming access and assets come over quickly.</p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Includes: campaign build and management, ad creative production from your assets,
            lead qualification form, lead routing to your phone/email, weekly reporting.
          </p>
        </div>
      </section>

      {/* What I need */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I need from you to start</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-muted">
          <li>Payment via the link I sent (that&apos;s the whole commitment — $500, month one).</li>
          <li>Partner access to your Meta Business Manager / ad account and Facebook page.</li>
          <li>A folder of your best photos and videos — installs, fabrication, before/afters,
            John&apos;s sketches if you&apos;re open to it.</li>
          <li>Your town-by-town service list for Nassau/Suffolk (and any no-go towns).</li>
          <li>Fifteen minutes on the phone to approve the first ads before anything runs.</li>
        </ol>
      </section>

      {/* The work */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">The kind of work we put in front of buyers</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["luce", "karma", "slickcity", "copper"].map((n, i) => (
            <Image
              key={n}
              src={`/work/${n}.jpg`}
              alt="Illuminated exterior signage"
              width={800}
              height={1000}
              className={`h-44 w-full rounded-xl object-cover sm:h-56 ${i % 2 === 1 ? "mt-4" : ""}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          From our own shop&apos;s portfolio — with your assets, your ads will show YOUR work,
          not ours.
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Ready when you and John are.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Use the payment link I sent you, or text me and I&apos;ll resend it. From payment,
          I&apos;m building your campaign the same week — in time to bank a pipeline before the
          winter quiet you told me about.
        </p>
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, LeadMill · Houston, TX</p>
      </section>
    </div>
  );
}
