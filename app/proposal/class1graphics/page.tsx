import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal — Class 1 Graphics",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Brendan Moyer (Class 1 Graphics, Palmyra PA).
// First trial-offer proposal: 21 days ad-spend-only, then $500/mo founding rate.
// Prepared 2026-08-19 after the first call.

const SMS_HREF =
  "sms:+19362618323?body=Rameel%20%E2%80%94%20Brendan%20at%20Class%201%20Graphics.%20Let%27s%20start%20the%20trial.";

export default function Class1GraphicsProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Brendan — Class 1 Graphics</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Central Pennsylvania · Prepared by Rameel Sheikh, LeadMill · August 19, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;ve been through three or four marketing companies. The worst version:
            $2,500 a month just for them to &quot;make things perform&quot; — and the ROI
            never actually penciled.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You got burned enough that you were ready to just do it yourself. (Fair — that&apos;s
            exactly how I learned it. Took me two years.)</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Your market is Central PA — real cities, but not Philadelphia. You want proof this
            works outside the big metros, not another agency&apos;s big-city case study.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You buy wholesale fabrication locally today, and you want to see our trade pricing
            and shipping as a comparison.</li>
        </ul>
      </section>

      {/* The trial */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border-2 border-accent-bright">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">The deal: prove it first, pay after</h2>
          </div>
          <div className="grid gap-6 p-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">Days 1–21<span className="text-base font-normal text-muted"> · free work</span></p>
              <p className="mt-1 text-sm text-muted">
                I build and run everything — no management fee. You fund only the ad spend:
                ~$20/day paid directly to Meta (about $420 total for the trial).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Day 22<span className="text-base font-normal text-muted"> · your call</span></p>
              <p className="mt-1 text-sm text-muted">
                Happy with the leads? It&apos;s $500/month flat from there — founding rate,
                locked in for as long as you stay active. Not happy? Walk. No contract either
                way.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Flat<span className="text-base font-normal text-muted"> · no meters</span></p>
              <p className="mt-1 text-sm text-muted">
                The fee never scales with ad spend or ad count. $20/day or $1,000/day, five
                ads or fifty — same $500.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Trial includes the full build: ad creative (your face, your jobs, or an AI
            presenter — your approval before anything runs), Instant Forms with strict
            qualification filtering, and every lead hitting your email and phone the moment it
            comes in.
          </p>
        </div>
      </section>

      {/* Small-market honesty */}
      <section className="mt-14 rounded-2xl bg-panel p-8">
        <h2 className="text-2xl font-semibold">The Central PA question, answered honestly</h2>
        <p className="mt-3 text-muted">
          You asked whether this works outside the big metros. The honest answer: lead volume
          scales with population, and I&apos;m not going to promise you Central PA behaves like
          a top-10 metro. That&apos;s exactly why the trial exists — instead of trusting an
          agency&apos;s case study from some other market, you get 21 days of YOUR market&apos;s
          real numbers for about $420 of ad spend. If your area can&apos;t support the math,
          we&apos;ll both see it in the data and part as friends — better to know for $420 than
          for $2,500 a month.
        </p>
      </section>

      {/* Fabrication */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Fabrication: send me a job, compare the quote</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Separate from the leads entirely: our UL-certified Houston facility fabricates
          illuminated exterior signage — front-lit, halo-lit, cabinets, monuments — at trade
          pricing, quoted per job, and ships nationwide. You already have a local wholesale
          guy, so here&apos;s the zero-risk version: send me the production file from a current
          or recent job and I&apos;ll quote it. If we beat your local pricing, you&apos;ve found
          a second source. If we don&apos;t, you&apos;ve confirmed your guy is good. No
          subscription required for fabrication quotes — ever.
        </p>
      </section>

      {/* What I need */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I need from you to start the trial</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-muted">
          <li>Partner access to your Meta Business Manager and the Class 1 Graphics Facebook
            page.</li>
          <li>Your best photos and videos of finished sign work — installs, before/afters,
            anything real.</li>
          <li>A photo of yourself if you want to be in the ads (works surprisingly well) — or
            skip it and we use your work instead.</li>
          <li>Where leads should go: email address and cell for the instant alerts.</li>
          <li>Fifteen minutes to approve the first ads before anything runs.</li>
        </ol>
        <p className="mt-4 text-sm text-muted">
          No payment to start. Your only cost for 21 days is the ~$20/day you pay Meta
          directly.
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Ready when you are, Brendan.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          From ad-account access, your ads are usually in front of you for approval within a
          few days — and the 21-day clock doesn&apos;t start until they&apos;re live.
        </p>
        <a
          href={SMS_HREF}
          className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-85"
        >
          Text me to start the trial
        </a>
        <p className="mt-3 text-sm text-muted">
          Or call anytime: (936) 261-8323 — shop hours, evenings, whenever.
        </p>
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, LeadMill · Houston, TX</p>
      </section>
    </div>
  );
}
