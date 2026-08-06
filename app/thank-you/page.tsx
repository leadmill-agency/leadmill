import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received",
};

const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ r?: string }>;
}) {
  const { r } = await searchParams;
  const route = r ?? "review";

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      {route === "qualified" && (
        <>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Good news — you look like a fit.</h1>
          <p className="mt-4 text-muted">
            Your shop matches what we look for. The next step is a 20–30 minute Market Review call
            where we look at your market, your numbers, and whether the program makes sense for you.
          </p>
          {calendarUrl ? (
            <a
              href={calendarUrl}
              className="btn-primary mt-8 text-lg"
            >
              Book Your Market Review
            </a>
          ) : (
            <p className="mt-8 rounded-xl bg-panel px-6 py-4 text-sm">
              We&apos;ll email you within one business day with times for your Market Review call.
            </p>
          )}
        </>
      )}

      {route === "review" && (
        <>
          <h1 className="display mt-2 text-4xl sm:text-5xl">We&apos;re reviewing your application.</h1>
          <p className="mt-4 text-muted">
            Thanks — we have everything we need. A real person reviews every application. You&apos;ll
            hear from us within one business day, usually sooner.
          </p>
        </>
      )}

      {(route === "nurture" || route === "disqualified") && (
        <>
          <h1 className="display mt-2 text-4xl sm:text-5xl">Thanks for applying.</h1>
          <p className="mt-4 text-muted">
            {route === "disqualified"
              ? "We don't currently operate in the Greater Houston market, so we won't be able to work together right now. If you open a location in another market, we'd be glad to talk."
              : "Based on your answers, the program isn't the right fit today — usually that comes down to ad budget, lead-response capacity, or time in business. We'll keep your application on file and reach out if that changes."}
          </p>
          <Link href="/" className="mt-8 inline-block text-sm text-accent hover:brightness-110">
            ← Back to the homepage
          </Link>
        </>
      )}
    </div>
  );
}
