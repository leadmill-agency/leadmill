import { NextResponse } from "next/server";
import crypto from "node:crypto";
import nodemailer from "nodemailer";

// Column order for the Google Sheet. New fields go at the END so existing
// sheet data never shifts under old columns.
const COLUMNS = [
  "submittedAt",
  "fullName",
  "businessName",
  "email",
  "phone",
  "website",
  "city",
  "state",
  "greaterHouston",
  "yearsInBusiness",
  "employees",
  "primaryServices",
  "commercialPct",
  "largestProject",
  "sellsChannelLetters",
  "manufacturesChannelLetters",
  "whoAnswersLeads",
  "responseTime",
  "adBudget",
  "revenueRange",
  "closingPreference",
  "fulfillmentInterest",
  "crmAgreement",
  "score",
  "route",
  "flags",
  "page",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  // V2 partner-model fields (appended so existing sheet columns don't shift)
  "businessType",
  "whoInstalls",
  "canPermit",
  "fabricationInterest",
] as const;

type Payload = Record<string, string | number | boolean | undefined>;

async function googleAccessToken(): Promise<string | null> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!email || !key) return null;

  const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const unsigned =
    b64({ alg: "RS256", typ: "JWT" }) +
    "." +
    b64({
      iss: email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    });
  const signature = crypto.createSign("RSA-SHA256").update(unsigned).sign(key).toString("base64url");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
  });
  if (!res.ok) throw new Error(`Google token exchange failed: ${res.status} ${await res.text()}`);
  const json = (await res.json()) as { access_token: string };
  return json.access_token;
}

async function appendToSheet(payload: Payload) {
  const sheetId = process.env.LEADS_SHEET_ID;
  if (!sheetId) return "skipped";
  const token = await googleAccessToken();
  if (!token) return "skipped";

  const row = COLUMNS.map((c) => {
    const v = payload[c];
    return v === undefined || v === null ? "" : String(v);
  });

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append?valueInputOption=USER_ENTERED`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [row] }),
    }
  );
  if (!res.ok) throw new Error(`Sheets append failed: ${res.status} ${await res.text()}`);
  return "ok";
}

async function sendAlertEmail(payload: Payload) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return "skipped";
  const to = process.env.ALERT_TO || user;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const line = (label: string, key: string) => `${label}: ${payload[key] ?? "—"}`;
  const body = [
    line("Name", "fullName"),
    line("Business", "businessName"),
    line("Phone", "phone"),
    line("Email", "email"),
    line("Location", "city") + ", " + (payload.state ?? ""),
    line("Website", "website"),
    "",
    line("Score", "score"),
    line("Route", "route"),
    line("Flags", "flags"),
    line("Business type", "businessType"),
    line("Fabrication interest", "fabricationInterest"),
    line("Installs via", "whoInstalls"),
    line("Can permit", "canPermit"),
    line("Ad budget", "adBudget"),
    "",
    line("Source", "utm_source"),
    line("Campaign", "utm_campaign"),
    line("Submitted", "submittedAt"),
  ].join("\n");

  await transporter.sendMail({
    from: `LeadMill Applications <${user}>`,
    to,
    subject: `New application: ${payload.businessName ?? "unknown"} — ${payload.route} (${payload.score})`,
    text: body,
  });
  return "ok";
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  // Both effects run even if one fails; the applicant is never blocked on our plumbing.
  const [sheet, email] = await Promise.allSettled([appendToSheet(payload), sendAlertEmail(payload)]);
  for (const r of [sheet, email]) {
    if (r.status === "rejected") console.error("apply route:", r.reason);
  }

  return NextResponse.json({
    sheet: sheet.status === "fulfilled" ? sheet.value : "error",
    email: email.status === "fulfilled" ? email.value : "error",
  });
}
