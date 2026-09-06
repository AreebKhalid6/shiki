import { getToastConfig, ToastConfigError } from "./config";
import { fetchMenuMetadata, fetchMenusV2 } from "./client";
import {
  getCachedMenu,
  getStaleMenu,
  setCachedMenu,
  withMenuInFlight,
} from "./cache";
import { transformToastMenus } from "./transform";
import { ToastApiError, logToastError } from "./errors";
import type { PublicMenuResponse } from "./types";

export async function getPublicMenu(): Promise<PublicMenuResponse> {
  const config = getToastConfig();

  const fresh = getCachedMenu();
  if (fresh) {
    return { ...fresh.payload, source: "cache" };
  }

  return withMenuInFlight(async () => {
    // Double-check after waiting for an in-flight request
    const again = getCachedMenu();
    if (again) return { ...again.payload, source: "cache" };

    const stale = getStaleMenu();

    try {
      if (stale?.toastLastUpdated) {
        try {
          const meta = await fetchMenuMetadata(config);
          if (meta.lastUpdated && meta.lastUpdated === stale.toastLastUpdated) {
            // Menu unchanged — extend cache window
            setCachedMenu(
              { ...stale.payload, source: "cache" },
              stale.toastLastUpdated,
              config.menuCacheTtlMs,
            );
            return { ...stale.payload, source: "cache" };
          }
        } catch (metaError) {
          // Metadata failure should not block a full refresh attempt
          logToastError("metadata", metaError);
        }
      }

      const raw = await fetchMenusV2(config);
      const transformed = transformToastMenus(raw);

      const payload: PublicMenuResponse = {
        ...transformed,
        restaurantGuid: transformed.restaurantGuid || config.restaurantGuid,
        orderingUrl: config.orderingUrl,
        source: "toast",
      };

      setCachedMenu(payload, raw.lastUpdated ?? null, config.menuCacheTtlMs);
      return payload;
    } catch (error) {
      logToastError("getPublicMenu", error);

      // Serve stale cache during Toast outages when available
      if (stale) {
        return { ...stale.payload, source: "cache" };
      }

      throw error;
    }
  });
}

export { ToastConfigError, ToastApiError };
export type { PublicMenuResponse } from "./types";
