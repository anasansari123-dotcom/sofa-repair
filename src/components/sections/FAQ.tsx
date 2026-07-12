"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";

const ACCENT_BARS = [
  "from-accent-amber to-tan",
  "from-accent-emerald to-accent-cyan",
  "from-accent-blue to-accent-violet",
  "from-accent-rose to-accent-amber",
  "from-tan to-accent-emerald",
  "from-accent-violet to-accent-blue",
];

export function FAQ() {
  return (
    <section className="section-padding pattern-dots bg-white">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our sofa repair services."
        />
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card relative overflow-hidden border-none px-5"
            >
              <div
                className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${ACCENT_BARS[i % ACCENT_BARS.length]}`}
              />
              <AccordionTrigger className="pl-3 text-left font-semibold text-navy hover:text-tan-dark">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pl-3 text-muted">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
