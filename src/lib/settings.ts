import { connectDB } from "@/lib/mongodb";
import { SiteSettingsModel } from "@/lib/models/SiteSettings";
import { DEFAULT_SETTINGS, type SiteSettingsData } from "@/lib/defaults";

export type { SiteSettingsData };

export async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    await connectDB();
    let doc = await SiteSettingsModel.findById("site").lean();

    if (!doc) {
      doc = await SiteSettingsModel.create({ _id: "site", ...DEFAULT_SETTINGS });
    }

    const defaultHero = DEFAULT_SETTINGS.heroSlides;
    const heroOutOfDate =
      !doc.heroSlides?.length ||
      doc.heroSlides.length !== defaultHero.length ||
      doc.heroSlides[0]?.src !== defaultHero[0].src;

    if (heroOutOfDate) {
      await SiteSettingsModel.findByIdAndUpdate("site", { heroSlides: defaultHero });
      doc = { ...doc, heroSlides: defaultHero };
    }

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
      heroSlides: doc.heroSlides.map((s) => ({
        src: s.src,
        title: s.title,
        subtitle: s.subtitle,
      })),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function updateSiteSettings(data: SiteSettingsData) {
  await connectDB();
  const updated = await SiteSettingsModel.findByIdAndUpdate(
    "site",
    { ...data },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).lean();

  if (!updated) throw new Error("Failed to update settings");

  return {
    phone: updated.phone,
    phoneRaw: updated.phoneRaw,
    email: updated.email,
    whatsapp: updated.whatsapp,
    address: updated.address,
    mapUrl: updated.mapUrl,
    hours: updated.hours,
    location: updated.location,
    instagram: updated.instagram,
    facebook: updated.facebook,
    youtube: updated.youtube,
    heroSlides: updated.heroSlides,
  };
}