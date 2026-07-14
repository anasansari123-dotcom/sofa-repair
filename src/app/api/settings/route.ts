import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json(settings, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}
