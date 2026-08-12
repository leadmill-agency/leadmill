import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Partner Call",
  robots: { index: false, follow: false },
};

// Unlisted screen-share deck for partner calls. Not linked from nav.
// Walk top to bottom; skip sections per the call kit (12_PARTNER_CALL_KIT.md).

export default function CallPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* 1 — Who you're talking to */}
      <section className="grid items-center gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
        <Image
          src="/founder.png"
          alt="Rameel Sheikh on the fabrication floor"
          width={1125}
          height={1451}
          priority
          className="w-full rounded-2xl object-cover"
        />
        <div>
          <p className="text-lg text-muted">Lead<span className="text-accent">Mill</span></p>
          <h1 className="display mt-2 text-5xl sm:text-6xl">
            Built by operators of a real commercial sign company.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            We run Meta campaigns for local businesses every week, and our fabrication network is
            anchored by a UL-certified sign facility in Houston, Texas. Both sides of this
            business are things we actually do — not services we resell.
          </p>
        </div>
      </section>

      {/* 2 — The model */}
      <section className="border-t border-line py-20">
        <h2 className="display text-4xl sm:text-5xl">The model, in four steps.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            ["1", "We generate demand", "Local Meta campaigns built for illuminated-sign buyers, in your market only."],
            ["2", "You sell the project", "Your brand, your retail price, your customer. Leads route to your phone in seconds."],
            ["3", "We fabricate (if you want)", "Trade-priced production from the UL-certified Houston facility. Optional, quoted per job."],
            ["4", "You deliver", "Survey, permit, install — your local expertise is exactly why the customer stays yours."],
          ].map(([n, t, d]) => (
            <div key={n} className="rounded-2xl bg-panel p-6">
              <span className="text-sm font-semibold text-accent">Step {n}</span>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 — Economics */}
      <section className="border-t border-line py-20">
        <h2 className="display text-4xl sm:text-5xl">What one job can look like.</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Illustrative — every job is quoted individually, and you set your own retail price.
        </p>
        <div className="mt-8 max-w-xl overflow-hidden rounded-2xl border border-line">
          <div className="bg-ink px-6 py-4 text-white">
            <p className="font-semibold">Example: illuminated storefront sign</p>
          </div>
          <dl className="divide-y divide-line px-6 text-base">
            <div className="flex justify-between py-4"><dt className="text-muted">Your retail price</dt><dd className="font-semibold">$6,000</dd></div>
            <div className="flex justify-between py-4"><dt className="text-muted">Trade fabrication</dt><dd>− $3,200</dd></div>
            <div className="flex justify-between py-4"><dt className="text-muted">Local permit</dt><dd>− $600</dd></div>
            <div className="flex justify-between py-4"><dt className="text-muted">Local install</dt><dd>− $1,000</dd></div>
            <div className="-mx-6 flex justify-between bg-panel px-6 py-5"><dt className="font-semibold">Your gross profit</dt><dd className="text-2xl font-semibold text-accent">≈ $1,200</dd></div>
          </dl>
        </div>
      </section>

      {/* 4 — The work */}
      <section className="border-t border-line py-20">
        <h2 className="display text-4xl sm:text-5xl">The work behind the network.</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {["luce", "karma", "slickcity", "copper"].map((n, i) => (
            <Image
              key={n}
              src={`/work/${n}.jpg`}
              alt="Illuminated exterior signage"
              width={800}
              height={1000}
              className={`h-56 w-full rounded-xl object-cover sm:h-72 ${i % 2 === 1 ? "mt-6" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* 5 — The split */}
      <section className="border-t border-line py-20">
        <h2 className="display text-4xl sm:text-5xl">A clean split.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink p-8 text-white">
            <p className="text-lg font-semibold">Lead<span className="text-accent-bright">Mill</span> handles</p>
            <ul className="mt-5 space-y-3 text-white/80">
              {["Meta campaigns + creative", "Lead capture + qualification", "Automated follow-up", "Trade fabrication, quoted per job"].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-accent-bright">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-panel p-8">
            <p className="text-lg font-semibold">Your shop handles</p>
            <ul className="mt-5 space-y-3 text-muted">
              {["The customer + the retail price", "Surveys + field measurements", "Permits + landlord approvals", "Installation + electrical"].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-accent">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 — Pricing + next steps */}
      <section className="border-t border-line py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-accent-bright p-8">
            <h3 className="text-2xl font-semibold">LeadMill Partner</h3>
            <p className="mt-4 text-4xl font-semibold">$500<span className="text-lg font-normal text-muted">/month</span></p>
            <p className="mt-1 text-sm text-muted">+ your Meta ad spend ($500–$1,000/mo to start), paid directly to Meta</p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li>No revenue share — you keep every dollar of your retail sale</li>
              <li>One shop per market — yours is exclusive while you&apos;re active</li>
              <li>Fabrication optional, trade-priced, quoted per job</li>
              <li>Month to month — fire us if the math doesn&apos;t work</li>
            </ul>
          </div>
          <div className="self-center">
            <h3 className="display text-3xl sm:text-4xl">If we start this week:</h3>
            <ol className="mt-6 space-y-4 text-muted">
              <li><span className="font-semibold text-foreground">Today</span> — we define your market together, on this call.</li>
              <li><span className="font-semibold text-foreground">This week</span> — campaign built and launched: creative, targeting, lead routing to your phone.</li>
              <li><span className="font-semibold text-foreground">Every week</span> — you see spend, leads, quotes, and closed jobs. Real numbers, no vanity metrics.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
