import mongoose, { Schema, type Model } from "mongoose";

export interface IHeroSlide {
  src: string;
  title: string;
  subtitle: string;
}

export interface ISiteSettings {
  _id: string;
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
  heroSlides: IHeroSlide[];
  updatedAt?: Date;
}

const HeroSlideSchema = new Schema<IHeroSlide>(
  {
    src: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
  { _id: false }
);

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    _id: { type: String, default: "site" },
    phone: { type: String, required: true },
    phoneRaw: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
    address: { type: String, required: true },
    mapUrl: { type: String, required: true },
    hours: { type: String, required: true },
    location: { type: String, required: true },
    instagram: { type: String, required: true },
    facebook: { type: String, required: true },
    youtube: { type: String, required: true },
    heroSlides: { type: [HeroSlideSchema], required: true },
  },
  { timestamps: true }
);

export const SiteSettingsModel =
  (mongoose.models.SiteSettings as Model<ISiteSettings>) ||
  mongoose.model<ISiteSettings>("SiteSettings", SiteSettingsSchema);
