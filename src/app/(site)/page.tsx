import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { AboutSection } from "@/components/sections/About";
import { ServicesPreview } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RepairProcess } from "@/components/sections/RepairProcess";
import { GalleryPreview } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { SEO_DEFAULT_DESCRIPTION, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Sofa Repair Gurgaon | Doorstep Sofa Repair Gurugram | Tanseer Sofa Repair And Home Service",
  },
  description: SEO_DEFAULT_DESCRIPTION,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Sofa Repair Gurgaon & Gurugram | Tanseer Sofa Repair And Home Service",
    description: SEO_DEFAULT_DESCRIPTION,
    url: absoluteUrl("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseUs />
      <RepairProcess />
      <GalleryPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
