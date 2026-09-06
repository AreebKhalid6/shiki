import { NextResponse } from "next/server";
import {
  getPublicMenu,
  ToastApiError,
  ToastConfigError,
} from "@/lib/toast";
import { mapToastStatusToMessage } from "@/lib/toast/errors";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const menu = await getPublicMenu();
    return NextResponse.json(menu, {
      headers: {
        "Cache-Control": "private, max-age=60",
      },
    });
  } catch (error) {
    if (error instanceof ToastConfigError) {
      return NextResponse.json(
        {
          error: error.message,
          code: error.code,
        },
        { status: 503 },
      );
    }

    if (error instanceof ToastApiError) {
      return NextResponse.json(
        {
          error: mapToastStatusToMessage(error.status),
          code: error.code,
        },
        { status: error.status >= 400 && error.status < 600 ? error.status : 502 },
      );
    }

    console.error("[api/menu] unexpected error");
    return NextResponse.json(
      {
        error: "Unable to load the menu right now.",
        code: "MENU_UNEXPECTED",
      },
      { status: 500 },
    );
  }
}
