import Image from "next/image";
import Reveal from "@/components/Reveal";
import ReserveButton from "@/components/reservations/ReserveButton";

export default function ReservationSection() {
  return (
    <section id="reservations" className="relative overflow-hidden">
      <Image
        src="/images/imagefour.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-start gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-12 lg:px-10 xl:max-w-[1380px]">
        <Reveal className="max-w-xl">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold sm:text-[12px]">
            Reservations
          </p>
          <h2 className="mt-2 font-serif text-[28px] font-medium leading-[1.1] text-white sm:text-4xl">
            Reserve your table at Shiki
          </h2>
          <p className="mt-2 font-sans text-[13px] leading-[1.7] text-white/80 sm:text-[14px]">
            Book your next dinner, date night, or celebration in just a few clicks.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="shrink-0">
          <ReserveButton />
        </Reveal>
      </div>
    </section>
  );
}
