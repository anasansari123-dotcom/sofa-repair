"use client";

import { createContext, useContext } from "react";
import type { SiteSettingsData } from "@/lib/defaults";
import { DEFAULT_SETTINGS } from "@/lib/defaults";

const SiteSettingsContext = createContext<SiteSettingsData>(DEFAULT_SETTINGS);

export function SiteSettingsProvider({
  settings,
  children,
}: {
  settings: SiteSettingsData;
  children: React.ReactNode;
}) {
  return (
    <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
