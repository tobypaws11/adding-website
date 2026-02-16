"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function Nav() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#servicios", label: t("nav.servicios") },
    { href: "#porque-adding", label: t("nav.porque") },
    { href: "#blog", label: t("nav.blog") },
    { href: "#contacto", label: t("nav.contacto") }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`rounded-full border px-4 py-3 md:px-6 ${
            scrolled
              ? "glass border-black/5 shadow-soft"
              : "border-transparent bg-white/40 backdrop-blur-md"
          }`}
          aria-label="Principal"
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex shrink-0 items-center" aria-label="AdDing Agency">
              <Image src="/logos/logo-adding-negro.svg" alt="Logo de AdDing Agency" width={138} height={38} priority />
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-black/75 transition-colors hover:text-brand-blue">
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggle}
                className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/60 transition hover:border-brand-blue hover:text-brand-blue"
                aria-label="Toggle language"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <a href="#contacto" className="inline-flex items-center rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                {t("nav.hablemos")}
              </a>
            </div>
            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggle}
                className="rounded-full border border-black/10 px-2.5 py-1 text-xs font-medium text-black/60"
                aria-label="Toggle language"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black/70"
                aria-label="Menú"
                aria-expanded={menuOpen}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  {menuOpen ? (
                    <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  ) : (
                    <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </motion.nav>

        {menuOpen && (
          <div className="mt-2 rounded-2xl border border-black/5 bg-white/95 p-4 shadow-soft backdrop-blur-lg md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-2 text-sm font-medium text-black/75 transition hover:bg-brand-blue/5 hover:text-brand-blue">
                  {link.label}
                </a>
              ))}
              <a href="#contacto" onClick={() => setMenuOpen(false)} className="mt-1 inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white">
                {t("nav.hablemos")}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
