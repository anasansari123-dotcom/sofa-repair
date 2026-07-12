"use client";

import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { STATS } from "@/lib/constants";

const STAT_TEXT_COLORS = [
  "text-accent-amber",
  "text-accent-emerald",
  "text-accent-blue",
  "text-accent-rose",
];

const STAT_BAR_COLORS = [
  "from-accent-amber to-tan",
  "from-accent-emerald to-accent-cyan",
  "from-accent-blue to-accent-violet",
  "from-accent-rose to-accent-amber",
];

export function Statistics() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-border bg-white p-4 text-center shadow-sm transition-all hover:border-tan/40 hover:shadow-md sm:p-6"
            >
              <p
                className={`font-[family-name:var(--font-montserrat)] text-3xl font-bold sm:text-4xl md:text-5xl ${STAT_TEXT_COLORS[i % STAT_TEXT_COLORS.length]}`}
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold tracking-wider text-muted uppercase">
                {stat.label}
              </p>
              <div
                className={`mx-auto mt-3 h-1 w-10 rounded-full bg-gradient-to-r ${STAT_BAR_COLORS[i % STAT_BAR_COLORS.length]} opacity-70 transition-opacity group-hover:opacity-100`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
