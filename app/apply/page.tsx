import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";

export const metadata: Metadata = {
  title: "Book a Market Call",
  description:
    "Book a call about your market. If it's open and the fit is right, we'll walk you through the Leadmill partner model.",
};

const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;

export default function ApplyPage() {
  if (calendarUrl) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h1 className="display text-4xl sm:text-5xl">Book your market call</h1>
        <p className="mt-4 max-w-xl text-muted">
          Pick a time that works. We&apos;ll look at your market together and walk through how the
          partnership would work for your shop — about 20–30 minutes, no payment, no pressure.
        </p>
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-background">
          <iframe
            src={calendarUrl}
            title="Book a call with Leadmill"
            className="h-[900px] w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-sm text-muted">
          Calendar not loading?{" "}
          <a href={calendarUrl} className="font-medium text-accent" target="_blank" rel="noreferrer">
            Open the booking page in a new tab →
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="display text-4xl sm:text-5xl">Check your market</h1>
      <p className="mt-4 max-w-xl text-muted">
        Takes about 2 minutes. We review every application by hand, and partner availability is
        limited by market. Honest answers get you a faster decision.
      </p>
      <div className="mt-10">
        <ApplyForm />
      </div>
      <p className="mt-6 text-xs text-muted">
        By submitting, you agree that LeadMill may contact you by phone, SMS, or email about your
        application. We never sell your information. See our privacy policy.
      </p>
    </div>
  );
}
