import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Phone } from "lucide-react";
import { PageBanner } from "@/components/sections/PageBanner";
import { ServiceTypeGallery } from "@/components/sections/ServiceCategories";
import { CTABanner } from "@/components/sections/CTABanner";
import { ALL_SERVICE_TYPES, getServiceType } from "@/lib/service-catalog";
import { SITE } from "@/lib/constants";
import { absoluteUrl, serviceJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ALL_SERVICE_TYPES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getServiceType(slug);
  if (!item) return { title: "Service" };

  const title = `${item.name} Repair Gurgaon`;
  const description = `${item.description} Doorstep service in Gurgaon & Gurugram by Tanseer Sofa Repair And Home Service. Call +91 91704 63193.`;

  return {
    title,
    description,
    keywords: [
      `${item.name} repair Gurgaon`,
      `${item.name} repair Gurugram`,
      "sofa repair Gurgaon",
      "doorstep furniture repair Gurugram",
    ],
    alternates: { canonical: absoluteUrl(`/services/${item.slug}`) },
    openGraph: {
      title: `${item.name} Repair in Gurgaon | Tanseer`,
      description,
      url: absoluteUrl(`/services/${item.slug}`),
      images: [{ url: absoluteUrl(item.cover), alt: item.name }],
    },
  };
}

export default async function ServiceTypePage({ params }: Props) {
  const { slug } = await params;
  const item = getServiceType(slug);
  if (!item) notFound();

  const groupLabel =
    item.group === "sofa" ? "Sofa" : item.group === "beds" ? "Beds" : "Wall Panels";

  const jsonLd = serviceJsonLd(item.name, item.description, `/services/${item.slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        subtitle={`${groupLabel} · Doorstep Repair Gurgaon`}
        title={item.name}
        description={item.description}
        image={item.cover}
        imageAlt={`${item.name} repair in Gurgaon`}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/services#${item.group}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-navy"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {groupLabel}
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="btn-primary btn-warm inline-flex items-center justify-center gap-2 self-start sm:self-auto"
            >
              <Phone className="h-4 w-4" />
              Book Free Visit
            </a>
          </div>

          <div className="mb-8 max-w-3xl">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-navy sm:text-3xl">
              {item.name} Repair in Gurgaon & Gurugram
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Browse recent work and styles we repair. Every job is completed at your home in
              Gurugram with premium materials and warranty-backed craftsmanship.
            </p>
          </div>

          <ServiceTypeGallery item={item} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
