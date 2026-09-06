"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "@/components/Header";
import MediaImage from "@/components/MediaImage";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [petalsOn, setPetalsOn] = useState(true);
  const [showPetals, setShowPetals] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      setShowPetals(false);
      return;
    }

    const fadeTimer = window.setTimeout(() => setPetalsOn(false), 1400);
    const hideTimer = window.setTimeout(() => setShowPetals(false), 2100);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [reduceMotion]);

  return (
    <section className="relative min-h-[560px] overflow-hidden sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[780px]">
      <MediaImage
        src="/images/newhbg.png"
        alt="Shiki dining room with cherry blossom canopy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-[68%_center] lg:object-center"
        placeholderLabel="Hero image"
      />

      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.62) 22%, rgba(0,0,0,0.28) 42%, rgba(0,0,0,0.06) 62%, rgba(0,0,0,0) 78%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/65 sm:hidden" />

      {showPetals ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 z-[15] mix-blend-screen transition-opacity duration-700 ${
            petalsOn ? "opacity-50" : "opacity-0"
          }`}
        >
          <Image
            src="/images/flowerspetals.gif"
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ) : null}

      <Header />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1380px] items-center px-4 pb-12 pt-14 sm:min-h-[640px] sm:px-10 sm:pb-16 sm:pt-20 lg:min-h-[720px] lg:px-12 lg:pb-20 lg:pt-24 xl:min-h-[780px] xl:pl-14">
        <motion.div
          className="w-full max-w-[640px] text-left text-white"
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12, delayChildren: 0.15 },
            },
          }}
        >
          <motion.p
            className="font-sans text-[10px] font-medium tracking-[0.04em] text-gold sm:text-[14px] sm:tracking-[0.06em]"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Time Slows Down Beneath the Blossoms
          </motion.p>

          <motion.h1
            className="mt-2 font-serif text-[32px] font-medium leading-[1.1] tracking-tight sm:mt-5 sm:text-[62px] sm:leading-[1.02] lg:text-[74px] xl:text-[67px] xl:leading-[1.07]"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Four Seasons of Flavor.
            <br />
            Something for Everyone.
          </motion.h1>

          <motion.p
            className="mt-3 max-w-[500px] font-sans text-[13px] leading-[1.65] text-white/90 sm:mt-6 sm:text-[15px] sm:leading-[1.75]"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Artfully crafted sushi, Asian-inspired dishes, familiar favorites,
            and inventive cocktails — experience Shiki in historic Dundee.
          </motion.p>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 transition-colors hover:text-white sm:bottom-7"
        aria-label="Scroll to next section"
      >
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] sm:text-[11px]">
          Scroll
        </span>
        <motion.span
          aria-hidden
          className="flex flex-col items-center"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </a>
    </section>
  );
}
