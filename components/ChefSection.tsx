"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ChefSection() {
  return (
    <section id="private-events" className="relative overflow-hidden bg-dark text-white">
      <div className="lg:hidden">
        <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
          <Image
            src="/images/endctaone.png"
            alt="Chef Tom of Shiki"
            fill
            sizes="100vw"
            className="object-cover object-left"
          />
        </div>
        <div className="px-4 py-8 text-left sm:px-10 sm:py-10">
          <Reveal className="max-w-lg">
            <ChefCopy />
          </Reveal>
        </div>
      </div>

      <div className="relative hidden min-h-[420px] lg:block xl:min-h-[460px]">
        <Image
          src="/images/endctaone.png"
          alt="Chef Tom of Shiki"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-10 mx-auto grid min-h-[420px] max-w-[1440px] grid-cols-2 items-center px-10 py-12 xl:min-h-[460px] xl:px-14 xl:py-14">
          <div aria-hidden />
          <Reveal className="max-w-lg text-left" direction="left" delay={0.1}>
            <ChefCopy />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChefCopy() {
  return (
    <div className="text-left">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold sm:text-[12px]">
        Meet the Chef
      </p>
      <h2 className="mt-2 font-serif text-[28px] font-medium leading-[1.08] text-white sm:mt-3 sm:text-4xl lg:text-[40px]">
        Crafted with Passion.
        <br />
        Served with Heart.
      </h2>
      <p className="mt-3 font-sans text-[13px] leading-[1.7] text-white/85 sm:mt-4 sm:text-[14px]">
        Led by Chef Tom, our kitchen brings together time-honored techniques and
        modern creativity to deliver an unforgettable dining experience in every
        bite.
      </p>
      <p className="mt-4 font-accent text-3xl text-gold sm:mt-5 sm:text-4xl">
        Chef Tom
      </p>
      <Link
        href="/about"
        className="mt-4 inline-flex items-center gap-2 border-b border-gold/70 pb-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-gold transition-colors hover:border-gold hover:text-gold-soft sm:mt-5 sm:text-[12px]"
      >
        Learn More About Our Chef
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
