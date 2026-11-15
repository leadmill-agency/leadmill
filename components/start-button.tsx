"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PHONE_DISPLAY, PHONE_HREF, START_CHECKOUT_URL } from "@/lib/links";
import { track } from "@/lib/track";

type Step = "revenue" | "adspend" | "tooSmall" | "noAdSpend" | "start";

const revenueOptions = [
  "Under $10,000",
  "$10,000 to $30,000",
  "$30,000 to $100,000",
  "Over $100,000",
];

const timeline = [
  {
    when: "Today",
    t: "$0 puts your card on file and starts your 21 free days.",
    d: "Nothing is charged for 21 days. The 21 days count from today.",
  },
  {
    when: "Next",
    t: "Kickoff call",
    d: "We call you to plan your ads and collect photos, videos and Facebook access.",
  },
  {
    when: "Week 1",
    t: "Your ads go live",
    d: "In your own ad account. You pay Facebook directly, at least $25 a day.",
  },
  { when: "Weeks 1–3", t: "Website, SEO, AI search, and your CRM and project tracker", d: "" },
  {
    when: "Day 22",
    t: "$1,000 a month starts",
    d: "Cancel before then and you pay us nothing. No contract.",
  },
];

const included = [
  "Facebook and Instagram ads",
  "A rebuilt website",
  "SEO, and ChatGPT and AI search",
  "A CRM and project tracker",
];

const optionClass =
  "w-full rounded-[10px] border border-ink px-5 py-4 text-left text-lg font-medium transition hover:bg-ink hover:text-white focus-visible:bg-ink focus-visible:text-white";

export function StartButton({
  label = "Start now",
  className = "btn-primary",
  source = "page",
}: {
  label?: string;
  className?: string;
  source?: string;
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("revenue");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const answer = (question: string, value: string, next: Step) => {
    track("start_flow_answer", { question, value });
    setStep(next);
  };

  const wide = step === "start";

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setStep("revenue");
          setOpen(true);
          track("start_flow_open", { source });
        }}
      >
        {label}
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/60 px-4 py-6 sm:items-center sm:py-10"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Start with LeadMill"
              className={`relative w-full rounded-2xl bg-background p-6 text-left text-foreground shadow-2xl sm:p-10 ${
                wide ? "max-w-5xl" : "max-w-xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-muted transition hover:bg-panel hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                ×
              </button>

              {step === "revenue" && (
                <div>
                  <p className="font-medium text-muted">Start now · 1 of 2</p>
                  <h2 className="display mt-2 text-4xl sm:text-5xl">
                    What does your company make in a month?
                  </h2>
                  <div className="mt-7 space-y-3">
                    {revenueOptions.map((o, i) => (
                      <button
                        key={o}
                        type="button"
                        className={optionClass}
                        onClick={() =>
                          answer(
                            "monthly_revenue",
                            o,
                            i === 0 ? "tooSmall" : "adspend",
                          )
                        }
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === "adspend" && (
                <div>
                  <p className="font-medium text-muted">Start now · 2 of 2</p>
                  <h2 className="display mt-2 text-4xl sm:text-5xl">
                    Your ads run on your own card, at least $25 a day. OK with
                    that?
                  </h2>
                  <div className="mt-7 space-y-3">
                    <button
                      type="button"
                      className={optionClass}
                      onClick={() => answer("ad_spend_ok", "yes", "start")}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className={optionClass}
                      onClick={() => answer("ad_spend_ok", "no", "noAdSpend")}
                    >
                      No, I expected you to cover it
                    </button>
                  </div>
                  <button
                    type="button"
                    className="mt-6 text-muted underline underline-offset-4"
                    onClick={() => setStep("revenue")}
                  >
                    Back
                  </button>
                </div>
              )}

              {(step === "tooSmall" || step === "noAdSpend") && (
                <div>
                  <h2 className="display text-4xl sm:text-5xl">
                    {step === "tooSmall"
                      ? "It may be too early."
                      : "We don't cover ad spend."}
                  </h2>
                  <p className="mt-5 text-lg text-muted">
                    {step === "tooSmall"
                      ? "Leadmill is $1,000 a month after the free 21 days, plus at least $25 a day in ads. Under about $10,000 a month, the fee and the ad spend have little room to pay for themselves."
                      : "You pay Facebook directly, on your own card and in your own ad account. That is why the account, the data and every lead stay yours. Our $1,000 a month never includes ad spend."}
                  </p>
                  <p className="mt-4 text-lg text-muted">
                    Think we have it wrong? Talk to us first.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/apply"
                      className="btn-primary"
                      onClick={() => setOpen(false)}
                    >
                      Book a call
                    </Link>
                    <a href={PHONE_HREF} className="btn-secondary">
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="mt-6 text-muted underline underline-offset-4"
                    onClick={() =>
                      setStep(step === "tooSmall" ? "revenue" : "adspend")
                    }
                  >
                    Back
                  </button>
                </div>
              )}

              {step === "start" && (
                <div>
                  <h2 className="display text-4xl sm:text-5xl">
                    Start with Leadmill
                  </h2>
                  <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_1fr_0.8fr]">
                    <div>
                      <h3 className="font-semibold text-muted">How it works</h3>
                      <ol className="mt-3 border-b border-line">
                        {timeline.map((s) => (
                          <li
                            key={s.when}
                            className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-line py-3.5"
                          >
                            <p className="font-medium text-muted">{s.when}</p>
                            <div>
                              <p className="font-medium">{s.t}</p>
                              {s.d && (
                                <p className="mt-0.5 text-sm text-muted">
                                  {s.d}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-semibold text-muted">Your plan</h3>
                      <div className="mt-3 rounded-xl border-2 border-ink p-5">
                        <p className="display text-5xl">$0 today</p>
                        <p className="mt-1 text-muted">
                          then $1,000 a month from day 22
                        </p>
                        <ul className="mt-5 space-y-2 border-t border-line pt-4">
                          {included.map((i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span
                                aria-hidden
                                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-bright text-[0.65rem] font-bold text-accent-ink"
                              >
                                ✓
                              </span>
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={START_CHECKOUT_URL}
                        className="btn-primary mt-5 w-full text-center text-lg"
                        onClick={() => track("start_flow_checkout", { source })}
                      >
                        Start my free 21 days
                      </a>
                      <p className="mt-3 text-sm text-muted">
                        Secure checkout by Stripe. No contract. Cancel any time.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-muted">
                        From the founder
                      </h3>
                      <Image
                        src="/founder.png"
                        alt="Rameel Sheikh, founder of LeadMill"
                        width={1125}
                        height={1451}
                        className="mt-3 h-40 w-40 rounded-xl object-cover object-top"
                      />
                      <p className="mt-4 text-muted">
                        I run the marketing for my brother&apos;s sign company,
                        and we use this exact system there every week.
                        That&apos;s why the first 21 days are free.
                      </p>
                      <p className="mt-3">
                        Rameel Sheikh
                        <span className="block text-sm text-muted">
                          Founder, LeadMill
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 border-t border-line pt-5 text-muted">
                    Questions?{" "}
                    <a
                      href={PHONE_HREF}
                      className="text-foreground underline underline-offset-4"
                    >
                      Call {PHONE_DISPLAY}
                    </a>{" "}
                    or{" "}
                    <Link
                      href="/apply"
                      className="text-foreground underline underline-offset-4"
                      onClick={() => setOpen(false)}
                    >
                      book a call
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
