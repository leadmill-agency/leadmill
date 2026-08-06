import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-muted sm:px-6">
      <h1 className="display text-4xl text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-xs">Last updated: July 13, 2026</p>

      <h2 className="display mt-10 text-2xl text-foreground">What we collect</h2>
      <p className="mt-3">
        When you apply for a Market Review, we collect the information you submit: your name,
        business details, contact information, and answers about your shop. We also collect
        standard analytics data (pages visited, device type) and advertising attribution data
        (campaign parameters) through cookies and similar technologies, including the Meta Pixel
        and Google Analytics.
      </p>

      <h2 className="display mt-10 text-2xl text-foreground">How we use it</h2>
      <p className="mt-3">
        We use your information to evaluate your application, contact you about the program by
        phone, SMS, or email, and improve our advertising. We do not sell your personal
        information. We share it only with service providers we use to run the business (such as
        our CRM, email, and analytics providers).
      </p>

      <h2 className="display mt-10 text-2xl text-foreground">Your choices</h2>
      <p className="mt-3">
        You can ask us to update or delete your information, or to stop contacting you, at any
        time by emailing us. You can also control cookies through your browser settings.
      </p>

      <h2 className="display mt-10 text-2xl text-foreground">Contact</h2>
      <p className="mt-3">
        Questions about this policy: email hello@leadmill.co.
      </p>
    </div>
  );
}
