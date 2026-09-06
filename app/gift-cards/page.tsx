import type { Metadata } from "next";
import { CreditCard, Heart, ShieldCheck, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GiftCardButtons from "@/components/giftcards/GiftCardButtons";
import GiftCardVisual from "@/components/giftcards/GiftCardVisual";
import { giftCards, restaurant } from "@/data/content";

export const metadata: Metadata = {
  title: "Gift Cards | Shiki",
  description:
    "Give the gift of Shiki. Buy a Shiki eGift card or check your gift card balance securely through Toast.",
  openGraph: {
    title: "Gift Cards | Shiki",
    description:
      "Share an unforgettable dining experience with someone special. Buy a Shiki eGift card through Toast.",
    type: "website",
  },
};

const steps = [
  {
    icon: CreditCard,
    title: "Choose on Toast",
    description:
      "Open Shiki's official eGift card shop on Toast and choose your card details there.",
  },
  {
    icon: Heart,
    title: "Send to someone special",
    description:
      "Gift it to a friend, family member, or colleague who deserves a great meal.",
  },
  {
    icon: Utensils,
    title: "Enjoy Shiki",
    description:
      "They can visit us in Omaha and enjoy an unforgettable dining experience.",
  },
] as const;

export default function GiftCardsPage() {
  return (
    <main className="flex min-h-svh flex-1 flex-col bg-bg-main">
      <Header theme="light" />

      <section
        aria-labelledby="gift-cards-heading"
        className="relative overflow-hidden bg-gradient-to-b from-bg-soft via-bg-main to-bg-main"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-pink-pale/70 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 size-[360px] rounded-full bg-gold-soft/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24 xl:max-w-[1380px]">
          <Reveal className="text-center lg:text-left">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-pink-primary sm:text-[12px]">
              Shiki Gift Cards
            </p>
            <h1
              id="gift-cards-heading"
              className="mt-3 font-serif text-[38px] font-medium leading-[1.05] text-text-primary sm:text-5xl lg:text-[60px]"
            >
              Give the Gift of Shiki
            </h1>
            <p className="mx-auto mt-5 max-w-md font-sans text-[15px] leading-[1.75] text-text-secondary sm:text-[16px] lg:mx-0">
              Share an unforgettable dining experience with someone special.
            </p>
            <GiftCardButtons className="mt-8 justify-center lg:justify-start" />
            <p className="mt-5 flex items-center justify-center gap-2 font-sans text-[12px] text-text-secondary/90 lg:justify-start">
              <ShieldCheck size={14} className="shrink-0 text-gold" aria-hidden />
              Purchases and balance checks are handled securely by Toast.
            </p>
          </Reveal>

          <Reveal delay={0.1} direction="left" className="px-4 sm:px-10 lg:px-0">
            <GiftCardVisual />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="how-it-works-heading" className="px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="text-center">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              How It Works
            </p>
            <h2
              id="how-it-works-heading"
              className="mt-2 font-serif text-3xl font-medium text-text-primary sm:text-4xl"
            >
              A thoughtful gift in minutes
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

      <section aria-labelledby="balance-heading" className="px-4 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <Reveal className="mx-auto max-w-[1180px]">
          <div className="grid items-center gap-8 rounded-[20px] border border-border-light bg-bg-soft px-6 py-10 sm:px-10 md:grid-cols-[1fr_auto] lg:px-14 lg:py-12">
            <div className="text-center md:text-left">
              <h2
                id="balance-heading"
                className="font-serif text-3xl font-medium text-text-primary sm:text-[34px]"
              >
                Already have a Shiki gift card?
              </h2>
              <p className="mt-2 max-w-xl font-sans text-[14px] leading-[1.7] text-text-secondary">
                Check your remaining balance anytime on Toast&apos;s official
                gift card lookup page.
              </p>
            </div>
            <a
              href={giftCards.balanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-soft inline-flex items-center justify-center rounded-full bg-text-primary px-8 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-rose-deep"
            >
              Check Gift Card Balance
              <span className="sr-only"> (opens Toast in a new tab)</span>
            </a>
          </div>

          <p className="mt-6 text-center font-sans text-[13px] leading-[1.7] text-text-secondary">
            Questions about a gift card? Call us at{" "}
            <a
              href={restaurant.phoneHref}
              className="font-semibold text-text-primary transition-colors hover:text-pink-primary"
            >
              {restaurant.phone}
            </a>
            .
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
