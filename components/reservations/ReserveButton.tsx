import { CalendarDays, ExternalLink } from "lucide-react";
import { reservations } from "@/data/content";

type Props = {
  className?: string;
};

export default function ReserveButton({ className = "" }: Props) {
  return (
    <a
      href={reservations.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-soft inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-pink-primary px-8 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-rose-deep sm:px-10 sm:py-4 ${className}`}
    >
      <CalendarDays size={16} aria-hidden />
      Reserve a Table
      <ExternalLink size={14} aria-hidden />
      <span className="sr-only">(opens Toast in a new tab)</span>
    </a>
  );
}
