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
  yearsInBusiness: "",
  employees: "",
  primaryServices: [],
  commercialPct: "",
  largestProject: "",
  sellsChannelLetters: "",
  manufacturesChannelLetters: "",
  whoAnswersLeads: "",
  responseTime: "",
  adBudget: "",
  revenueRange: "",
  closingPreference: "",
  fulfillmentInterest: "",
  crmAgreement: false,
};

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA",
  "ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
  "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
];

const SERVICES = [
  "Signs",
  "Vehicle wraps",
  "Banners & vinyl",
  "Commercial printing",
  "Graphics & design",
  "Illuminated signs",
  "Awnings",
  "LED / electronic",
];

const steps = ["Contact", "Your Shop", "Sales & Budget"] as const;

// Greater Houston is excluded territory (protects our fulfillment partner's
// market). We flag it silently from city/state instead of asking applicants.
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
  const [step, setStep] = useState(0);
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

  const validateStep = (): string => {
    if (step === 0) {
      if (!data.fullName || !data.businessName || !data.email || !data.phone || !data.city || !data.state)
        return "Please fill in every field except website.";
      if (!/^\S+@\S+\.\S+$/.test(data.email)) return "That email doesn't look right.";
    }
    if (step === 1) {
      if (!data.yearsInBusiness || !data.employees || !data.commercialPct || !data.largestProject)
        return "Please answer every question on this step.";
      if (data.primaryServices.length === 0) return "Select at least one primary service.";
      if (!data.sellsChannelLetters || !data.manufacturesChannelLetters)
        return "Please answer the sign questions.";
    }
    if (step === 2) {
      if (!data.whoAnswersLeads || !data.responseTime || !data.adBudget || !data.revenueRange || !data.closingPreference || !data.fulfillmentInterest)
        return "Please answer every question on this step.";
      if (!data.crmAgreement)
        return "The program requires using our CRM and reporting lead outcomes. Please confirm to continue.";
    }
    return "";
  };

  const next = () => {
    const problem = validateStep();
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    track("form_step_complete", { step: steps[step] });
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    const problem = validateStep();
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
      primaryServices: data.primaryServices.join(", "),
      score: result.score,
      route: result.route,
      flags: result.flags.join(", "),
      submittedAt: new Date().toISOString(),
      page: window.location.href,
      ...getUtms(),
    };

    track("form_submit", { score: result.score, route: result.route, closing_preference: data.closingPreference });
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
      <div className="mb-8 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-2">
            <div className={`h-1 rounded-full ${i <= step ? "bg-accent-bright" : "bg-line"}`} />
            <span className={`text-xs ${i <= step ? "text-foreground" : "text-muted"}`}>{label}</span>
          </div>
        ))}
      </div>

      {step === 0 && (
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
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Years in business">
            <select className={inputCls} value={data.yearsInBusiness} onChange={(e) => set("yearsInBusiness", e.target.value)}>
              <option value="">Select…</option>
              <option value="under-2">Under 2 years</option>
              <option value="2-5">2–5 years</option>
              <option value="5-10">5–10 years</option>
              <option value="10-plus">10+ years</option>
            </select>
          </Field>
          <Field label="Number of employees">
            <select className={inputCls} value={data.employees} onChange={(e) => set("employees", e.target.value)}>
              <option value="">Select…</option>
              <option value="1">Just me</option>
              <option value="2-5">2–5</option>
              <option value="6-15">6–15</option>
              <option value="16-plus">16+</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <span className="mb-1.5 block text-sm font-medium">Primary services (select all that apply)</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SERVICES.map((s) => {
                const on = data.primaryServices.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() =>
                      set("primaryServices", on ? data.primaryServices.filter((x) => x !== s) : [...data.primaryServices, s])
                    }
                    className={`rounded-lg border px-2 py-2 text-xs transition ${
                      on ? "border-accent-bright bg-accent-bright text-accent-ink" : "border-line bg-background text-muted hover:border-accent"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
          <Field label="What share of your work is commercial (business customers)?">
            <select className={inputCls} value={data.commercialPct} onChange={(e) => set("commercialPct", e.target.value)}>
              <option value="">Select…</option>
              <option value="under-25">Under 25%</option>
              <option value="25-50">25–50%</option>
              <option value="50-75">50–75%</option>
              <option value="75-plus">75%+</option>
            </select>
          </Field>
          <Field label="Largest typical project size">
            <select className={inputCls} value={data.largestProject} onChange={(e) => set("largestProject", e.target.value)}>
              <option value="">Select…</option>
              <option value="under-2500">Under $2,500</option>
              <option value="2500-5k">$2,500–$5,000</option>
              <option value="5k-15k">$5,000–$15,000</option>
              <option value="15k-plus">$15,000+</option>
            </select>
          </Field>
          <Field label="Do you currently sell illuminated exterior signs?">
            <select className={inputCls} value={data.sellsChannelLetters} onChange={(e) => set("sellsChannelLetters", e.target.value)}>
              <option value="">Select…</option>
              <option value="yes">Yes</option>
              <option value="no">Not yet, but I want to</option>
            </select>
          </Field>
          <Field label="Do you manufacture exterior signs in-house?">
            <select className={inputCls} value={data.manufacturesChannelLetters} onChange={(e) => set("manufacturesChannelLetters", e.target.value)}>
              <option value="">Select…</option>
              <option value="no">No — we outsource</option>
              <option value="some">Some — we outsource overflow</option>
              <option value="yes">Yes — fully in-house</option>
            </select>
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Who answers new leads?">
            <select className={inputCls} value={data.whoAnswersLeads} onChange={(e) => set("whoAnswersLeads", e.target.value)}>
              <option value="">Select…</option>
              <option value="owner">Owner</option>
              <option value="salesperson">Dedicated salesperson</option>
              <option value="office">Office staff</option>
              <option value="nobody">Nobody consistently</option>
            </select>
          </Field>
          <Field label="Typical lead response time">
            <select className={inputCls} value={data.responseTime} onChange={(e) => set("responseTime", e.target.value)}>
              <option value="">Select…</option>
              <option value="under-10-min">Under 10 minutes</option>
              <option value="under-1-hour">Under 1 hour</option>
              <option value="same-day">Same business day</option>
              <option value="next-day-plus">Next day or slower</option>
            </select>
          </Field>
          <Field label="Monthly advertising budget (ad spend, separate from our fee)">
            <select className={inputCls} value={data.adBudget} onChange={(e) => set("adBudget", e.target.value)}>
              <option value="">Select…</option>
              <option value="under-1500">Under $1,500</option>
              <option value="1500-3000">$1,500–$3,000</option>
              <option value="3000-plus">$3,000+</option>
            </select>
          </Field>
          <Field label="Annual revenue range">
            <select className={inputCls} value={data.revenueRange} onChange={(e) => set("revenueRange", e.target.value)}>
              <option value="">Select…</option>
              <option value="under-250k">Under $250k</option>
              <option value="250k-500k">$250k–$500k</option>
              <option value="500k-1m">$500k–$1M</option>
              <option value="1m-plus">$1M+</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Who should handle closing the leads we send?">
              <select className={inputCls} value={data.closingPreference} onChange={(e) => set("closingPreference", e.target.value)}>
                <option value="">Select…</option>
                <option value="my-team">My team — we just need the leads</option>
                <option value="leadmill-desk">LeadMill&apos;s closing desk — you answer, qualify, and quote for us</option>
                <option value="not-sure">Not sure — tell me more on the call</option>
              </select>
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Are you interested in using our fulfillment network (production, permits, installation)?">
              <select className={inputCls} value={data.fulfillmentInterest} onChange={(e) => set("fulfillmentInterest", e.target.value)}>
                <option value="">Select…</option>
                <option value="yes">Yes</option>
                <option value="maybe">Maybe — depends on pricing</option>
                <option value="no">No — I have my own backend</option>
              </select>
            </Field>
          </div>
          <label className="flex items-start gap-3 rounded-xl border border-line bg-background p-4 text-sm sm:col-span-2">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 accent-[var(--accent)]"
              checked={data.crmAgreement}
              onChange={(e) => set("crmAgreement", e.target.checked)}
            />
            <span>
              I agree to use the provided CRM and report lead outcomes (contacted, quoted, closed, lost).
              This is how we both know the campaign is working.
            </span>
          </label>
        </div>
      )}

      {error && <p className="mt-5 border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">{error}</p>}

      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="text-sm text-muted hover:text-foreground">
            ← Back
          </button>
        ) : (
          <span />
        )}
        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="btn-primary">
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            className="btn-primary disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Submit application"}
          </button>
        )}
      </div>
    </div>
  );
}
