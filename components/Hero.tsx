"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/50 to-matte-black" />

      {/* Animated orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] pointer-events-none opacity-30">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 stitch-core-glass rounded-full animate-pulse" style={{ animationDuration: "8s" }} />
          <div className="absolute inset-10 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute inset-20 border-t-2 border-primary/40 rounded-full animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }} />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">

        {/* Logo */}
        <div className="mb-6 md:mb-10 animate-float">
          <img src="/logos/logo-full.svg" alt="AdDing Agency" className="h-40 sm:h-48 md:h-56 w-auto mx-auto" />
        </div>

        {/* Agency badge */}
        <div className="inline-flex items-center gap-3 mb-10 md:mb-14 px-5 py-2 border border-primary/20 bg-primary/5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_#008FF0] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-primary uppercase">{t("hero.badge")}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6 md:mb-8 font-display">
          {t("hero.h1.1")}<br />
          <span className="text-primary italic relative">
            {t("hero.h1.3")}
            <span className="absolute -bottom-2 md:-bottom-4 left-0 w-1/3 h-[2px] bg-primary/50" />
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
          {t("hero.p")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href="https://wa.me/50670136366"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 md:px-12 py-4 md:py-5 text-xs font-black tracking-[0.2em] hover:bg-primary/90 hover:scale-105 transition-all animate-glow-cta"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.227A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
            {t("hero.cta")}
          </a>
          <Link href="/servicios" className="flex items-center gap-3 md:gap-4 group">
            <span className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-primary transition-colors">{t("hero.link")}</span>
            <div className="w-8 h-px bg-white/20 group-hover:w-14 transition-all group-hover:bg-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
