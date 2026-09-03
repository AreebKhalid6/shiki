"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import MediaImage from "@/components/MediaImage";
import { galleryItems } from "@/data/content";

export default function GallerySection() {
  const loopItems = [...galleryItems, ...galleryItems];

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-bg-main px-4 pb-14 pt-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28"
    >
      <div className="mx-auto max-w-[1280px] xl:max-w-[1380px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-pink-primary sm:text-[12px]">
            Shiki Moments
          </p>
          <h2 className="mt-3 font-serif text-[32px] font-medium leading-[1.08] text-text-primary sm:text-5xl lg:text-[54px]">
          Photo Gallery 
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-10 sm:mt-14 lg:mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-bg-main to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-bg-main to-transparent sm:w-16" />

        <div className="group/marquee overflow-hidden">
          <div className="gallery-marquee flex w-max gap-2.5 sm:gap-4">
            {loopItems.map((item, index) => (
              <div
                key={`${item.image}-${index}`}
                className="group relative h-[200px] w-[140px] shrink-0 overflow-hidden rounded-[10px] sm:h-[300px] sm:w-[210px] lg:h-[360px] lg:w-[250px]"
              >
                <MediaImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 140px, 250px"
                  className="hover-fade-img object-cover"
                  placeholderLabel="Gallery"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="mt-8 text-center sm:mt-12">
        <Link
          href="#gallery"
          className="btn-ghost-soft inline-flex border border-text-primary/25 bg-bg-card px-6 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-text-primary hover:border-pink-primary hover:text-pink-primary"
        >
          Explore Gallery
        </Link>
      </Reveal>
    </section>
  );
}
