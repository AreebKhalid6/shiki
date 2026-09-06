import Image from "next/image";

function Blossom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="20"
          cy="10.5"
          rx="6.5"
          ry="9"
          fill="currentColor"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="3" fill="#d9b98b" />
    </svg>
  );
}

export default function GiftCardVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]" role="img" aria-label="Shiki gift card">
      <div
        aria-hidden
        className="absolute inset-x-8 -bottom-6 h-10 rounded-full bg-rose-deep/20 blur-2xl"
      />
      <div className="relative aspect-[1.586/1] -rotate-3 overflow-hidden rounded-[20px] border border-gold-soft/70 bg-gradient-to-br from-[#fffdfb] via-[#fdf1ee] to-[#f9dfe2] shadow-[0_24px_60px_rgba(185,79,103,0.18)] transition-transform duration-700 hover:rotate-0">
        <div aria-hidden className="absolute inset-3 rounded-[14px] border border-gold-soft/50" />

        <Blossom className="absolute -right-4 -top-4 size-24 text-pink-light/70" />
        <Blossom className="absolute right-14 top-10 size-8 text-pink-light/60" />
        <Blossom className="absolute -bottom-5 -left-5 size-20 text-pink-pale" />

        <div className="relative flex h-full flex-col items-center justify-center px-8">
          <Image
            src="/images/shiki-logo-dark.png"
            alt=""
            width={220}
            height={73}
            className="h-auto w-[52%]"
          />
          <p className="mt-3 font-serif text-[15px] tracking-[0.42em] text-gold sm:text-[18px]">
            GIFT CARD
          </p>
          <div aria-hidden className="mt-4 flex w-3/5 items-center gap-2">
            <span className="h-px flex-1 bg-gold-soft" />
            <span className="size-1.5 rotate-45 bg-gold" />
            <span className="h-px flex-1 bg-gold-soft" />
          </div>
        </div>
      </div>
    </div>
  );
}
