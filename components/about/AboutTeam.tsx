"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FlowerOutlineIcon } from "@/components/about/AboutIcons";
import { aboutTeam } from "@/data/about";

export default function AboutTeam() {
  return (
    <section className="bg-[#FFFDFC] px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1380px]">
        <Reveal className="text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E97C95]">
            {aboutTeam.label}
          </p>
          <h2 className="mt-3 font-serif text-[32px] font-medium text-[#171414] sm:text-[40px] lg:text-[44px]">
            {aboutTeam.title}
          </h2>
          <div className="mt-4 flex justify-center text-[#E97C95]">
            <FlowerOutlineIcon className="size-5" />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-8">
          {aboutTeam.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="card-soft flex flex-col gap-5 rounded-[14px] border border-[#EAD8CE] bg-white p-4 shadow-[0_4px_24px_rgba(23,20,20,0.04)] sm:flex-row sm:items-stretch sm:gap-6 sm:p-5">
                <div className="relative mx-auto aspect-square w-full max-w-[200px] shrink-0 overflow-hidden rounded-[10px] sm:mx-0 sm:h-auto sm:w-[180px] sm:max-w-none lg:w-[200px]">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center text-center sm:text-left">
                  <h3 className="font-serif text-[24px] font-medium text-[#171414] sm:text-[26px]">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E97C95]">
                    {member.role}
                  </p>
                  <p className="mt-3 font-sans text-[13px] leading-[1.75] text-[#6D6462] sm:text-[14px]">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
