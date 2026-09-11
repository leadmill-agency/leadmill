import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal — Class 1 Graphics",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Brendan Moyer (Class 1 Graphics, Palmyra PA).
// SIGNED 2026-09-11 — first LeadMill partner. Two product lines (storefront
// signage + vehicle wraps), $40–50/day trial spend, $1,000/mo after day 21.
// This page now doubles as his onboarding checklist.

const SMS_HREF =
  "sms:+19362618323?body=Rameel%20%E2%80%94%20Brendan%20at%20Class%201%20Graphics.";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

export default function Class1GraphicsProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Brendan — Class 1 Graphics</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Central Pennsylvania · Prepared by Rameel Sheikh, LeadMill · Updated September 11, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call today</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            Last year you spent about $20,000 on marketing and couldn&apos;t point to the
            return. This year you spent nothing — and had your best year yet, including
            back-to-back $50k months in July and August.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            The catch: that&apos;s referral-and-reputation revenue, and September and October
            are already looking lighter. You want a pipeline you control, not one that
            depends on who happens to call.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want the trial to cover BOTH sides of the shop: commercial storefront
            signage and vehicle wraps/graphics — two campaigns, two lead streams.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You run Jobber, and you have a new website going live early next week — good
            timing, because the ads will send people looking.</li>
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
                $40–50/day paid directly to Meta, covering both product lines (roughly
                $840–$1,050 over the 21 days).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Day 22<span className="text-base font-normal text-muted"> · your call</span></p>
              <p className="mt-1 text-sm text-muted">
                Happy with the leads? $1,000/month flat from there. Not happy? Cancel —
                no contract, and everything we built stays yours.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Yours<span className="text-base font-normal text-muted"> · exclusively</span></p>
              <p className="mt-1 text-sm text-muted">
                One shop per market. Ads run only in your Central PA service area, under
                the Class 1 Graphics brand. Your leads, your customers.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            The $1,000 is flat — it never scales with ad spend or ad count. Trial includes
            the full build for both campaigns: ad creative you approve before anything runs,
            qualification forms, and every lead hitting your phone the moment it comes in.
          </p>
        </div>
      </section>

      {/* Two product lines */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Two campaigns, two lead streams</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Commercial storefront signage</h3>
            <p className="mt-2 text-sm text-muted">
              Business owners in your area who need exterior signage — channel letters,
              cabinets, storefront work. The exact system we run for our own Houston shop:
              ~$23 per qualified lead over the last 30 days, and you&apos;ll see every number
              from your own market.
            </p>
          </div>
          <div className="rounded-2xl bg-panel p-6">
            <h3 className="font-semibold">Vehicle wraps &amp; graphics</h3>
            <p className="mt-2 text-sm text-muted">
              Fleet owners, contractors, and local businesses who want their trucks working
              as billboards. Built from your real wrap jobs — which is why the photo and
              video collection below matters.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">
          Each campaign gets its own creative, its own qualification form, and its own
          numbers — so on day 22 you can see which line pulls harder and decide where the
          budget goes.
        </p>
      </section>

      {/* Onboarding checklist */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">How to get set up</h2>
            <p className="mt-1 text-sm text-white/70">
              Five things — most of it is 15 minutes of clicking, and I&apos;ll walk you
              through any step over the phone.
            </p>
          </div>
          <ol className="list-decimal space-y-5 p-8 pl-12 text-muted">
            <li>
              <span className="font-semibold text-foreground">Start the trial:</span>{" "}
              <a href={STRIPE_HREF} className="underline decoration-accent underline-offset-4 hover:text-foreground">
                this link
              </a>{" "}
              starts the 21-day free trial — card on file, $0 today, nothing charged until
              day 22, cancel anytime before that and pay nothing.
            </li>
            <li>
              <span className="font-semibold text-foreground">Meta access:</span> partner
              access to your Facebook business page and ad account (no Business Manager set
              up? That&apos;s fine — we&apos;ll do it together on a 15-minute screen share).
              Ad spend runs in YOUR ad account, on your card, paid straight to Meta.
            </li>
            <li>
              <span className="font-semibold text-foreground">Photos and video:</span> your
              best finished work from BOTH sides — storefront sign installs and vehicle
              wraps. Before/afters, walk-arounds, phone footage is perfect. A photo of
              yourself too if you&apos;re open to being in the ads (it works), or skip it
              and we lead with the work.
            </li>
            <li>
              <span className="font-semibold text-foreground">Service area + lead routing:</span>{" "}
              the towns/counties you actually want jobs from, and where leads should land —
              instant text + email always, and we&apos;ll wire them into Jobber as requests
              so they drop straight into your existing workflow.
            </li>
            <li>
              <span className="font-semibold text-foreground">Approve the ads:</span> I build
              both campaigns from your material; nothing runs until you&apos;ve seen and
              approved every ad. The 21-day clock starts only when ads go live.
            </li>
          </ol>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Timeline: access today or tomorrow → ads in front of you for approval within a
            few days → live the same week. Your new website launching next week lands right
            on time.
          </p>
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Welcome aboard, Brendan.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          One click starts the clock rolling — $0 today, nothing charged until day 22,
          cancel anytime before that.
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
          or call (936) 261-8323 — shop hours, evenings, whenever.
        </p>
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, LeadMill · Houston, TX</p>
      </section>
    </div>
  );
}
