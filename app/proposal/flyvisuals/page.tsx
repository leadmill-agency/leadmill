import type { Metadata } from "next";
import Image from "next/image";
import RoiCalculator from "@/components/roi-calculator";

export const metadata: Metadata = {
  title: "Proposal — Fly Visuals",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Brian Radomski + partner — Fly Visuals, Tampa Bay FL.
// Prepared 2026-08-17 after the email thread (CPL question, manufactures own signs,
// partner decision pending). Written for the partner who wasn't in the thread.

export default function FlyVisualsProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Brian — Fly Visuals</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Tampa Bay, FL · Prepared by Rameel Sheikh, LeadMill · August 17, 2026
      </p>

      {/* The 30-second version */}
      <section className="mt-10 rounded-2xl bg-panel p-8">
        <h2 className="text-2xl font-semibold">The whole deal, in four sentences</h2>
        <p className="mt-3 text-muted">
          We run Meta ad campaigns that bring commercial sign jobs to your phone — the same
          system we run for our own sign shop in Houston, which averaged around $20 per
          qualified lead over the last thirty days. You sell the job, make the sign your way,
          and keep every dollar — no revenue share. All-in it&apos;s about $1,250/month: $500
          to us, ~$750 in ad spend you pay straight to Meta. Month to month, no contract, and
          your market is exclusively yours while you&apos;re active.
        </p>
      </section>

      {/* What you asked */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Your questions, answered in writing</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            <span><span className="font-semibold text-foreground">&quot;What does a lead cost?&quot;</span> Our
            own shop&apos;s campaigns ran roughly $17–20 per qualified lead over the last 30
            days. Florida costs will be what they are — you&apos;ll see every number weekly,
            and there&apos;s a calculator below to run your own math.</span></li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            <span><span className="font-semibold text-foreground">&quot;Is it okay if we manufacture our own
            signs?&quot;</span> Yes — ideal, actually. You keep the full margin on every job.
            If a job ever calls for something outside your shop&apos;s capability, our
            UL-certified Houston facility quotes it at trade pricing. Optional, per job.</span></li>
        </ul>
      </section>

      {/* The plan */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">The plan</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Targeting: your market, defined together</h3>
            <p className="mt-2 text-sm text-muted">
              Starting point: Pinellas, Hillsborough, and Pasco counties — the Tampa Bay
              core. We lock the exact list on a 15-minute kickoff call and adjust as you see
              where the best jobs come from. One shop per market: while you&apos;re active,
              we don&apos;t run this system for anyone else in yours.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Ads aimed at real sign buyers</h3>
            <p className="mt-2 text-sm text-muted">
              Campaigns on Facebook and Instagram built for the $6,000&#43; commercial jobs —
              storefront signage, channel letters, monuments. Every lead answers a
              qualification form before it reaches you, so banner-and-decal inquiries get
              filtered out. You approve every ad before it runs.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Leads land somewhere organized</h3>
            <p className="mt-2 text-sm text-muted">
              Instant email/text the second a lead comes in, plus a lead portal with status
              tracking and automated follow-up under your brand for leads that go quiet. All
              included in the $500 — no add-ons.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Reporting you can hold us to</h3>
            <p className="mt-2 text-sm text-muted">
              Weekly: spend, leads, cost per lead, quotes sent, jobs closed. Real numbers,
              not impressions. If something isn&apos;t working, you see it the same week we
              do — and it&apos;s month to month, so firing us takes one text.
            </p>
          </div>
        </div>
      </section>

      {/* Run your own numbers */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Run your own numbers</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Don&apos;t take our defaults — drag every slider to whatever you believe. The
          starting values are our own shop&apos;s real campaign numbers and a conservative
          close rate. This is the math you and your partner are actually deciding on.
        </p>
        <RoiCalculator />
      </section>

      {/* Pricing */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border-2 border-accent-bright">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">The deal — about $1,250/month all-in</h2>
          </div>
          <div className="grid gap-6 p-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">$500<span className="text-base font-normal text-muted">/month</span></p>
              <p className="mt-1 text-sm text-muted">To LeadMill. Flat — no percentage, no setup fee, no contract.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">$25<span className="text-base font-normal text-muted">/day ad spend</span></p>
              <p className="mt-1 text-sm text-muted">(~$750/month) paid by you directly to Meta, Facebook + Instagram. Scale up or down anytime.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">~1 week</p>
              <p className="mt-1 text-sm text-muted">From payment to campaign live, assuming access and assets come over quickly.</p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Includes: campaign build and management, ad creative production, lead
            qualification form, lead portal + instant alerts + automated follow-up, weekly
            reporting. Tampa Bay exclusivity while active.
          </p>
        </div>
      </section>

      {/* What we need */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What we need to start</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-muted">
          <li>Payment — $500, month one. That&apos;s the whole commitment (button below).</li>
          <li>Partner access to your Meta Business Manager and the Fly Visuals Facebook page.</li>
          <li>Your best photos and videos of sign work — installs, before/afters, anything.
            Light on footage? We produce the creative; you just approve it.</li>
          <li>Your county list — locked on a 15-minute kickoff call.</li>
          <li>Fifteen minutes to approve the first ads before anything runs.</li>
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
          From our own shop&apos;s portfolio — the $6,000&#43; exterior work your ads will
          aim for.
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Ready when you both are.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          From payment, we&apos;re building your campaign the same week — targeting locked on
          the kickoff call, first ads in front of you for approval within days. Questions
          first? Call or text Rameel anytime: (936) 261-8323.
        </p>
        <a
          href="https://buy.stripe.com/7sY5kDesH5VYebc3ED2sM09"
          className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-85"
        >
          Start the Fly Visuals campaign — $500/month
        </a>
        <p className="mt-3 text-sm text-muted">Secure checkout via Stripe · month to month, cancel anytime</p>
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, LeadMill · Houston, TX</p>
      </section>
    </div>
  );
}
