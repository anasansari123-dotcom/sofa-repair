export type ServiceGroupId = "sofa" | "beds" | "wall-panels";

export type ServiceType = {
  slug: string;
  name: string;
  group: ServiceGroupId;
  description: string;
  cover: string;
  images: string[];
};

export type ServiceGroup = {
  id: ServiceGroupId;
  label: string;
  tagline: string;
  href: string;
  items: ServiceType[];
};

export const SOFA_TYPES: ServiceType[] = [
  {
    slug: "chesterfield",
    name: "Chesterfield",
    group: "sofa",
    description:
      "Classic tufted Chesterfield repair — leather, fabric, frame and deep-button restoration at your doorstep.",
    cover: "/chesterdfield/chesterfield-design-11.jpg",
    images: [
      "/chesterdfield/chesterfield-design-11.jpg",
      "/chesterdfield/chesterfield-design-10.jpg",
      "/chesterdfield/chesterfield-design-9.jpg",
      "/chesterdfield/7c74a821a4474f79658cbb3a52abbdc0.jpg",
      "/chesterdfield/83e81cdca796a8463acf7100659623e2.jpg",
      "/chesterdfield/9d8fe63ba442201e30b974a58410fdbc.jpg",
      "/chesterdfield/687c46ab0c73f5f230de6727771fa80d.jpg",
      "/chesterdfield/5ec448529cf1232ff21e61a759f4364d.jpg",
    ],
  },
  {
    slug: "sofa-sets",
    name: "Sofa Sets",
    group: "sofa",
    description:
      "2-seater, 3-seater and complete sofa set upholstery, foam replacement and structural repair.",
    cover: "/sofa sets/c7c1de61a7bc540434c19fef4c258a21.jpg",
    images: [
      "/sofa sets/c7c1de61a7bc540434c19fef4c258a21.jpg",
      "/sofa sets/3317809dad91b6726a9aa1fa45a10c5b.jpg",
      "/sofa sets/4d563beeb9701ed939dfafa37bf4fa5b.jpg",
      "/sofa sets/4989dfdf7533e63454a2597f1e4afa3f.jpg",
      "/sofa sets/66088dbb54f305a0289b166a4ae10572.jpg",
      "/sofa sets/e2186e0ca9da22d1fa948c4a8d7aae20.jpg",
      "/sofa sets/1cc1afb21f2dcfc510b67e7386ed1a90.jpg",
      "/sofa sets/ad008cd5f0a406175b7704f1d69847e8.jpg",
    ],
  },
  {
    slug: "l-shape",
    name: "L-Shape Sofas",
    group: "sofa",
    description:
      "Sectional L-shape sofa repair, corner joint fixing, cushion renewal and modular unit restoration.",
    cover: "/L shape/l-shape-design-10.jpg",
    images: [
      "/L shape/l-shape-design-10.jpg",
      "/L shape/L shaped.jpg",
      "/L shape/l-shape-design-11.jpg",
      "/L shape/l-shape-design-9.jpg",
      "/L shape/l-shape-design-7.jpg",
      "/L shape/cf657526e083f8bfcba3306d61fde95f.jpg",
      "/L shape/0f9be19916a8fad53303d34d487af64d.jpg",
      "/L shape/a158d266deaa2985ed633b40c527e99d.jpg",
    ],
  },
  {
    slug: "u-shape",
    name: "U-Shape Sofas",
    group: "sofa",
    description:
      "Large U-shape sectional repair with modular fixing, premium foam and fabric matching.",
    cover: "/u shape/5a60be3eb59bdd99d34c849e56fbb505.jpg",
    images: [
      "/u shape/5a60be3eb59bdd99d34c849e56fbb505.jpg",
      "/u shape/u-shape-design-1.jpg",
      "/u shape/3e9c2f1b3ed75fbedef0eadf961bc73b.jpg",
      "/u shape/7705ac33fcd764bda1feefa53de47593.jpg",
      "/u shape/afeb419ec46cb0157f013e2bf526dc02.jpg",
      "/u shape/c88cbfc075e03a2cedd0e53c0fdba869.jpg",
      "/u shape/ce7ec62617c4edc13e274bd04b046dc1.jpg",
      "/u shape/f27ac9722cc4bf6a93f8ea469982d2c5.jpg",
    ],
  },
  {
    slug: "luxury-curved",
    name: "Luxury Curved",
    group: "sofa",
    description:
      "Designer curved and sculptural sofa repair with precise contour upholstery and luxury finishes.",
    cover: "/Luxury curved/09dbe8dd0d3bfe1b8dc2fd0b15514c1d.jpg",
    images: [
      "/Luxury curved/09dbe8dd0d3bfe1b8dc2fd0b15514c1d.jpg",
      "/Luxury curved/11a988152e75fdbbe6b3361ccaffa685.jpg",
      "/Luxury curved/3e18bae50da97d56897068bc29cb63f4.jpg",
      "/Luxury curved/42c8d017d131952f6ed0b191aad75fcd.jpg",
      "/Luxury curved/53c1f4cc64ba5015e1a12819b1a6c45c.jpg",
      "/Luxury curved/76c40cb602c6b41fcb1dfe1233a7d9bb.jpg",
      "/Luxury curved/87bf4bae4b5c3002dd8ccd3c480fa15e.jpg",
      "/Luxury curved/9e4192e2bf1a28497cb08f26076ab5c0.jpg",
    ],
  },
  {
    slug: "recliner",
    name: "Recliners",
    group: "sofa",
    description:
      "Recliner mechanism, motor, spring and comfort restoration for single, double and electric models.",
    cover: "/Recliner/recliner-2-seater.jpg",
    images: [
      "/Recliner/recliner-2-seater.jpg",
      "/Recliner/1026d48073f7212388288913f220727b.jpg",
      "/Recliner/a8839ec9a4560e774a54a9a49a183aee.jpg",
      "/Recliner/3cd6aaff886cdbe4447b327af6fb4b17.jpg",
      "/Recliner/939c86a376b1186882e22a80146c6238.jpg",
      "/Recliner/0831864957b31577a0e3cd5a74500616.jpg",
      "/Recliner/1cb46e9fd09a7145bef47973cdbc08e6.jpg",
      "/Recliner/95d6d1def525d63b9253f9b1133c2f14.jpg",
    ],
  },
  {
    slug: "sofa-cum-bed",
    name: "Sofa Cum Bed",
    group: "sofa",
    description:
      "Convertible sofa bed mechanism repair, mattress comfort upgrade and fresh upholstery.",
    cover: "/sofa cum bed/sofa-cum-bed-design-11.jpg",
    images: [
      "/sofa cum bed/sofa-cum-bed-design-11.jpg",
      "/sofa cum bed/00852016b42fbed64102ff1363edd04c.jpg",
      "/sofa cum bed/3936e44ed9a2c37e2b31da4507e95dda.jpg",
      "/sofa cum bed/fa9536e213f0a45a2f0b476667c7711d.jpg",
      "/sofa cum bed/3b037005851b0f51d68d31c11f30ffe4.jpg",
      "/sofa cum bed/6a6136ac1c97030c2ef47d4507c967fc.jpg",
      "/sofa cum bed/81813484b03f54fdef03611e57a62481.jpg",
      "/sofa cum bed/d56ee836e9edd04726fc0050f1ec7c33.jpg",
    ],
  },
  {
    slug: "sofa-with-lounger",
    name: "Sofa with Lounger",
    group: "sofa",
    description:
      "Sofa with chaise lounger repair — frame, foam density upgrade and premium fabric finishing.",
    cover: "/sofa with longer/097fe482014f62a575453cc639ca76b2.jpg",
    images: [
      "/sofa with longer/097fe482014f62a575453cc639ca76b2.jpg",
      "/sofa with longer/2a156b061ec072589d3147c32a9afb98.jpg",
      "/sofa with longer/2a8a27f388d4c580b5a15d0bbab22611.jpg",
      "/sofa with longer/4e4d7d9edf009be568293a307af9477d.jpg",
      "/sofa with longer/579dec6271b16529a994623a11eca4ff.jpg",
      "/sofa with longer/68da6b1aa0295e3f3b501fe3efb4389a.jpg",
      "/sofa with longer/7441ba090b4eacc718c5038a7e435b3f.jpg",
      "/sofa with longer/a1b33e2911b80f74bfe8e9bfb861bc65.jpg",
    ],
  },
];

