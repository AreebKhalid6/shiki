import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

export function ToriiIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M8 14h32M12 14v26M36 14v26M10 22h28M8 10c4 2 8 3 16 3s12-1 16-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandshakeIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M10 24l8-8 6 4 6-4 8 8M18 28l4 4 4-3 4 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20l-4 4v6M34 20l4 4v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KnifeIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M16 38L34 12c2-3 6-2 7 1 1 3-1 6-4 8L18 38c-1.5 1.5-4 1-5-.5s-.5-3.5 3-4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M18 34l6 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CommunityIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 36c0-4.5 3.5-8 8-8s8 3.5 8 8M8 36c.5-3.5 3-6 6.5-6M40 36c-.5-3.5-3-6-6.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BuildingIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M10 40V16l14-8 14 8v24M18 40V28h12v12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 20h2M26 20h2M20 26h2M26 26h2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function UsersOutlineIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3.5 19c.6-3 3-5 5.5-5s4.9 2 5.5 5M13 14.5c2 .3 3.8 1.6 4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeartOutlineIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlowerOutlineIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 4.5c1.5 2 1.5 4 0 5.5-1.5-1.5-1.5-3.5 0-5.5ZM12 14c1.5 1.5 1.5 3.5 0 5.5-1.5-2-1.5-4 0-5.5ZM4.5 12c2-1.5 4-1.5 5.5 0-1.5 1.5-3.5 1.5-5.5 0ZM14 12c1.5-1.5 3.5-1.5 5.5 0-2 1.5-4 1.5-5.5 0Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function valueIcon(name: string): ReactNode {
  const cls = "size-9 text-[#C49A5A]";
  switch (name) {
    case "torii":
      return <ToriiIcon className={cls} />;
    case "handshake":
      return <HandshakeIcon className={cls} />;
    case "knife":
      return <KnifeIcon className={cls} />;
    case "community":
      return <CommunityIcon className={cls} />;
    case "building":
      return <BuildingIcon className={cls} />;
    default:
      return null;
  }
}
