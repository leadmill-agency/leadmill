import type { Metadata } from "next";
import Link from "next/link";
import { StartButton } from "@/components/start-button";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Leadmill",
  description: `Call Leadmill on ${PHONE_DISPLAY}, email ${EMAIL}, or book a 30-minute call.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="display max-w-3xl text-5xl sm:text-6xl">Contact Leadmill</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Call, email or book a call. If Leadmill does not fit your company, we will tell you.
          </p>
        </div>
        <div className="hazard" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <dl className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
            <dt className="font-medium text-muted">Phone</dt>
            <dd className="display mt-2 text-4xl">
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </dd>
          </div>
          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
            <dt className="font-medium text-muted">Email</dt>
            <dd className="mt-3 text-2xl font-semibold">
              <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
            <dt className="font-medium text-muted">Book a call</dt>
            <dd className="mt-3">
              <p className="text-muted">A 30-minute phone call about your company and your area.</p>
              <Link href="/apply" className="btn-secondary mt-4 bg-background">
                Pick a time
              </Link>
            </dd>
          </div>
        </dl>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <StartButton source="contact" className="btn-primary text-lg" />
          <p className="text-muted">Free for 21 days, then $1,000 a month. No contract.</p>
        </div>
      </section>
    </>
  );
}
