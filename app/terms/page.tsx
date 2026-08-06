import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-muted sm:px-6">
      <h1 className="display text-4xl text-foreground">Terms of Service</h1>
      <p className="mt-2 text-xs">Last updated: July 13, 2026</p>

      <h2 className="display mt-10 text-2xl text-foreground">The service</h2>
      <p className="mt-3">
        LeadMill provides advertising management services and optional project-fulfillment
        coordination for sign businesses. Submitting an application does not create a client
        relationship. Client engagements are governed by a separate written agreement.
      </p>

      <h2 className="display mt-10 text-2xl text-foreground">No guarantees</h2>
      <p className="mt-3">
        We do not guarantee lead volume, closed jobs, or revenue. Advertising results vary by
        market, budget, and how quickly leads are contacted. Fulfillment services are quoted
        separately per project and depend on market coverage; permit and installation coordination
        are available only in supported jurisdictions.
      </p>

      <h2 className="display mt-10 text-2xl text-foreground">Accuracy of applications</h2>
      <p className="mt-3">
        By applying, you confirm the information you provide is accurate. We may decline any
        application at our discretion, including where a market conflict exists.
      </p>

      <h2 className="display mt-10 text-2xl text-foreground">Intellectual property</h2>
      <p className="mt-3">
        Site content, ad creative frameworks, and program materials are owned by LeadMill and may
        not be reproduced without permission.
      </p>

      <h2 className="display mt-10 text-2xl text-foreground">Contact</h2>
      <p className="mt-3">Questions about these terms: email hello@leadmill.co.</p>
    </div>
  );
}
