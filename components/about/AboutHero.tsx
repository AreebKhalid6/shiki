"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { aboutHero } from "@/data/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDFC]">
      <div className="mx-auto grid max-w-[1380px] lg:grid-cols-2 lg:min-h-[450px]">
        <Reveal className="relative z-10 flex flex-col justify-center px-5 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:pl-16">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E97C95]">
            {aboutHero.label}
          </p>
          <h1 className="mt-4 whitespace-pre-line font-serif text-[34px] font-medium leading-[1.12] text-[#171414] sm:text-[42px] lg:text-[48px]">
            {aboutHero.title}
          </h1>
          <p className="mt-3 font-serif text-[22px] italic text-[#E97C95] sm:text-[26px]">
            {aboutHero.italicLine}
          </p>
          <div className="mt-6 max-w-md space-y-4 font-sans text-[14px] leading-[1.75] text-[#6D6462] sm:text-[15px]">
            {aboutHero.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Decorative cherry blossom hint (bottom-left) */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-28 w-40 opacity-40 sm:h-36 sm:w-48"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, rgba(233,124,149,0.22), transparent 70%)",
            }}
          />
        </Reveal>

        <Reveal delay={0.08} direction="right" className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <Image
            src={aboutHero.image}
            alt={aboutHero.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          {/* Soft white fade into text */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 hidden w-[28%] bg-gradient-to-r from-[#FFFDFC] via-[#FFFDFC]/70 to-transparent lg:block"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FFFDFC] to-transparent lg:hidden"
          />

          {/* Gold kanji accents */}
          <div
            aria-hidden
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 font-serif text-[22px] leading-none text-[#C49A5A]/80 lg:flex xl:left-6"
          >
            <span>志</span>
            <span>気</span>
            <span>心</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
