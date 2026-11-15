import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Who It's For",
  description:
    "Leadmill is built for established contractors with a crew, someone to answer leads, and room for at least $25 a day in ads.",
};

const goodFit = [
  ["Your jobs are worth advertising for", "Installs, remodels, repaints and commercial work, for homeowners or businesses. One job should more than cover a month of ads."],
  ["You have a crew", "You or your subs can take on more work when it comes in."],
  ["Someone answers leads the same day", "A lead that waits until next week has usually hired someone else."],
  ["You can quote and close", "Someone on your side can price a job and follow up until it is signed."],
  ["Room for at least $25 a day in ads", "You pay Facebook directly. Our fee never includes ad spend."],
  ["You want leads that are yours alone", "The ads run in your own account. No lead is ever sold to another contractor."],
];

const poorFit = [
  ["Under about $10,000 a month in revenue", "The fee and the ad spend need room to pay for themselves."],
  ["Nobody free to answer leads", "We bring the enquiries. Your side has to pick up the phone."],
  ["No budget for ads", "Without ad spend there is nothing for us to run."],
  ["A restricted Facebook ad account", "Campaigns run in your own account. If Meta has restricted it, that has to be fixed with Meta first."],
  ["You want someone to do the selling", "We bring the lead to your phone. Quoting and closing stay with you."],
];

export default function WhoItsForPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            Built for contractors with a crew and room for more work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            We only take companies we think this will work for. Read this before you start or book
            a call.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">A good fit</h2>
            <div className="mt-6 space-y-4">
              {goodFit.map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-panel p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span aria-hidden>✓</span> {t}
                  </h3>
                  <p className="mt-1.5 text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-muted">Probably not a fit</h2>
            <div className="mt-6 space-y-4">
              {poorFit.map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-panel p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span aria-hidden className="text-danger">✕</span> {t}
                  </h3>
                  <p className="mt-1.5 text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection headline="Think you&apos;re a fit?" sub="Start now, or book a call and we&apos;ll look at your area together. If it isn&apos;t right, we&apos;ll say so." />
    </>
  );
}
