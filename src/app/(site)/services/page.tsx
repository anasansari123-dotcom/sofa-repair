import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServicesGrid } from "@/components/sections/Services";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { RepairProcess } from "@/components/sections/RepairProcess";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageBanner } from "@/components/sections/PageBanner";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = {
  title: "Services | Tanseer Sofa Repairing Gurgaon",
  description:
    "Sofa & bed repair collections — Chesterfield, L-shape, recliner, upholstered beds and more. Doorstep service in Gurugram.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        subtitle="Our Services"
        title="Sofa & Bed Solutions"
        description="Browse every sofa style and bed type we repair at your doorstep"
        image={PAGE_BANNERS.services}
        imageAlt="Sofa repair services"
      />

      <section className="section-padding pattern-dots bg-cream">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            subtitle="Collections"
            title="Choose Your Furniture Type"
            description="Professional repair for every sofa style and bed design — select a category to explore our work."
            className="mb-12"
          />
          <ServiceCategories />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            subtitle="Expert Care"
            title="Complete Repair Services"
            description="From frame fixing to premium reupholstery — every service delivered at your doorstep."
            className="mb-10"
          />
          <ServicesGrid showAll />
        </div>
      </section>

      <RepairProcess />
      <CTABanner />
    </>
  );
}