export const BED_TYPES: ServiceType[] = [
  {
    slug: "upholstered-bed",
    name: "Upholstered Bed",
    group: "beds",
    description:
      "Fully upholstered bed frame and headboard repair with fabric, leather and padding restoration.",
    cover: "/beds/upholstered/UB1.jpg",
    images: [
      "/beds/upholstered/UB1.jpg",
      "/beds/upholstered/UB2.jpg",
      "/beds/upholstered/UB3.jpg",
      "/beds/upholstered/UB4.jpg",
      "/beds/upholstered/UB5.jpg",
      "/beds/upholstered/UB6.jpg",
      "/beds/upholstered/UB7.jpg",
      "/beds/upholstered/UB8.jpg",
      "/beds/upholstered/UB9.jpg",
      "/beds/upholstered/UB10.jpg",
      "/beds/upholstered/UB11.jpg",
    ],
  },
  {
    slug: "storage-platform-bed",
    name: "Storage Platform Bed",
    group: "beds",
    description:
      "Hydraulic and drawer storage bed repair — frame strengthening, base fixing and finish refresh.",
    cover: "/beds/storage-platform/SP1.jpg",
    images: [
      "/beds/storage-platform/SP1.jpg",
      "/beds/storage-platform/SP2.jpg",
      "/beds/storage-platform/SP3.jpg",
      "/beds/storage-platform/SP4.jpg",
      "/beds/storage-platform/SP5.jpg",
      "/beds/storage-platform/SP6.jpg",
    ],
  },
  {
    slug: "floating-platform-bed",
    name: "Floating Platform Bed",
    group: "beds",
    description:
      "Modern floating platform bed repair with structural reinforcement and clean minimal finishes.",
    cover: "/beds/floating-platform/FP1.jpg",
    images: [
      "/beds/floating-platform/FP1.jpg",
      "/beds/floating-platform/FP2.jpg",
      "/beds/floating-platform/FP3.jpg",
      "/beds/floating-platform/FP4.jpg",
      "/beds/floating-platform/FP5.jpg",
      "/beds/floating-platform/FP6.jpg",
      "/beds/floating-platform/FP7.jpg",
      "/beds/floating-platform/FP8.jpg",
    ],
  },
  {
    slug: "minimal-frame-bed",
    name: "Minimal Frame Bed",
    group: "beds",
    description:
      "Sleek minimal frame bed repair — wood polish, joint fixing and contemporary style restoration.",
    cover: "/beds/minimal-frame/MF1.jpg",
    images: [
      "/beds/minimal-frame/MF1.jpg",
      "/beds/minimal-frame/MF2.jpg",
      "/beds/minimal-frame/MF3.jpg",
      "/beds/minimal-frame/MF4.jpg",
      "/beds/minimal-frame/MF5.jpg",
      "/beds/minimal-frame/MF6.jpg",
      "/beds/minimal-frame/MF7.jpg",
      "/beds/minimal-frame/MF8.jpg",
    ],
  },
  {
    slug: "heritage-teak-bed",
    name: "Heritage Teak Bed",
    group: "beds",
    description:
      "Heritage teak bed restoration — polish, carving care, frame repair and lasting wood protection.",
    cover: "/beds/heritage-teak/HT1.jpg",
    images: [
      "/beds/heritage-teak/HT1.jpg",
      "/beds/heritage-teak/HT2.jpg",
      "/beds/heritage-teak/HT3.png",
      "/beds/heritage-teak/HT4.jpg",
      "/beds/heritage-teak/HT5.png",
      "/beds/heritage-teak/HT6.jpg",
    ],
  },
];

