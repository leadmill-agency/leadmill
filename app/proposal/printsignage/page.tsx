import type { Metadata } from "next";
import Image from "next/image";
import RoiCalculator from "@/components/roi-calculator";

export const metadata: Metadata = {
  title: "Proposal — PrintSignage",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Frank (Fasil) Sheikh — Squarpix / PrintSignage, North Jersey.
// Prepared 2026-08-14 after the second call.

export default function PrintSignageProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Frank — PrintSignage</h1>
      <p className="mt-3 max-w-2xl text-muted">
        North Jersey · Prepared by Rameel Sheikh, LeadMill · August 14, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;ve tried marketing before and got burned — &quot;everybody just wants to
            take money.&quot; You get sales calls every day and you&apos;re sick of it.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want to shift from vinyl and banner work toward the sign jobs where the real
            money is — and you&apos;d call it a win if the leads close one or two signs.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want leads delivered somewhere organized — a portal with follow-up, not a
            pile of emails you have to chase.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            PrintSignage is the brand you want to grow.</li>
        </ul>
      </section>

      {/* Conflict of interest, answered in writing */}
      <section className="mt-14 rounded-2xl bg-panel p-8">
        <h2 className="text-2xl font-semibold">Your first question, answered in writing</h2>
        <p className="mt-3 text-muted">
          You asked if this is a conflict of interest because we&apos;re in the sign business
          too. Our shop sells only in Greater Houston — we don&apos;t take retail sign work
          anywhere else, and we run one partner per market. If you take North Jersey,
          North Jersey is yours while you&apos;re active. That&apos;s in the deal, not a
          handshake.
        </p>
      </section>

      {/* The plan */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">The plan</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Targeting: your counties, defined together</h3>
            <p className="mt-2 text-sm text-muted">
              Starting point: Bergen, Passaic, Hudson, Essex — the North Jersey core. We set
              the exact county and town list together on a 15-minute kickoff call, and adjust
              as you learn where the best jobs come from. No wasted spend outside your area.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Ads built for sign buyers, not print buyers</h3>
            <p className="mt-2 text-sm text-muted">
              Campaigns on Facebook and Instagram aimed at the $6,000&#43; exterior-sign
              jobs you want — channel letters, storefront signage, monuments. No banner,
              vinyl, or small-format inquiries in any ad. Creative uses your face, your work,
              or a presenter — your call, and you approve every ad before it runs.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Portal, alerts, and follow-up — included</h3>
            <p className="mt-2 text-sm text-muted">
              Every lead lands in your own lead portal with status tracking, and hits your
              email/text the second it comes in. Leads that go quiet get automated follow-up
              emails under your brand, so nothing dies in an inbox. All part of the $500 —
              no add-ons.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Fabrication backup, if you ever want it</h3>
            <p className="mt-2 text-sm text-muted">
              You handle your production your way. If a job ever calls for front-lit or
              back-lit letters, monuments, or pylons you&apos;d rather not build, our
              UL-certified Houston facility quotes it at trade pricing and ships it to you.
              Optional, per job — plenty of partners never use it.
            </p>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Honest expectations</h2>
        <p className="mt-4 max-w-2xl text-muted">
          I won&apos;t promise you a lead count — you told me yourself everybody who calls
          you promises the world. Here&apos;s what I&apos;ll show you instead: over the last
          thirty days, the campaigns we run for our own sign shop in Houston averaged around
          $20 per qualified lead. At $25 a day, you can do that math yourself — and you said
          a win is closing one or two signs. Run your own numbers below and see what the bar actually is. It&apos;s month
          to month: if the math doesn&apos;t work, fire me.
        </p>
      </section>

      {/* Run your own numbers */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Run your own numbers</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Don&apos;t take my defaults — drag every slider to whatever you believe. The
          starting values are our own shop&apos;s real campaign numbers and a conservative
          close rate.
        </p>
        <RoiCalculator fee={500} />
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
              <p className="mt-1 text-sm text-muted">(~$750/month) paid by you directly to Meta, Facebook + Instagram both. Scale only when you want to.</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">~1 week</p>
              <p className="mt-1 text-sm text-muted">From payment to campaign live, assuming access and assets come over quickly.</p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Includes: campaign build and management, ad creative production, lead
            qualification form, lead portal + instant alerts + automated follow-up, weekly
            reporting. North Jersey exclusivity while active.
          </p>
        </div>
      </section>

      {/* What I need */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I need from you to start</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-muted">
          <li>Payment — $500, month one. That&apos;s the whole commitment (button below).</li>
          <li>Partner access to your Meta Business Manager and the PrintSignage Facebook
            page.</li>
          <li>Your best photos and videos of sign work — installs, before/afters, anything.
            If you&apos;re light on sign footage, we produce the creative; you just
            approve it.</li>
          <li>Your county list — we lock it on a 15-minute kickoff call.</li>
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
        <h2 className="display text-3xl">Ready when you are, Frank.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          From payment, I&apos;m building your campaign the same week — targeting locked on
          the kickoff call, first ads in front of you for approval within days.
        </p>
        <a
          href="https://buy.stripe.com/7sY5kDesH5VYebc3ED2sM09"
          className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-85"
        >
          Start the PrintSignage campaign — $500/month
        </a>
        <p className="mt-3 text-sm text-muted">Secure checkout via Stripe · month to month, cancel anytime</p>
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, LeadMill · Houston, TX</p>
      </section>
    </div>
  );
}
