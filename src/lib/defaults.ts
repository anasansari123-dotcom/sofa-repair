import { HERO_SLIDES } from "@/lib/images";
import { SITE } from "@/lib/constants";

export interface HeroSlideData {
  src: string;
  title: string;
  subtitle: string;
}

export interface SiteSettingsData {
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
  heroSlides: HeroSlideData[];
}

export const DEFAULT_SETTINGS: SiteSettingsData = {
  phone: SITE.phone,
  phoneRaw: SITE.phoneRaw,
  email: SITE.email,
  whatsapp: SITE.whatsapp,
  address: SITE.address,
  mapUrl: SITE.mapUrl,
  hours: SITE.hours,
  location: SITE.location,
  instagram: SITE.instagram,
  facebook: SITE.facebook,
  youtube: SITE.youtube,
  heroSlides: HERO_SLIDES.map((s) => ({
    src: s.src,
    title: s.title,
    subtitle: s.subtitle,
  })),
};

export function getSocialLinks(settings: SiteSettingsData) {
  return [
    { label: "Instagram", href: settings.instagram },
    { label: "Facebook", href: settings.facebook },
    { label: "YouTube", href: settings.youtube },
  ] as const;
}
