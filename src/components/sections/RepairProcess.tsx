import { SectionHeader } from "./SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_COLORS = [
  "from-accent-amber to-tan",
  "from-accent-emerald to-accent-cyan",
  "from-accent-blue to-accent-violet",
  "from-accent-rose to-accent-amber",
  "from-tan to-accent-emerald",
];

export function RepairProcess() {
  return (
    <section className="section-padding pattern-dots bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          subtitle="Our Process"
          title="How We Restore Your Sofa"
          description="A simple five-step process designed for your convenience."
        />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* Connector line - desktop */}
          <div className="absolute top-12 right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-tan via-accent-emerald to-accent-blue lg:block" />

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="card relative p-5 text-center sm:p-6">
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${STEP_COLORS[i]} shadow-md`}
              >
                <span className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white">
                  {step.step}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
