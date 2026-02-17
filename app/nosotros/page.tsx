"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useI18n } from "@/lib/i18n";

const values = [
  { key: "v1", icon: "lightbulb", color: "primary" },
  { key: "v2", icon: "verified", color: "accent-yellow" },
  { key: "v3", icon: "visibility", color: "primary" },
  { key: "v4", icon: "handshake", color: "accent-yellow" },
];

export default function NosotrosPage() {
  const { t } = useI18n();

  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none opacity-15">
            <div className="w-full h-full stitch-core-glass rounded-full animate-pulse" style={{ animationDuration: "8s" }} />
          </div>
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase">{t("nav.nosotros")}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mt-4 md:mt-6 leading-[0.9]">
              {t("about.hero.title")}
            </h1>
            <p className="text-white/40 text-base md:text-lg font-light max-w-3xl mx-auto mt-6 md:mt-8 leading-relaxed">
              {t("about.hero.sub")}
            </p>
          </div>
        </section>

        {/* Tagline banner */}
        <section className="py-12 md:py-20 border-y border-white/5 bg-carbon-gray">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <p className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.2em] text-primary/80">
              {t("about.tagline")}
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
            {/* Mission */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase">{t("about.mission.label")}</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4 leading-tight">{t("about.mission.title")}</h2>
              </div>
              <div>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{t("about.mission.p")}</p>
              </div>
            </div>

            {/* Vision */}
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="lg:order-2">
                <span className="text-[10px] font-black tracking-[0.6em] text-accent-yellow uppercase">{t("about.vision.label")}</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4 leading-tight">{t("about.vision.title")}</h2>
              </div>
              <div className="lg:order-1">
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{t("about.vision.p")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-32 bg-carbon-gray border-y border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase">{t("about.values.label")}</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mt-4">{t("about.values.title")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {values.map((v, idx) => (
                <div key={v.key} className="component-module brushed-texture p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20">VAL_{String(idx + 1).padStart(2, "0")}</div>
                  <div className={`w-12 h-12 border ${v.color === "accent-yellow" ? "border-accent-yellow/30" : "border-primary/30"} flex items-center justify-center mb-8`}>
                    <span className={`material-symbols-outlined ${v.color === "accent-yellow" ? "text-accent-yellow" : "text-primary"}`}>{v.icon}</span>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-luxury mb-4">{t(`about.${v.key}.title`)}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{t(`about.${v.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 md:py-32">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <div className="text-5xl md:text-7xl mb-6">🇨🇷</div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">{t("about.location")}</h3>
            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed mb-10">{t("about.location.desc")}</p>
            <Link href="/contacto" className="inline-block bg-primary text-white px-12 md:px-16 py-5 md:py-7 text-[10px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,143,240,0.4)]">
              {t("nav.hablemos")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
