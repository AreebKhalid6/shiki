export type ToastConfig = {
  clientId: string;
  clientSecret: string;
  restaurantGuid: string;
  apiBaseUrl: string;
  orderingUrl: string | null;
  menuCacheTtlMs: number;
};

export class ToastConfigError extends Error {
  code = "TOAST_CONFIG_ERROR" as const;

  constructor(message: string) {
    super(message);
    this.name = "ToastConfigError";
  }
}

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function getToastConfig(): ToastConfig {
  const clientId = process.env.TOAST_CLIENT_ID?.trim() ?? "";
  const clientSecret = process.env.TOAST_CLIENT_SECRET?.trim() ?? "";
  const restaurantGuid = process.env.TOAST_RESTAURANT_GUID?.trim() ?? "";
  const apiBaseUrl = (
    process.env.TOAST_API_BASE_URL?.trim() || "https://ws-api.toasttab.com"
  ).replace(/\/$/, "");
  const orderingUrl = process.env.TOAST_ORDERING_URL?.trim() || null;
  const ttlSeconds = Number(process.env.TOAST_MENU_CACHE_TTL_SECONDS ?? "300");

  const missing: string[] = [];
  if (!clientId) missing.push("TOAST_CLIENT_ID");
  if (!clientSecret) missing.push("TOAST_CLIENT_SECRET");
  if (!restaurantGuid) missing.push("TOAST_RESTAURANT_GUID");

  if (missing.length) {
    throw new ToastConfigError(
      `Missing Toast configuration: ${missing.join(", ")}. ` +
        `Copy .env.example to .env.local and set values. ` +
        `TOAST_RESTAURANT_GUID must be the restaurant location GUID (UUID), ` +
        `not the numeric Restaurant ID. Find it in Toast Web under your restaurant’s location settings, ` +
        `or from Toast API restaurant responses (field restaurantGuid / guid).`,
    );
  }

  if (!UUID_RE.test(restaurantGuid)) {
    throw new ToastConfigError(
      `TOAST_RESTAURANT_GUID must be a UUID (e.g. 4dd6f817-7982-4021-a62a-487ef090ce41). ` +
        `Do not use the numeric Restaurant ID from Toast Web URLs.`,
    );
  }

  return {
    clientId,
    clientSecret,
    restaurantGuid,
    apiBaseUrl,
    orderingUrl,
    menuCacheTtlMs: Number.isFinite(ttlSeconds)
      ? Math.max(30, ttlSeconds) * 1000
      : 300_000,
  };
}
