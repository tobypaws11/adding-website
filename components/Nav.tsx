"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { t, lang, toggle } = useI18n();

  const links = [
    { href: "#modules", label: t("nav.servicios") },
    { href: "#hub", label: t("nav.porque") },
    { href: "#telemetry", label: t("nav.blog") },
    { href: "#contact", label: t("nav.contacto") },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-matte-black/90 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-10 h-10 flex items-center justify-center border border-primary/40 relative">
            <div className="absolute inset-0 border border-primary/20 scale-125" />
            <svg className="w-6 h-6 text-primary fill-current" viewBox="0 0 40 40">
              <path d="M20 0L40 20L20 40L0 20L20 0ZM20 8L8 20L20 32L32 20L20 8Z" />
            </svg>
          </div>
          <Link href="/" className="text-lg md:text-xl font-black tracking-luxury uppercase font-display">AdDing</Link>
        </div>
        <div className="hidden lg:flex items-center gap-12 xl:gap-16">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[10px] font-bold tracking-luxury uppercase opacity-40 hover:opacity-100 hover:text-primary transition-all">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={toggle} className="border border-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-luxury text-white/40 hover:text-primary hover:border-primary/40 transition-all">
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="border border-primary/40 text-primary px-4 md:px-8 py-2.5 md:py-3 text-[9px] font-black uppercase tracking-luxury hover:bg-primary hover:text-white transition-all">
            {t("nav.hablemos")}
          </a>
        </div>
      </div>
    </nav>
  );
}
