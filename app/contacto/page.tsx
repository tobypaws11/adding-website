"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useI18n } from "@/lib/i18n";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/addingagencydotcom" },
  { label: "Instagram", href: "https://www.instagram.com/addingagencydotcom/" },
  { label: "Facebook", href: "https://www.facebook.com/addingagencydotcom/" },
  { label: "X", href: "https://x.com/AdDingAgencydot" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC_-MOkVciT3NcvtKmUG22Lw" },
  { label: "TikTok", href: "https://www.tiktok.com/@addingagencydotcom" },
  { label: "Pinterest", href: "https://www.pinterest.com/addingagencydotcom/" },
];

export default function ContactoPage() {
  const { t } = useI18n();

  return (
    <>
      <Nav />
      <main className="pt-20 page-enter">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">{t("nav.contacto")}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mt-4 md:mt-6">
              {t("contact.hero.title")}
            </h1>
            <p className="text-white/40 text-base md:text-lg font-light max-w-3xl mx-auto mt-6 md:mt-8 leading-relaxed">
              {t("contact.hero.sub")}
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {/* WhatsApp */}
              <div className="border border-primary/20 bg-carbon-gray p-8 md:p-12 relative overflow-hidden group hover:border-primary/40 transition-all">
                <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.227A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-normal mb-3">{t("contact.wa.title")}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8">{t("contact.wa.desc")}</p>
                <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="inline-block bg-primary text-white px-8 py-4 text-xs font-black tracking-luxury hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,143,240,0.3)]">
                  {t("contact.wa.btn")}
                </a>
              </div>

              {/* Email */}
              <div className="border border-white/10 bg-carbon-gray p-8 md:p-12 relative overflow-hidden group hover:border-primary/20 transition-all">
                <div className="w-14 h-14 border border-accent-yellow/30 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-accent-yellow text-2xl">mail</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-normal mb-3">{t("contact.email.title")}</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed mb-8">{t("contact.email.desc")}</p>
                <a href="mailto:hola@addingagency.com?subject=Consulta%20desde%20addingagency.com" className="inline-flex items-center gap-3 text-base md:text-lg font-semibold text-white hover:text-primary transition-colors">
                  hola@addingagency.com
                  <span className="text-primary text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8">
              <div className="border border-white/10 bg-matte-black p-8 md:p-12">
                <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                </div>
                <h4 className="text-lg font-black tracking-widest mb-3">{t("contact.location.title")}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{t("contact.location.desc")}</p>
              </div>
              <div className="border border-white/10 bg-matte-black p-8 md:p-12">
                <div className="w-14 h-14 border border-accent-yellow/30 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-accent-yellow text-2xl">schedule</span>
                </div>
                <h4 className="text-lg font-black tracking-widest mb-3">{t("contact.hours.title")}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{t("contact.hours.desc")}</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-16 md:mt-24 text-center">
              <h4 className="text-2xl font-black uppercase tracking-[0.4em] text-primary mb-8">{t("contact.social.title")}</h4>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-luxury text-white/40 hover:text-primary hover:border-primary/30 transition-all">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
