export type Application = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  city: string;
  state: string;
  greaterHouston: string;
  businessType: string;
  revenueRange: string;
  sellsChannelLetters: string; // "Do you currently sell illuminated exterior signage?"
  manufacturesChannelLetters: string; // "Do you fabricate illuminated signage in-house?"
  whoInstalls: string;
  canPermit: string;
  whoAnswersLeads: string;
  adBudget: string;
  fabricationInterest: string;
};

export type Route = "qualified" | "review" | "nurture" | "disqualified";

export type ScoreResult = {
  score: number;
  route: Route;
  flags: string[];
};

const pick = (map: Record<string, number>, key: string) => map[key] ?? 0;

// V2 partner scoring: the ideal partner is an established shop that can sell,
// permit, and install locally — and wants to outsource fabrication to us.
export function scoreApplication(a: Application): ScoreResult {
  const flags: string[] = [];

  // Hard disqualifier: Greater Houston is excluded territory.
  if (a.greaterHouston === "yes") {
    return { score: 0, route: "disqualified", flags: ["greater-houston"] };
  }

  const score = Math.min(
    100,
    pick({ regularly: 8, outsource: 12, rarely: 6, "no-want-to": 8 }, a.sellsChannelLetters) +
      pick({ no: 12, some: 8, yes: 2 }, a.manufacturesChannelLetters) +
      pick({ "in-house": 12, both: 12, subcontractor: 10, none: 0 }, a.whoInstalls) +
      pick({ yes: 12, sometimes: 7, no: 0 }, a.canPermit) +
      pick({ salesperson: 12, owner: 10, office: 6, nobody: 0 }, a.whoAnswersLeads) +
      pick({ "1000-plus": 14, "500-1000": 12, "under-500": 0 }, a.adBudget) +
      pick({ yes: 14, maybe: 8, no: 2 }, a.fabricationInterest) +
      pick({ "under-250k": 2, "250k-500k": 6, "500k-1m": 10, "1m-3m": 12, "3m-plus": 9 }, a.revenueRange)
  );

  if (a.adBudget === "under-500") flags.push("budget-below-minimum");
  if (a.whoInstalls === "none") flags.push("no-installer");
  if (a.canPermit === "no") flags.push("cannot-permit");
  if (a.manufacturesChannelLetters === "yes") flags.push("full-in-house-fabricator");
  if (a.whoAnswersLeads === "nobody") flags.push("nobody-answers-leads");
  if (a.fabricationInterest === "no") flags.push("no-fabrication-interest");

  let route: Route;
  if (a.adBudget === "under-500") route = "nurture";
  else if (score >= 75) route = "qualified";
  else if (score >= 60) route = "review";
  else route = "nurture";

  // Missing installer or permitting capability always gets a manual look —
  // the partner model depends on them owning the local work.
  if (route === "qualified" && (flags.includes("no-installer") || flags.includes("cannot-permit")))
    route = "review";

  return { score, route, flags };
}
