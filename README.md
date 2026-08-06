# LeadMill acquisition website

Next.js 16 + Tailwind v4. Built from `01_PRD_WEBSITE.md`.

## Run locally

```
npm install
npm run dev
```

## Pages

Home, How It Works, Fulfillment, Who It's For, Apply, Thank You, Privacy, Terms.

## Application form

3-step form at `/apply`. Scoring lives in `lib/scoring.ts` (weights from PRD 03:
maturity 20 / sales 30 / financial 20 / operational 20 / strategic 10).

Routing:
- Greater Houston = yes → disqualified (hard stop, any score)
- Ad budget under $1,500 → nurture
- 75+ → qualified (calendar or "we'll email you")
- 60–74 → manual review
- Below 60 → nurture
- Under 2 years in business → never auto-qualifies, drops to manual review

Submissions POST as JSON to `NEXT_PUBLIC_FORM_WEBHOOK` with all answers,
score, route, flags, and stored UTM parameters. Point it at a Zapier/Make
webhook that emails or Slacks you. No webhook set = payload logged to console
only, so set this before launch.

## Environment

Copy `.env.local.example` to `.env.local`. All keys optional:

- `NEXT_PUBLIC_FORM_WEBHOOK` — where applications go (set before launch)
- `NEXT_PUBLIC_CALENDAR_URL` — booking link for qualified applicants
- `NEXT_PUBLIC_META_PIXEL_ID` — enables PageView + form_start / form_submit / qualified_application events
- `NEXT_PUBLIC_GA_ID` — Google Analytics

## Deploy

Push to GitHub → import to Vercel → set env vars → add domain.
