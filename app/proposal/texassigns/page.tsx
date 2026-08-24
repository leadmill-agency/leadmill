import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Texas Signs Inc",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Sameer & Noor",
  "company": "Texas Signs Inc",
  "location": "Dallas + Frisco, TX",
  "prepared": "August 2026",
  "known": [
    "In-house fabrication: reverse-lit channel letters, LED displays, cabinets, monuments \u2014 with your own installation team.",
    "Two locations (Dallas and Frisco), serving 40+ cities across the metroplex.",
    "You position on engineering knowledge most graphics shops lack."
  ],
  "heard": [],
  "focus": "Campaigns for your defined city list in the metroplex \u2014 aimed at the illuminated commercial work your shop is engineered for, exclusive to Texas Signs in those cities.",
  "smsBody": "Rameel \u2014 Sameer at Texas Signs Inc. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
