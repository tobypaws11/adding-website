"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Comparison } from "@/components/Comparison";
import { useI18n } from "@/lib/i18n";

const differentiators = [
  { key: "d1", icon: "smart_toy", color: "primary" },
  { key: "d2", icon: "analytics", color: "accent-yellow" },
  { key: "d3", icon: "visibility", color: "primary" },
  { key: "d4", icon: "groups", color: "accent-yellow" },
  { key: "d5", icon: "trending_up", color: "primary" },
  { key: "d6", icon: "code", color: "accent-yellow" },
];

const steps = [
  { key: "step1", num: "01", color: "primary" },
  { key: "step2", num: "02", color: "accent-yellow" },
  { key: "step3", num: "03", color: "primary" },
  { key: "step4", num: "04", color: "accent-yellow" },
];

export default function WhyAddingPage() {
  const { t } = useI18n();

  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />
          {/* Subtle orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none opacity-20">
            <div className="w-full h-full stitch-core-glass rounded-full animate-pulse" style={{ animationDuration: "8s" }} />
          </div>
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <span className="text-2xl font-black tracking-[0.4em] text-primary">{t("why.label")}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mt-4 md:mt-6 leading-[0.9]">
              {t("whypage.hero.title")}
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-3xl mx-auto mt-6 md:mt-8 leading-relaxed">
              {t("whypage.hero.sub")}
            </p>
          </div>
        </section>

        {/* Approach section */}
        <section className="py-16 md:py-32 border-t border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div>
                <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">{t("whypage.approach.label")}</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4 md:mt-6 leading-tight">{t("whypage.approach.title")}</h2>
              </div>
              <div className="space-y-6">
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{t("whypage.approach.p1")}</p>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{t("whypage.approach.p2")}</p>
              </div>
            </div>

            {/* Flywheel visual */}
            <div className="mt-16 md:mt-24 border border-white/10 bg-carbon-gray p-8 md:p-16">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative p-6 md:p-8 border border-white/5 bg-matte-black group hover:border-primary/30 transition-all">
                    <div className="text-xs font-mono text-primary/40 mb-4">STAGE_{String(i).padStart(2, "0")}</div>
                    <h4 className="text-sm font-black tracking-widest mb-2">{t(`hero.fly.${i}`)}</h4>
                    {i < 4 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-primary/30 text-2xl z-10">→</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 text-xs font-mono text-accent-yellow uppercase tracking-widest">
                {t("hero.flywheel.each")}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 md:py-32 bg-carbon-gray border-y border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">{t("whypage.diff.label")}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 md:mt-6">{t("whypage.diff.title")}</h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
              {differentiators.map((d, idx) => (
                <div key={d.key} className="component-module brushed-texture p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 font-mono text-xs opacity-20">DIFF_{String(idx + 1).padStart(2, "0")}</div>
                  <div className={`w-12 h-12 border ${d.color === "accent-yellow" ? "border-accent-yellow/30" : "border-primary/30"} flex items-center justify-center mb-8`}>
                    <span className={`material-symbols-outlined ${d.color === "accent-yellow" ? "text-accent-yellow" : "text-primary"}`}>{d.icon}</span>
                  </div>
                  <h3 className="text-xl font-black tracking-luxury mb-4">{t(`whypage.${d.key}.title`)}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{t(`whypage.${d.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <Comparison />

        {/* Process */}
        <section className="py-16 md:py-32 border-t border-white/5">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">{t("whypage.process.label")}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 md:mt-6">{t("whypage.process.title")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {steps.map((step, idx) => (
                <div key={step.key} className="relative border border-white/10 bg-carbon-gray p-8 md:p-12 group hover:border-primary/30 transition-all">
                  <div className={`text-5xl md:text-6xl font-black ${step.color === "accent-yellow" ? "text-accent-yellow/20" : "text-primary/20"} mb-6`}>{step.num}</div>
                  <h4 className="text-lg font-black tracking-widest mb-3">{t(`whypage.${step.key}.title`)}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{t(`whypage.${step.key}.desc`)}</p>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-white/10 text-2xl z-10">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-32 bg-carbon-gray border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">{t("whypage.cta")}</h2>
            <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="inline-block bg-primary text-white px-12 md:px-16 py-5 md:py-7 text-xs font-black tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,143,240,0.4)]">
              {t("whypage.cta.btn")}
            </a>
            <div className="mt-8">
              <Link href="/" className="text-xs font-bold uppercase tracking-luxury text-white/40 hover:text-primary transition-all">
                {t("blog.back")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
