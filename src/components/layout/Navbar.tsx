"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, Sofa, BedDouble, PanelsTopLeft, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { SERVICE_GROUPS } from "@/lib/service-catalog";
import { useSiteSettings } from "@/components/providers/SiteSettingsProvider";
import { cn } from "@/lib/utils";

const GROUP_ICONS = {
  sofa: Sofa,
  beds: BedDouble,
  "wall-panels": PanelsTopLeft,
} as const;

export function Navbar() {
  const settings = useSiteSettings();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2.5 sm:py-3 lg:px-8">
        <Link href="/" className="group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 sm:flex-none">
          <div className="relative shrink-0">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-tan via-accent-amber to-accent-emerald opacity-60 blur-sm transition-opacity group-hover:opacity-100" />
            <Image
              src="/logo.jpeg"
              alt={SITE.name}
              width={52}
              height={52}
              className="relative h-10 w-10 rounded-full object-cover ring-2 ring-white sm:h-12 sm:w-12"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-[family-name:var(--font-montserrat)] text-xs font-bold text-navy sm:text-sm">
              {SITE.shortName.toUpperCase()}
            </p>
            <p className="truncate text-[9px] tracking-wider text-tan uppercase sm:text-[10px]">
              Sofa Repairing
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.href === "/services") {
              return (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all",
                      isServicesActive || servicesOpen
                        ? "bg-gradient-to-r from-navy to-navy-light text-white shadow-md"
                        : "text-navy hover:bg-cream-dark hover:text-tan-dark"
                    )}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {servicesOpen && (
                    <div
                      className="absolute left-1/2 top-full z-50 mt-3 w-[min(96vw,920px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_20px_50px_rgba(26,47,74,0.14)]"
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                    >
                      <div className="grid grid-cols-1 divide-y divide-border/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {SERVICE_GROUPS.map((group) => {
                          const Icon = GROUP_ICONS[group.id];
                          return (
                            <div key={group.id} className="p-4 sm:p-5">
                              <Link
                                href={group.href}
                                onClick={() => setServicesOpen(false)}
                                className="mb-3 flex items-center gap-2.5 rounded-xl bg-cream px-3 py-2.5 transition-colors hover:bg-cream-dark"
                              >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-tan-light">
                                  <Icon className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block font-[family-name:var(--font-montserrat)] text-sm font-bold text-navy">
                                    {group.label}
                                  </span>
                                  <span className="block truncate text-[11px] text-muted">
                                    {group.tagline}
                                  </span>
                                </span>
                              </Link>

                              <ul className="space-y-0.5">
                                {group.items.map((item) => (
                                  <li key={item.slug}>
                                    <Link
                                      href={`/services/${item.slug}`}
                                      onClick={() => setServicesOpen(false)}
                                      className={cn(
                                        "flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors hover:bg-cream",
                                        pathname === `/services/${item.slug}` && "bg-cream"
                                      )}
                                    >
                                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-border/70">
                                        <Image
                                          src={item.cover}
                                          alt=""
                                          fill
                                          className="object-cover"
                                          sizes="40px"
                                        />
                                      </span>
                                      <span className="min-w-0">
                                        <span className="block truncate text-sm font-medium text-navy">
                                          {item.name}
                                        </span>
                                        <span className="block truncate text-[11px] text-muted">
                                          View collection
                                        </span>
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-between border-t border-border/70 bg-cream/60 px-5 py-3">
                        <p className="text-xs text-muted">Doorstep service across Gurugram</p>
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-tan-dark hover:text-navy"
                        >
                          View all services
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  pathname === link.href
                    ? "bg-gradient-to-r from-navy to-navy-light text-white shadow-md"
                    : "text-navy hover:bg-cream-dark hover:text-tan-dark"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a
            href={`tel:${settings.phoneRaw}`}
            className="btn-primary btn-warm nav-call-btn inline-flex shrink-0 text-navy shadow-sm hover:shadow-md lg:shadow-md lg:hover:shadow-lg"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            className="rounded-xl p-2 text-navy transition-colors hover:bg-cream lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-border bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              if (link.href === "/services") {
                return (
                  <div key={link.href} className="rounded-xl">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isServicesActive
                          ? "bg-gradient-to-r from-navy to-navy-light text-white"
                          : "text-navy hover:bg-cream"
                      )}
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-1 space-y-3 rounded-xl bg-cream/70 p-3">
                        {SERVICE_GROUPS.map((group) => {
                          const Icon = GROUP_ICONS[group.id];
                          return (
                            <div key={group.id}>
                              <Link
                                href={group.href}
                                onClick={() => setMobileOpen(false)}
                                className="mb-1.5 flex items-center gap-2 px-2 py-1.5"
                              >
                                <Icon className="h-4 w-4 text-tan-dark" />
                                <span className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-navy">
                                  {group.label}
                                </span>
                              </Link>
                              <div className="space-y-0.5">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.slug}
                                    href={`/services/${item.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-sm text-navy/90 hover:bg-white"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-1.5 px-2 pt-1 text-sm font-semibold text-tan-dark"
                        >
                          View all services
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-gradient-to-r from-navy to-navy-light text-white"
                      : "text-navy hover:bg-cream"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`tel:${settings.phoneRaw}`}
              className="btn-primary btn-warm btn-mobile-full mt-2 justify-center"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
