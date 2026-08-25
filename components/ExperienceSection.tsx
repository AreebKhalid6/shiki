"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import HoverLift from "@/components/HoverLift";
import MediaImage from "@/components/MediaImage";
import { experienceItems } from "@/data/content";

export default function ExperienceSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg-main px-4 py-14 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 top-2 w-[140px] opacity-80 sm:-left-2 sm:top-6 sm:w-[240px] lg:left-0 lg:w-[300px]"
      >
        <Image
          src="/images/cta.png"
          alt=""
          width={600}
          height={600}
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] xl:max-w-[1380px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[32px] font-medium leading-[1.08] text-text-primary sm:text-5xl lg:text-[54px]">
            Moments Worth Savoring
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-1 font-sans text-[13px] leading-[1.7] text-text-secondary sm:mt-4 sm:text-[15px]">
            Japanese inspiration and Asian flavors meet Cajun, chicken, pasta,
            burgers, and more options that will please every palate. Escape and
            indulge in something special.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {experienceItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <HoverLift>
                <article className="group text-center">
                  <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[10px] sm:max-w-none">
                    <MediaImage
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="hover-fade-img object-cover"
                      placeholderLabel={item.title}
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-[24px] font-medium text-text-primary transition-colors duration-300 group-hover:text-pink-primary sm:mt-5 sm:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs font-sans text-[13px] leading-[1.7] text-text-secondary sm:text-[14px]">
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
