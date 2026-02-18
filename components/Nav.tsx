"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export function Nav() {
  const { t, lang, toggle } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/servicios", label: t("nav.servicios") },
    { href: "/por-que-adding", label: t("nav.porque") },
    { href: "/nosotros", label: t("nav.nosotros") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contacto", label: t("nav.contacto") },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-matte-black/90 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="inline-flex shrink-0 items-center" aria-label="AdDing Agency">
          <img src="/logos/logo-adding-blanco.svg" alt="AdDing Agency" width={260} height={72} className="h-14 w-auto md:h-16 lg:h-20" />
        </Link>
        <div className="hidden lg:flex items-center gap-12 xl:gap-16">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a key={link.href} href={link.href} className="text-sm font-bold tracking-luxury opacity-40 hover:opacity-100 hover:text-primary transition-all">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="text-sm font-bold tracking-luxury opacity-40 hover:opacity-100 hover:text-primary transition-all">
                {link.label}
              </Link>
            )
          )}
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={toggle} className="border border-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-luxury text-white/40 hover:text-primary hover:border-primary/40 transition-all">
            {lang === "es" ? "EN" : "ES"}
          </button>
          <Link href="/contacto" className="hidden sm:inline-block border border-primary/40 text-primary px-4 md:px-8 py-2.5 md:py-3 text-xs font-black uppercase tracking-luxury hover:bg-primary hover:text-white transition-all">
            {t("nav.hablemos")}
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white/60 hover:text-primary transition-all" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-matte-black/95 backdrop-blur-xl px-6 py-6 space-y-4">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-sm font-bold tracking-luxury text-white/60 hover:text-primary transition-all">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-sm font-bold tracking-luxury text-white/60 hover:text-primary transition-all">
                {link.label}
              </Link>
            )
          )}
          <Link href="/contacto" onClick={() => setMenuOpen(false)} className="block text-sm font-bold tracking-luxury text-primary">
            {t("nav.hablemos")}
          </Link>
        </div>
      )}
    </nav>
  );
}
