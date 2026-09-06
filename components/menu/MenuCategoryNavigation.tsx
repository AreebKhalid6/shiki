"use client";

import { forwardRef } from "react";

type Props = {
  menus: string[];
  activeMenu: string | null;
  onSelectMenu: (menu: string) => void;
  categories: { id: string; title: string }[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
};

const MenuCategoryNavigation = forwardRef<HTMLDivElement, Props>(
  function MenuCategoryNavigation(
    { menus, activeMenu, onSelectMenu, categories, activeCategoryId, onSelectCategory },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className="sticky top-16 z-20 -mx-4 border-y border-border-light bg-bg-main/95 px-4 backdrop-blur-sm sm:top-[76px] sm:-mx-8 sm:px-8 lg:top-[84px] lg:-mx-10 lg:px-10"
      >
        {menus.length > 0 ? (
          <div
            className="flex gap-6 overflow-x-auto border-b border-border-light/70 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Menus"
          >
            {menus.map((menu) => {
              const isActive = activeMenu === menu;
              return (
                <button
                  key={menu}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectMenu(menu)}
                  className={`relative shrink-0 py-3 font-serif text-[17px] font-medium transition-colors sm:text-[18px] ${
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {menu}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-0.5 transition-colors ${
                      isActive ? "bg-pink-primary" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        ) : null}

        <div
          className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Categories"
        >
          {categories.map((category) => {
            const isActive = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSelectCategory(category.id)}
                className={`shrink-0 rounded-full border px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors sm:text-[12px] ${
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
    );
  },
);

export default MenuCategoryNavigation;
