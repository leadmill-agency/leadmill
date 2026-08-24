import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Signs Installed 4U",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Matthew Cunningham",
  "company": "Signs Installed 4U",
  "location": "Albuquerque, NM",
  "prepared": "August 2026",
  "known": [
    "Sign installation service in the Albuquerque area.",
    "Installers are the best-positioned shops in this model: you already have the trucks, the crew, and the field skills.",
    "Sell the job, install the job \u2014 and if you need the sign built, our Houston facility fabricates at trade pricing."
  ],
  "heard": [],
  "focus": "Albuquerque campaigns for commercial sign buyers, with fabrication backup from our UL-certified Houston shop \u2014 so you can say yes to full projects, not just install work.",
  "showEconomics": true,
  "smsBody": "Rameel \u2014 Matthew at Signs Installed 4U. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
