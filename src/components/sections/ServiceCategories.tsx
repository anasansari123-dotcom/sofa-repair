"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BedDouble, PanelsTopLeft, Sofa } from "lucide-react";
import { SERVICE_GROUPS, type ServiceType } from "@/lib/service-catalog";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const GROUP_ICONS = {
  sofa: Sofa,
  beds: BedDouble,
  "wall-panels": PanelsTopLeft,
} as const;

function TypeCard({ item }: { item: ServiceType }) {
  return (
    <Link
      href={`/services/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tan/35 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.cover}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent opacity-80" />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-navy shadow-sm">
          {item.images.length} Photos
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-[family-name:var(--font-montserrat)] text-base font-bold text-navy transition-colors group-hover:text-tan-dark sm:text-lg">
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-tan-dark">
          Explore
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ServiceCategories() {
  return (
    <div className="space-y-16 sm:space-y-20">
      {SERVICE_GROUPS.map((group) => {
        const Icon = GROUP_ICONS[group.id];
        return (
          <section key={group.id} id={group.id} className="scroll-mt-28">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1.5 text-tan-light">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs font-bold tracking-[0.18em] uppercase">
                    {group.label}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-navy sm:text-3xl">
                  {group.id === "sofa"
                    ? "Sofa Repair Collections"
                    : group.id === "beds"
                      ? "Bed Repair Collections"
                      : "Wall Panel Collections"}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">{group.tagline}</p>
              </div>
              <p className="text-sm font-medium text-tan-dark">
                {group.items.length} types available
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.items.map((item) => (
                <TypeCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function ServiceTypeGallery({ item }: { item: ServiceType }) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {item.images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setPreview(src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Image
              src={src}
              alt={`${item.name} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{item.name}</DialogTitle>
          {preview && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy">
              <Image src={preview} alt={item.name} fill className="object-contain" sizes="90vw" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
