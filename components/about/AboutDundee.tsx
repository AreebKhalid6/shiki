"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { aboutDundee } from "@/data/about";

export default function AboutDundee() {
  return (
    <section className="relative overflow-hidden bg-[#FAF5F2] px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="relative z-10 mx-auto grid max-w-[1380px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative mx-auto aspect-[5/4] w-full max-w-lg overflow-hidden rounded-[12px] lg:mx-0 lg:max-w-none">
            <Image
              src={aboutDundee.image}
              alt={aboutDundee.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover grayscale"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-1 -left-1 h-24 w-28 opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at bottom left, rgba(233,124,149,0.4), transparent 70%)",
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <h2 className="font-serif text-[32px] font-medium leading-[1.15] text-[#171414] sm:text-[40px] lg:text-[44px]">
            {aboutDundee.titleLead}{" "}
            <em className="italic text-[#E97C95]">{aboutDundee.titleAccent}</em>
          </h2>
          <p className="mt-5 max-w-lg font-sans text-[14px] leading-[1.8] text-[#6D6462] sm:text-[15px]">
            {aboutDundee.text}
          </p>

          {/* Faded blossom watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 top-1/2 hidden size-40 -translate-y-1/2 rounded-full border border-[#E97C95]/15 lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-2 top-1/2 hidden size-28 -translate-y-1/2 rounded-full border border-[#E97C95]/20 lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
