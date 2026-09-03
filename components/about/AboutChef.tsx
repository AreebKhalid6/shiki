"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  FlowerOutlineIcon,
  HeartOutlineIcon,
  UsersOutlineIcon,
} from "@/components/about/AboutIcons";
import { aboutChef } from "@/data/about";

const traitIcons = {
  users: UsersOutlineIcon,
  heart: HeartOutlineIcon,
  flower: FlowerOutlineIcon,
};

export default function AboutChef() {
  return (
    <section className="bg-[#FFFDFC] px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto grid max-w-[1380px] items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-[#C49A5A]/50 p-2 sm:p-2.5">
            <div className="relative h-full w-full overflow-hidden rounded-[10px]">
              <Image
                src={aboutChef.image}
                alt={aboutChef.imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-[30%_center]"
              />
            </div>
          </div>
          {/* Cherry blossom accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-2 -left-2 h-24 w-28 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, rgba(233,124,149,0.35), transparent 70%)",
            }}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E97C95]">
            {aboutChef.label}
          </p>
          <h2 className="mt-3 font-serif text-[34px] font-medium leading-[1.12] text-[#171414] sm:text-[42px]">
            {aboutChef.title}
          </h2>
          <p className="mt-2 font-serif text-[24px] italic text-[#E97C95] sm:text-[28px]">
            {aboutChef.name}
          </p>

          <div className="mt-6 max-w-xl space-y-4 font-sans text-[14px] leading-[1.8] text-[#6D6462] sm:text-[15px]">
            {aboutChef.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-5">
            {aboutChef.traits.map((trait) => {
              const Icon = traitIcons[trait.icon];
              return (
                <div key={trait.title}>
                  <div className="text-[#C49A5A]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-3 font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-[#171414]">
                    {trait.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[12px] leading-[1.65] text-[#6D6462] sm:text-[13px]">
                    {trait.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
