export type Application = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  city: string;
  state: string;
  greaterHouston: string;
  yearsInBusiness: string;
  employees: string;
  primaryServices: string[];
  commercialPct: string;
  largestProject: string;
  sellsChannelLetters: string;
  manufacturesChannelLetters: string;
  whoAnswersLeads: string;
  responseTime: string;
  adBudget: string;
  revenueRange: string;
  fulfillmentInterest: string;
  crmAgreement: boolean;
};

export type Route = "qualified" | "review" | "nurture" | "disqualified";

export type ScoreResult = {
  score: number;
  route: Route;
  flags: string[];
};

const pick = (map: Record<string, number>, key: string) => map[key] ?? 0;

export function scoreApplication(a: Application): ScoreResult {
  const flags: string[] = [];

  // Hard disqualifier: Greater Houston is excluded territory.
  if (a.greaterHouston === "yes") {
    return { score: 0, route: "disqualified", flags: ["greater-houston"] };
  }

  // Business maturity — 20
  const maturity =
    pick({ "under-2": 0, "2-5": 8, "5-10": 10, "10-plus": 12 }, a.yearsInBusiness) +
    pick({ "1": 2, "2-5": 5, "6-15": 7, "16-plus": 8 }, a.employees);

  // Sales capability — 30
  const sales =
    pick({ owner: 10, salesperson: 12, office: 8, nobody: 0 }, a.whoAnswersLeads) +
    pick({ "under-10-min": 12, "under-1-hour": 9, "same-day": 5, "next-day-plus": 0 }, a.responseTime) +
    pick({ "under-2500": 0, "2500-5k": 3, "5k-15k": 5, "15k-plus": 6 }, a.largestProject);

  // Financial readiness — 20
  const financial =
    pick({ "under-1500": 0, "1500-3000": 12, "3000-plus": 14 }, a.adBudget) +
    pick({ "under-250k": 2, "250k-500k": 4, "500k-1m": 5, "1m-plus": 6 }, a.revenueRange);

  // Operational readiness — 20
  const operational =
    pick({ "under-25": 0, "25-50": 4, "50-75": 7, "75-plus": 8 }, a.commercialPct) +
    pick({ yes: 6, no: 2 }, a.sellsChannelLetters) +
    (a.crmAgreement ? 6 : 0);

  // Strategic fit — 10
  const strategic =
    pick({ yes: 6, maybe: 4, no: 1 }, a.fulfillmentInterest) +
    pick({ no: 4, some: 3, yes: 2 }, a.manufacturesChannelLetters);

  const score = Math.min(100, maturity + sales + financial + operational + strategic);

  if (a.yearsInBusiness === "under-2") flags.push("under-two-years");
  if (a.adBudget === "under-1500") flags.push("budget-below-minimum");
  if (a.responseTime === "next-day-plus") flags.push("slow-lead-response");
  if (!a.crmAgreement) flags.push("no-crm-commitment");

  let route: Route;
  if (a.adBudget === "under-1500") route = "nurture";
  else if (score >= 75) route = "qualified";
  else if (score >= 60) route = "review";
  else route = "nurture";

  // Under two years in business always gets a manual look, never auto-booking.
  if (route === "qualified" && flags.includes("under-two-years")) route = "review";

  return { score, route, flags };
}
