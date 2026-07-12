"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { GALLERY_CATEGORIES, GALLERY_ALL_IMAGES } from "@/lib/images";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function GalleryPreview() {
  return (
    <section className="section-padding pattern-dots bg-cream">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          subtitle="Our Work"
          title="Furniture Repair Gallery"
          description="Explore sofa, bed, wall panel and upholstery restoration work across Gurugram."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {GALLERY_CATEGORIES.slice(0, 9).map((cat, i) => (
            <Link
              key={cat.slug}
              href="/gallery"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-tan/30 hover:shadow-xl"
            >
              <div className="relative p-3 pb-0 sm:p-4 sm:pb-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border/60">
                  <Image
                    src={cat.cover}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-navy/75 px-2.5 py-1 text-[11px] font-bold tracking-wider text-tan-light backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-navy shadow-sm backdrop-blur-sm">
                    {cat.images.length} Photos
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 pt-3 sm:p-5 sm:pt-4">
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-tan via-accent-amber to-accent-emerald transition-all duration-300 group-hover:w-16" />
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-navy transition-colors group-hover:text-tan-dark">
                  {cat.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                  {cat.description}
                </p>
                <span className="btn-primary btn-warm mt-5 inline-flex w-full items-center justify-center gap-2 py-2.5 text-sm shadow-md transition-all group-hover:shadow-lg">
                  View Gallery
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12">
          <Link href="/gallery" className="btn-outline btn-mobile-full sm:inline-flex sm:w-auto">
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function GalleryFull() {
  const [active, setActive] = useState<string>("all");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const isAll = active === "all";
  const category = GALLERY_CATEGORIES.find((c) => c.slug === active);
  const images = isAll ? GALLERY_ALL_IMAGES : (category?.images ?? []);
  const title = isAll ? "All Work" : (category?.name ?? "Gallery");

  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <aside className="w-full shrink-0 lg:w-56 xl:w-60">
          <div className="card sticky top-24 p-4 sm:p-5">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-tan uppercase">Filters</p>
            <nav className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setActive("all")}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                  isAll
                    ? "border-tan bg-tan/15 text-navy shadow-sm"
                    : "border-border bg-white text-muted hover:border-tan/40 hover:bg-cream hover:text-navy"
                }`}
              >
                All
              </button>
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = active === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setActive(cat.slug)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                      isActive
                        ? "border-tan bg-tan/15 text-navy shadow-sm"
                        : "border-border bg-white text-muted hover:border-tan/40 hover:bg-cream hover:text-navy"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2 sm:mb-6">
            <p className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-navy sm:text-xl">
              {title}
            </p>
            <p className="text-xs font-medium text-muted sm:text-sm">
              {images.length} Photos
              {isAll ? " · 2 from each category" : ""}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {images.map((src, i) => (
              <div key={`${src}-${i}`} className="card group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={`${title} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:opacity-100">
                    <button
                      type="button"
                      onClick={() => setPreviewImage(src)}
                      className="btn-primary btn-warm px-8 py-2.5 shadow-lg"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!previewImage} onOpenChange={(open) => !open && setPreviewImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-white p-2 sm:p-4">
          <DialogTitle className="sr-only">{title} — Gallery Image</DialogTitle>
          {previewImage && (
            <div className="relative mx-auto aspect-[4/3] w-full max-h-[80vh] overflow-hidden rounded-xl">
              <Image
                src={previewImage}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
