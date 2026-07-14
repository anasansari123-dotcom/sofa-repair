import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import { SiteSettingsModel } from "@/lib/models/SiteSettings";
import { DEFAULT_SETTINGS, type SiteSettingsData } from "@/lib/defaults";

export type { SiteSettingsData };

function mapDoc(doc: {
  phone: string;
  phoneRaw: string;
  email: string;
  whatsapp: string;
  address: string;
  mapUrl: string;
  hours: string;
  location: string;
  instagram: string;
  facebook: string;
  youtube: string;
  heroSlides: { src: string; title: string; subtitle: string }[];
}): SiteSettingsData {
  return {
    phone: doc.phone,
    phoneRaw: doc.phoneRaw,
    email: doc.email,
    whatsapp: doc.whatsapp,
    address: doc.address,
    mapUrl: doc.mapUrl,
    hours: doc.hours,
    location: doc.location,
    instagram: doc.instagram,
    facebook: doc.facebook,
    youtube: doc.youtube,
    heroSlides: (doc.heroSlides?.length ? doc.heroSlides : DEFAULT_SETTINGS.heroSlides).map(
      (s) => ({
        src: s.src,
        title: s.title,
        subtitle: s.subtitle,
      })
    ),
  };
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  // Always read fresh from DB — never serve a statically cached snapshot
  noStore();

  try {
    await connectDB();
    let doc = await SiteSettingsModel.findById("site").lean();

    if (!doc) {
      doc = await SiteSettingsModel.create({ _id: "site", ...DEFAULT_SETTINGS });
    }

    // Only seed hero slides when empty — never overwrite admin edits
    if (!doc.heroSlides?.length) {
      await SiteSettingsModel.findByIdAndUpdate("site", {
        heroSlides: DEFAULT_SETTINGS.heroSlides,
      });
      doc = { ...doc, heroSlides: [...DEFAULT_SETTINGS.heroSlides] };
    }

    return mapDoc(doc);
  } catch (error) {
    console.error("[getSiteSettings]", error);
    return DEFAULT_SETTINGS;
  }
}

export async function updateSiteSettings(data: SiteSettingsData) {
  noStore();
  await connectDB();

  const updated = await SiteSettingsModel.findByIdAndUpdate(
    "site",
    {
      phone: data.phone,
      phoneRaw: data.phoneRaw,
      email: data.email,
      whatsapp: data.whatsapp,
      address: data.address,
      mapUrl: data.mapUrl,
      hours: data.hours,
      location: data.location,
      instagram: data.instagram,
      facebook: data.facebook,
      youtube: data.youtube,
      heroSlides: data.heroSlides,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }
  ).lean();

  if (!updated) throw new Error("Failed to update settings");

  // Bust cached pages so the public site shows new data immediately
  revalidatePath("/", "layout");
  revalidatePath("/contact");
  revalidatePath("/about");
  revalidatePath("/services");
  revalidatePath("/gallery");
  revalidatePath("/admin");

  return mapDoc(updated);
}
