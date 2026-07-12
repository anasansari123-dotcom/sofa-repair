import { ContactSection } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { PageBanner } from "@/components/sections/PageBanner";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = {
  title: "Contact | Tanseer Sofa Repairing Gurgaon",
  description: "Book a free sofa repair consultation in Gurgaon. Call, WhatsApp or fill our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        subtitle="Contact"
        title="Get In Touch"
        description="Book your free doorstep sofa assessment today"
        image={PAGE_BANNERS.contact}
        imageAlt="Contact Tanseer Sofa Repairing"
      />
      <ContactSection showHeader={false} />
      <FAQ />
    </>
  );
}
