"use client";

import Reveal from "@/components/Reveal";
import { valueIcon } from "@/components/about/AboutIcons";
import { aboutValues } from "@/data/about";

export default function AboutValues() {
  return (
    <section className="bg-[#FFFDFC] px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-16">
      <div className="mx-auto max-w-[1380px]">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 xl:gap-8">
            {aboutValues.map((item) => (
              <div key={item.title} className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  {valueIcon(item.icon)}
                </div>
                <h3 className="mt-4 font-sans text-[13px] font-bold tracking-[0.02em] text-[#171414] sm:text-[14px]">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-[12px] leading-[1.7] text-[#6D6462] sm:text-[13px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
