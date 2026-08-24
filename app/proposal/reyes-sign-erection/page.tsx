import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Reyes Sign Erection LLC",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Miguel Reyes",
  "company": "Reyes Sign Erection LLC",
  "location": "Northern California",
  "prepared": "August 2026",
  "known": [
    "Sign installation company \u2014 erection, cranes, the field work most shops can't do themselves.",
    "You said YES to fabrication interest: sell the job, we build it at trade pricing, you install it.",
    "That combination \u2014 you install, we fabricate \u2014 is exactly the model this was built for."
  ],
  "heard": [],
  "focus": "NorCal campaigns for illuminated sign buyers. You sell and install; when a job needs fabrication, our UL-certified Houston facility builds it at trade pricing and ships it. You keep the customer and the margin.",
  "showEconomics": true,
  "smsBody": "Rameel \u2014 Miguel at Reyes Sign Erection LLC. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
