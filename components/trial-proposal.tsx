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
            numbers. Our own sign shop&apos;s account has run ~$20 per qualified lead over the
            last 30 days — your market will differ, and you&apos;ll see every number.
          </p>
        </div>
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
