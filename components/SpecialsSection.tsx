"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { happyHourSpecials, lunchSpecials } from "@/data/content";

function SpecialIcon({
  type,
}: {
  type: "slider" | "pasta" | "bento" | "nachos" | "steak" | "drinks";
}) {
  const paths: Record<typeof type, string> = {
    slider:
      "M4 14c0-2 2.5-3.5 8-3.5s8 1.5 8 3.5v1.5H4V14Zm2.5-4.5C7 7.5 9 6 12 6s5 1.5 5.5 3.5M8 9.2V7.8M12 8.8V6.8M16 9.2V7.8",
    pasta:
      "M12 4.5c-3.5 0-6 2-6 5.2 0 4.2 3 6.8 6 9.3 3-2.5 6-5.1 6-9.3 0-3.2-2.5-5.2-6-5.2Zm0 3.2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
    bento: "M5 6.5h14v11H5v-11Zm7 0v11M5 12h14",
    nachos: "M6 18 12 5l6 13H6Zm3.2-3.2.8-1.8M12.5 10l.9 2",
    steak:
      "M5.5 14.5c0-4 3-8 6.5-8s6.5 4 6.5 8c0 1.8-1.4 3-3.2 3H8.7c-1.8 0-3.2-1.2-3.2-3Z",
    drinks:
      "M7 7h10l-1.2 3.2A5 5 0 0 1 12 19a5 5 0 0 1-3.8-8.8L7 7Zm5 4v5",
  };

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-text-primary"
      aria-hidden
    >
      <path
        d={paths[type]}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const lunchMeta = [
  { label: lunchSpecials[0], icon: "slider" as const },
  { label: lunchSpecials[1], icon: "pasta" as const },
  { label: lunchSpecials[2], icon: "bento" as const },
];

const happyMeta = [
  { label: happyHourSpecials[0], icon: "nachos" as const },
  { label: happyHourSpecials[1], icon: "steak" as const },
  { label: happyHourSpecials[2], icon: "drinks" as const },
];

export default function SpecialsSection() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#fff7f4] px-4 pb-0 pt-[10px] sm:px-8 lg:px-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -right-6 hidden w-[220px] opacity-70 sm:block sm:w-[280px] lg:-right-2 lg:w-[320px]"
      >
        <Image
          src="/images/cta.png"
          alt=""
          width={500}
          height={500}
          className="h-auto w-full scale-x-[-1]"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] gap-5 xl:max-w-[1380px] lg:grid-cols-2 lg:gap-6">
        <Reveal>
          <article className="card-soft relative overflow-hidden rounded-[14px] border border-[#f0d7d4] bg-[#fff9f7] p-5 sm:min-h-[320px] sm:p-8 lg:p-9">
            <div className="relative z-10 w-full md:max-w-[58%]">
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-[0.12em] text-pink-primary sm:text-[20px] lg:text-[22px]">
                Lunch Specials
              </h3>
              <span className="mt-2 block h-px w-14 bg-gold-soft" />

              <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
                {lunchMeta.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 font-sans text-[13px] leading-snug text-text-primary sm:text-[14px]"
                  >
                    <SpecialIcon type={item.icon} />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#menu"
                className="btn-soft mt-6 inline-flex w-full items-center justify-center bg-pink-primary px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-rose-deep sm:mt-8 sm:w-auto sm:text-[12px]"
              >
                View Lunch Menu
              </Link>
            </div>

            <div className="relative mx-auto mt-6 aspect-square w-[70%] max-w-[220px] md:absolute md:right-2 md:top-1/2 md:mt-0 md:h-[78%] md:w-[46%] md:max-w-none md:-translate-y-1/2">
              <div
                className="relative h-full w-full overflow-hidden rounded-full"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 55% 50%, #000 48%, transparent 72%)",
                  maskImage:
                    "radial-gradient(circle at 55% 50%, #000 48%, transparent 72%)",
                }}
              >
                <Image
                  src="/images/homesectionimage.png"
                  alt="Lunch special pasta dish"
                  fill
                  sizes="(max-width: 768px) 70vw, 280px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="card-soft relative overflow-hidden rounded-[14px] border border-[#f0d7d4] bg-[#fff9f7] p-5 sm:min-h-[320px] sm:p-8 lg:p-9">
            <div className="relative z-10 w-full md:max-w-[58%]">
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-[0.12em] text-pink-primary sm:text-[20px] lg:text-[22px]">
                Happy Hour Specials
              </h3>
              <span className="mt-2 block h-px w-14 bg-gold-soft" />

              <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
                {happyMeta.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 font-sans text-[13px] leading-snug text-text-primary sm:text-[14px]"
                  >
                    <SpecialIcon type={item.icon} />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#menu"
                className="btn-soft mt-6 inline-flex w-full items-center justify-center bg-pink-primary px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-white hover:bg-rose-deep sm:mt-8 sm:w-auto sm:text-[12px]"
              >
                View Happy Hour Menu
              </Link>
            </div>

            <div className="relative mx-auto mt-4 h-48 w-[55%] max-w-[180px] md:absolute md:right-3 md:bottom-0 md:top-4 md:mt-0 md:h-auto md:w-[44%] md:max-w-none">
              <div
                className="relative h-full w-full"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 75% at 55% 55%, #000 42%, transparent 78%)",
                  maskImage:
                    "radial-gradient(ellipse 70% 75% at 55% 55%, #000 42%, transparent 78%)",
                }}
              >
                <Image
                  src="/images/glass.png"
                  alt="Happy hour cocktail"
                  fill
                  sizes="(max-width: 768px) 55vw, 280px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
