"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "./SectionHeader";
import { SocialLinks } from "@/components/icons/SocialIcons";
import { useSiteSettings } from "@/components/providers/SiteSettingsProvider";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const CONTACT_ICONS = [
  { color: "icon-emerald" },
  { color: "icon-blue" },
  { color: "icon-amber" },
  { color: "icon-violet" },
];

export function ContactSection({ showHeader = true }: { showHeader?: boolean }) {
  const settings = useSiteSettings();
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const contactItems = [
    { icon: Phone, label: "Phone", value: settings.phone, href: `tel:${settings.phoneRaw}` },
    { icon: Mail, label: "Email", value: settings.email, href: `mailto:${settings.email}` },
    { icon: MapPin, label: "Location", value: settings.address, href: settings.mapUrl },
    { icon: Clock, label: "Hours", value: settings.hours },
  ];

  return (
    <section className="section-padding relative bg-cream">
      <div className="blob left-0 top-1/4 h-48 w-48 bg-accent-blue/8" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {showHeader && (
          <SectionHeader
            subtitle="Contact Us"
            title="Book Your Free Consultation"
            description={`Get in touch for a free doorstep assessment in ${settings.location}.`}
          />
        )}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <form
            onSubmit={handleSubmit}
            className="order-1 card relative overflow-hidden p-5 sm:p-6 lg:order-2 lg:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tan via-accent-amber to-accent-emerald" />
            <h3 className="mb-5 font-[family-name:var(--font-montserrat)] text-lg font-bold text-navy sm:mb-6 sm:text-xl">
              Book a Service
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">Full Name</label>
                  <Input
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">Phone</label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">Service Needed</label>
                <Input
                  placeholder="e.g. Leather sofa repair"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">Message</label>
                <Textarea
                  placeholder="Describe your furniture and the issue..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary btn-warm w-full">
                <Send className="h-4 w-4" />
                {submitted ? "Request Sent!" : "Submit Booking Request"}
              </button>
            </div>
          </form>

          <div className="order-2 space-y-4 lg:order-1">
            {contactItems.map((item, i) => (
              <div key={item.label} className="card flex items-start gap-4 p-4 sm:p-5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${CONTACT_ICONS[i].color}`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-navy">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                      className="break-words text-sm text-muted hover:text-tan-dark"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="break-words text-sm text-muted">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2">
              <a
                href={`https://wa.me/${settings.whatsapp}?text=Hi, I'd like to book a sofa repair service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center bg-[#25D366] shadow-md hover:bg-[#20BD5A] hover:shadow-lg"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a href={`tel:${settings.phoneRaw}`} className="btn-outline justify-center">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="card p-4 sm:p-5">
              <p className="text-sm font-semibold text-navy">Follow Us</p>
              <SocialLinks className="mt-3" />
            </div>
          </div>
        </div>

        <div className="card mt-10 overflow-hidden p-0">
          <div className="flex flex-col gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-navy">
                Our Location
              </h3>
              <p className="mt-1 text-sm text-muted">{settings.address}</p>
            </div>
            <a
              href={settings.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex shrink-0 justify-center px-4 py-2 text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(settings.address)}&hl=en&z=16&output=embed`}
            className="h-[280px] w-full border-0 sm:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Tanseer Sofa Repairing location on Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
