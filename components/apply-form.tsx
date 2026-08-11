"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { scoreApplication, type Application } from "@/lib/scoring";
import { getUtms, track } from "@/lib/track";

const initial: Application = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  website: "",
  city: "",
  state: "",
  greaterHouston: "",
  businessType: "",
  revenueRange: "",
  sellsChannelLetters: "",
  manufacturesChannelLetters: "",
  whoInstalls: "",
  canPermit: "",
  whoAnswersLeads: "",
  adBudget: "",
  fabricationInterest: "",
};

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA",
  "ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
  "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

// Greater Houston is excluded territory (protects our fabrication operation's
// home market). We flag it silently from city/state instead of asking applicants.
const HOUSTON_METRO = [
  "houston", "katy", "sugar land", "pearland", "the woodlands", "woodlands", "spring",
  "cypress", "pasadena", "baytown", "league city", "humble", "conroe", "missouri city",
  "stafford", "tomball", "richmond", "rosenberg", "webster", "friendswood", "channelview",
  "deer park", "la porte", "kingwood", "atascocita",
];

const isGreaterHouston = (city: string, state: string) =>
  state === "TX" && HOUSTON_METRO.includes(city.trim().toLowerCase());

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-lg border border-line bg-background px-3 py-2.5 text-sm outline-none transition focus:border-accent";

