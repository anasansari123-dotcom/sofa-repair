"use client";

import Image from "next/image";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { useSiteSettings } from "@/components/providers/SiteSettingsProvider";

export function StorefrontSection() {
  const settings = useSiteSettings();

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-0 pattern-dots opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-cream shadow-[0_12px_40px_rgba(26,47,74,0.08)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="/storefront.png"
                alt="Tanseer Sofa Repair And Home Service — Gurgaon storefront"
                fill
                className="object-cover object-center"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/10" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm sm:bottom-6 sm:left-6">
                Palam Vihar, Gurugram
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-bold tracking-[0.22em] text-tan uppercase">
                Visit Our Store
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">
                Tanseer Sofa Repair
                <span className="mt-1 block text-lg font-semibold text-tan-dark sm:text-xl">
                  And Home Service — Gurgaon
                </span>
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Visit our showroom experience or book doorstep sofa repair across Gurugram.
                Call{" "}
                <a
                  href={`tel:${settings.phoneRaw}`}
                  className="font-semibold text-navy underline-offset-2 hover:text-tan-dark hover:underline"
                >
                  {settings.phone}
                </a>{" "}
                for a free assessment.
              </p>

              <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-tan-light">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Our Location</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{settings.address}</p>
                </div>
              </div>

              <div className="flex flex-row gap-2 sm:gap-3">
                <a
                  href={`tel:${settings.phoneRaw}`}
                  className="btn-primary btn-warm inline-flex flex-1 justify-center text-sm whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={settings.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex flex-1 justify-center text-sm whitespace-nowrap"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
