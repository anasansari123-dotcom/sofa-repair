import { AboutSection } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RepairProcess } from "@/components/sections/RepairProcess";
import { Statistics } from "@/components/sections/Statistics";
import { CTABanner } from "@/components/sections/CTABanner";
import { PageBanner } from "@/components/sections/PageBanner";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = {
  title: "About Us | Tanseer Sofa Repairing Gurgaon",
  description: "Learn about Tanseer Sofa Repairing — expert doorstep sofa repair and upholstery in Gurgaon with 10+ years experience.",
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
