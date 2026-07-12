import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { SiteSettingsProvider } from "@/components/providers/SiteSettingsProvider";
import { getSiteSettings } from "@/lib/settings";
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

const SITE_DESCRIPTION =
  "Professional doorstep sofa repair, upholstery & furniture restoration in Gurugram. Expert craftsmanship with 10+ years experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanseersofarepair.com"),
  title: "Tanseer Sofa Repairing | Gurugram Doorstep Sofa Repair & Upholstery",
  description: SITE_DESCRIPTION,
  keywords: [
    "sofa repair Gurugram",
    "sofa repair Gurgaon",
    "sofa repairing",
    "upholstery Gurugram",
    "chesterfield repair",
    "recliner repair",
    "Tanseer",
    "Palam Vihar sofa repair",
  ],
  openGraph: {
    title: "Tanseer Sofa Repairing | Gurugram",
    description: SITE_DESCRIPTION,
    images: ["/logo.jpeg"],
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        <ClientProviders>
          <SiteSettingsProvider settings={settings}>{children}</SiteSettingsProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
