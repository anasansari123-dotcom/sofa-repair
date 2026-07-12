import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { AboutSection } from "@/components/sections/About";
import { ServicesPreview } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RepairProcess } from "@/components/sections/RepairProcess";
import { GalleryPreview } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

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
