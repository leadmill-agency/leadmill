import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proposal — Signarama Oldsmar",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Cory Weicht, Signarama Oldsmar (northwest Tampa, FL). Lead 11/9 from
// the A3 proof-screenshot static; held call 11/9 (11 min, Rameel). Owner since Oct 5; the franchise
// runs Google pay-per-click only. META ADS ONLY. Built from darinka-sign. Follow-up week of 11/16
// (he's away late this week). Rameel 11/3: no corrections of call claims, no pay-per-lead or
// lead-quality copy. Never imply Signarama corporate is a client or endorses LeadMill.

const SMS_HREF = "sms:+19362618323?body=Rameel%20%E2%80%94%20Cory%20from%20Signarama%20Oldsmar%20here.";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

const link = "underline decoration-accent underline-offset-4 hover:text-foreground";
const label = "font-semibold text-foreground";

export default function SignaramaOldsmarProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Cory Weicht — Signarama Oldsmar</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Oldsmar, Florida · Prepared by Rameel Sheikh, LeadMill · November 9, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;ve owned Signarama Oldsmar since October 5. Today your only paid ads are the
            franchise&apos;s Google pay-per-click campaign.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Most of those clicks are broad searches like &quot;sign shop near me&quot;, vehicle
            wraps and yard signs.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want more lobby signs, wall graphics and dimensional letters, plus channel
            letters and monument signs.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            The Google campaign covers a small area. You want to reach nearby areas too, and
            learn from each campaign to improve the other.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Earlier owners left extra Facebook and Instagram pages. Corporate is cleaning them
            up. You control the Facebook page and Ads Manager; Instagram is locked for now.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want to move fast.</li>
        </ul>
      </section>

      {/* Proof */}
      <section className="mt-14 rounded-2xl bg-ink p-8 text-white">
        <p className="text-sm font-semibold text-accent-bright">Not a promise — a screenshot</p>
        <h2 className="display mt-2 text-3xl sm:text-4xl">
          We built this system for my brother&apos;s sign shop in Houston.
        </h2>
        <dl className="mt-6 grid grid-cols-2 gap-6 sm:max-w-md">
          <div>
            <dd className="text-4xl font-semibold">~$23</dd>
            <dt className="mt-1 text-sm text-white/70">per qualified lead, Jul 24 – Aug 22</dt>
          </div>
          <div>
            <dd className="text-4xl font-semibold">144</dd>
            <dt className="mt-1 text-sm text-white/70">sign leads in those 30 days</dt>
          </div>
        </dl>
        <Image
          src="/proof-meta-30d.png"
          alt="The shop's Meta Ads Manager, 30 days, 144 leads"
          width={1600}
          height={612}
          className="mt-6 w-full rounded-xl border border-white/15"
        />
      </section>

      {/* What's included */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What you get for $1,000 a month</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Facebook and Instagram ads",
              "Ads that go after the commercial jobs you want: lobby signs, wall graphics, dimensional letters, channel letters and monuments. Facebook and Instagram, running next to your Google ads."],
            ["Ads made from your own work",
              "We build the ads from photos and video of your real jobs. You approve every ad before it runs."],
            ["Leads where you want them",
              "Each new lead goes straight to your email, a text, or the system you already use, as soon as it comes in."],
            ["One fee, any budget",
              "$1,000 a month after the trial, whatever you spend on ads. Raise the budget when it works and our fee stays the same."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-panel p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["luce", "karma", "slickcity", "copper"].map((n, i) => (
            <Image
              key={n}
              src={`/work/${n}.jpg`}
              alt="Illuminated exterior sign"
              width={800}
              height={1000}
              className={`h-40 w-full rounded-xl object-cover sm:h-52 ${i % 2 === 1 ? "mt-4" : ""}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          Jobs from my brother&apos;s shop. Your ads will show your own work.
        </p>
      </section>

      {/* The deal */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border-2 border-accent-bright">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">The deal: we do the work first, you pay after</h2>
          </div>
          <div className="grid gap-6 p-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">Days 1–21<span className="text-base font-normal text-muted"> · free</span></p>
              <p className="mt-1 text-sm text-muted">
                The full work, not a sample: your ads built and running. You pay us nothing. You pay Facebook for the ads directly, at least
                $25 a day (about $525 over 21 days).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Day 22<span className="text-base font-normal text-muted"> · your call</span></p>
              <p className="mt-1 text-sm text-muted">
                Happy? $1,000 a month, plus your Facebook ad spend. Not happy? Cancel before day
                22 and pay us nothing. No contract, cancel anytime after that too.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Your area<span className="text-base font-normal text-muted"> · yours only</span></p>
              <p className="mt-1 text-sm text-muted">
                We agree the towns around Oldsmar you want. While you&apos;re with us, we
                won&apos;t market any other sign shop there.
              </p>
            </div>
          </div>
          <div className="border-t border-line px-8 py-5">
            <p className="font-semibold">Our guarantee</p>
            <p className="mt-1 text-muted">
              20 commercial sign leads in your first 60 days of ads, or we keep working free
              until you get them.
            </p>
            <p className="mt-2 text-sm text-muted">
              With ad spend of at least $25 a day. A commercial lead is a business in your
              service area asking about a commercial sign. The guarantee covers our fee, not ad
              spend.
            </p>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Your Facebook page, ad account and leads stay yours.
          </p>
        </div>
      </section>

      {/* Onboarding checklist */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">How to get set up</h2>
            <p className="mt-1 text-sm text-white/70">
              About 20 minutes in total. If any screen looks different from these steps, text
              me a screenshot and I&apos;ll walk you through it.
            </p>
          </div>
          <ol className="list-decimal space-y-6 p-8 pl-12 text-muted">
            <li>
              <span className={label}>Start the free trial (2 minutes).</span>{" "}Use{" "}
              <a href={STRIPE_HREF} className={link}>this link</a>. You enter a card, but
              nothing is charged today. The first charge is on day 22, and you can cancel
              before then and pay nothing.
            </li>
            <li>
              <span className={label}>Give me access to Facebook (10 minutes).</span>{" "}You
              already have the page and Ads Manager, so this is quick.
              <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
                <li>Go to business.facebook.com and log in with the account that manages the
                  Signarama Oldsmar Facebook page you want to keep. If it asks you to create a
                  business portfolio, create one with your shop&apos;s name.</li>
                <li>Click the gear icon (Settings), then People, then Add (or Invite).</li>
                <li>Enter rameel@leadmill.co.</li>
                <li>Give access to your Facebook page and your ad account, with full control
                  of both, then send the invite.</li>
                <li>Instagram can wait. Ads still show on Instagram while corporate sorts out the
                  account, and we connect it once you&apos;re back in.</li>
              </ol>
            </li>
            <li>
              <span className={label}>Add your card to the ad account (5 minutes).</span>{" "}In
              the same settings, open Billing and payments and add a card. This is the card
              Facebook charges for the ads, at least $25 a day. It&apos;s paid straight to
              Facebook, never to us.
            </li>
            <li>
              <span className={label}>Photos and video (text them today).</span>{" "}10 to 20
              photos of your best finished work, especially lobby signs, wall graphics,
              dimensional letters, channel letters and monuments, plus any phone video of your
              shop and installs. Jobs from before you bought the shop count too. Real
              phone footage works better in ads than polished video.
            </li>
            <li>
              <span className={label}>Tell me where leads go and where you want work.</span>{" "}
              Email, text or your current system for new leads; the towns or zip codes you want
              to reach (and any your franchise rules out); and the jobs you want most and least.
              If corporate needs to approve ads that use the Signarama name, tell me who to send
              them to.
            </li>
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Your first 21 days</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["Days 1–2", "Ads built", "I build the ads from your photos and send them to you. Nothing runs until you approve them."],
            ["Days 2–3", "Ads live", "Leads start arriving where you chose. The 60-day guarantee clock starts here."],
            ["Days 3–21", "We tune the ads", "We watch which ads bring leads and put more of your budget behind the ones that work."],
            ["Day 18", "Check-in call", "I'll call and ask if you want to continue after day 21."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl bg-panel p-5">
              <span className="text-sm font-semibold text-accent">{n}</span>
              <h3 className="mt-1 font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Let&apos;s get Signarama Oldsmar started.</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Nothing charged today. Cancel before day 22 and you pay us nothing.
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
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, LeadMill</p>
      </section>
    </div>
  );
}
