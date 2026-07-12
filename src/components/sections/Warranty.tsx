"use client";

import { Shield, CheckCircle, RefreshCw, Headphones } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const WARRANTY_FEATURES = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "All repairs backed by warranty from 3 months to 2 years depending on service.",
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "If you're not satisfied, we'll re-do the work at no additional cost.",
  },
  {
    icon: RefreshCw,
    title: "Free Re-inspection",
    description: "Complimentary follow-up inspection within 30 days of service completion.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Priority customer support for all warranty claims and service requests.",
  },
];

export function Warranty() {
  return (
    <section className="section-padding relative overflow-hidden animated-gradient">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Warranty"
          title="Your Peace of Mind, Guaranteed"
          description="Every Tanseer repair comes with our comprehensive warranty program."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WARRANTY_FEATURES.map((item, i) => (
            <ScrollReveal key={item.title} animation="fadeUp" delay={i * 0.1}>
              <div className="rounded-2xl border border-gold/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/10">
                <item.icon className="mb-4 h-8 w-8 text-gold" />
                <h3 className="mb-2 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
