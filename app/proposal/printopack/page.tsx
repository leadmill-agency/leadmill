import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proposal — Print O Pack",
  robots: { index: false, follow: false },
};

// Unlisted proposal page for Erick Boiak, Print O Pack (printopackinc.com; Los Angeles).
// Held call 2026-11-23 (27 min, Rameel). Print and sign company, signs first. No website (the
// domain shows "under construction") and no Meta ad account. Comparing several companies; wants
// to start early next year. Built 11/23 as the proposal promised on the call.
// Rameel 11/23: the client owns the website (we host it and hand it over on cancel); the 50-mile
// exclusivity said on the call stays OUT of writing. No lead counts in writing; no guarantee (it
// was not pitched on the call). The website is scoped as product pages with quote forms: no
// online checkout or order admin on this page. Nothing from the 11/23 claim-watch list goes here.

const SMS_HREF = "sms:+19362618323?body=Rameel%20%E2%80%94%20Erick%20from%20Print%20O%20Pack%20here.";
const STRIPE_HREF = "https://buy.stripe.com/aFa8wP3O3702ebc4IH2sM0b";

const link = "underline decoration-accent underline-offset-4 hover:text-foreground";
const label = "font-semibold text-foreground";

export default function PrintOPackProposalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">Erick Boiak — Print O Pack</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Los Angeles · Prepared by Rameel Sheikh, Leadmill · November 23, 2026
      </p>

      {/* What you told me */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        <ul className="mt-5 space-y-3 text-muted">
          <li className="flex gap-3"><span className="text-accent">→</span>
            You run a print and sign company in Los Angeles. Signs come first, because a sign job
            usually brings the print work with it.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            About half your work is made in house and half is bought in.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            printopackinc.com has no real website on it yet, and you don&apos;t run Facebook or
            Instagram ads.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You want a website that shows your signs and your full print range: flyers, business
            cards, posters, banners, uniforms and more.</li>
          <li className="flex gap-3"><span className="text-accent">→</span>
            You&apos;re comparing a few companies and want to start early next year.</li>
        </ul>
      </section>

      {/* Proof: a client */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">A sign shop we did this for</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-line">
          <div className="grid sm:grid-cols-2">
            <div className="relative min-h-64">
              <Image
                src="/cases/class1-sign.jpg"
                alt="Monument sign for Living Hope Church, made by Class 1 Graphics"
                fill
                sizes="(min-width: 640px) 430px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-7">
              <Image
                src="/cases/class1-logo.png"
                alt="Class 1 Graphics"
                width={700}
                height={248}
                className="h-10 w-auto"
              />
              <p className="mt-3 text-sm text-muted">
                Signs and vehicle wraps · Palmyra, Pennsylvania
              </p>
              <p className="display mt-5 text-4xl">$24,000</p>
              <p className="mt-1 text-muted">in jobs sold from $603 in ads</p>
              <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5">
                <div>
                  <dd className="text-2xl font-semibold">24</dd>
                  <dt className="mt-1 text-sm text-muted">leads in the first month</dt>
                </div>
                <div>
                  <dd className="text-2xl font-semibold">$19.51</dd>
                  <dt className="mt-1 text-sm text-muted">a lead on the best ad</dt>
                </div>
              </dl>
            </div>
          </div>
          <div className="border-t border-line px-7 py-6">
            <p className="text-muted">
              A four-person shop. The ads brought a $16,000 sign job and about $8,000 in wrap
              jobs. They brought in so much work that he paused them: he was booked through the
              end of the year.
            </p>
            <p className="mt-4 text-lg">
              &ldquo;This is the best results we&apos;ve had so far with advertising… especially
              for the price.&rdquo;
            </p>
            <p className="mt-1 text-sm text-muted">Brendan Moyer, owner</p>
          </div>
        </div>
      </section>

      {/* Proof: where it started */}
      <section className="mt-6 rounded-2xl bg-ink p-8 text-white">
        <p className="text-sm font-semibold text-accent-bright">Where the system started</p>
        <h2 className="display mt-2 text-3xl sm:text-4xl">
          We built it for my brother&apos;s sign shop in Houston.
        </h2>
        <dl className="mt-6 grid grid-cols-2 gap-6 sm:max-w-2xl sm:grid-cols-3">
          <div>
            <dd className="text-4xl font-semibold">$74,799</dd>
            <dt className="mt-1 text-sm text-white/70">in signs sold from 90 days of Facebook leads</dt>
          </div>
          <div>
            <dd className="text-4xl font-semibold">144</dd>
            <dt className="mt-1 text-sm text-white/70">sign leads in 30 days</dt>
          </div>
          <div>
            <dd className="text-4xl font-semibold">~$23</dd>
            <dt className="mt-1 text-sm text-white/70">a lead, Jul 24 – Aug 22</dt>
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
            ["A new website on printopackinc.com",
              "Built from the ground up, starting from the websites you like. A page for each sign type and each print product, a gallery of your work, and a quote form on every page that goes straight to your email. You see it before it goes live."],
            ["Facebook and Instagram ads",
              "Video ads for commercial sign jobs in the parts of Los Angeles you pick. We make the ads and set up your ad account with you. You approve every ad before it runs. Each new lead is emailed to you as soon as it comes in."],
            ["SEO",
              "Links from other trusted sites, blog posts, and a page for each service and area, so Google shows Print O Pack to businesses searching for a sign or print company near them."],
            ["ChatGPT and AI search",
              "We work on getting Print O Pack named when people ask ChatGPT and similar tools for a sign or print shop in Los Angeles."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-panel p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-muted">
          Every week you get an email with the work done, the results, and anything that needs
          your approval. Want a product added or a page changed? Send an email and we make the
          change.
        </p>
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
          Jobs from my brother&apos;s shop. Your website and ads will show your own work.
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
                The full work, not a sample: the website built, ads live, first pages and blog
                posts written, and ChatGPT work started. You pay us nothing. You pay Facebook for
                the ads directly, at least $25 a day (about $525 over 21 days).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Day 22<span className="text-base font-normal text-muted"> · your call</span></p>
              <p className="mt-1 text-sm text-muted">
                Happy? $1,000 a month, plus your Facebook ad spend (about $750 a month at $25 a
                day). The fee stays $1,000 however much you spend on ads. Not happy? Cancel
                before day 22 and pay us nothing. No contract.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">All of it<span className="text-base font-normal text-muted"> · yours</span></p>
              <p className="mt-1 text-sm text-muted">
                The website, your domain name, your Facebook page, your ad account and every
                lead belong to you. We host the website as part of the plan, and if you cancel
                we hand it over.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Starting in January? Sign up when you&apos;re ready. The 21 days start the day you
            sign up.
          </p>
        </div>
      </section>

      {/* Onboarding checklist */}
      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">How to get set up</h2>
            <p className="mt-1 text-sm text-white/70">
              About 45 minutes in total. If any screen looks different from these steps, text
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
              <span className={label}>Send me the websites you like (5 minutes).</span>{" "}Three
              or four is enough. Tell me what you like about each one. I&apos;ll send back
              designs for Print O Pack to choose from.
            </li>
            <li>
              <span className={label}>Send your product list (15 minutes).</span>{" "}The signs
              and print products you want on the website, with the sizes and options for each.
              A price list or an old catalog works.
            </li>
            <li>
              <span className={label}>Tell me where printopackinc.com is registered (2 minutes).</span>{" "}
              GoDaddy, for example. When the new site is ready, I&apos;ll send you the two
              settings to change so it shows on your domain. The domain stays in your account.
            </li>
            <li>
              <span className={label}>Set up Facebook together (15 minutes).</span>{" "}No
              Facebook business page or ad account yet? We create them together on a short
              call, in your name. Then you add me:
              <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5">
                <li>Go to business.facebook.com and log in. If it asks you to create a business
                  portfolio, create one called Print O Pack.</li>
                <li>Click the gear icon (Settings), then People, then Add (or Invite).</li>
                <li>Enter rameel@leadmill.co.</li>
                <li>Give access to your Facebook page and your ad account, with full control
                  of both, then send the invite.</li>
              </ol>
            </li>
            <li>
              <span className={label}>Add your card to the ad account (5 minutes).</span>{" "}In
              the same settings, open Billing and payments and add a card. This is the card
              Facebook charges for the ads, at least $25 a day. It&apos;s paid straight to
              Facebook, never to us.
            </li>
            <li>
              <span className={label}>Photos and video (text them to me).</span>{" "}10 to 20
              photos of your best finished work, signs first, plus any phone video of your shop
              and installs. Real phone footage works better in ads than polished video.
            </li>
            <li>
              <span className={label}>Tell me where leads go and where you want work.</span>{" "}
              Which email gets new leads, the parts of Los Angeles you want first, and the jobs
              you want most and least.
            </li>
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Your first 21 days</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["Days 1–3", "Designs and ads", "You pick a website design. I build the ads and send them to you. Nothing runs until you approve it."],
            ["Week 1", "Ads live", "New leads are emailed to you as they come in."],
            ["Weeks 1–2", "New website", "Your site is built with your sign and print pages. You review it before it goes live on printopackinc.com."],
            ["Week 3", "SEO and ChatGPT", "First service and area pages, blog posts and a before-and-after ChatGPT check. On day 18 I'll call and ask if you want to continue."],
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
        <h2 className="display text-3xl">Let&apos;s get Print O Pack started.</h2>
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
        <p className="mt-6 text-sm text-muted">— Rameel Sheikh, Leadmill</p>
      </section>
    </div>
  );
}
