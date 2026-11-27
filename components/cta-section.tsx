import Link from "next/link";

export function CtaSection({
  headline = "Try it free for 14 days.",
  sub = "Book a call and we'll tell you honestly whether this fits your shop.",
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
          <div className="flex flex-wrap gap-3">
            <Link
              href="/apply"
              className="inline-block rounded-[10px] bg-white px-8 py-4 text-lg font-medium text-ink transition hover:opacity-90"
            >
              Book a call
            </Link>
          </div>
          <p className="mt-3 text-sm text-white/60">No contract. Core from $399 a month after 14 days.</p>
        </div>
      </div>
    </section>
  );
}
