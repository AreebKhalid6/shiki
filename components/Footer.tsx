import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/content";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#fcf8f5]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16 xl:max-w-[1380px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Brand */}
          <div className="lg:pr-8">
            <Image
              src="/images/shiki-logo-dark.png"
              alt="Shiki"
              width={180}
              height={60}
              className="h-9 w-auto sm:h-10"
            />
            <p className="mt-4 max-w-[240px] font-sans text-[13px] leading-[1.7] text-text-secondary sm:mt-5">
              {restaurant.tagline}
            </p>
            <div className="mt-5 flex items-center gap-4 text-gold sm:mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-pink-primary"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-pink-primary"
              >
                <FacebookIcon />
              </a>
              <a
                href={restaurant.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                className="transition-colors hover:text-pink-primary"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-[#e8d9d4] pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-[#e8d9d4] lg:px-8">
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 font-sans text-[14px] leading-[1.6] text-text-primary">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-gold" />
                <span>
                  {restaurant.addressLine1}
                  <br />
                  {restaurant.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-gold" />
                <a
                  href={restaurant.phoneHref}
                  className="transition-colors hover:text-pink-primary"
                >
                  {restaurant.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-gold" />
                <a
                  href={restaurant.emailHref}
                  className="break-all transition-colors hover:text-pink-primary"
                >
                  {restaurant.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="border-t border-[#e8d9d4] pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-[#e8d9d4] lg:px-8">
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Hours
            </h3>
            <ul className="mt-5 space-y-3 font-sans text-[14px] leading-[1.6] text-text-primary">
              {restaurant.hours.map((row) => (
                <li
                  key={row.days}
                  className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1"
                >
                  <span className="min-w-[5.5rem] font-semibold">{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reservations */}
          <div
            id="reserve"
            className="border-t border-[#e8d9d4] pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-[#e8d9d4] lg:pl-8"
          >
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
              Reservations
            </h3>
            <p className="mt-5 font-sans text-[14px] leading-[1.7] text-text-secondary">
              We can&apos;t wait to welcome you.
            </p>
            <Link
              href="#reserve"
              className="btn-soft mt-6 inline-flex w-full items-center justify-center bg-pink-primary px-5 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-rose-deep sm:w-auto"
            >
              Reserve Your Table
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e8d9d4]">
        <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-3 px-5 py-5 text-center font-sans text-[12px] text-text-secondary/80 sm:flex-row sm:text-left sm:px-8 lg:px-10">
          <p>© 2025 Shiki. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
