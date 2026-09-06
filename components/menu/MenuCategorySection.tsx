import MenuItemCard from "@/components/menu/MenuItemCard";
import type { PublicMenuCategory } from "@/lib/toast/types";

type Props = {
  category: PublicMenuCategory;
  showMenuName?: boolean;
};

export default function MenuCategorySection({ category, showMenuName = false }: Props) {
  const eyebrow = [showMenuName ? category.menuName : null, category.subtitle]
    .filter(Boolean)
    .join(" · ");

  return (
    <section id={category.id} className="scroll-mt-48">
      <div className="mb-3">
        {eyebrow ? (
          <p className="mb-1 font-sans text-[11px] uppercase tracking-[0.14em] text-text-secondary/80">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-pink-primary sm:text-[14px]">
          {category.title}
        </h3>
        <span className="mt-2 block h-px w-14 bg-gold-soft" />
      </div>

      <div className="rounded-[14px] border border-border-light bg-bg-card px-5 py-2 sm:px-7">
        <div className="grid gap-x-12 md:grid-cols-2">
          {category.items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
