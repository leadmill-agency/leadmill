import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Who It's For",
  description:
    "LeadMill works with established sign, wrap, print, and graphics shops outside Greater Houston that can respond to leads fast and fund ad spend.",
};

const goodFit = [
  ["Established for 2+ years", "You have a track record, commercial customers, and a portfolio that closes deals."],
  ["Commercial customer base", "Business signage is already part of your work — or the part you want to grow."],
  ["Fast lead response", "You or a salesperson can get to a new lead within minutes. Speed wins commercial jobs."],
  ["Able to fund ad spend", "$1,500–$3,000/month in ad spend, paid directly to Meta, on top of the management fee."],
  ["Hungry for larger projects", "You want $5,000–$25,000 exterior-sign projects, not more $500 banners."],
  ["Willing to track outcomes", "You'll use the CRM and record what happened to every lead. That's non-negotiable."],
];

const poorFit = [
  ["Brand-new businesses", "No track record means no proof you can close and deliver. Build first, then apply."],
  ["Hobby shops", "This is a real spend and a real commitment. It doesn't work as a side project."],
  ["Residential-only companies", "The program targets commercial storefront signage. Residential leads aren't what we generate."],
  ["No one to answer leads", "If leads sit for a day, the money is wasted. We'd rather not take it."],
  ["Guaranteed-revenue seekers", "We don't guarantee closed jobs, and nobody honest does."],
  ["Greater Houston shops", "Houston is excluded from the program. No exceptions."],
];

export default function WhoItsForPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">
            We reject more shops than we take.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            We only take one shop per market. That only works if every shop we take can answer
            leads, close jobs, and report outcomes. Read this honestly before you apply.
          </p>
        </div>
        <div className="hazard" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-accent">Strong fit</h2>
            <div className="mt-6 space-y-4">
              {goodFit.map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-panel p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="text-accent">✓</span> {t}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-muted">Poor fit</h2>
            <div className="mt-6 space-y-4">
              {poorFit.map(([t, d]) => (
                <div key={t} className="rounded-xl border border-line bg-panel p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span className="text-danger">✕</span> {t}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection headline="Think you're a fit?" sub="The application takes about 3 minutes and tells us most of what we need. If it looks right, we'll book your Market Review." />
    </>
  );
}
