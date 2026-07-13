import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RepairProcess } from "@/components/sections/RepairProcess";
import { Statistics } from "@/components/sections/Statistics";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageBanner } from "@/components/sections/PageBanner";
import { PAGE_BANNERS } from "@/lib/images";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Sofa Repair Experts Gurgaon",
  description:
    "About Tanseer Sofa Repair And Home Service — trusted doorstep sofa repair, upholstery and furniture restoration experts in Gurgaon & Gurugram with 10+ years experience.",
  keywords: [
    "sofa repair company Gurgaon",
    "best sofa repair Gurugram",
    "Tanseer Sofa Repairing about",
  ],
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Tanseer Sofa Repair | Gurgaon & Gurugram",
    description:
      "10+ years of doorstep sofa repair and upholstery craftsmanship in Gurugram.",
    url: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        subtitle="About Us"
        title="Our Story"
        description="Trusted sofa repairing experts serving Gurgaon & NCR"
        image={PAGE_BANNERS.about}
        imageAlt="About Tanseer Sofa Repairing"
      />
      <AboutSection full />
      <Statistics />
      <WhyChooseUs />
      <RepairProcess />
      <CTABanner />
    </>
  );
}
