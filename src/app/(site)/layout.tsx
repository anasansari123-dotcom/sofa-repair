import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <>
      <TopBar settings={settings} />
      <Navbar />
      <main className="min-w-0 overflow-x-hidden">{children}</main>
      <Footer settings={settings} />
      <FloatingButtons />
    </>
  );
}