const WP = "/Wall panels-20260529T172551Z-3-001/Wall panels";

export const WALL_PANEL_TYPES: ServiceType[] = [
  {
    slug: "dining-wall-panels",
    name: "Dining Area",
    group: "wall-panels",
    description:
      "Dining-area wall panels with moulding, fluted textures and elegant feature walls for a refined look.",
    cover: "/wall-panels/dining/D1.png",
    images: [
      "/wall-panels/dining/D1.png",
      "/wall-panels/dining/D2.png",
      "/wall-panels/dining/D3.png",
      "/wall-panels/dining/D4.png",
      "/wall-panels/dining/D5.png",
      "/wall-panels/dining/D6.png",
    ],
  },
  {
    slug: "living-wall-panels",
    name: "Living Room",
    group: "wall-panels",
    description:
      "Living-room fluted panels, marble accent walls and modern feature walls with luxury finishes.",
    cover: "/wall-panels/living-room-panels-2.png",
    images: [
      "/wall-panels/living-room-panels-2.png",
      "/wall-panels/living-room-panels-1.png",
      `${WP}/Living room/L1.png`,
      `${WP}/Living room/L2.jpg`,
      `${WP}/Living room/L3.jpg`,
      `${WP}/Living room/L4.jpg`,
      `${WP}/Living room/L5.jpg`,
      `${WP}/Living room/L6.jpg`,
      `${WP}/Living room/L10.png`,
      `${WP}/Living room/L12.jpg`,
    ],
  },
  {
    slug: "tv-unit-wall-panels",
    name: "TV Unit",
    group: "wall-panels",
    description:
      "Custom TV unit wall panels, media walls and slatted backdrops designed around your living space.",
    cover: `${WP}/TV Unit/T1.jpg`,
    images: [
      `${WP}/TV Unit/T1.jpg`,
      `${WP}/TV Unit/T10.jpg`,
      `${WP}/TV Unit/T11.jpg`,
      `${WP}/TV Unit/T12.jpg`,
      `${WP}/TV Unit/T13.jpg`,
      `${WP}/TV Unit/T14.jpg`,
    ],
  },
  {
    slug: "bedroom-wall-panels",
    name: "Bedrooms",
    group: "wall-panels",
    description:
      "Bedroom wall panels and headboard feature walls for a calm, premium interior finish.",
    cover: `${WP}/Bedrooms/B1.jpg`,
    images: [
      `${WP}/Bedrooms/B1.jpg`,
      `${WP}/Bedrooms/B2.jpg`,
      `${WP}/Bedrooms/B3.jpg`,
      `${WP}/Bedrooms/B4.jpg`,
      `${WP}/Bedrooms/B5.jpg`,
      `${WP}/Bedrooms/B6.jpg`,
    ],
  },
];

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "sofa",
    label: "Sofa",
    tagline: "All sofa styles repaired & restored",
    href: "/services#sofa",
    items: SOFA_TYPES,
  },
  {
    id: "beds",
    label: "Beds",
    tagline: "Platform, storage & upholstered beds",
    href: "/services#beds",
    items: BED_TYPES,
  },
  {
    id: "wall-panels",
    label: "Wall Panels",
    tagline: "Dining, living, TV & bedroom panels",
    href: "/services#wall-panels",
    items: WALL_PANEL_TYPES,
  },
];

export const ALL_SERVICE_TYPES: ServiceType[] = [
  ...SOFA_TYPES,
  ...BED_TYPES,
  ...WALL_PANEL_TYPES,
];

export function getServiceType(slug: string): ServiceType | undefined {
  return ALL_SERVICE_TYPES.find((item) => item.slug === slug);
}

export function getServiceGroup(id: ServiceGroupId): ServiceGroup | undefined {
  return SERVICE_GROUPS.find((group) => group.id === id);
}
