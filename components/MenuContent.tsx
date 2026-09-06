"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import MenuCategoryNavigation from "@/components/menu/MenuCategoryNavigation";
import MenuCategorySection from "@/components/menu/MenuCategorySection";
import MenuLoadingSkeleton from "@/components/menu/MenuLoadingSkeleton";
import MenuErrorState from "@/components/menu/MenuErrorState";
import OrderOnlineButton from "@/components/menu/OrderOnlineButton";
import type { PublicMenuCategory, PublicMenuResponse } from "@/lib/toast/types";
import { restaurant } from "@/data/content";

function menuNameOf(category: PublicMenuCategory) {
  return category.menuName || category.subtitle || "Menu";
}

export default function MenuContent() {
  const [menu, setMenu] = useState<PublicMenuResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const [query, setQuery] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const loadMenu = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/menu", { cache: "no-store" });
      const data = (await response.json()) as PublicMenuResponse & {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Unable to load the menu right now.");
      }

      setMenu(data);
      setActiveMenu(data.categories[0] ? menuNameOf(data.categories[0]) : null);
    } catch (err) {
      setMenu(null);
      setError(
        err instanceof Error ? err.message : "Unable to load the menu right now.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadMenu();
  }, [loadMenu]);

  const menuNames = useMemo(() => {
    if (!menu) return [];
    return [...new Set(menu.categories.map(menuNameOf))];
  }, [menu]);

  const trimmedQuery = query.trim().toLowerCase();
  const isSearching = trimmedQuery.length > 0;

  const visibleCategories = useMemo(() => {
    if (!menu) return [] as PublicMenuCategory[];

    if (!isSearching) {
      return menu.categories.filter((c) => menuNameOf(c) === activeMenu);
    }

    return menu.categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(trimmedQuery) ||
            item.description?.toLowerCase().includes(trimmedQuery),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [menu, activeMenu, isSearching, trimmedQuery]);

  useEffect(() => {
    setActiveCategoryId(visibleCategories[0]?.id ?? "");

    const sections = visibleCategories
      .map((category) => document.getElementById(category.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveCategoryId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [visibleCategories]);

  const navOffset = () => (navRef.current?.getBoundingClientRect().bottom ?? 160) + 16;

  const scrollToCategory = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - navOffset();
    window.scrollTo({ top, behavior: "smooth" });
    setActiveCategoryId(id);
  };

  const selectMenu = (name: string) => {
    setQuery("");
    setActiveMenu(name);

    const content = contentRef.current;
    if (!content) return;
    const top = content.getBoundingClientRect().top + window.scrollY - navOffset();
    if (window.scrollY > top) {
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const orderingUrl = menu?.orderingUrl || restaurant.menuUrl;

  return (
    <section className="bg-bg-main px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Shiki
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-text-primary sm:text-4xl">
              Our Menu
            </h2>
            <p className="mt-2 max-w-xl font-sans text-[14px] leading-relaxed text-text-secondary">
              Browse our full menu. Ready to order? Place your order online
              through Toast.
            </p>
          </div>
          <OrderOnlineButton href={orderingUrl} />
        </div>

        <div className="relative mt-8">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the whole menu…"
            className="w-full rounded-[10px] border border-border-light bg-bg-card py-3 pl-10 pr-4 font-sans text-[14px] text-text-primary outline-none transition focus:border-pink-primary"
            aria-label="Search menu items"
          />
        </div>

        {loading ? <MenuLoadingSkeleton /> : null}

        {!loading && error ? (
          <MenuErrorState message={error} onRetry={() => void loadMenu()} />
        ) : null}

        {!loading && !error && menu && menu.categories.length === 0 ? (
          <MenuErrorState message="No public menu items are available right now. Please check back soon." />
        ) : null}

        {!loading && !error && menu && menu.categories.length > 0 ? (
          <>
            <div className="mt-8">
              <MenuCategoryNavigation
                ref={navRef}
                menus={isSearching ? [] : menuNames}
                activeMenu={activeMenu}
                onSelectMenu={selectMenu}
                categories={visibleCategories}
                activeCategoryId={activeCategoryId}
                onSelectCategory={scrollToCategory}
              />
            </div>

            <div ref={contentRef} className="mt-8 space-y-12 sm:mt-10 sm:space-y-14">
              {isSearching ? (
                <p className="font-sans text-[13px] text-text-secondary">
                  {visibleCategories.reduce((n, c) => n + c.items.length, 0)} results for
                  &ldquo;{query.trim()}&rdquo;
                </p>
              ) : null}

              {isSearching && visibleCategories.length === 0 ? (
                <MenuErrorState message="No menu items match your search." />
              ) : null}

              {visibleCategories.map((category) => (
                <MenuCategorySection
                  key={category.id}
                  category={category}
                  showMenuName={isSearching}
                />
              ))}
            </div>

            <div className="mt-14 rounded-[14px] border border-border-light bg-bg-soft px-6 py-8 text-center sm:px-10 sm:py-10">
              <p className="font-serif text-2xl font-medium text-text-primary sm:text-3xl">
                Ready to order?
              </p>
              <p className="mx-auto mt-3 max-w-md font-sans text-[14px] leading-relaxed text-text-secondary">
                Orders are placed on Toast&apos;s official online ordering site.
              </p>
              <div className="mt-6">
                <OrderOnlineButton href={orderingUrl} />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
