import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getSiteSettings, updateSiteSettings } from "@/lib/settings";
import type { SiteSettingsData } from "@/lib/defaults";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const settings = await getSiteSettings();
  return NextResponse.json(settings);
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
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
