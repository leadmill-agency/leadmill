import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Signs and Branding",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Areesh Mitha",
  "company": "Signs and Branding",
  "location": "Fort Worth, TX",
  "prepared": "August 2026",
  "known": [
    "Fort Worth sign company \u2014 you applied twice, with a $2,000+/month ad budget marked. You're serious about growth.",
    "You marked leads-only: you have production and install covered.",
    "At your budget, the campaign starts with real velocity \u2014 and Fort Worth becomes yours exclusively."
  ],
  "heard": [],
  "focus": "Fort Worth campaigns at the spend level you flagged ($2k+/month if you choose) \u2014 commercial illuminated work only, qualified before it reaches your phone, exclusive to Signs and Branding in your market.",
  "smsBody": "Rameel \u2014 Areesh at Signs and Branding. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
