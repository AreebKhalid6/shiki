import { ExternalLink } from "lucide-react";

type Props = {
  href: string;
  className?: string;
};

export default function OrderOnlineButton({ href, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-soft inline-flex items-center gap-2 bg-pink-primary px-8 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-rose-deep ${className}`}
    >
      Order Online
      <ExternalLink size={16} aria-hidden />
    </a>
  );
}
