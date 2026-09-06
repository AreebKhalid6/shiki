"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { restaurant } from "@/data/content";

export default function ContactContent() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Inquiry from ${name || "Guest"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );

    window.location.href = `${restaurant.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section className="bg-bg-main px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="text-center">
          <p className="mx-auto max-w-xl font-sans text-[14px] leading-relaxed text-text-secondary sm:text-[15px]">
            We&apos;d love to hear from you — reservations, private events, or
            simply say hello.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                  <MapPin size={14} aria-hidden />
                  Address
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.7] text-text-primary">
                  {restaurant.addressLine1}
                  <br />
                  {restaurant.addressLine2}
                </p>
                <a
                  href={restaurant.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-soft mt-4 inline-flex items-center gap-2 border border-text-primary px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-text-primary hover:bg-text-primary hover:text-white"
                >
                  <Navigation size={14} aria-hidden />
                  Get Directions
                </a>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                  <Phone size={14} aria-hidden />
                  Phone & Email
                </h3>
                <ul className="mt-3 space-y-2 font-sans text-[15px] leading-[1.7] text-text-primary">
                  <li>
                    <a
                      href={restaurant.phoneHref}
                      className="transition-colors hover:text-pink-primary"
                    >
                      {restaurant.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={restaurant.emailHref}
                      className="break-all transition-colors hover:text-pink-primary"
                    >
                      {restaurant.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                  <Clock size={14} aria-hidden />
                  Hours
                </h3>
                <ul className="mt-3 space-y-2.5 font-sans text-[15px] leading-[1.6] text-text-primary">
                  {restaurant.hours.map((row) => (
                    <li
                      key={row.days}
                      className="flex flex-col gap-0.5 sm:flex-row sm:gap-x-4"
                    >
                      <span className="min-w-[6.5rem] font-semibold">{row.days}</span>
                      <span className="text-text-secondary">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#reserve"
                className="btn-soft inline-flex items-center justify-center bg-pink-primary px-7 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-rose-deep"
              >
                Reserve Your Table
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[14px] border border-border-light bg-bg-card px-5 py-7 sm:px-8 sm:py-9"
            >
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold" aria-hidden />
                <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-gold">
                  Send a Message
                </h3>
              </div>
              <p className="mt-2 font-sans text-[13px] leading-relaxed text-text-secondary">
                Tell us how we can help — we&apos;ll get back to you soon.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-[10px] border border-border-light bg-bg-main px-4 py-3 font-sans text-[14px] text-text-primary outline-none transition-colors focus:border-pink-light"
                  />
                </label>

                <label className="block">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-[10px] border border-border-light bg-bg-main px-4 py-3 font-sans text-[14px] text-text-primary outline-none transition-colors focus:border-pink-light"
                  />
                </label>

                <label className="block">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-[10px] border border-border-light bg-bg-main px-4 py-3 font-sans text-[14px] text-text-primary outline-none transition-colors focus:border-pink-light"
                  />
                </label>

                <label className="block">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-1.5 w-full resize-y rounded-[10px] border border-border-light bg-bg-main px-4 py-3 font-sans text-[14px] text-text-primary outline-none transition-colors focus:border-pink-light"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="btn-soft mt-6 inline-flex w-full items-center justify-center bg-pink-primary px-7 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-rose-deep sm:w-auto"
              >
                Send Message
              </button>

              {sent ? (
                <p className="mt-4 font-sans text-[13px] text-text-secondary">
                  Your email client should open with the message ready to send.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
