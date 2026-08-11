import Link from "next/link";

export function CtaSection({
  headline = "See if your market is open",
  sub = "Tell us about your shop. If your market is open and the fit is right, we'll walk you through exactly how the partnership works.",
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="bg-accent-bright">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="display text-4xl text-accent-ink sm:text-5xl">{headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-accent-ink/80">{sub}</p>
        <Link href="/apply" className="btn-primary mt-8 text-lg">
          Check My Market
        </Link>
        <p className="mt-4 text-sm text-accent-ink/70">
          Takes about 2 minutes. No payment required to apply.
        </p>
      </div>
    </section>
  );
}
