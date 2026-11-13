import Link from "next/link";

export function CtaSection({
  headline = "See if your market is open.",
  sub = "Tell us about your company. If your market is open and the fit is right, we'll walk you through exactly how the partnership works.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-4 py-20 sm:px-6">
        <div>
          <h2 className="display text-5xl text-white sm:text-7xl">{headline}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">{sub}</p>
        </div>
        <div>
          <Link
            href="/apply"
            className="inline-block rounded-[10px] bg-white px-8 py-4 text-lg font-medium text-ink transition hover:opacity-90"
          >
            Schedule a call
          </Link>
          <p className="mt-3 text-sm text-white/60">About 2 minutes. No payment to book.</p>
        </div>
      </div>
    </section>
  );
}
