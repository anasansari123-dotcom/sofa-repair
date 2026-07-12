import { AdminPanel } from "@/components/admin/AdminPanel";
import { getSiteSettings } from "@/lib/settings";

export const metadata = {
  title: "Admin | Tanseer Sofa Repairing",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const settings = await getSiteSettings();

  return (
    <div className="min-h-screen bg-cream py-10">
      <div className="mx-auto px-4 lg:px-8">
        <AdminPanel initialSettings={settings} />
      </div>
    </div>
  );
}
