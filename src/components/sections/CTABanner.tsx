import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { SITE } from "@/lib/constants";
import { getSiteSettings } from "@/lib/settings";

export async function CTABanner() {
  const settings = await getSiteSettings();

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="cta-animated-border mx-auto max-w-7xl">
          <div className="cta-animated-border-inner px-5 py-8 text-center shadow-[0_8px_40px_rgba(26,47,74,0.06)] sm:px-8 sm:py-10">
            <SectionHeader
              subtitle="Get Started"
              title="Ready to Restore Your Sofa?"
              description={`Book a free doorstep consultation with ${SITE.name} today.`}
              className="!mb-0"
            />
            <div className="mx-auto mt-6 flex flex-row flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
              <Link
                href="/contact"
                className="btn-primary btn-warm inline-flex shrink-0 justify-center px-3 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Free Visit
              </Link>
              <a
                href={`tel:${settings.phoneRaw}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-blue px-3 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#2563eb] sm:px-5 sm:py-2.5 sm:text-sm"
              >
                <Phone className="h-4 w-4" />
                {settings.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
