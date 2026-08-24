import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — A Signs",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Antonio Ara",
  "company": "A Signs",
  "location": "North Carolina",
  "prepared": "August 2026",
  "known": [
    "We'll confirm the details of your shop on the call \u2014 the form came through with limited info."
  ],
  "heard": [],
  "focus": "Campaigns in your North Carolina market for the sign work you want more of \u2014 we'll define the exact territory and job types together on the call.",
  "smsBody": "Rameel \u2014 Antonio at A Signs. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
