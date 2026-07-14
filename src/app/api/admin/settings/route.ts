import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSiteSettings, updateSiteSettings } from "@/lib/settings";
import type { SiteSettingsData } from "@/lib/defaults";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const settings = await getSiteSettings();
    return NextResponse.json(settings, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load settings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as SiteSettingsData;

    if (!body.phone || !body.email || !body.heroSlides?.length) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const updated = await updateSiteSettings(body);
    return NextResponse.json(updated, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Update failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
