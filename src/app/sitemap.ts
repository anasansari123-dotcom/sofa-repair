import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { ALL_SERVICE_TYPES } from "@/lib/service-catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/services" ? 0.9 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICE_TYPES.map((item) => ({
    url: `${SITE_URL}/services/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
