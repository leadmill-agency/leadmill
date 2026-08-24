import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — New Sign Standard",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Sean Baldwin",
  "company": "New Sign Standard",
  "location": "Southern California",
  "prepared": "August 2026",
  "known": [
    "Design-to-install signage company: renderings, fabrication in your own SoCal facility, permitting, installation.",
    "You position as a signage concierge \u2014 the complete solution, done precisely.",
    "You already own everything downstream: our only job would be predictable demand."
  ],
  "heard": [],
  "focus": "SoCal campaigns for the $6,000+ commercial sign programs you're built for \u2014 property branding, storefront packages \u2014 with qualification that matches your concierge positioning.",
  "smsBody": "Rameel \u2014 Sean at New Sign Standard. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
