import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal — Signarama Austin South",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Edwin Trevino (Signarama Austin South).
// Trial-led offer, $1,000/mo. Prepared 2026-08-19 after the first call.

const SMS_HREF =
  "sms:+19362618323?body=Rameel%20%E2%80%94%20Edwin%20at%20Signarama%20Austin%20South.%20Let%27s%20start%20the%20trial.";

export default function SignaramaAustinSouthProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Edwin — Signarama Austin South</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Austin, TX · Prepared by Rameel Sheikh, LeadMill · August 19, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You have national marketing behind the brand — but the results in YOUR market
            aren&apos;t what you expected.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want something focused specifically on your Austin service area, aimed at the
            bigger jobs: storefront signage in the $6,000–$15,000 range.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Switching is a process on your side — you&apos;d need to wind down the current
            marketing and transfer things over. You want to see the method and cost first.</li>
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
                I build and run everything — no management fee. You fund only the ad spend
                (~$20/day, paid directly to Meta).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Day 22<span className="text-base font-normal text-muted"> · your call</span></p>
              <p className="mt-1 text-sm text-muted">
                Happy with the leads? $1,000/month flat from there. Not happy? Walk — no
                contract at any point, and everything we built stays yours.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Local<span className="text-base font-normal text-muted"> · only</span></p>
              <p className="mt-1 text-sm text-muted">
                Ads run only in your Austin service area, under your store&apos;s brand, in
                your own ad account. Your leads, your customers.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Includes: ad creative (you approve every ad before launch), campaign build and
            management, qualification forms, leads to your email and phone the moment they
            arrive, weekly numbers.
          </p>
        </div>
      </section>

      {/* Why local beats national */}
      <section className="mt-14 rounded-2xl bg-panel p-8">
        <h2 className="text-2xl font-semibold">Why this works where national programs don&apos;t</h2>
        <p className="mt-3 text-muted">
          National campaigns optimize for the whole country — your store gets whatever falls
          in. We do the opposite: campaigns built only for your service area, aimed only at
          the work you want more of. We run this exact system for our own commercial sign
          shop in Houston — about $20 per qualified lead over the last 30 days — and Houston
          is the one market we never offer to anyone else, so there&apos;s no overlap with
          your territory. One shop per market, and Austin South would be yours.
        </p>
      </section>

      {/* Transition without risk */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Don&apos;t cancel anything yet</h2>
        <p className="mt-4 max-w-2xl text-muted">
          You mentioned needing to wind down your current marketing to switch. My suggestion:
          don&apos;t start that process on faith. Run the 21-day trial ALONGSIDE what you have
          now — it&apos;s your own ad account and ~$20/day, so nothing about your current
          setup has to move. On day 22, compare the two side by side and make the transition
          decision with your own numbers in hand. Local marketing decisions like this
          typically sit with the store owner, but if there&apos;s anything franchise-side you
          need to confirm, the trial gives you three weeks to do it without commitment.
        </p>
      </section>

      {/* What I need */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I need from you to start the trial</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-muted">
          <li>Partner access to your store&apos;s Facebook page and Meta ad account (or we set
            one up for the store — 15 minutes).</li>
          <li>Photos of your best installed work — storefront signs especially.</li>
          <li>Your exact service area: the Austin zips or neighborhoods you want jobs from.</li>
          <li>Where leads should go: email address and cell for instant alerts.</li>
          <li>Fifteen minutes to approve the first ads before anything runs.</li>
        </ol>
        <p className="mt-4 text-sm text-muted">
          No payment to start. Your only cost for 21 days is the ad spend you pay Meta
          directly.
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Ready when you are, Edwin.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          From ad-account access, your first ads are in front of you for approval within a few
          days — and the 21-day clock doesn&apos;t start until they&apos;re live.
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
