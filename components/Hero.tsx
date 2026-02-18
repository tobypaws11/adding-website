"use client";

import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/50 to-matte-black" />

      {/* Animated orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none opacity-40">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 stitch-core-glass rounded-full animate-pulse" style={{ animationDuration: "8s" }} />
          <div className="absolute inset-10 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute inset-20 border-t-2 border-primary/40 rounded-full animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }} />
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-primary/20" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl px-6 md:px-12 text-center">
        {/* HUD elements - desktop only */}
        <div className="absolute -top-24 left-0 hud-element space-y-1 text-left hidden xl:block">
          <div>SYSTEM_STATUS: <span className="text-white">OPTIMIZED</span></div>
          <div>STITCH_LINK: <span className="text-white">ENCRYPTED</span></div>
          <div>CORE_TEMP: <span className="text-white">32°C</span></div>
        </div>
        <div className="absolute -top-24 right-0 space-y-1 text-right hidden xl:block font-mono text-xs uppercase text-accent-yellow" style={{ borderRight: "1px solid #FABD05", paddingRight: "8px" }}>
          <div>DATA_FLOW: <span className="text-white">100%</span></div>
          <div>LATENCY: <span className="text-white">0.02MS</span></div>
          <div>UPTIME: <span className="text-white">99.9%</span></div>
        </div>

        {/* Logo */}
        <div className="mb-8 md:mb-16">
          <img src="/logos/logo-sin-tagline.svg" alt="AdDing Agency" className="h-36 sm:h-44 md:h-56 lg:h-64 w-auto mx-auto" />
        </div>

        {/* Version badge */}
        <div className="inline-block mb-10 md:mb-16">
          <div className="flex items-center gap-4 px-6 py-2 border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 bg-primary shadow-[0_0_10px_#008FF0]" />
            <span className="text-xs font-mono tracking-luxury text-primary">PROJECT_ADDING_V2.4.0</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 md:mb-12 font-display">
          {t("hero.h1.1")}<br />
          <span className="text-primary italic relative">
            {t("hero.h1.3")}
            <span className="absolute -bottom-2 md:-bottom-4 left-0 w-1/3 h-[2px] bg-primary/50" />
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-white/50 font-light max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed">
          {t("hero.p")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="bg-primary text-white px-10 md:px-16 py-5 md:py-7 text-xs font-black tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,143,240,0.4)]">
            {t("hero.cta")}
          </a>
          <a href="#modules" className="flex items-center gap-4 md:gap-6 group cursor-pointer">
            <span className="text-xs font-bold uppercase tracking-luxury text-white/60 group-hover:text-primary transition-colors">{t("hero.link")}</span>
            <div className="w-12 h-px bg-white/20 group-hover:w-20 transition-all group-hover:bg-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
