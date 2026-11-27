import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/apply-form";
import { Faq } from "@/components/faq";
import { OwnerCards } from "@/components/owner-cards";
import { faqItems, heroStats, whatWeDo } from "@/lib/offer";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/links";

export const metadata: Metadata = {
  title: "Book a Call",
  alternates: { canonical: "/apply" },
  description:
    "Book a 30-minute call. A website, SEO, AI search and a CRM for sign shops, with ads on Growth. Free for 14 days, then from $399 a month.",
};

const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;

// Google only allows framing its appointment pages in embed mode (?gv=true) on the
// full calendar.google.com URL. Short calendar.app.google links send X-Frame-Options
// and render blank in an iframe, so those get a button instead.
const embedUrl =
  calendarUrl && calendarUrl.includes("calendar.google.com")
    ? `${calendarUrl}${calendarUrl.includes("?") ? "&" : "?"}gv=true`
    : null;

// The offer in four lines, so nobody books a call without knowing the price.
const offerFacts = [
  { t: "Free for 14 days", d: "The full work, not a sample." },
  { t: "Then $399 a month", d: "Or $800 with ads. No contract." },
  { t: "On Growth, you pay for the ads", d: "Facebook and Google, on your own card." },
  { t: "Every lead is yours", d: "Sent to you and nobody else." },
];

const onTheCall = [
  "We look at your shop and your area.",
  "We show you how your first 14 days would work.",
  "We tell you honestly whether it fits.",
];

// The questions people ask on calls, pulled from the homepage list.
const callFaq = [
  "How much does it cost?",
  "Is there a contract?",
  "How fast does it start?",
  "What do I have to do?",
  "Who owns the leads and the accounts?",
];
const faq = callFaq.flatMap((q) => faqItems.filter((f) => f.q === q));

export default function ApplyPage() {
  return (
    <>
      {/* The offer on the left, the calendar (or the form) on the right. */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:py-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-medium text-accent">Book a call</p>
            <h1 className="display mt-3 text-5xl sm:text-6xl">
              Your marketing department, free for 14 days.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              A website, SEO, AI search and a CRM for sign shops, with ads when you want more. All
              done for you and built to bring you more jobs.
            </p>
            {/* The wrapper hides it on a desktop: .btn-primary sets its own display. */}
            <div className="mt-6 lg:hidden">
              <a href="#book" className="btn-primary">
                Pick a time ↓
              </a>
            </div>
            <dl className="mt-7 grid max-w-xl grid-cols-2 gap-x-8">
              {offerFacts.map((f) => (
                <div key={f.t} className="border-t border-ink py-4">
                  <dt className="font-semibold leading-snug">{f.t}</dt>
                  <dd className="mt-1 text-[0.95rem] leading-snug text-muted">{f.d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-3 max-w-xl rounded-2xl border border-line bg-panel px-5 py-4 sm:px-6">
              <p className="font-semibold">On the call: 30 minutes, by phone</p>
              <ol className="mt-2 space-y-1.5 text-[0.95rem] text-muted">
                {onTheCall.map((line, i) => (
                  <li key={line} className="grid grid-cols-[1.5rem_1fr]">
                    <span className="font-medium text-foreground">{i + 1}.</span>
                    {line}
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-5 text-muted">
              Rather talk now?{" "}
              <a href={PHONE_HREF} className="font-medium text-accent">
                Call {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <div id="book" className="scroll-mt-20">
            {calendarUrl ? (
              embedUrl ? (
                <>
                  <div className="overflow-hidden rounded-2xl border border-line bg-background">
                    <iframe
                      src={embedUrl}
                      title="Book a call with Leadmill"
                      className="h-[900px] w-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    Calendar not loading?{" "}
                    <a
                      href={calendarUrl}
                      className="font-medium text-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open the booking page in a new tab →
                    </a>
                  </p>
                </>
              ) : (
                <div className="rounded-2xl border border-line bg-panel p-8">
                  <p className="display text-3xl">Pick a time that works for you.</p>
                  <a
                    href={calendarUrl}
                    className="btn-primary mt-6 text-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pick a time →
                  </a>
                </div>
              )
            ) : (
              <>
                <ApplyForm />
                <p className="mt-6 text-xs text-muted">
                  By submitting, you agree that LeadMill may contact you by phone, SMS, or email
                  about your application. We never sell your information. See our privacy policy.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* What the plans cover */}
      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="display text-4xl sm:text-5xl">What we do for you</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {whatWeDo.map((w, i) => (
              <li
                key={w.t}
                className="grid grid-cols-[2.25rem_1fr] gap-x-2 rounded-2xl border border-line bg-background px-5 py-5 sm:px-6"
              >
                <p className="display pt-0.5 text-xl text-muted">0{i + 1}</p>
                <div>
                  <h3 className="font-semibold leading-snug sm:text-[1.05rem]">{w.t}</h3>
                  <p className="mt-1 text-[0.95rem] leading-snug text-muted">{w.d}</p>
                  <p className="mt-2 inline-block rounded-md bg-ink px-2.5 py-1 text-sm font-medium text-white">
                    {w.chip}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <h2 className="display text-4xl sm:text-5xl">Grow like these owners</h2>
            <Link href="/#results" className="font-medium underline underline-offset-4">
              Read their stories
            </Link>
          </div>
          <dl className="mt-8 grid max-w-3xl grid-cols-3 gap-x-6 border-y border-line py-4">
            {heroStats.map((s) => (
              <div key={s.l}>
                <dd className="display text-4xl sm:text-5xl">{s.n}</dd>
                <dt className="mt-1 text-sm text-muted">{s.l}</dt>
              </div>
            ))}
          </dl>
          <OwnerCards />
        </div>
      </section>

      {/* The questions that come up on calls */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Before you book</h2>
            <a href="#book" className="btn-primary mt-6">
              Pick a time ↑
            </a>
          </div>
          <Faq items={faq} />
        </div>
      </section>
    </>
  );
}
