import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";

export const metadata: Metadata = {
  title: "Apply for a Market Review",
  description:
    "Tell us about your sign shop. If your market is open and the fit is right, we'll book a Market Review call.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="display text-4xl sm:text-5xl">Apply for a Market Review</h1>
      <p className="mt-4 max-w-xl text-muted">
        Takes about 3 minutes. We review every application by hand and only take one shop per
        market during the pilot. Honest answers get you a faster decision.
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
