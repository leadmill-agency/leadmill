import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal — Award Sign Company",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Francis (Award Sign Company, San Diego — electrical signs,
// C-45 licensed, family-owned since 2003). SIGNED on the call 2026-09-28 — third LeadMill
// partner. $25–50/day trial spend, one campaign, AI presenter (he has no footage of
// himself), leads by email. $1,000/mo after day 21. Doubles as his onboarding checklist.

const SMS_HREF =
  "sms:+19362618323?body=Rameel%20%E2%80%94%20Francis%20at%20Award%20Sign%20Company.";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

export default function AwardSignProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Francis — Award Sign Company</h1>
      <p className="mt-3 max-w-2xl text-muted">
        San Diego · Prepared by Rameel Sheikh, LeadMill · September 28, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call today</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;ve been in electrical signs since 2003, and around signs since 1990 —
            your dad hand-lettered banners before computers did it.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Most of your work is repeat customers, including a group of AT&amp;T stores
            you&apos;ve served for almost twenty years. You want new customers on top of that.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Buyers don&apos;t see the work behind a lit sign — city permits, landlord approval,
            engineering, electrical. In California that paperwork and its cost are real, so
            buyers need a shop they can trust.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You run the business on email, and you&apos;d rather we build the ads with an AI
            presenter than film yourself.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You work long-term or not at all. So do we — that&apos;s why the trial exists.</li>
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
                $25–50/day, your call, paid directly to Meta (about $525–1,050 over the 21
                days).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Day 22<span className="text-base font-normal text-muted"> · your call</span></p>
              <p className="mt-1 text-sm text-muted">
                Happy with the leads? $1,000/month flat from there. Not happy? Cancel — no
                obligation, and everything we built stays yours.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Yours<span className="text-base font-normal text-muted"> · exclusively</span></p>
              <p className="mt-1 text-sm text-muted">
                One shop per market. Ads run only in your San Diego service area, under the
                Award Sign Company name. Your leads, your customers.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            The $1,000 is flat — it never scales with ad spend. Your website stays as it is:
            buyers fill in a short form inside Facebook or Instagram, and every lead lands in
            your email the moment it comes in. You approve every ad before it runs.
          </p>
        </div>
      </section>

      {/* Onboarding checklist */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">How to get set up</h2>
            <p className="mt-1 text-sm text-white/70">
              Four things — most of it is 15 minutes of clicking, and I&apos;ll walk you
              through any step on the phone.
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
              spend stays in YOUR ad account, on your card, paid straight to Meta.
            </li>
            <li>
              <span className="font-semibold text-foreground">Photos and video:</span> your
              best finished jobs — lit storefront signs, monuments, installs, before/afters.
              Phone photos are perfect. Email them over or share a Google Drive folder.
            </li>
            <li>
              <span className="font-semibold text-foreground">Service area + your call on the
              ads:</span> the San Diego areas you want jobs from, and your daily budget
              ($25–50). Then I build the ads with an AI presenter and send them to you — nothing
              runs until you approve every one. The 21-day clock starts when the ads go live.
            </li>
          </ol>
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Welcome aboard, Francis.</h2>
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
