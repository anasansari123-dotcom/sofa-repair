import { SITE } from "@/lib/constants";

/** Canonical production URL — update if custom domain differs */
export const SITE_URL = "https://tanseersofarepair.com";

export const SEO_BRAND = "Tanseer Sofa Repair And Home Service";

export const SEO_DEFAULT_TITLE =
  "Sofa Repair Gurgaon | Tanseer Sofa Repair And Home Service Gurugram";

export const SEO_DEFAULT_DESCRIPTION =
  "Doorstep sofa repair in Gurgaon & Gurugram by Tanseer. Expert sofa reupholstery, recliner, L-shape, Chesterfield, bed & furniture repair at Palam Vihar. Call +91 91704 63193.";

export const SEO_KEYWORDS = [
  "sofa repair Gurgaon",
  "sofa repair Gurugram",
  "sofa repairing Gurgaon",
  "sofa repair near me Gurgaon",
  "doorstep sofa repair Gurgaon",
  "sofa repair Palam Vihar",
  "upholstery Gurgaon",
  "upholstery Gurugram",
  "recliner repair Gurgaon",
  "L shape sofa repair Gurgaon",
  "Chesterfield repair Gurgaon",
  "leather sofa repair Gurgaon",
  "sofa cum bed repair Gurgaon",
  "bed repair Gurgaon",
  "furniture repair Gurugram",
  "sofa restoration Gurgaon",
  "home service sofa repair Gurgaon",
  "Tanseer Sofa Repair",
  "Tanseer Sofa Repairing Gurugram",
  "sofa repair Sector Palam Vihar",
] as const;

export function absoluteUrl(path = "/") {
  const base = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageTitle(pageTitle: string) {
  return `${pageTitle} | ${SEO_BRAND} Gurgaon`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SEO_BRAND,
    alternateName: ["Tanseer Sofa Repairing", "Tanseer Sofa Repair Gurgaon"],
    description: SEO_DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: SITE.phone,
    email: SITE.email,
    image: absoluteUrl("/logo.jpeg"),
    logo: absoluteUrl("/logo.jpeg"),
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Block - C1, Palam Vihar",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122017",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate Palam Vihar, Gurugram
      latitude: 28.5086,
      longitude: 77.0426,
    },
    areaServed: [
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "Place", name: "Palam Vihar" },
      { "@type": "AdministrativeArea", name: "NCR" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
    sameAs: [SITE.instagram, SITE.facebook, SITE.youtube],
    hasMap: SITE.mapUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: ["Gurgaon", "Gurugram", "IN"],
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_BRAND,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqJsonLd(
  items: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "LocalBusiness",
      name: SEO_BRAND,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
    areaServed: ["Gurgaon", "Gurugram", "Palam Vihar"],
  };
}
