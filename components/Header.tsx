"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";

type HeaderProps = {
  theme?: "dark" | "light";
  className?: string;
};

const visibleLinks = navLinks.filter((item) => item.linked);

export default function Header({ theme = "dark", className = "" }: HeaderProps) {
  const isLight = theme === "light";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        isLight
          ? `sticky top-0 z-30 border-b border-border-light bg-bg-main/95 backdrop-blur-sm ${className}`
          : `absolute inset-x-0 top-0 z-30 ${className}`
      }
    >
      <div className="relative mx-auto flex h-16 max-w-[1380px] items-center justify-between px-4 sm:h-[76px] sm:px-8 lg:h-[84px] lg:px-10">
        <Link href="/" className="relative z-40 shrink-0" aria-label="Shiki home">
          <Image
            src={isLight ? "/images/shiki-logo-dark.png" : "/images/whitelogo.png"}
            alt="Shiki"
            width={220}
            height={73}
            priority
            className="h-8 w-auto sm:h-10 lg:h-11"
          />
        </Link>

        {visibleLinks.length > 0 ? (
          <nav
            aria-label="Main navigation"
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 xl:gap-8 min-[900px]:flex"
          >
            {visibleLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative whitespace-nowrap font-sans text-[10px] font-medium uppercase tracking-[0.22em] transition-opacity hover:opacity-100 xl:text-[11px] ${
                  isLight ? "text-text-primary/90" : "text-white/95"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    isLight ? "bg-pink-primary" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </nav>
        ) : null}

        {visibleLinks.length > 0 ? (
          <div className="relative z-40 flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className={`inline-flex size-10 items-center justify-center min-[900px]:hidden ${
                isLight ? "text-text-primary" : "text-white"
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        ) : (
          <div className="size-10" aria-hidden />
        )}
      </div>

      {open && visibleLinks.length > 0 ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-30 overflow-y-auto bg-dark/98 pt-16 backdrop-blur-md min-[900px]:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1380px] flex-col gap-1 px-5 py-6 sm:px-8"
          >
            {visibleLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.18em] text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
