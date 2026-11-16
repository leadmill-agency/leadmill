import Image from "next/image";
import { ownerCards } from "@/lib/offer";

// One card per case study, Owner.com style: photo, one big number, who it is.
// Scrolls sideways on a phone, three across on a desktop.
export function OwnerCards() {
  return (
    <ul className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0">
      {ownerCards.map((c) => (
        <li
          key={c.role}
          className="relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl bg-ink sm:w-[46%] lg:w-auto"
        >
          <Image
            src={c.photo}
            alt={c.alt}
            fill
            sizes="(min-width: 1024px) 370px, 78vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent px-6 pb-6 pt-24 text-white">
            <p className="display text-5xl">{c.n}</p>
            <p className="mt-1 text-xl font-medium text-white/75">{c.l}</p>
            <p className="mt-4 text-sm">
              {c.who}
              <span className="block text-white/75">{c.role}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