export function ApplyForm() {
  const router = useRouter();
  const [data, setData] = useState<Application>(initial);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [started, setStarted] = useState(false);

  const set = <K extends keyof Application>(key: K, value: Application[K]) => {
    if (!started) {
      setStarted(true);
      track("form_start");
    }
    setData((d) => ({ ...d, [key]: value }));
  };

  const validate = (): string => {
    if (!data.fullName || !data.businessName || !data.email || !data.phone || !data.city || !data.state)
      return "Please fill in every contact field except website.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return "That email doesn't look right.";
    if (
      !data.businessType ||
      !data.revenueRange ||
      !data.sellsChannelLetters ||
      !data.manufacturesChannelLetters ||
      !data.whoInstalls ||
      !data.canPermit ||
      !data.whoAnswersLeads ||
      !data.adBudget ||
      !data.fabricationInterest
    )
      return "Please answer every question about your shop.";
    return "";
  };

  const submit = async () => {
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    setSubmitting(true);

    const scored: Application = {
      ...data,
      greaterHouston: isGreaterHouston(data.city, data.state) ? "yes" : "no",
    };
    const result = scoreApplication(scored);
    const payload = {
      ...scored,
      score: result.score,
      route: result.route,
      flags: result.flags.join(", "),
      submittedAt: new Date().toISOString(),
      page: window.location.href,
      ...getUtms(),
    };

    track("form_submit", { score: result.score, route: result.route });
    if (result.route === "qualified") track("qualified_application", { score: result.score });

    try {
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Don't strand the applicant on a network hiccup — routing still proceeds.
    }

    router.push(`/thank-you?r=${result.route}`);
  };

  return (
    <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name">
          <input className={inputCls} value={data.fullName} onChange={(e) => set("fullName", e.target.value)} autoComplete="name" />
        </Field>
        <Field label="Business name">
          <input className={inputCls} value={data.businessName} onChange={(e) => set("businessName", e.target.value)} autoComplete="organization" />
        </Field>
        <Field label="Email">
          <input className={inputCls} type="email" value={data.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
        </Field>
        <Field label="Phone">
          <input className={inputCls} type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
        </Field>
        <Field label="Website (optional)">
          <input className={inputCls} value={data.website} onChange={(e) => set("website", e.target.value)} placeholder="yourshop.com" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="City">
            <input className={inputCls} value={data.city} onChange={(e) => set("city", e.target.value)} autoComplete="address-level2" />
          </Field>
          <Field label="State">
            <select className={inputCls} value={data.state} onChange={(e) => set("state", e.target.value)}>
              <option value="">—</option>
              {US_STATES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Which best describes your business?">
          <select className={inputCls} value={data.businessType} onChange={(e) => set("businessType", e.target.value)}>
            <option value="">Select…</option>
            <option value="print">Print shop</option>
            <option value="wrap">Wrap shop</option>
            <option value="graphics">Graphics shop</option>
            <option value="sign">Sign shop</option>
            <option value="franchise">Franchise print/sign location</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Approximate annual revenue">
          <select className={inputCls} value={data.revenueRange} onChange={(e) => set("revenueRange", e.target.value)}>
            <option value="">Select…</option>
            <option value="under-250k">Under $250k</option>
            <option value="250k-500k">$250k–$500k</option>
            <option value="500k-1m">$500k–$1M</option>
            <option value="1m-3m">$1M–$3M</option>
            <option value="3m-plus">$3M+</option>
          </select>
        </Field>
        <Field label="Do you sell illuminated exterior signage today?">
          <select className={inputCls} value={data.sellsChannelLetters} onChange={(e) => set("sellsChannelLetters", e.target.value)}>
            <option value="">Select…</option>
            <option value="regularly">Yes, regularly</option>
            <option value="outsource">Occasionally — we outsource it</option>
            <option value="rarely">Rarely</option>
            <option value="no-want-to">No, but we want to</option>
          </select>
        </Field>
        <Field label="Do you fabricate illuminated signage in-house?">
          <select className={inputCls} value={data.manufacturesChannelLetters} onChange={(e) => set("manufacturesChannelLetters", e.target.value)}>
            <option value="">Select…</option>
            <option value="no">No</option>
            <option value="some">Some products</option>
            <option value="yes">Yes, fully in-house</option>
          </select>
        </Field>
        <Field label="Who handles installation?">
          <select className={inputCls} value={data.whoInstalls} onChange={(e) => set("whoInstalls", e.target.value)}>
            <option value="">Select…</option>
            <option value="in-house">In-house crew</option>
            <option value="subcontractor">Subcontractor</option>
            <option value="both">Both</option>
            <option value="none">We don&apos;t have an installer yet</option>
          </select>
        </Field>
        <Field label="Can your shop handle or arrange sign permits?">
          <select className={inputCls} value={data.canPermit} onChange={(e) => set("canPermit", e.target.value)}>
            <option value="">Select…</option>
            <option value="yes">Yes</option>
            <option value="sometimes">Sometimes</option>
            <option value="no">No</option>
          </select>
        </Field>
        <Field label="Who follows up with new sales leads?">
          <select className={inputCls} value={data.whoAnswersLeads} onChange={(e) => set("whoAnswersLeads", e.target.value)}>
            <option value="">Select…</option>
            <option value="owner">Owner</option>
            <option value="salesperson">Dedicated salesperson</option>
            <option value="office">Office staff</option>
            <option value="nobody">Nobody consistently</option>
          </select>
        </Field>
        <Field label="Monthly Meta ad budget you're willing to test">
          <select className={inputCls} value={data.adBudget} onChange={(e) => set("adBudget", e.target.value)}>
            <option value="">Select…</option>
            <option value="under-500">Under $500</option>
            <option value="500-1000">$500–$1,000</option>
            <option value="1000-plus">$1,000+</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Interested in using Leadmill as your trade fabrication partner?">
            <select className={inputCls} value={data.fabricationInterest} onChange={(e) => set("fabricationInterest", e.target.value)}>
              <option value="">Select…</option>
              <option value="yes">Yes</option>
              <option value="maybe">Maybe — depends on pricing and quality</option>
              <option value="no">No — leads only</option>
            </select>
          </Field>
        </div>
      </div>

      {error && <p className="mt-5 rounded-lg border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">{error}</p>}

      <div className="mt-8 flex items-center justify-end">
        <button
          type="button"
          onClick={submit}
          disabled={submitting}
          className="btn-primary disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Check my market"}
        </button>
      </div>
    </div>
  );
}
