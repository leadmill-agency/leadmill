import Image from "next/image";
import RoiCalculator from "@/components/roi-calculator";

// Shared template for per-prospect trial proposal pages (unlisted).
// Each /proposal/<slug>/page.tsx passes a config; during a call, edit that
// config's `heard`/`focus` and redeploy — the page is the close instrument.

export type TrialProposalConfig = {
  name: string;
  company: string;
  location: string;
  prepared: string;
  known: string[];
  heard: string[];
  focus: string;
  smsBody: string;
  showEconomics?: boolean;
};

export function TrialProposal(cfg: TrialProposalConfig) {
  const sms = `sms:+19362618323?body=${encodeURIComponent(cfg.smsBody)}`;
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted">Prepared for</p>
      <h1 className="display mt-1 text-4xl sm:text-5xl">
        {cfg.name} — {cfg.company}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        {cfg.location} · Prepared by Rameel Sheikh, LeadMill · {cfg.prepared}
      </p>

      {cfg.known.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">What we already know about {cfg.company}</h2>
          <ul className="mt-5 space-y-3 text-muted">
            {cfg.known.map((k) => (
              <li key={k} className="flex gap-3">
                <span className="text-accent">→</span>
                {k}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What I heard on our call</h2>
        {cfg.heard.length > 0 ? (
          <ul className="mt-5 space-y-3 text-muted">
            {cfg.heard.map((k) => (
              <li key={k} className="flex gap-3">
                <span className="text-accent">→</span>
                {k}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-muted italic">
            This section gets written live, from our conversation — so it says what you
            actually told me, not what a template guessed.
          </p>
        )}
      </section>

      {/* Who you're talking to + proof */}
      <section className="mt-14 grid items-center gap-8 rounded-2xl bg-ink p-8 text-white lg:grid-cols-[1fr_1.4fr]">
        <Image
          src="/founder.png"
          alt="Rameel Sheikh on the sign fabrication floor"
          width={1125}
          height={1451}
          className="w-full rounded-xl object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-accent-bright">Not a promise — a screenshot</p>
          <h2 className="display mt-2 text-3xl sm:text-4xl">
            We run this exact system for our own sign shop.
          </h2>
          <dl className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <dd className="text-4xl font-semibold">~$23</dd>
              <dt className="mt-1 text-sm text-white/70">per qualified lead, last 30 days</dt>
            </div>
            <div>
              <dd className="text-4xl font-semibold">144</dd>
              <dt className="mt-1 text-sm text-white/70">sign leads in those 30 days</dt>
            </div>
          </dl>
          <a href="/proof-meta-30d.png" target="_blank" className="mt-5 inline-block text-sm font-medium text-accent-bright">
            See the Ads Manager screenshot →
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["1", "We generate demand", "Meta campaigns for sign buyers, in your market only."],
            ["2", "You sell the job", "Leads hit your phone instantly. Your brand, your price."],
            ["3", "Optional: we fabricate", "Trade-priced from our UL-certified Houston facility."],
            ["4", "You deliver", "Survey, permits, install — your shop, your customer."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl bg-panel p-5">
              <span className="text-sm font-semibold text-accent">Step {n}</span>
              <h3 className="mt-1 font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The work */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">The kind of jobs the ads bring in</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["luce", "karma", "slickcity", "copper"].map((n, i) => (
            <Image
              key={n}
              src={`/work/${n}.jpg`}
              alt="Illuminated exterior signage"
              width={800}
              height={1000}
              className={`h-40 w-full rounded-xl object-cover sm:h-52 ${i % 2 === 1 ? "mt-4" : ""}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          $6,000+ illuminated exterior work — with your assets, the ads show YOUR jobs.
        </p>
      </section>

      <section className="mt-14">
        <div className="overflow-hidden rounded-2xl border-2 border-accent-bright">
          <div className="bg-ink px-8 py-6 text-white">
            <h2 className="text-2xl font-semibold">The deal: prove it first, pay after</h2>
          </div>
          <div className="grid gap-6 p-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">
                Days 1–21<span className="text-base font-normal text-muted"> · free work</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                We build and run everything — no management fee. You fund only the ad spend
                (~$20/day, paid directly to Meta, in your own ad account).
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">
                Day 22<span className="text-base font-normal text-muted"> · your call</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                Happy with the leads? $1,000/month flat from there. Not happy? Walk — no
                contract, and everything we built stays yours.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold">
                Yours<span className="text-base font-normal text-muted"> · exclusively</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                One shop per market. Ads run only in your service area, under your brand.
                Your leads, your customers.
              </p>
            </div>
          </div>
          <p className="border-t border-line px-8 py-4 text-sm text-muted">
            Includes: ad creative (you approve every ad before launch), campaign build and
            management, qualification forms, leads to your email and phone instantly, weekly
            numbers. Our own sign shop&apos;s account has run ~$23 per qualified lead over the
            last 30 days — your market will differ, and you&apos;ll see every number.
          </p>
        </div>
      </section>

      {cfg.showEconomics && (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">What one fabricated job can look like</h2>
          <div className="mt-6 max-w-xl overflow-hidden rounded-2xl border border-line">
            <div className="bg-ink px-6 py-4 text-white">
              <p className="font-semibold">Example: illuminated storefront sign</p>
            </div>
            <dl className="divide-y divide-line px-6 text-base">
              <div className="flex justify-between py-3.5"><dt className="text-muted">Your retail price</dt><dd className="font-semibold">$6,000</dd></div>
              <div className="flex justify-between py-3.5"><dt className="text-muted">Trade fabrication (us)</dt><dd>− $3,200</dd></div>
              <div className="flex justify-between py-3.5"><dt className="text-muted">Local permit</dt><dd>− $600</dd></div>
              <div className="flex justify-between py-3.5"><dt className="text-muted">Your install</dt><dd>− $1,000</dd></div>
              <div className="-mx-6 flex justify-between bg-panel px-6 py-4"><dt className="font-semibold">Your gross profit</dt><dd className="text-xl font-semibold text-accent">≈ $1,200</dd></div>
            </dl>
            <p className="border-t border-line px-6 py-3 text-xs text-muted">
              Illustrative — every job quoted individually, and you set your own retail.
            </p>
          </div>
        </section>
      )}

      {/* Run the numbers together */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Let&apos;s run your numbers</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Drag the sliders to YOUR job values and close rate — the defaults are our own
          shop&apos;s real campaign numbers.
        </p>
        <RoiCalculator />
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8">
        <h2 className="text-2xl font-semibold">The plan for {cfg.company}</h2>
        <p className="mt-3 text-muted">{cfg.focus}</p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Say yes today — here&apos;s your week</h2>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-muted">
          <li>
            <span className="font-semibold text-foreground">On this call:</span> partner access
            to your Facebook page + ad account, and your exact service area. Fifteen minutes.
          </li>
          <li>
            <span className="font-semibold text-foreground">Next few days:</span> we build your
            ads from your real work — you approve everything before it runs.
          </li>
          <li>
            <span className="font-semibold text-foreground">This week:</span> campaign live.
            Leads hit your phone. The 21-day clock starts only when ads are live.
          </li>
          <li>
            <span className="font-semibold text-foreground">Day 22:</span> you look at your own
            numbers and decide. No contract either way.
          </li>
        </ol>
        <p className="mt-4 text-sm text-muted">
          No payment to start. Your only cost for 21 days is the ad spend you pay Meta directly.
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-panel p-8 text-center">
        <h2 className="display text-3xl">Ready when you are, {cfg.name.split(" ")[0]}.</h2>
        <a
          href={sms}
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
