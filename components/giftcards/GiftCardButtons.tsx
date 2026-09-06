import { ExternalLink, Gift, Search } from "lucide-react";
import { giftCards } from "@/data/content";

type Props = {
  className?: string;
  size?: "default" | "compact";
};

export default function GiftCardButtons({ className = "", size = "default" }: Props) {
  const compact = size === "compact";

  const layout = compact
    ? "flex flex-row flex-nowrap gap-2"
    : "flex flex-col gap-3 sm:flex-row sm:flex-wrap";
  const sizing = compact
    ? "gap-1.5 px-4 py-2.5 text-[10px] tracking-[0.1em] sm:px-5 sm:text-[11px]"
    : "gap-2 px-8 py-3.5 text-[12px] tracking-[0.12em]";
  const iconSize = compact ? 14 : 16;

  return (
    <div className={`${layout} ${className}`}>
      <a
        href={giftCards.purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-soft inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-pink-primary font-sans font-semibold uppercase text-white hover:bg-rose-deep ${sizing}`}
      >
        <Gift size={iconSize} aria-hidden />
        Buy Gift Card
        {compact ? null : <ExternalLink size={14} aria-hidden />}
        <span className="sr-only">(opens Toast in a new tab)</span>
      </a>
      <a
        href={giftCards.balanceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-ghost-soft inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-gold-soft bg-bg-card/80 font-sans font-semibold uppercase text-text-primary hover:border-gold hover:bg-bg-card ${sizing}`}
      >
        <Search size={iconSize} aria-hidden />
        {compact ? (
          <>
            <span className="sm:hidden">Check Balance</span>
            <span className="hidden sm:inline">Check Gift Card Balance</span>
          </>
        ) : (
          "Check Gift Card Balance"
        )}
        {compact ? null : <ExternalLink size={14} aria-hidden />}
        <span className="sr-only">(opens Toast in a new tab)</span>
      </a>
    </div>
  );
}
