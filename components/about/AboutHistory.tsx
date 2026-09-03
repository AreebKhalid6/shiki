"use client";

import Reveal from "@/components/Reveal";
import { ToriiIcon } from "@/components/about/AboutIcons";
import { aboutHistory } from "@/data/about";

export default function AboutHistory() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDFC] px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="relative z-10 mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <Reveal>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E97C95]">
            {aboutHistory.label}
          </p>
          <h2 className="mt-4 whitespace-pre-line font-serif text-[32px] font-medium leading-[1.15] text-[#171414] sm:text-[40px] lg:text-[44px]">
            {aboutHistory.title}
          </h2>
          <span className="mt-5 block h-px w-16 bg-[#C49A5A]" />
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <div className="space-y-5 font-sans text-[14px] leading-[1.8] text-[#6D6462] sm:text-[15px]">
            {aboutHistory.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Faded torii watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-0 top-0 flex items-center text-[#C49A5A]/[0.07] sm:right-4 lg:right-16"
      >
        <ToriiIcon className="h-56 w-56 sm:h-72 sm:w-72" />
      </div>
    </section>
  );
}
