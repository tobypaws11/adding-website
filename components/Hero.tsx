"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const flySteps = [
  { icon: "🎯", key: "hero.fly.1" },
  { icon: "🧠", key: "hero.fly.2" },
  { icon: "💰", key: "hero.fly.3" },
  { icon: "🚀", key: "hero.fly.4" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-36 md:pt-44">
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.95fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/10 px-4 py-2 text-xs font-medium tracking-wide text-brand-blue">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-brand-yellow" /> {t("hero.badge")}
          </p>
          <h1 className="mt-8 font-title text-4xl font-bold leading-[0.98] tracking-tight text-[#1D1D1F] sm:text-5xl md:text-7xl">
            <span className="font-thin">{t("hero.h1.1")}</span>
            <br />
            {t("hero.h1.2")}
            <br />
            <span className="text-brand-blue">{t("hero.h1.3")}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg md:text-xl">
            {t("hero.p")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.227A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 01-5.282-1.545l-.376-.228-2.772.729.741-2.71-.25-.396A9.78 9.78 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z"/></svg>
              {t("hero.cta")}
            </a>
            <a href="#servicios" className="inline-flex items-center gap-2 text-sm font-medium text-black/75 transition-colors hover:text-brand-blue">
              {t("hero.link")} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <motion.aside
          initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
          aria-label="Flywheel de crecimiento"
        >
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-cyan-400 text-sm font-bold text-white">AD</div>
              <div>
                <h2 className="font-medium text-[#1D1D1F]">{t("hero.flywheel.title")}</h2>
                <p className="text-sm text-black/50">{t("hero.flywheel.sub")}</p>
              </div>
            </div>
            <div className="space-y-3">
              {flySteps.map((step, i) => (
                <div key={step.key} className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] p-3 transition-colors hover:bg-brand-blue/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-lg">{step.icon}</span>
                  <p className="text-sm font-semibold text-[#1D1D1F]">{t(step.key)}</p>
                  {i < 3 && <span className="ml-auto text-brand-blue/40" aria-hidden="true">↓</span>}
                  {i === 3 && <span className="ml-auto text-brand-yellow" aria-hidden="true">↻</span>}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-black/40">{t("hero.flywheel.each")}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
