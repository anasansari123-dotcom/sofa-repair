import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { SiteSettingsProvider } from "@/components/providers/SiteSettingsProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteSettings } from "@/lib/settings";
import {
  SEO_BRAND,
  SEO_DEFAULT_DESCRIPTION,
  SEO_DEFAULT_TITLE,
  SEO_KEYWORDS,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_DEFAULT_TITLE,
    template: `%s | ${SEO_BRAND} Gurgaon`,
  },
  description: SEO_DEFAULT_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  applicationName: SEO_BRAND,
  authors: [{ name: SEO_BRAND }],
  creator: SEO_BRAND,
  publisher: SEO_BRAND,
  category: "Home Services",
  classification: "Sofa Repair & Upholstery",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SEO_BRAND,
    title: SEO_DEFAULT_TITLE,
    description: SEO_DEFAULT_DESCRIPTION,
    images: [
      {
        url: absoluteUrl("/logo.jpeg"),
        width: 512,
        height: 512,
        alt: `${SEO_BRAND} — Sofa Repair Gurgaon logo`,
      },
      {
        url: absoluteUrl("/contactimage.jpeg"),
        width: 1200,
        height: 630,
        alt: "Tanseer Sofa Repair And Home Service — Gurgaon storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULT_TITLE,
    description: SEO_DEFAULT_DESCRIPTION,
    images: [absoluteUrl("/contactimage.jpeg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Add when you have codes:
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurugram",
    "geo.position": "28.5086;77.0426",
    ICBM: "28.5086, 77.0426",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        <JsonLd />
        <ClientProviders>
          <SiteSettingsProvider settings={settings}>{children}</SiteSettingsProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
