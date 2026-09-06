export class ToastApiError extends Error {
  status: number;
  code: string;

  constructor(status: number, message: string, code?: string) {
    super(message);
    this.name = "ToastApiError";
    this.status = status;
    this.code = code ?? `TOAST_${status}`;
  }
}

export function mapToastStatusToMessage(status: number): string {
  switch (status) {
    case 400:
      return "The restaurant identifier looks invalid. Check TOAST_RESTAURANT_GUID.";
    case 401:
      return "Toast authentication failed. Check TOAST_CLIENT_ID and TOAST_CLIENT_SECRET.";
    case 403:
      return "This API client does not have access to this restaurant or menus:read permission.";
    case 404:
      return "No published Toast menu was found for this restaurant GUID.";
    case 429:
      return "Toast is rate-limiting requests. Please try again in a moment.";
    case 500:
    case 502:
    case 503:
      return "Toast services are temporarily unavailable. Please try again later.";
    default:
      return "Unable to load the menu from Toast right now.";
  }
}

/** Safe log helper — never log secrets or tokens. */
export function logToastError(context: string, error: unknown) {
  if (error instanceof ToastApiError) {
    console.error(`[toast] ${context}: ${error.code} ${error.status} — ${error.message}`);
    return;
  }
  if (error instanceof Error) {
    console.error(`[toast] ${context}: ${error.name} — ${error.message}`);
    return;
  }
  console.error(`[toast] ${context}: unknown error`);
}
