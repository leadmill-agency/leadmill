import type { FaqItem } from "@/components/faq";

// Questions that open and close without JavaScript. The answers stay in the page's HTML, so a
// search engine or an AI assistant can read them. Used on the trade, results and about pages.
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-background">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium transition hover:bg-panel-2 [&::-webkit-details-marker]:hidden">
            <h3>{item.q}</h3>
            <span aria-hidden className="text-xl font-medium text-accent group-open:hidden">
              +
            </span>
            <span aria-hidden className="hidden text-xl font-medium text-accent group-open:inline">
              –
            </span>
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
