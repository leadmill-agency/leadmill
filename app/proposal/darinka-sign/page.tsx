import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proposal — Darinka Sign",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Daria Protsiuk, Darinka Sign (Riverhead, NY). First held call
// 2026-10-30 (WAVE4, A1 referrals video); she decides with her husband. Built 11/3 for the
// follow-up Meet. Uses the 11/2 bundle (ads + website + SEO + AI search, $1,000/mo, full work
// in the 21-day trial) and the approved guarantee wording. Doubles as her onboarding checklist. Rameel 11/3: no
// "correction" of on-call claims, no "you don't pay per lead", no lead-quality section.

const SMS_HREF = "sms:+19362618323?body=Rameel%20%E2%80%94%20Daria%20from%20Darinka%20Sign%20here.";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

const link = "underline decoration-accent underline-offset-4 hover:text-foreground";
const label = "font-semibold text-foreground";

export default function DarinkaSignProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Daria Protsiuk — Darinka Sign</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Riverhead, New York · Prepared by Rameel Sheikh, LeadMill · November 3, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;ve owned Darinka Sign for six years. You bought it from a retiring owner
            and rebuilt it, and you run it as a family business.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You do everything in house: fabrication, installation, printing, banners, merch
            and uniforms. Almost all of your work comes from referrals and networking.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You were burned by an agency that charged you with nothing to show for it. You
            want proof before you pay.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want to be the only shop we work with near you. Another agency promoted five
            shops in your area at once.</li>
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
              "Ads that go after commercial sign jobs in your area: storefront signs, channel letters, monuments. Each lead goes straight to your phone and email."],
            ["A better website",
              "We rebuild darinkasign.com so it looks like the best sign shop on the East End, and turns more visitors into quote requests: a quote button on every page, tap to call or text, and your best work up front."],
            ["SEO",
              "Links from other trusted sites, blog posts, and pages for each service and town, so Google shows Darinka Sign to people searching for a sign shop near them."],
            ["ChatGPT and AI search",
              "We work on getting Darinka Sign named when people ask ChatGPT and similar tools for a sign company on Long Island."],
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
                The full work, not a sample: ads live, website rebuilt, SEO and ChatGPT work
                started. You pay us nothing. You pay Facebook for the ads directly, at least
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
              <p className="text-3xl font-semibold">Suffolk<span className="text-base font-normal text-muted"> · yours only</span></p>
              <p className="mt-1 text-sm text-muted">
                While you&apos;re with us, we won&apos;t market any other sign shop in Suffolk
                County.
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
            Your Facebook page, ad account, leads and domain name
            stay yours. The new website is built and hosted by LeadMill as part of the plan, so
            it stays with LeadMill if you cancel.
          </p>
        </div>
      </section>

      {/* Onboarding checklist */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">How to get set up</h2>
            <p className="mt-1 text-sm text-white/70">
              About 30 minutes in total. If any screen looks different from these steps, text
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
              <span className={label}>Give me access to Facebook (10 minutes).</span>
              <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
                <li>Go to business.facebook.com and log in with the account that manages the
                  Darinka Sign Facebook page. If it asks you to create a business portfolio,
                  create one with your shop&apos;s name.</li>
                <li>Click the gear icon (Settings), then People, then Add (or Invite).</li>
                <li>Enter rameel@leadmill.co.</li>
                <li>Give access to your Facebook page and your ad account, with full control
                  of both, then send the invite.</li>
                <li>If your Instagram account isn&apos;t connected to the page yet, connect it
                  under Settings, then Accounts, then Instagram accounts.</li>
              </ol>
            </li>
            <li>
              <span className={label}>Add your card to the ad account (5 minutes).</span>{" "}In
              the same settings, open Billing and payments and add a card. This is the card
              Facebook charges for the ads, at least $25 a day. It&apos;s paid straight to
              Facebook, never to us.
            </li>
            <li>
              <span className={label}>Website access (5 minutes).</span>{" "}Tell me who hosts
              darinkasign.com (for example GoDaddy, Wix or Squarespace) and either add
              rameel@leadmill.co as a user or send me your web person&apos;s contact. Your
              domain stays in your name.
            </li>
            <li>
              <span className={label}>Google Business Profile (3 minutes).</span>{" "}On Google,
              search &quot;Darinka Sign&quot; while logged in, open your profile&apos;s menu,
              go to Business Profile settings, then Managers, and add rameel@leadmill.co.
            </li>
            <li>
              <span className={label}>Photos and video (text them today).</span>{" "}10 to 20
              photos of your best finished work, especially lit storefront signs, channel
              letters and monuments, plus any phone video of your shop and installs. Real
              phone footage works better in ads than polished video.
            </li>
            <li>
              <span className={label}>Tell me where leads go and where you want work.</span>{" "}
              Who gets the new-lead text and email (you, your husband, or both), the Suffolk
              County towns you want first, and the jobs you want most and least.
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
            ["Days 2–3", "Ads live", "Leads start arriving by text and email. The 60-day guarantee clock starts here."],
            ["Weeks 1–2", "New website", "Your new site is built. You review it before it goes live."],
            ["Week 3", "SEO and ChatGPT", "First service and town pages, blog posts and a before-and-after ChatGPT check. On day 18 I'll call and ask if you want to continue."],
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
        <h2 className="display text-3xl">Let&apos;s get Darinka Sign started.</h2>
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
