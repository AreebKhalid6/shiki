import type { ToastConfig } from "./config";
import { getAccessToken, clearAccessTokenCache } from "./auth";
import { ToastApiError, mapToastStatusToMessage } from "./errors";
import type { ToastMenusResponse, ToastMetadataResponse } from "./types";

async function toastFetch(
  config: ToastConfig,
  path: string,
  init?: RequestInit,
  retried = false,
): Promise<Response> {
  const token = await getAccessToken(config);
  const url = `${config.apiBaseUrl}${path}`;

  let response: Response;
  try {
    response = await fetch(url, {
      ...init,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Toast-Restaurant-External-ID": config.restaurantGuid,
        ...(init?.headers ?? {}),
      },
      cache: "no-store",
    });
  } catch {
    throw new ToastApiError(503, "Network error while contacting Toast.");
  }

  if (response.status === 401 && !retried) {
    clearAccessTokenCache();
    return toastFetch(config, path, init, true);
  }

  return response;
}

export async function fetchMenuMetadata(
  config: ToastConfig,
): Promise<ToastMetadataResponse> {
  const response = await toastFetch(config, "/menus/v2/metadata");

  if (!response.ok) {
    throw new ToastApiError(response.status, mapToastStatusToMessage(response.status));
  }

  return (await response.json()) as ToastMetadataResponse;
}

export async function fetchMenusV2(config: ToastConfig): Promise<ToastMenusResponse> {
  const response = await toastFetch(config, "/menus/v2/menus");

  if (!response.ok) {
    throw new ToastApiError(response.status, mapToastStatusToMessage(response.status));
  }

  const data = (await response.json()) as ToastMenusResponse;
  if (!data || typeof data !== "object") {
    throw new ToastApiError(502, "Invalid menu response from Toast.");
  }

  return data;
}
