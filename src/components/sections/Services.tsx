"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { SERVICES } from "@/lib/constants";
import "swiper/css";

const ACCENTS = [
  "linear-gradient(90deg, #c4a574, #f59e0b)",
  "linear-gradient(90deg, #10b981, #06b6d4)",
  "linear-gradient(90deg, #3b82f6, #8b5cf6)",
  "linear-gradient(90deg, #f43f5e, #f59e0b)",
  "linear-gradient(90deg, #8b5cf6, #3b82f6)",
  "linear-gradient(90deg, #06b6d4, #10b981)",
  "linear-gradient(90deg, #f59e0b, #f43f5e)",
  "linear-gradient(90deg, #c4a574, #10b981)",
];

const HOME_SERVICES = [
  { index: 0, label: "Sofa" },
  { index: 1, label: "Upholstery" },
  { index: 2, label: "Recliners" },
  { index: 3, label: "Dining Chairs" },
  { index: 4, label: "Beds" },
  { index: 5, label: "Headboards" },
  { index: 10, label: "Wall Panels" },
] as const;

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  return (
    <div
      className="card card-color-top card-hover group overflow-hidden"
      style={{ "--card-accent": ACCENTS[index % ACCENTS.length] } as React.CSSProperties}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-navy transition-colors group-hover:text-tan-dark">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{service.description}</p>
      </div>
    </div>
  );
}

function CollectionCard({
  service,
  label,
  className = "",
}: {
  service: (typeof SERVICES)[number];
  label: string;
  className?: string;
}) {
  return (
    <Link href="/services" className={`group flex flex-col ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-border bg-white p-2.5 shadow-sm transition-all duration-300 group-hover:border-tan/40 group-hover:shadow-md sm:p-3">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="180px"
          />
        </div>
        <h3 className="mt-3 text-center font-[family-name:var(--font-montserrat)] text-xs font-bold text-navy sm:mt-4 sm:text-sm lg:text-base">
          {label}
        </h3>
        <p className="mt-2 text-center text-xs font-semibold text-tan-dark transition-colors group-hover:text-accent-amber">
          View Collection
        </p>
      </div>
    </Link>
  );
}

function MobileServicesSlider() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="mt-10 flex gap-3 overflow-hidden lg:hidden">
        {HOME_SERVICES.slice(0, 2).map(({ index, label }) => (
          <CollectionCard
            key={label}
            service={SERVICES[index]}
            label={label}
            className="w-[148px] shrink-0"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-10 lg:hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop
        autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
        slidesPerView="auto"
        spaceBetween={12}
        speed={600}
        freeMode={{ enabled: true, momentum: true }}
        className="services-mobile-swiper"
      >
        {HOME_SERVICES.map(({ index, label }) => (
          <SwiperSlide key={label} className="!w-[148px] sm:!w-[160px]">
            <CollectionCard service={SERVICES[index]} label={label} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="section-padding pattern-dots bg-cream">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl border border-border/50 bg-white px-5 py-10 shadow-[0_8px_40px_rgba(26,47,74,0.08)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-accent-amber uppercase sm:text-sm">
              Our Services
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              Complete Sofa & Home Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Sofas, dining chairs, beds, recliners and more — expert doorstep service in Gurgaon.
            </p>
          </div>

          {/* Mobile: looping slider */}
          <MobileServicesSlider />

          {/* Desktop: single row grid */}
          <div className="mt-12 hidden gap-3 lg:grid lg:grid-cols-7 xl:gap-4">
            {HOME_SERVICES.map(({ index, label }) => (
              <CollectionCard
                key={label}
                service={SERVICES[index]}
                label={label}
                className="w-full"
              />
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <Link
              href="/services"
              className="btn-primary btn-warm btn-mobile-full inline-flex items-center justify-center gap-2 sm:w-auto"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const items = showAll ? SERVICES : SERVICES.slice(0, 4);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i} />
      ))}
    </div>
  );
}
