import type { Metadata } from "next";
import { TrialProposal } from "@/components/trial-proposal";

export const metadata: Metadata = {
  title: "Proposal — Baton Rouge Sign & Graphics",
  robots: { index: false, follow: false },
};

const cfg = {
  "name": "Jeremiah Halford",
  "company": "Baton Rouge Sign & Graphics",
  "location": "Baton Rouge, LA",
  "prepared": "August 2026",
  "known": [
    "Full-service: cabinet signs, channel letters, digital displays, monuments, pylons \u2014 fabricated and installed by your own team.",
    "You run national-brand installation programs on top of local work.",
    "You marked leads-only on the form \u2014 you have everything downstream already."
  ],
  "heard": [],
  "focus": "Baton Rouge metro campaigns for the commercial sign work you fabricate \u2014 pure demand engine, exclusive to BR Sign in your market, nothing else changes about how you operate.",
  "smsBody": "Rameel \u2014 Jeremiah at Baton Rouge Sign & Graphics. Let's start the trial."
};

export default function Page() {
  return <TrialProposal {...cfg} />;
}
