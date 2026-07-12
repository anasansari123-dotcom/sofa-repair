import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";
import { SocialLinks } from "@/components/icons/SocialIcons";
import type { SiteSettingsData } from "@/lib/defaults";

export function Footer({ settings }: { settings: SiteSettingsData }) {
  return (
    <footer className="relative border-t border-white/10 bg-navy pb-4 text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tan via-accent-amber via-accent-emerald to-accent-blue" />
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-tan to-accent-amber opacity-50 blur-sm" />
                <Image
                  src="/logo.jpeg"
                  alt={SITE.name}
                  width={56}
                  height={56}
                  className="relative h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-tan">
                  {SITE.name}
                </p>
                <p className="text-xs text-white/60">{settings.location}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{SITE.description}</p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-tan uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-tan uppercase">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition-colors hover:text-accent-emerald"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold tracking-wider text-tan uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-amber" />
                <a
                  href={settings.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tan"
                >
                  {settings.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent-emerald" />
                <a
                  href={`tel:${settings.phoneRaw}`}
                  className="inline-block text-white/70  px-2.5 py-0.5 transition-colors hover:bg-[#2563eb]"
                >
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-blue" />
                <a href={`mailto:${settings.email}`} className="hover:text-tan">
                  {settings.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="mt-2 text-xs sm:text-sm">
            Design and Develop By{" "}
            <a
              href="https://www.linkedin.com/in/anas-ansari-45147b27a"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline text-tan transition-colors hover:text-accent-amber"
            >
              MOHD ANAS 
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
