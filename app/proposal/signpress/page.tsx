import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proposal — SignPress",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Moshe "Mosh" Spilman, SignPress (Orange & Rockland County, NY).
// Lead 11/6 from the A1 referrals video; held call 11/6 (13 min, Rameel). Wants the full bundle:
// ads + website + SEO + AI search. Signs on a call Monday 11/9 at 10:15am ET. Same structure as
// signs-and-lighting. Rameel 11/3: no corrections of call claims, no pay-per-lead or lead-quality
// copy. Rameel 11/6: no "websites we've built" section.

const SMS_HREF = "sms:+19362618323?body=Rameel%20%E2%80%94%20Mosh%20from%20SignPress%20here.";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

const link = "underline decoration-accent underline-offset-4 hover:text-foreground";
const label = "font-semibold text-foreground";

export default function SignPressProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Mosh Spilman — SignPress</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Orange &amp; Rockland County, New York · Prepared by Rameel Sheikh, LeadMill · November 6, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You make signs for businesses, mostly outside: channel letters, light boxes and
            outdoor vinyl. You also do vinyl inside stores.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You run each job from start to finish: the sale, the design, the permits and the
            install. You work with trusted fabricators and installers with boom trucks.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Today most of your work comes from knocking on doors and from referrals. You want
            new jobs to come to you.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want the big commercial jobs, and you want all four parts: ads, website, SEO and
            AI search.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            Your website was built in a hurry and says things that aren&apos;t true, like vehicle
            wraps. You want it right.</li>
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
              "Ads that go after commercial sign jobs in Orange and Rockland County: channel letters, light boxes, storefront signs. Each new lead is emailed to you as soon as it comes in."],
            ["A better website",
              "We rebuild signpressny.com so it looks like the best sign shop in the area and turns more visitors into quote requests. Only the work you really do, your best jobs up front, and a quote button on every page."],
            ["SEO",
              "Links from other trusted sites, blog posts, and a page for each service and town, so Google shows SignPress to businesses searching for a sign company near them."],
            ["ChatGPT and AI search",
              "We work on getting SignPress named when people ask ChatGPT and similar tools for a sign company in Orange or Rockland County."],
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
                22 and pay us nothing. No contract. Our fee stays $1,000 even if you raise your
                ad budget.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Your area<span className="text-base font-normal text-muted"> · yours only</span></p>
              <p className="mt-1 text-sm text-muted">
                Orange and Rockland County. While you&apos;re with us, we won&apos;t market any
                other sign shop there.
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
              About 30 minutes in total. I&apos;ll call you Monday, November 9 at 10:15 a.m. and
              we can do these steps together on the phone.
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
              <span className={label}>Give me access to Facebook (10 minutes).</span>{" "}No
              Facebook business page yet? Tell me and I&apos;ll set one up for SignPress with you.
              <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
                <li>Go to business.facebook.com and log in with the account that manages the
                  SignPress Facebook page. If it asks you to create a business portfolio, create
                  one with your shop&apos;s name.</li>
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
              <span className={label}>Website access (5 minutes).</span>{" "}Tell me where you
              bought signpressny.com and what you built the site with. Your domain stays in your
              name.
            </li>
            <li>
              <span className={label}>Google Business Profile (3 minutes).</span>{" "}If you have
              one: on Google, search &quot;SignPress&quot; while logged in, open your
              profile&apos;s menu, go to Business Profile settings, then Managers, and add
              rameel@leadmill.co. If you don&apos;t, I&apos;ll help you make one.
            </li>
            <li>
              <span className={label}>Photos and video (text them to me).</span>{" "}10 to 20
              photos of your best finished jobs, especially channel letters, light boxes and
              storefronts, plus any phone video of an install. Real phone footage works better
              in ads than polished video.
            </li>
            <li>
              <span className={label}>Tell me what to fix and where leads go.</span>{" "}Anything on
              your current site that&apos;s wrong, which email gets new leads (and a text too, if
              you want), and the jobs you want most and least.
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
            ["Days 2–3", "Ads live", "New leads are emailed to you. The 60-day guarantee clock starts here."],
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
        <h2 className="display text-3xl">Let&apos;s get SignPress started.</h2>
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
