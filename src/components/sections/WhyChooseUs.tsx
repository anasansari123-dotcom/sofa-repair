import { Award, Home, Gem, Receipt, Zap, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  craft: Award,
  doorstep: Home,
  materials: Gem,
  pricing: Receipt,
  speed: Zap,
  warranty: ShieldCheck,
};

const ICON_COLORS = [
  "icon-amber",
  "icon-emerald",
  "icon-blue",
  "icon-rose",
  "icon-violet",
  "icon-cyan",
];

export function WhyChooseUs() {
  return (
    <section className="section-padding relative bg-cream">
      <div className="blob -right-20 top-10 h-56 w-56 bg-accent-blue/10" />
      <div className="blob -left-10 bottom-10 h-48 w-48 bg-accent-amber/10" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The Tanseer Difference"
          description="Experience furniture repair that sets the gold standard in craftsmanship and service."
        />
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || Award;
              const isLast = i === WHY_CHOOSE_US.length - 1;
              const isLastInRowLg = i % 3 === 2;
              const isLastInRowMd = i % 2 === 1;
              const isTopRowLg = i < 3;
              return (
                <div
                  key={item.title}
                  className={cn(
                    "group flex items-start gap-3 px-4 py-4 transition-colors hover:bg-cream/60 sm:items-center sm:gap-4 sm:px-6 sm:py-6",
                    "border-border",
                    !isLast && "border-b",
                    "md:border-b md:border-r",
                    isLastInRowMd && "md:border-r-0",
                    i >= 4 && "md:border-b-0",
                    "lg:border-b lg:border-r",
                    isLastInRowLg && "lg:border-r-0",
                    !isTopRowLg && "lg:border-b-0"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md transition-transform group-hover:scale-110 sm:h-14 sm:w-14",
                      ICON_COLORS[i % ICON_COLORS.length]
                    )}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-navy sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
