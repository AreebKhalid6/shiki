"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import HoverLift from "@/components/HoverLift";
import MediaImage from "@/components/MediaImage";
import { spaceItems } from "@/data/content";

export default function SpacesSection() {
  return (
    <section
      id="spaces"
      className="relative overflow-hidden bg-dark px-4 pb-[5em] pt-[5em] text-white sm:px-8 lg:px-10"
    >
      <Image
        src="/images/spaces-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div aria-hidden className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-[1280px] xl:max-w-[1380px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-gold sm:text-[12px]">
            Signature Spaces
          </p>
          <h2 className="mt-3 font-serif text-[32px] font-medium leading-[1.08] text-white sm:text-5xl lg:text-[54px]">
            Spaces Where Flavor Blooms
          </h2>
          <p className="mx-auto mt-2 max-w-2xl font-sans text-[13px] leading-[1.7] text-white/75 sm:mt-3 sm:text-[15px]">
            Immersive dining experiences that pull you out of time and transport
            you into settings designed for creating memories. Come for the
            flavors. Linger for the moments.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-5">
          {spaceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <HoverLift>
                <article className="group">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[10px]">
                    <MediaImage
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="hover-fade-img object-cover"
                      placeholderLabel={item.title}
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-[20px] font-medium text-white transition-colors duration-300 group-hover:text-pink-light sm:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[13px] leading-[1.65] text-white/70 sm:text-[14px]">
                    {item.description}
                  </p>
                </article>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
