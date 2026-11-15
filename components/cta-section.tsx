import Link from "next/link";
import { StartButton } from "@/components/start-button";

export function CtaSection({
  headline = "Try it free for 21 days.",
  sub = "Start now, or book a call and we'll tell you honestly whether this fits your company.",
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
            <StartButton
              source="cta"
              className="inline-block rounded-[10px] bg-white px-8 py-4 text-lg font-medium text-ink transition hover:opacity-90"
            />
            <Link
              href="/apply"
              className="inline-block rounded-[10px] border border-white/40 px-8 py-4 text-lg font-medium text-white transition hover:border-white"
            >
              Book a call
            </Link>
          </div>
          <p className="mt-3 text-sm text-white/60">$0 today. You only pay Facebook for your ads.</p>
        </div>
      </div>
    </section>
  );
}
