import type { Metadata } from "next";
import { GalleryFull } from "@/components/sections/Gallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageBanner } from "@/components/sections/PageBanner";
import { PAGE_BANNERS } from "@/lib/images";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sofa Repair Gallery Gurgaon",
  description:
    "See real sofa repair, upholstery, bed and wall panel projects by Tanseer in Gurgaon & Gurugram. Before-and-after style gallery of doorstep furniture restoration.",
  keywords: [
    "sofa repair gallery Gurgaon",
    "upholstery work Gurugram",
    "sofa restoration photos Gurgaon",
  ],
  alternates: { canonical: absoluteUrl("/gallery") },
  openGraph: {
    title: "Sofa Repair Gallery | Gurgaon & Gurugram | Tanseer",
    description: "Real doorstep sofa and furniture repair work across Gurugram.",
    url: absoluteUrl("/gallery"),
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        subtitle="Gallery"
        title="Our Work"
        description="Real projects from our Gurgaon workshop"
        image={PAGE_BANNERS.gallery}
        imageAlt="Sofa repair gallery Gurgaon"
      />
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <GalleryFull />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
