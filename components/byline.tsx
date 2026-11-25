import Image from "next/image";
import Link from "next/link";
import { AUTHOR, UPDATED } from "@/lib/site";

// Who wrote the page and when it was last reviewed. Shown on every trade and results page.
export function Byline({ dark = false }: { dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-sm ${dark ? "text-white/70" : "text-muted"}`}>
      <Image
        src={AUTHOR.photo}
        alt=""
        width={80}
        height={80}
        className="h-9 w-9 shrink-0 rounded-full object-cover object-top"
      />
      <span>
        By{" "}
        <Link href={AUTHOR.url} className={`underline underline-offset-4 ${dark ? "text-white" : "text-foreground"}`}>
          {AUTHOR.name}
        </Link>
        , founder of Leadmill. Last updated <time dateTime={UPDATED.iso}>{UPDATED.label}</time>.
      </span>
    </p>
  );
}
