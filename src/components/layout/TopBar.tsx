import Link from "next/link";
import { Mail, Phone, MessageCircle, Globe, ChevronDown } from "lucide-react";
import type { SiteSettingsData } from "@/lib/defaults";
import { getSocialLinks } from "@/lib/defaults";
import { SocialIcon } from "@/components/icons/SocialIcons";

export function TopBar({ settings }: { settings: SiteSettingsData }) {
  const socialLinks = getSocialLinks(settings);

  return (
    <div className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-between gap-1.5 px-3 py-1.5 text-[10px] sm:gap-2 sm:px-4 sm:py-2 sm:text-xs lg:px-8">
        <div className="flex min-w-0 flex-nowrap items-center divide-x divide-white/20">
          <a
            href={`mailto:${settings.email}`}
            className="flex min-w-0 items-center gap-1 pr-2 transition-colors hover:text-tan sm:gap-1.5 sm:pr-3 md:pr-4"
          >
            <Mail className="h-3 w-3 shrink-0 text-tan sm:h-3.5 sm:w-3.5" />
            <span className="truncate max-[360px]:max-w-[72px] max-[420px]:max-w-[100px] sm:max-w-[140px] md:max-w-none">
              {settings.email}
            </span>
          </a>
          <a
            href={`tel:${settings.phoneRaw}`}
            className="flex shrink-0 items-center gap-1 whitespace-nowrap   px-2 py-0.5 text-white transition-colors hover:bg-[#2563eb] sm:gap-1.5 sm:px-3 sm:py-1"
          >
            <Phone className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span>{settings.phone}</span>
          </a>
          <Link
            href="/contact"
            className="hidden shrink-0 items-center gap-1.5 pl-3 transition-colors hover:text-tan sm:flex sm:pl-4"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0 text-tan" />
            Need Help?
          </Link>
        </div>

        <div className="flex shrink-0 flex-nowrap items-center gap-2 sm:gap-4">
          <div className="hidden shrink-0 items-center gap-1 border-r border-white/20 pr-4 sm:flex">
            <Globe className="h-3.5 w-3.5 text-tan" />
            <span>EN</span>
            <ChevronDown className="h-3 w-3 text-white/70" />
          </div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <span className="hidden shrink-0 text-white/80 sm:inline">Follow Us:</span>
            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tan text-navy transition-all hover:scale-110 hover:bg-accent-amber sm:h-7 sm:w-7"
                >
                  <SocialIcon label={link.label} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
