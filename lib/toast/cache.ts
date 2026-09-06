import type { PublicMenuResponse } from "./types";

type CacheEntry = {
  payload: PublicMenuResponse;
  toastLastUpdated: string | null;
  storedAtMs: number;
  expiresAtMs: number;
};

let menuCache: CacheEntry | null = null;
let menuInFlight: Promise<PublicMenuResponse> | null = null;

export function getCachedMenu(now = Date.now()): CacheEntry | null {
  if (!menuCache) return null;
  if (now >= menuCache.expiresAtMs) return null;
  return menuCache;
}

export function setCachedMenu(
  payload: PublicMenuResponse,
  toastLastUpdated: string | null,
  ttlMs: number,
) {
  const now = Date.now();
  menuCache = {
    payload,
    toastLastUpdated,
    storedAtMs: now,
    expiresAtMs: now + ttlMs,
  };
}

export function getStaleMenu(): CacheEntry | null {
  return menuCache;
}

export function clearMenuCache() {
  menuCache = null;
}

export async function withMenuInFlight(
  factory: () => Promise<PublicMenuResponse>,
): Promise<PublicMenuResponse> {
  if (menuInFlight) return menuInFlight;
  menuInFlight = factory().finally(() => {
    menuInFlight = null;
  });
  return menuInFlight;
}
