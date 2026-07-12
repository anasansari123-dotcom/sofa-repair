import Image from "next/image";
import Link from "next/link";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ABOUT_IMAGE } from "@/lib/images";
import { SITE } from "@/lib/constants";

const HIGHLIGHTS = [
  { icon: Award, label: "Certified Experts", color: "icon-amber" },
  { icon: Users, label: "5000+ Clients", color: "icon-emerald" },
  { icon: Clock, label: "24hr Service", color: "icon-blue" },
  { icon: CheckCircle, label: "Warranty Backed", color: "icon-violet" },
];

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section-padding relative bg-cream">
      <div className="blob left-1/4 top-0 h-64 w-64 bg-accent-emerald/8" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative w-full pb-4 sm:pb-6">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-tan via-accent-amber to-accent-emerald opacity-30 blur-sm sm:-inset-3" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-2 ring-white sm:ring-4">
              <Image
                src={ABOUT_IMAGE}
                alt="Sofa repair work"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-2 right-2 rounded-xl bg-gradient-to-r from-navy to-navy-light px-4 py-2.5 shadow-lg sm:bottom-4 sm:right-4 sm:rounded-2xl sm:px-5 sm:py-3 lg:-bottom-6 lg:-right-6">
              <p className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-tan sm:text-2xl">10+</p>
              <p className="text-[10px] font-medium text-white/70 sm:text-xs">Years Experience</p>
            </div>
          </div>
          <div className="min-w-0">
            {!full && (
              <SectionHeader
                subtitle="About Us"
                title="Crafting Excellence in Gurgaon"
                description=""
                align="left"
                className="mb-6"
              />
            )}
            {full && (
              <div className="mb-6">
                <span className="badge badge-tan mb-3">About Us</span>
                <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
                  Crafting Excellence in{" "}
                  <span className="text-tan-dark">Gurgaon</span>
                </h2>
                <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-tan via-accent-amber to-accent-emerald" />
              </div>
            )}
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              At <strong className="text-navy">{SITE.name}</strong>, we believe every piece of furniture
              tells a story. Our master craftsmen combine traditional techniques with modern innovation
              to restore your sofas to their original glory — or better.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              From sofas and dining chair sets to beds and headboards, we deliver showroom-quality
              results with convenient doorstep service across Gurgaon and NCR.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
              {HIGHLIGHTS.map((item) => (
                <div key={item.label} className="card flex items-center gap-3 p-3.5 sm:p-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-navy">{item.label}</span>
                </div>
              ))}
            </div>
            {!full && (
              <Link href="/about" className="btn-primary btn-warm btn-mobile-full mt-8 sm:w-auto">
                Learn More About Us
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
