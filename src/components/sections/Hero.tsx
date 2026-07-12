"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Phone, CalendarCheck, ChevronRight, Shield, Star, Truck } from "lucide-react";
import { useSiteSettings } from "@/components/providers/SiteSettingsProvider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const TRUST_BADGES = [
  { icon: Star, label: "10+ Years" },
  { icon: Shield, label: "Warranty" },
  { icon: Truck, label: "Free Visit" },
];

function HeroOverlay() {
  return (
    <>
      {/* Light bottom gradient only — no blue layer, image stays clear */}
      <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/55 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute inset-0 max-w-3xl bg-gradient-to-r from-black/30 via-transparent to-transparent lg:block" />
    </>
  );
}

export function Hero() {
  const settings = useSiteSettings();
  const heroSlides = settings.heroSlides;
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => setMounted(true), []);

  const slide = heroSlides[activeIndex] ?? heroSlides[0];
  const titleWords = slide.title.split(" ");
  const titleLead = titleWords.length > 2 ? titleWords.slice(0, -2).join(" ") : titleWords[0];
  const titleAccent =
    titleWords.length > 2 ? titleWords.slice(-2).join(" ") : titleWords.slice(1).join(" ");

  return (
    <section className="hero-section relative bg-cream max-lg:overflow-hidden lg:overflow-hidden">
      <div className="hero-section-inner relative w-full">
        {mounted ? (
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="hero-swiper absolute inset-0 h-full w-full"
          >
            {heroSlides.map((s, i) => (
              <SwiperSlide key={s.src}>
                <div className="relative h-full w-full">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    className="object-cover object-center"
                    priority={i < 2}
                    quality={92}
                    sizes="100vw"
                  />
                  <HeroOverlay />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="absolute inset-0">
            <Image
              src={heroSlides[0].src}
              alt="Tanseer Sofa Repairing"
              fill
              className="object-cover object-center"
              priority
              quality={92}
              sizes="100vw"
            />
            <HeroOverlay />
          </div>
        )}

        <div className="absolute inset-0 z-20 flex items-start justify-center px-4 pb-10 pt-10 sm:px-5 sm:pb-12 sm:pt-12 lg:items-center lg:justify-start lg:px-0 lg:pb-0 lg:pt-0">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="w-full max-w-2xl text-center lg:text-left">
              <span className="badge mb-3 inline-flex border-white/30 bg-black/30 text-tan-light backdrop-blur-sm sm:mb-4 mt-20 lg:mt-0">
                {settings.location} · Doorstep Service
              </span>
              <h1 className="font-[family-name:var(--font-montserrat)] text-2xl leading-tight font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {titleLead}{" "}
                <span className="text-tan-light">{titleAccent}</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:mt-4 sm:text-base md:text-lg lg:mx-0">
                {slide.subtitle}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 lg:justify-start">
                {TRUST_BADGES.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs"
                  >
                    <badge.icon className="h-3 w-3 text-accent-amber sm:h-3.5 sm:w-3.5" />
                    {badge.label}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-7 sm:gap-3 lg:items-start">
                <div className="flex w-full max-w-md flex-row flex-wrap justify-center gap-2 lg:max-w-none lg:justify-start">
                  <Link
                    href="/contact"
                    className="btn-primary btn-warm inline-flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-xs sm:flex-none sm:px-5 sm:py-3 sm:text-sm"
                  >
                    <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                    Book Free Visit
                  </Link>
                  <a
                    href={`tel:${settings.phoneRaw}`}
                    className="inline-flex min-w-0 flex-1 shrink-0 items-center justify-center gap-1.5 rounded-full bg-accent-blue px-3 py-2.5 text-[11px] font-semibold text-white shadow-md transition-all hover:bg-[#2563eb] hover:shadow-lg sm:flex-none sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    {settings.phone}
                  </a>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-tan-light hover:text-white sm:text-sm lg:hidden"
                >
                  View Services <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
