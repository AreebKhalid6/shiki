import type { PublicMenuItem } from "@/lib/toast/types";

type Props = {
  item: PublicMenuItem;
};

type Pairing = { label: string; value: string };

const PAIRING_RE = /^(fun|perfect)\s*:\s*(.*)$/i;

function splitDescription(description: string | null) {
  if (!description) return { text: null, pairings: [] as Pairing[] };

  const pairings: Pairing[] = [];
  const textLines: string[] = [];

  for (const rawLine of description.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    const match = line.match(PAIRING_RE);
    if (match) {
      const value = match[2].trim();
      if (value) pairings.push({ label: match[1], value });
    } else {
      textLines.push(line);
    }
  }

  return { text: textLines.join(" ") || null, pairings };
}

export default function MenuItemCard({ item }: Props) {
  const { text, pairings } = splitDescription(item.description);

  return (
    <article className="flex gap-4 py-4 sm:py-5">
      {item.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.imageUrl}
          alt=""
          className="size-20 shrink-0 rounded-[10px] object-cover sm:size-24"
          loading="lazy"
        />
      ) : null}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h4 className="font-serif text-[19px] font-medium leading-snug text-text-primary sm:text-[20px]">
            {item.name.trim()}
          </h4>
          {item.priceLabel ? (
            <>
              <span
                aria-hidden
                className="min-w-6 flex-1 translate-y-[-4px] border-b border-dotted border-gold-soft"
              />
              <p className="shrink-0 font-sans text-[15px] font-semibold text-gold">
                {item.priceLabel}
              </p>
            </>
          ) : null}
        </div>

        {text ? (
          <p className="mt-1 font-sans text-[13px] leading-relaxed text-text-secondary sm:text-[14px]">
            {text}
          </p>
        ) : null}

        {pairings.length > 0 ? (
          <p className="mt-1.5 font-sans text-[12px] italic text-text-secondary/90">
            <span className="font-semibold not-italic text-rose-deep">Pairs with</span>{" "}
            {pairings.map((p) => `${p.label}: ${p.value}`).join(" · ")}
          </p>
        ) : null}

        {item.modifierGroups.length > 0 ? (
          <details className="group mt-2">
            <summary className="cursor-pointer list-none font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-pink-primary hover:text-rose-deep [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">+ Options &amp; add-ons</span>
              <span className="hidden group-open:inline">− Hide options</span>
            </summary>
            <div className="mt-2 space-y-2.5">
              {item.modifierGroups.map((group) => (
                <div key={group.name}>
                  <p className="font-sans text-[12px] font-semibold text-text-primary/85">
                    {group.name}
                    {group.required ? (
                      <span className="ml-1.5 font-normal text-text-secondary">(choose one)</span>
                    ) : null}
                  </p>
                  <ul className="mt-1 flex flex-wrap gap-1.5">
                    {group.modifiers.map((m) => (
                      <li
                        key={m.name}
                        className="rounded-full border border-border-light bg-bg-main px-2.5 py-0.5 font-sans text-[11px] text-text-secondary"
                      >
                        {m.name}
                        {m.priceLabel ? (
                          <span className="ml-1 text-gold">+{m.priceLabel}</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </article>
  );
}
