"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { aboutGallery } from "@/data/about";

export default function AboutGallery() {
  const [active, setActive] = useState(0);
  const items = aboutGallery.items;

  return (
    <section className="bg-[#FFFDFC] px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1380px]">
        <Reveal className="text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E97C95]">
            {aboutGallery.label}
          </p>
          <h2 className="mt-3 font-serif text-[32px] font-medium text-[#171414] sm:text-[40px]">
            {aboutGallery.title}
          </h2>
          <span className="mx-auto mt-4 block h-px w-14 bg-[#C49A5A]" />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:gap-4 lg:grid lg:grid-cols-5 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {items.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setActive(index)}
                className={`relative aspect-[4/5] w-[72%] max-w-[240px] shrink-0 overflow-hidden rounded-[12px] transition-opacity sm:w-[45%] lg:w-auto lg:max-w-none ${
                  active === index ? "opacity-100" : "opacity-90 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 20vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={`dot-${item.image}`}
                type="button"
                aria-label={`Show image ${index + 1}`}
                onClick={() => setActive(index)}
                className={`size-2 rounded-full transition-colors ${
                  active === index ? "bg-[#C49A5A]" : "bg-[#EAD8CE]"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
