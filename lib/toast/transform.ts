import type {
  PublicMenuCategory,
  PublicMenuItem,
  PublicMenuModifierGroup,
  PublicMenuResponse,
  ToastMenu,
  ToastMenuGroup,
  ToastMenuItem,
  ToastMenusResponse,
  ToastPricingStrategy,
  ToastVisibility,
} from "./types";

const PUBLIC_VISIBILITY: ToastVisibility[] = [
  "TOAST_ONLINE_ORDERING",
  "ORDERING_PARTNERS",
];

function isPubliclyVisible(visibility?: ToastVisibility[] | null): boolean {
  if (!visibility || visibility.length === 0) return false;
  return visibility.some((v) => PUBLIC_VISIBILITY.includes(v));
}

function formatMoney(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function formatToastPrice(
  price: number | null | undefined,
  pricingStrategy?: ToastPricingStrategy | null,
): { priceLabel: string | null; priceVaries: boolean } {
  const strategy = (pricingStrategy ?? "BASE_PRICE").toUpperCase();

  if (
    strategy === "OPEN_PRICE" ||
    strategy === "SIZE_PRICE" ||
    strategy === "PRICE_SIZE" ||
    strategy === "TIME_SPECIFIC_PRICE"
  ) {
    if (typeof price === "number" && !Number.isNaN(price) && price > 0) {
      return { priceLabel: `from ${formatMoney(price)}`, priceVaries: true };
    }
    return { priceLabel: "Market", priceVaries: true };
  }

  if (typeof price !== "number" || Number.isNaN(price)) {
    return { priceLabel: null, priceVaries: true };
  }

  // Toast uses 0 for unpriced placeholders and free modifier options
  if (price === 0) {
    return { priceLabel: null, priceVaries: false };
  }

  return { priceLabel: formatMoney(price), priceVaries: false };
}

function pickImage(
  image?: string | null,
  images?: string[] | null,
  fallback?: string | null,
): string | null {
  if (image) return image;
  if (images?.length) return images[0] ?? null;
  if (fallback) return fallback;
  return null;
}

function slugId(prefix: string, guid: string | undefined, name: string, index: number) {
  const base = guid || name || `item-${index}`;
  return `${prefix}-${base}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function resolveModifierGroups(
  item: ToastMenuItem,
  raw: ToastMenusResponse,
): PublicMenuModifierGroup[] {
  const refs = item.modifierGroupReferences ?? [];
  const groups: PublicMenuModifierGroup[] = [];

  for (const refId of refs) {
    const group = raw.modifierGroupReferences?.[String(refId)];
    if (!group) continue;
    if (group.visibility && !isPubliclyVisible(group.visibility)) continue;

    const modifiers = (group.modifierOptionReferences ?? [])
      .map((optId) => {
        const opt = raw.modifierOptionReferences?.[String(optId)];
        if (!opt?.name) return null;
        if (opt.visibility && !isPubliclyVisible(opt.visibility)) return null;
        const { priceLabel } = formatToastPrice(opt.price, opt.pricingStrategy);
        return { name: opt.name, priceLabel };
      })
      .filter(Boolean) as { name: string; priceLabel: string | null }[];

    if (!modifiers.length) continue;

    groups.push({
      name: group.name || "Options",
      required: (group.requiredMode ?? "").toUpperCase() === "REQUIRED",
      modifiers,
    });
  }

  return groups;
}

function transformItem(
  item: ToastMenuItem,
  raw: ToastMenusResponse,
  index: number,
): PublicMenuItem | null {
  if (!item.name) return null;
  if (!isPubliclyVisible(item.visibility)) return null;

  const { priceLabel, priceVaries } = formatToastPrice(item.price, item.pricingStrategy);

  return {
    id: slugId("item", item.guid, item.name, index),
    name: item.name,
    description: item.description?.trim() || null,
    imageUrl: pickImage(item.image, item.images),
    priceLabel,
    priceVaries,
    calories: typeof item.calories === "number" ? item.calories : null,
    modifierGroups: resolveModifierGroups(item, raw),
  };
}

function collectFromGroup(
  group: ToastMenuGroup,
  raw: ToastMenusResponse,
  menuName: string,
  categories: PublicMenuCategory[],
  path: string[] = [],
) {
  if (!isPubliclyVisible(group.visibility)) return;

  const title = group.name?.trim();
  if (!title) return;

  const nextPath = [...path, title];
  const items = (group.menuItems ?? [])
    .map((item, index) => transformItem(item, raw, index))
    .filter(Boolean) as PublicMenuItem[];

  // Preserve Toast ordering; items already follow array order from API
  if (items.length) {
    categories.push({
      id: slugId("cat", group.guid, nextPath.join("-"), categories.length),
      title,
      menuName,
      subtitle: path.length ? path.join(" · ") : null,
      imageUrl: group.image ?? null,
      items,
    });
  }

  for (const nested of group.menuGroups ?? []) {
    collectFromGroup(nested, raw, menuName, categories, nextPath);
  }
}

function collectFromMenu(menu: ToastMenu, raw: ToastMenusResponse, categories: PublicMenuCategory[]) {
  if (!isPubliclyVisible(menu.visibility)) return;

  const menuName = menu.name?.trim() || "Menu";

  for (const group of menu.menuGroups ?? []) {
    collectFromGroup(group, raw, menuName, categories);
  }
}

/**
 * Transform Toast Menus API V2 JSON into a clean frontend menu structure.
 * Only includes entities visible on Toast Online Ordering / ordering partners.
 */
export function transformToastMenus(raw: ToastMenusResponse): Omit<
  PublicMenuResponse,
  "orderingUrl" | "source"
> {
  const categories: PublicMenuCategory[] = [];

  for (const menu of raw.menus ?? []) {
    collectFromMenu(menu, raw, categories);
  }

  // Fallback: if visibility filters removed everything, show POS-visible groups
  // only when the restaurant has published menus but none marked for online.
  // Prefer empty + clear empty state over inventing online visibility.
  return {
    restaurantGuid: raw.restaurantGuid ?? "",
    lastUpdated: raw.lastUpdated ?? null,
    categories,
  };
}

/** Exported for tests — visibility helper */
export function __test_isPubliclyVisible(visibility?: ToastVisibility[] | null) {
  return isPubliclyVisible(visibility);
}
