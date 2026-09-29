import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposal — Mark De Ocampo",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Mark De Ocampo (Northern California sign installer +
// fabricator; installs for national sign companies, wants his own local jobs). Agreed
// on the call 2026-09-29 to start in October — fourth LeadMill partner. One campaign,
// Northern California, $1,000/mo after day 21. Doubles as his onboarding checklist.
// Company name + email not confirmed yet (transcript garbled) — keep them off the page
// until they are.

const SMS_HREF =
  "sms:+19362618323?body=Rameel%20%E2%80%94%20Mark%20De%20Ocampo%20here.";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

export default function MarkDeOcampoProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Mark De Ocampo — Northern California</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Prepared by Rameel Sheikh, LeadMill · September 29, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call today</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            Your install crews are busy with work from big national sign companies. But your
            fabrication shop and printer are sitting idle, because those signs arrive already
            built.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want your own local jobs — businesses you design, build and install for,
            with a deposit up front instead of waiting 60 days to get paid.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;re licensed for California. You want to start in Northern California:
            San Francisco, Oakland, San Jose, Sacramento and Napa.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;ve tried this before. One lead company charged about $5,000 a month. Your
            own Facebook posts cost about $700 and brought two leads.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want people who actually want a sign — not people clicking around on their
            phone. And you want the ads to show your own crews and your own work.</li>
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
                Happy with the leads? $1,000/month flat, plus whatever you choose to spend on
                ads. Not happy? Cancel — no contract, and everything we built stays yours.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Yours<span className="text-base font-normal text-muted"> · exclusively</span></p>
              <p className="mt-1 text-sm text-muted">
                One shop per market. We don&apos;t work with anyone else in Northern
                California, and your ads run only in the areas you pick.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            The $1,000 is flat — it never scales with ad spend. At your numbers, one local
            job in the trial covers the ad spend, and two a month covers everything after it.
            That&apos;s the breakeven, not a promise — you&apos;ll see every number from your
            own account.
          </p>
        </div>
      </section>

      {/* Lead quality, honestly */}
      <section className="mt-14 rounded-2xl bg-panel p-8">
        <h2 className="text-2xl font-semibold">About lead quality, honestly</h2>
        <p className="mt-3 text-muted">
          Nobody can promise every lead is ready to buy — including companies that say they
          can. What we do: the ads speak only to business owners who need a storefront or
          building sign, and the form asks about their business and project before they can
          submit. That filters out most people who are just scrolling. Some will still get
          through, and you&apos;ll see every lead the moment it arrives, so you can judge the
          mix yourself during the free 21 days.
        </p>
      </section>

      {/* Onboarding checklist */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">How to get set up</h2>
            <p className="mt-1 text-sm text-white/70">
              Four things — most of it is 15 minutes of clicking.
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
              crews installing, your shop, and finished jobs — phone footage is perfect. Send
              the ads you&apos;ve already run too, so we can build on what you have.
            </li>
            <li>
              <span className="font-semibold text-foreground">Service area, budget and lead
              routing:</span> the cities you want first, your daily budget ($25–50), and where
              leads should go so your sales team can call them fast — email, text, or both.
              Then I build the ads and send them to you. Nothing runs until you approve every
              one, and the 21-day clock starts when the ads go live.
            </li>
          </ol>
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Let&apos;s get October started, Mark.</h2>
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
