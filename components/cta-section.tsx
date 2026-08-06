import Link from "next/link";

export function CtaSection({
  headline = "See If Your Shop and Market Are a Fit",
  sub = "Tell us about your shop. If your market is open and the numbers make sense, we'll walk you through exactly how the program works.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="border-t border-line bg-panel">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="display text-4xl sm:text-5xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{sub}</p>
        <Link
          href="/apply"
          className="display mt-8 inline-block bg-accent px-8 py-4 text-lg text-accent-ink transition hover:brightness-110"
        >
          Apply for a Market Review
        </Link>
        <p className="mt-4 text-xs text-muted">
          Takes about 3 minutes. No payment required to apply.
        </p>
      </div>
    </section>
  );
}
