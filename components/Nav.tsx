"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export function Nav() {
  const { t, lang, toggle } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/portafolio", label: "Portafolio" },
    { href: "/servicios", label: t("nav.servicios") },
    { href: "/por-que-adding", label: t("nav.porque") },
    { href: "/nosotros", label: t("nav.nosotros") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contacto", label: t("nav.contacto") },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-matte-black/95 backdrop-blur-xl">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="inline-flex shrink-0 items-center" aria-label="AdDing Agency">
          <img src="/logos/logo-icon.svg" alt="AdDing" className="h-8 w-auto md:h-10" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-bold tracking-widest transition-all whitespace-nowrap pb-0.5
                  ${isActive
                    ? "text-primary opacity-100"
                    : "text-white/40 hover:text-white hover:opacity-100"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="border border-white/10 px-3 py-1.5 text-xs font-bold tracking-widest text-white/40 hover:text-primary hover:border-primary/40 transition-all"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <Link
            href="/contacto"
            className="hidden sm:inline-block border border-primary/40 text-primary px-5 md:px-8 py-2 md:py-2.5 text-xs font-black tracking-widest hover:bg-primary hover:text-white transition-all"
          >
            {t("nav.hablemos")}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white/60 hover:text-primary transition-all"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-matte-black/98 backdrop-blur-xl px-6 py-6 space-y-5">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm font-bold tracking-widest transition-all ${isActive ? "text-primary" : "text-white/60 hover:text-primary"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-bold tracking-widest text-primary"
          >
            {t("nav.hablemos")}
          </Link>
        </div>
      )}
    </nav>
  );
}
