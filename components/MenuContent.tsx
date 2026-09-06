"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { menuCategories } from "@/data/menu";

function MenuItemRow({ item }: { item: (typeof menuCategories)[number]["items"][number] }) {
  return (
    <article className="border-b border-border-light/80 py-5 last:border-b-0 sm:py-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-[20px] font-medium leading-tight text-text-primary sm:text-[22px]">
              {item.name}
            </h3>
            {item.tag ? (
              <span className="rounded-full bg-pink-pale px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-rose-deep">
                {item.tag}
              </span>
            ) : null}
          </div>
          {item.description ? (
            <p className="mt-1.5 font-sans text-[13px] leading-relaxed text-text-secondary sm:text-[14px]">
              {item.description}
            </p>
          ) : null}
        </div>
        <p className="shrink-0 font-sans text-[15px] font-semibold text-gold sm:text-[16px]">
          {item.price}
        </p>
      </div>
    </article>
  );
}

export default function MenuContent() {
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? "");

  useEffect(() => {
    const sections = menuCategories
      .map((category) => document.getElementById(category.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const offset = 120;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <section className="bg-bg-main px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="sticky top-[76px] z-20 -mx-4 border-y border-border-light bg-bg-main/95 px-4 py-3 backdrop-blur-sm sm:top-[84px] sm:-mx-8 sm:px-8 lg:top-[84px] lg:-mx-10 lg:px-10">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuCategories.map((category) => {
              const isActive = activeId === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToCategory(category.id)}
                  className={`shrink-0 rounded-full border px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors sm:text-[12px] ${
                    isActive
                      ? "border-pink-primary bg-pink-primary text-white"
                      : "border-border-light bg-bg-card text-text-secondary hover:border-pink-light hover:text-text-primary"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-14">
          {menuCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.03}>
              <section id={category.id} className="scroll-mt-32">
                <div className="mb-2">
                  <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-pink-primary sm:text-[14px]">
                    {category.title}
                  </h3>
                  <span className="mt-2 block h-px w-14 bg-gold-soft" />
                  {category.subtitle ? (
                    <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.12em] text-text-secondary/80">
                      {category.subtitle}
                    </p>
                  ) : null}
                </div>

                <div className="mt-2 rounded-[14px] border border-border-light bg-bg-card px-5 sm:px-7">
                  {category.items.map((item) => (
                    <MenuItemRow key={item.name} item={item} />
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
