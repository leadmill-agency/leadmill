import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal — Jose Pena",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Jose Pena (South Florida sign broker: channel letters +
// monuments, West Palm Beach → Miami). SIGNED on the call 2026-09-28 — second LeadMill
// partner. $25/day trial spend, one campaign, $1,000/mo after day 21.
// Doubles as his onboarding checklist, same shape as /proposal/class1graphics.

const SMS_HREF =
  "sms:+19362618323?body=Rameel%20%E2%80%94%20Jose%20here%20(South%20Florida).";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

export default function JosePenaProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Jose Pena — South Florida</h1>
      <p className="mt-3 max-w-2xl text-muted">
        West Palm Beach to Miami · Prepared by Rameel Sheikh, LeadMill · September 28, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call today</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You ran Meta campaigns with another company before and parted ways. You want
            Meta running again, with ads in your own account.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Your hero product is channel letters, with monument signs alongside. Your area
            is Palm Beach, Broward and Miami-Dade.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You visit every lead in person within 24 hours. Clients tell you that&apos;s why
            they picked you — you were the only one who showed up.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Your best ad so far was you on camera, holding a trimless channel letter and
            explaining it. Clients in Miami want a real person, not a polished ad.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Your math is volume: about $1,000–1,500 per job after install, so more good
            leads is the whole game.</li>
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
                $25/day paid directly to Meta (about $525 over the 21 days).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Day 22<span className="text-base font-normal text-muted"> · your call</span></p>
              <p className="mt-1 text-sm text-muted">
                Happy with the leads? $1,000/month flat from there. Not happy? Cancel — no
                contract, and everything we built stays yours.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Yours<span className="text-base font-normal text-muted"> · exclusively</span></p>
              <p className="mt-1 text-sm text-muted">
                One shop per market. Ads run only in your South Florida area, under your
                name. Your leads, your customers.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            The $1,000 is flat — it never scales with ad spend. At $25/day, your all-in month
            after the trial is about $1,750. At your numbers, two jobs a month covers it.
            That&apos;s the breakeven, not a promise — you&apos;ll see every number from your
            own account.
          </p>
        </div>
      </section>

      {/* Creative plan */}
      <section className="mt-14 rounded-2xl bg-panel p-8">
        <h2 className="text-2xl font-semibold">The plan: more of what already works for you</h2>
        <p className="mt-3 text-muted">
          Your own test already told us the format: you on camera, a real sign in your hands,
          explaining it straight. We build the campaign around your real footage first —
          your organic videos, the English versions you haven&apos;t posted, and your install
          photos — with channel letters as the lead offer. You approve every ad before
          anything runs.
        </p>
      </section>

      {/* Onboarding checklist */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">How to get set up</h2>
            <p className="mt-1 text-sm text-white/70">
              Five things — most of it is 15 minutes of clicking.
            </p>
          </div>
          <ol className="list-decimal space-y-5 p-8 pl-12 text-muted">
            <li>
              <span className="font-semibold text-foreground">Start the trial:</span>{" "}
              <a href={STRIPE_HREF} className="underline decoration-accent underline-offset-4 hover:text-foreground">
                this link
              </a>{" "}
              starts the 21-day free trial — card on file, $0 today, cancel anytime before
              day 22 and pay nothing.
            </li>
            <li>
              <span className="font-semibold text-foreground">Meta access:</span> in
              business.facebook.com, go to Settings → People → Add, and add
              rameel@leadmill.co with access to your Facebook page and your ad account. Ad
              spend stays in YOUR ad account, on your card, paid straight to Meta. (If the
              card on that account is failing, fix it first — ads stop the moment a charge
              fails.)
            </li>
            <li>
              <span className="font-semibold text-foreground">Photos and video:</span> share
              your two Google Drive folders of finished work, plus your best on-camera
              videos — the trimless channel letter one and the English versions of your
              client videos.
            </li>
            <li>
              <span className="font-semibold text-foreground">Service area + lead routing:</span>{" "}
              confirm the cities you want jobs from, and where leads should land: an instant
              email for every lead, plus the leads inbox in Meta Business Suite.
            </li>
            <li>
              <span className="font-semibold text-foreground">Approve the ads:</span> I build
              the campaign from your material; nothing runs until you&apos;ve approved every
              ad. The 21-day clock starts when the ads go live.
            </li>
          </ol>
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Welcome aboard, Jose.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          $0 today, nothing charged until the trial ends, cancel anytime before that.
        </p>
        <a
          href={STRIPE_HREF}
          className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-85"
        >
          Start your 21-day free trial
        </a>
        <p className="mt-3 text-sm text-muted">
          Questions on any step?{" "}
          <a href={SMS_HREF} className="underline underline-offset-4 hover:text-foreground">
            Text
          </a>{" "}
          or call (936) 261-8323.
        </p>
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, LeadMill · Houston, TX</p>
      </section>
    </div>
  );
}
