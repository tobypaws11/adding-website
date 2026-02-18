"use client";

import { useI18n } from "@/lib/i18n";

export function Comparison() {
  const { t } = useI18n();

  return (
    <section id="telemetry" className="bg-matte-black py-24 md:py-40 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-40">
          <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary mb-6 md:mb-8">{t("cmp.label")}</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12">
            {t("cmp.title1")} <span className="text-white/20">vs.</span> {t("cmp.title2")}
          </h2>
          <div className="w-24 h-[1px] bg-primary" />
        </div>
        <div className="grid md:grid-cols-2 gap-1 bg-white/5 p-1">
          {/* Traditional */}
          <div className="bg-carbon-gray p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-4 md:top-8 left-4 md:left-8 text-xs font-mono text-white/20">{t("why.cmp.them")}</div>
            <ul className="space-y-8 md:space-y-12 mt-8 md:mt-12">
              {["c1", "c2", "c3"].map((key) => (
                <li key={key} className="flex items-center gap-4 md:gap-8 opacity-20">
                  <span className="material-symbols-outlined text-red-500">cancel</span>
                  <span className="text-base md:text-xl font-black tracking-widest">{t(`why.${key}.them`)}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* AdDing */}
          <div className="bg-matte-black p-10 md:p-20 relative overflow-hidden border border-primary/30">
            <div className="absolute top-4 md:top-8 left-4 md:left-8 text-xs font-mono text-primary">ADDING_ENGINEERING</div>
            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5">
              <span className="material-symbols-outlined text-[8rem] md:text-[15rem] text-primary">verified</span>
            </div>
            <ul className="space-y-8 md:space-y-12 mt-8 md:mt-12">
              {["c1", "c2", "c3"].map((key) => (
                <li key={key} className="flex items-center gap-4 md:gap-8">
                  <span className="material-symbols-outlined text-primary scale-110 md:scale-125">check_circle</span>
                  <span className="text-base md:text-xl font-black tracking-widest">{t(`why.${key}.us`)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10 flex justify-between items-end">
              <div>
                <div className="text-xs font-mono text-white/40 uppercase mb-2">{t("cmp.gain")}</div>
                <div className="text-3xl md:text-4xl font-black text-accent-yellow font-mono">+42.8%</div>
              </div>
              <div className="text-xs font-mono text-primary uppercase">System: Operational</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
