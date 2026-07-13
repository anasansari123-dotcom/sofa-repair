import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { PageBanner } from "@/components/sections/PageBanner";
import { PAGE_BANNERS } from "@/lib/images";
import { absoluteUrl, buildPageTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Sofa Repair Gurgaon",
  description:
    "Contact Tanseer Sofa Repair And Home Service in Palam Vihar, Gurugram. Book doorstep sofa repair in Gurgaon — Call +91 91704 63193 or WhatsApp for a free visit.",
  keywords: [
    "contact sofa repair Gurgaon",
    "sofa repair Palam Vihar",
    "sofa repair Gurugram phone number",
    "book sofa repair Gurgaon",
  ],
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: buildPageTitle("Contact Sofa Repair Gurgaon"),
    description:
      "Book doorstep sofa repair in Gurgaon & Gurugram. Palam Vihar — Call +91 91704 63193.",
    url: absoluteUrl("/contact"),
    images: [
      {
        url: absoluteUrl("/contactimage.jpeg"),
        alt: "Tanseer Sofa Repair And Home Service — Gurgaon storefront",
      },
    ],
  },
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
