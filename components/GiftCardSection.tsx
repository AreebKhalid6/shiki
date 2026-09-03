"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Navigation } from "lucide-react";
import Reveal from "@/components/Reveal";
import { restaurant } from "@/data/content";

export default function GiftCardSection() {
  return (
    <section id="gifts" className="relative overflow-hidden">
      <div className="relative min-h-[340px] sm:min-h-[360px] lg:min-h-[420px]">
        <Image
          src="/images/giftcard.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-[70%_center] lg:object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff9f5]/96 via-[#fff9f5]/82 to-[#fff9f5]/40 sm:from-[#fff9f5]/88 sm:via-[#fff9f5]/50 sm:to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-8 px-4 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-14 xl:max-w-[1380px]">
          <div>
            <Reveal className="max-w-md">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-pink-primary sm:text-[12px]">
                The Perfect Gift
              </p>
              <h2 className="mt-2 font-serif text-[30px] font-medium leading-[1.08] text-text-primary sm:text-4xl lg:text-[44px]">
                Give the gift of Shiki
              </h2>
              <p className="mt-3 max-w-md font-sans text-[13px] leading-[1.7] text-text-secondary sm:text-[15px]">
                Share an unforgettable experience with those who matter most.
              </p>
              <Link
                href="#gifts"
                className="btn-soft mt-6 inline-flex w-full items-center justify-center bg-pink-primary px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-rose-deep sm:w-auto"
              >
                Purchase Gift Cards
              </Link>
            </Reveal>

            <Reveal delay={0.08} className="mt-6">
              <div className="card-soft rounded-[14px] border border-[#f0d7d4] bg-[#fffdfb]/94 p-5 sm:p-6">
                <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-10">
                  <div>
                    <h3 className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                      <Clock size={14} aria-hidden />
                      Hours
                    </h3>
                    <ul className="mt-3 space-y-2 font-sans text-[13px] leading-[1.6] text-text-primary sm:text-[14px]">
                      {restaurant.hours.map((row) => (
                        <li
                          key={row.days}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <span className="shrink-0 font-semibold">{row.days}</span>
                          <span className="text-right text-text-secondary">{row.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                      <MapPin size={14} aria-hidden />
                      Address
                    </h3>
                    <p className="mt-3 font-sans text-[13px] leading-[1.7] text-text-primary sm:text-[14px]">
                      {restaurant.addressLine1}
                      <br />
                      {restaurant.addressLine2}
                    </p>
                    <p className="mt-2 font-sans text-[13px] text-text-secondary sm:text-[14px]">
                      <a
                        href={restaurant.phoneHref}
                        className="transition-colors hover:text-pink-primary"
                      >
                        {restaurant.phone}
                      </a>
                    </p>

                    <h3 className="mt-4 flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                      <Navigation size={14} aria-hidden />
                      Location
                    </h3>
                    <a
                      href={restaurant.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost-soft mt-3 inline-flex items-center justify-center border border-text-primary px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-text-primary hover:bg-text-primary hover:text-white"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

       
        </div>
      </div>
    </section>
  );
}
