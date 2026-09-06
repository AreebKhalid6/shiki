import type { ToastConfig } from "./config";
import { ToastApiError, mapToastStatusToMessage } from "./errors";

type TokenCache = {
  accessToken: string;
  expiresAtMs: number;
};

let tokenCache: TokenCache | null = null;
let authInFlight: Promise<string> | null = null;

type AuthSuccess = {
  status?: string;
  token?: {
    accessToken?: string;
    expiresIn?: number;
    tokenType?: string;
  };
};

async function requestAccessToken(config: ToastConfig): Promise<string> {
  const url = `${config.apiBaseUrl}/authentication/v1/authentication/login`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        userAccessType: "TOAST_MACHINE_CLIENT",
      }),
      cache: "no-store",
    });
  } catch {
    throw new ToastApiError(503, "Network error while authenticating with Toast.");
  }

  if (!response.ok) {
    throw new ToastApiError(
      response.status,
      mapToastStatusToMessage(response.status === 401 ? 401 : response.status),
      `TOAST_AUTH_${response.status}`,
    );
  }

  const data = (await response.json()) as AuthSuccess;
  const accessToken = data.token?.accessToken;
  const expiresIn = data.token?.expiresIn ?? 0;

  if (!accessToken) {
    throw new ToastApiError(502, "Toast authentication response was missing an access token.");
  }

  // Refresh slightly before expiry
  const skewMs = 60_000;
  tokenCache = {
    accessToken,
    expiresAtMs: Date.now() + Math.max(expiresIn * 1000 - skewMs, 30_000),
  };

  return accessToken;
}

export async function getAccessToken(config: ToastConfig): Promise<string> {
  if (tokenCache && Date.now() < tokenCache.expiresAtMs) {
    return tokenCache.accessToken;
  }

  if (authInFlight) return authInFlight;

  authInFlight = requestAccessToken(config).finally(() => {
    authInFlight = null;
  });

  return authInFlight;
}

export function clearAccessTokenCache() {
  tokenCache = null;
}
