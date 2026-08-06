"use client";

import { useState } from "react";
import { track } from "@/lib/track";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-background">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium transition hover:bg-panel-2"
            onClick={() => {
              const next = open === i ? null : i;
              setOpen(next);
              if (next !== null) track("faq_expand", { question: item.q });
            }}
          >
            {item.q}
            <span className="text-xl font-medium text-accent">{open === i ? "–" : "+"}</span>
          </button>
          {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
