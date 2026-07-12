import { GalleryFull } from "@/components/sections/Gallery";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageBanner } from "@/components/sections/PageBanner";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = {
  title: "Gallery | Tanseer Sofa Repairing Gurgaon",
  description: "View our sofa, dining chair, bed and upholstery repair work in Gurgaon.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        subtitle="Gallery"
        title="Our Work"
        description="Real projects from our Gurgaon workshop"
        image={PAGE_BANNERS.gallery}
        imageAlt="Sofa repair gallery"
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
