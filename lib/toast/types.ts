/** Toast Menus API V2 raw types (subset used by this integration). */

export type ToastVisibility =
  | "POS"
  | "KIOSK"
  | "GRUBHUB"
  | "TOAST_ONLINE_ORDERING"
  | "ORDERING_PARTNERS";

export type ToastPricingStrategy =
  | "BASE_PRICE"
  | "PRICE_SIZE"
  | "SIZE_PRICE"
  | "MENU_SPECIFIC_PRICE"
  | "TIME_SPECIFIC_PRICE"
  | "OPEN_PRICE"
  | string;

export type ToastMenuItem = {
  name?: string;
  guid?: string;
  description?: string | null;
  image?: string | null;
  images?: string[] | null;
  visibility?: ToastVisibility[] | null;
  price?: number | null;
  pricingStrategy?: ToastPricingStrategy | null;
  pricingRules?: unknown;
  sortOrder?: number | null;
  modifierGroupReferences?: number[] | null;
  calories?: number | null;
};

export type ToastMenuGroup = {
  name?: string;
  guid?: string;
  description?: string | null;
  image?: string | null;
  visibility?: ToastVisibility[] | null;
  menuGroups?: ToastMenuGroup[] | null;
  menuItems?: ToastMenuItem[] | null;
};

export type ToastMenu = {
  name?: string;
  guid?: string;
  description?: string | null;
  image?: string | null;
  highResImage?: string | null;
  visibility?: ToastVisibility[] | null;
  menuGroups?: ToastMenuGroup[] | null;
};

export type ToastMenusResponse = {
  restaurantGuid?: string;
  lastUpdated?: string;
  restaurantTimeZone?: string;
  menus?: ToastMenu[];
  modifierGroupReferences?: Record<
    string,
    {
      name?: string;
      referenceId?: number;
      visibility?: ToastVisibility[] | null;
      modifierOptionReferences?: number[];
      minSelections?: number;
      maxSelections?: number;
      requiredMode?: string;
    }
  >;
  modifierOptionReferences?: Record<
    string,
    {
      name?: string;
      referenceId?: number;
      price?: number | null;
      pricingStrategy?: ToastPricingStrategy | null;
      visibility?: ToastVisibility[] | null;
      description?: string | null;
    }
  >;
};

export type ToastMetadataResponse = {
  restaurantGuid?: string;
  lastUpdated?: string;
};

/** Frontend-friendly menu shape returned by GET /api/menu */
export type PublicMenuModifier = {
  name: string;
  priceLabel: string | null;
};

export type PublicMenuModifierGroup = {
  name: string;
  required: boolean;
  modifiers: PublicMenuModifier[];
};

export type PublicMenuItem = {
  id: string;
  name: string;
  description: string | null;
  imageUrl: string | null;
  priceLabel: string | null;
  priceVaries: boolean;
  calories: number | null;
  modifierGroups: PublicMenuModifierGroup[];
};

export type PublicMenuCategory = {
  id: string;
  title: string;
  menuName: string;
  subtitle: string | null;
  imageUrl: string | null;
  items: PublicMenuItem[];
};

export type PublicMenuResponse = {
  restaurantGuid: string;
  lastUpdated: string | null;
  orderingUrl: string | null;
  categories: PublicMenuCategory[];
  source: "toast" | "cache";
};
