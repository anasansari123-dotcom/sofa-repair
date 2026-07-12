"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

const AVATAR_COLORS = [
  "from-accent-amber to-tan",
  "from-accent-emerald to-accent-cyan",
  "from-accent-blue to-accent-violet",
  "from-accent-rose to-accent-amber",
];

export function Testimonials() {
  return (
    <section className="section-padding relative bg-cream">
      <div className="blob right-0 top-0 h-48 w-48 bg-accent-violet/10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          subtitle="Reviews"
          title="What Our Clients Say"
          description="Trusted by homeowners across Gurgaon for premium furniture restoration."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="card card-hover relative overflow-hidden p-6">
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
              />
              <Quote className="absolute top-4 right-4 h-8 w-8 text-tan/20" />
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br sm:h-12 sm:w-12 ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-sm font-bold text-white shadow-md`}
                >
                  {t.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted">{t.date}</p>
                </div>
                <div className="flex shrink-0 gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent-amber text-accent-amber" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
