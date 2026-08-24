import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Stand Big",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Raul",
  "company": "Stand Big",
  "location": "San Antonio, TX",
  "prepared": "August 2026",
  "known": [
    "Visual media integrator: digital signage, custom signage, architectural lighting, light shows \u2014 concept through installation.",
    "In-house content creation and warranty support.",
    "Higher-ticket, design-led projects \u2014 the kind that deserve qualified buyers, not tire-kickers."
  ],
  "heard": [],
  "focus": "San Antonio campaigns for illuminated and digital signage buyers \u2014 filtered for budget so the projects that reach you match the caliber of work Stand Big does.",
  "smsBody": "Rameel \u2014 Raul at Stand Big. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
