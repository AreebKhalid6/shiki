"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section className="relative min-h-[100svh] overflow-hidden lg:min-h-[720px] xl:min-h-[780px]">
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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1380px] items-end px-4 pb-12 pt-24 sm:items-center sm:px-10 sm:pb-16 sm:pt-28 lg:min-h-[720px] lg:px-12 lg:pb-20 lg:pt-24 xl:min-h-[780px] xl:pl-14">
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
            className="font-sans text-[11px] font-medium tracking-[0.04em] text-gold sm:text-[14px] sm:tracking-[0.06em]"
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
            className="mt-3 font-serif text-[36px] font-medium leading-[1.08] tracking-tight sm:mt-5 sm:text-[56px] sm:leading-[1.02] lg:text-[68px] xl:text-[70px]"
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
            className="mt-4 max-w-[500px] font-sans text-[13px] leading-[1.7] text-white/90 sm:mt-6 sm:text-[15px] sm:leading-[1.75]"
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

          <motion.div
            className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <Link
              href="#reserve"
              className="btn-soft inline-flex w-full items-center justify-center bg-pink-primary px-6 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-rose-deep sm:w-auto"
            >
              Reserve Table
            </Link>
            <Link
              href="#menu"
              className="btn-ghost-soft inline-flex w-full items-center justify-center border border-white px-6 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-white/10 sm:w-auto"
            >
              View Menu
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
