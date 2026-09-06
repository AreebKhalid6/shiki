import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Clock, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ReserveButton from "@/components/reservations/ReserveButton";
import { restaurant } from "@/data/content";

export const metadata: Metadata = {
  title: "Reservations | Shiki",
  description:
    "Reserve your table at Shiki, 4900 Dodge St, Omaha. Book securely through Shiki's official Toast reservation page.",
  openGraph: {
    title: "Reservations | Shiki",
    description:
      "Reserve your table at Shiki in Omaha through our official Toast reservation page.",
    type: "website",
  },
};

const steps = [
  {
    icon: Users,
    title: "Pick your details",
    description: "Choose your party size, date, and time on Shiki's official Toast page.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm your booking",
    description: "Complete your reservation on Toast, which shows live availability.",
  },
  {
    icon: ShieldCheck,
    title: "Manage anytime",
    description: "Any changes or cancellations are handled directly through Toast.",
  },
] as const;

export default function ReservationsPage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col bg-bg-main">
      <Header theme="light" />

      <section aria-labelledby="reservations-heading" className="relative overflow-hidden">
        <Image
          src="/images/imagefour.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

        <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-4 py-12 text-center sm:px-8 sm:py-16 lg:py-20">
          <Reveal>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-gold sm:text-[12px]">
              Shiki · Omaha
            </p>
            <h1
              id="reservations-heading"
              className="mt-2 font-serif text-[34px] font-medium leading-[1.05] text-white sm:text-5xl lg:text-[56px]"
            >
              Reserve Your Table
            </h1>
            <p className="mx-auto mt-3 max-w-xl font-sans text-[14px] leading-[1.7] text-white/85 sm:text-[15px]">
              Dine beneath the cherry blossoms. Whether it&apos;s date night,
              a celebration, or dinner with friends, save your spot at Shiki.
            </p>
            <ReserveButton className="mt-6" />
            <p className="mt-3 flex items-center justify-center gap-2 font-sans text-[12px] text-white/70">
              <ShieldCheck size={14} className="shrink-0 text-gold" aria-hidden />
              Reservations are handled securely by Toast.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="how-to-book-heading" className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="text-center">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              How to Book
            </p>
            <h2
              id="how-to-book-heading"
              className="mt-2 font-serif text-3xl font-medium text-text-primary sm:text-4xl"
            >
              Your table in three easy steps
            </h2>
            <span aria-hidden className="mx-auto mt-4 block h-px w-16 bg-gold-soft" />
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 0.08} className="h-full">
                  <div className="card-soft h-full rounded-[14px] border border-border-light bg-bg-card p-7 text-center">
                    <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-pink-pale text-rose-deep">
                      <step.icon size={20} aria-hidden />
                    </span>
                    <p className="mt-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 font-serif text-[22px] font-medium text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-[14px] leading-[1.7] text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="visit-heading" className="px-4 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <Reveal className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 rounded-[20px] border border-border-light bg-bg-soft px-6 py-10 sm:px-10 md:grid-cols-2 lg:px-14 lg:py-12">
            <div>
              <h2
                id="visit-heading"
                className="font-serif text-3xl font-medium text-text-primary sm:text-[34px]"
              >
                Plan your visit
              </h2>
              <ul className="mt-5 space-y-4 font-sans text-[14px] leading-[1.6] text-text-primary">
                <li className="flex gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-gold" aria-hidden />
                  <a
                    href={restaurant.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-pink-primary"
                  >
                    {restaurant.addressLine1}
                    <br />
                    {restaurant.addressLine2}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="mt-1 shrink-0 text-gold" aria-hidden />
                  <span>
                    Large party or private event? Call us at{" "}
                    <a
                      href={restaurant.phoneHref}
                      className="font-semibold transition-colors hover:text-pink-primary"
                    >
                      {restaurant.phone}
                    </a>
                  </span>
                </li>
              </ul>
              <ReserveButton className="mt-7" />
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                <Clock size={14} aria-hidden />
                Hours
              </h3>
              <ul className="mt-4 space-y-2 font-sans text-[14px] leading-[1.6] text-text-primary">
                {restaurant.hours.map((row) => (
                  <li key={row.days} className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold">{row.days}</span>
                    <span className="text-text-secondary">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
