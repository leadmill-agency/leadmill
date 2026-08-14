"use client";

import { useState } from "react";

// Interactive "run your own numbers" calculator for proposal pages.
// Deliberately outputs breakeven + math from the PROSPECT's own assumptions —
// never a promised ROI figure (house rule: no lead/revenue promises in writing).

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

function Slider({
  label,
  note,
  value,
  onChange,
  min,
  max,
  step,
  display,
}: {
  label: string;
  note?: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold">{label}</span>
        <span className="text-sm tabular-nums text-accent font-semibold">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--accent,#b45309)]"
      />
      {note && <p className="mt-1 text-xs text-muted">{note}</p>}
    </label>
  );
}

export default function RoiCalculator() {
  const [adSpend, setAdSpend] = useState(750);
  const [costPerLead, setCostPerLead] = useState(20);
  const [closeRate, setCloseRate] = useState(10);
  const [jobValue, setJobValue] = useState(8000);
  const [margin, setMargin] = useState(50);

  const fee = 500;
  const totalCost = fee + adSpend;
  const leads = adSpend / costPerLead;
  const jobs = leads * (closeRate / 100);
  const grossPerJob = jobValue * (margin / 100);
  const gross = jobs * grossPerJob;
  const net = gross - totalCost;
  const breakevenJobs = totalCost / grossPerJob;
  const breakevenText =
    breakevenJobs <= 1
      ? `about 1 job every ${Math.max(1, Math.round(1 / breakevenJobs))} month${Math.round(1 / breakevenJobs) > 1 ? "s" : ""}`
      : `about ${breakevenJobs.toFixed(1)} jobs a month`;

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-5 rounded-2xl bg-panel p-6 sm:p-8">
        <Slider
          label="Monthly ad spend"
          note="Paid directly to Meta. $750 ≈ the $25/day start."
          value={adSpend}
          onChange={setAdSpend}
          min={500}
          max={3000}
          step={50}
          display={fmt(adSpend) + "/mo"}
        />
        <Slider
          label="Cost per qualified lead"
          note="Our own shop's campaign ran ~$20 over the last 30 days. Drag it worse if you're skeptical."
          value={costPerLead}
          onChange={setCostPerLead}
          min={12}
          max={80}
          step={1}
          display={fmt(costPerLead)}
        />
        <Slider
          label="Leads you close"
          note="Depends on your follow-up speed and sales process."
          value={closeRate}
          onChange={setCloseRate}
          min={5}
          max={25}
          step={1}
          display={closeRate + "%"}
        />
        <Slider
          label="Average job value"
          value={jobValue}
          onChange={setJobValue}
          min={5000}
          max={20000}
          step={500}
          display={fmt(jobValue)}
        />
        <Slider
          label="Your gross margin"
          note="Fabricating in-house, most shops sit well above 40%."
          value={margin}
          onChange={setMargin}
          min={30}
          max={70}
          step={5}
          display={margin + "%"}
        />
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-white sm:p-8">
        <div>
          <p className="text-sm text-white/60">With YOUR numbers above</p>
          <dl className="mt-4 space-y-3">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <dt className="text-white/80">Qualified leads / month</dt>
              <dd className="font-semibold tabular-nums">~{Math.round(leads)}</dd>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <dt className="text-white/80">Jobs closed / month</dt>
              <dd className="font-semibold tabular-nums">~{jobs.toFixed(1)}</dd>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <dt className="text-white/80">Gross profit / month</dt>
              <dd className="font-semibold tabular-nums">{fmt(gross)}</dd>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <dt className="text-white/80">Total cost ($500 + ads)</dt>
              <dd className="font-semibold tabular-nums">{fmt(totalCost)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-white/80">Net / month</dt>
              <dd className={`text-xl font-semibold tabular-nums ${net >= 0 ? "text-accent-bright" : "text-red-400"}`}>
                {net >= 0 ? "+" : "−"}{fmt(Math.abs(net))}
              </dd>
            </div>
          </dl>
        </div>
        <p className="mt-6 rounded-xl bg-white/10 p-4 text-sm text-white/90">
          Breakeven on everything: <span className="font-semibold">{breakevenText}</span> at these
          numbers. Everything past that is yours — we take no percentage.
        </p>
      </div>
    </div>
  );
}
