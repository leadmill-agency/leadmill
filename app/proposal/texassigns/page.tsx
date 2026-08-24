import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Texas Signs Inc",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Sameer & team",
  "company": "Texas Signs Inc",
  "location": "Dallas + Frisco, TX",
  "prepared": "Updated after our call \u00b7 August 24, 2026",
  "known": [
    "In-house fabrication: reverse-lit channel letters, LED displays, cabinets, monuments \u2014 with your own installation team.",
    "Two locations (Dallas and Frisco), serving 40+ cities across the metroplex.",
    "You position on engineering knowledge most graphics shops lack."
  ],
  "heard": [
    "10+ years in Dallas, covering all of Texas \u2014 exterior signage and monument signs are the cash cow, with in-house printing behind them.",
    "Leads today come from Google PPC and organic. No Meta ads yet \u2014 that's the open channel, and it works differently: the creative is the targeting, not keywords.",
    "You're comparing several vendors this week with your team before deciding.",
    "Xenia's questions, answered in writing: campaigns run in YOUR ad account, you have full dashboard access the whole time, and everything we build \u2014 ads, campaigns, creative \u2014 stays yours even if you walk on day 21."
  ],
  "focus": "The trial is built for exactly the comparison you're running this week: 21 days, your own ad account, ~$20/day paid straight to Meta, no management fee \u2014 stack that against any retainer quote on your list. Campaigns aim at your defined Dallas-area city list, at the exterior and monument work that's already your cash cow, with every ad approved by your team before launch.",
  "smsBody": "Rameel \u2014 Sameer at Texas Signs Inc. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
