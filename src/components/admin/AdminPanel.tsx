"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { SiteSettingsData } from "@/lib/defaults";
import { LogOut, Save, Shield } from "lucide-react";

export function AdminPanel({ initialSettings }: { initialSettings: SiteSettingsData }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<SiteSettingsData>(initialSettings);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"contact" | "social" | "hero">("contact");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setAuthenticated(true);
      const data = await fetch("/api/admin/settings");
      if (data.ok) setSettings(await data.json());
    } else {
      setMessage("Wrong password");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setPassword("");
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });

    if (res.ok) {
      setSettings(await res.json());
      setMessage("Saved successfully! Refresh website to see changes.");
    } else {
      setMessage("Failed to save. Please login again.");
      setAuthenticated(false);
    }
    setLoading(false);
  };

  const updateSlide = (index: number, field: "title" | "subtitle", value: string) => {
    setSettings((prev) => ({
      ...prev,
      heroSlides: prev.heroSlides.map((slide, i) =>
        i === index ? { ...slide, [field]: value } : slide
      ),
    }));
  };

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-tan">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-navy">
              Admin Login
            </h1>
            <p className="text-sm text-muted">Tanseer Sofa Repairing</p>
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
          </div>
          {message && <p className="text-sm text-red-600">{message}</p>}
          <button type="submit" disabled={loading} className="btn-primary btn-warm w-full">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-navy">
            Admin Panel
          </h1>
          <p className="text-sm text-muted">Manage contact, social links & hero titles</p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="btn-outline inline-flex items-center gap-2 px-4 py-2 text-sm"
        >
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {(["contact", "social", "hero"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition-colors ${
              activeTab === tab
                ? "bg-navy text-white"
                : "border border-border bg-white text-navy hover:bg-cream"
            }`}
          >
            {tab === "hero" ? "Hero Slides" : tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSave} className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
        {activeTab === "contact" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Phone (display)</label>
              <Input
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Phone (raw, no +)</label>
              <Input
                value={settings.phoneRaw}
                onChange={(e) => setSettings({ ...settings, phoneRaw: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">WhatsApp Number</label>
              <Input
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Email</label>
              <Input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-navy">Address</label>
              <Textarea
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Location</label>
              <Input
                value={settings.location}
                onChange={(e) => setSettings({ ...settings, location: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Business Hours</label>
              <Input
                value={settings.hours}
                onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-navy">Google Maps Link</label>
              <Input
                value={settings.mapUrl}
                onChange={(e) => setSettings({ ...settings, mapUrl: e.target.value })}
                required
              />
            </div>
          </div>
        )}

        {activeTab === "social" && (
          <div className="grid gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Instagram URL</label>
              <Input
                value={settings.instagram}
                onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Facebook URL</label>
              <Input
                value={settings.facebook}
                onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">YouTube URL</label>
              <Input
                value={settings.youtube}
                onChange={(e) => setSettings({ ...settings, youtube: e.target.value })}
                required
              />
            </div>
          </div>
        )}

        {activeTab === "hero" && (
          <div className="space-y-5">
            {settings.heroSlides.map((slide, index) => (
              <div key={slide.src} className="rounded-xl border border-border bg-cream/50 p-4">
                <p className="mb-3 text-xs font-semibold tracking-wide text-muted uppercase">
                  Slide {index + 1}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-navy">Title</label>
                    <Input
                      value={slide.title}
                      onChange={(e) => updateSlide(index, "title", e.target.value)}
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-navy">Subtitle</label>
                    <Textarea
                      value={slide.subtitle}
                      onChange={(e) => updateSlide(index, "subtitle", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {message && (
          <p className={`text-sm ${message.includes("success") ? "text-emerald-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn-primary btn-warm inline-flex items-center gap-2">
          <Save className="h-4 w-4" />
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
