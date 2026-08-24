import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Singh Freres",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Yati Singh",
  "company": "Singh Freres",
  "location": "Plano, TX + Naples, FL",
  "prepared": "August 2026",
  "known": [
    "Fabrication-first studio: LED and illuminated signs, architectural doors, engineered custom work.",
    "Locations in Plano and Naples, serving hospitality, retail, and commercial nationwide.",
    "You already manufacture \u2014 the question is keeping the shop floor fed."
  ],
  "heard": [],
  "focus": "Campaigns in your choice of market \u2014 DFW, Naples, or both \u2014 aimed at the engineered illuminated work that keeps a fabrication-first shop busy, exclusive to Singh Freres in each territory.",
  "smsBody": "Rameel \u2014 Yati at Singh Freres. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
