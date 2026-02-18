"use client";

import { useI18n } from "@/lib/i18n";

const modules = [
  { icon: "precision_manufacturing", titleKey: "svc.leads.title", descKey: "svc.leads.desc", status: "ACTIVE", code: "0x8842", color: "primary" },
  { icon: "settings_input_component", titleKey: "svc.auto.title", descKey: "svc.auto.desc", status: "OPTIMIZED", code: "0x12FA", color: "accent-yellow" },
  { icon: "data_exploration", titleKey: "svc.seo.title", descKey: "svc.seo.desc", status: "FLOWING", code: "0x33B1", color: "primary" },
  { icon: "code", titleKey: "svc.web.title", descKey: "svc.web.desc", status: "DEPLOYED", code: "0x44C2", color: "primary" },
  { icon: "smart_toy", titleKey: "svc.ai.title", descKey: "svc.ai.desc", status: "LEARNING", code: "0x55D3", color: "accent-yellow" },
  { icon: "mail", titleKey: "svc.email.title", descKey: "svc.email.desc", status: "STREAMING", code: "0x66E4", color: "primary" },
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="modules" className="bg-matte-black py-24 md:py-48 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm font-black uppercase tracking-[0.4em] text-primary">{t("services.label")}</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-4 md:mt-6">{t("services.title")}</h2>
          <p className="text-white/40 text-base md:text-lg font-light max-w-3xl mx-auto mt-4 leading-relaxed">{t("services.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
          {modules.map((mod, idx) => (
            <div key={mod.code} className="component-module brushed-texture p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 font-mono text-xs opacity-20">MOD_{String(idx + 1).padStart(2, "0")}</div>
              <div className={`w-12 h-12 border ${mod.color === "accent-yellow" ? "border-accent-yellow/30" : "border-primary/30"} flex items-center justify-center mb-8 md:mb-12`}>
                <span className={`material-symbols-outlined ${mod.color === "accent-yellow" ? "text-accent-yellow" : "text-primary"}`}>{mod.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-luxury mb-4 md:mb-6">{t(mod.titleKey)}</h3>
              <p className="text-white/40 leading-relaxed text-sm mb-8 md:mb-12">{t(mod.descKey)}</p>
              <div className="flex items-center justify-between mt-auto pt-6 md:pt-8 border-t border-white/5">
                <span className="text-xs font-mono text-accent-yellow">STATUS: {mod.status}</span>
                <span className="text-xs font-mono text-white/20">{mod.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
