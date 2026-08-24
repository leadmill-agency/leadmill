import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Tampa Beast Mode",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Alexander Largel",
  "company": "Tampa Beast Mode",
  "location": "Tampa, FL",
  "prepared": "August 2026",
  "known": [
    "Full-service signage and printing: LED-illuminated signs, custom acrylic letters, wraps, sign repair and LED retrofits.",
    "You fabricate \u2014 premium materials, 5-year outdoor warranties on illuminated work.",
    "Tampa Bay market, storefronts through corporate brands."
  ],
  "heard": [],
  "focus": "Tampa campaigns aimed at the illuminated storefront work you already build \u2014 LED signs, channel letters, retrofits \u2014 filtered so small decal inquiries never reach your phone.",
  "smsBody": "Rameel \u2014 Alexander at Tampa Beast Mode. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
