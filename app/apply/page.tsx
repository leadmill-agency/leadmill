import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";

export const metadata: Metadata = {
  title: "Check Your Market",
  description:
    "Tell us about your shop. If your market is open and the fit is right, we'll book a partner call.",
};

export default function ApplyPage() {
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
