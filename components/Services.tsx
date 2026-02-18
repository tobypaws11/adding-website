"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const modules = [
  { icon: "precision_manufacturing", titleKey: "svc.leads.title", descKey: "svc.leads.desc", tag: "FLYWHEEL", color: "primary" },
  { icon: "settings_input_component", titleKey: "svc.auto.title", descKey: "svc.auto.desc", tag: "AUTOMATIZACIÓN", color: "accent-yellow" },
  { icon: "data_exploration", titleKey: "svc.seo.title", descKey: "svc.seo.desc", tag: "POSICIONAMIENTO", color: "primary" },
  { icon: "code", titleKey: "svc.web.title", descKey: "svc.web.desc", tag: "DESARROLLO", color: "primary" },
  { icon: "smart_toy", titleKey: "svc.ai.title", descKey: "svc.ai.desc", tag: "INTELIGENCIA", color: "accent-yellow" },
  { icon: "mail", titleKey: "svc.email.title", descKey: "svc.email.desc", tag: "NUTRICIÓN", color: "primary" },
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="modules" className="bg-matte-black py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">{t("services.label")}</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-4 md:mt-6">{t("services.title")}</h2>
          <p className="text-white/40 text-base md:text-lg font-light max-w-3xl mx-auto mt-4 leading-relaxed">{t("services.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {modules.map((mod, idx) => {
            const anchor = `/servicios#svc-${String(idx + 1).padStart(2, "0")}`;
            return (
              <Link
                key={mod.titleKey}
                href={anchor}
                className="group flex flex-col border border-white/8 bg-white/2 hover:border-primary/30 hover:bg-primary/3 transition-all duration-300 p-8 md:p-10"
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-6 md:mb-8">
                  <div className={`w-12 h-12 border ${mod.color === "accent-yellow" ? "border-accent-yellow/30" : "border-primary/30"} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-xl ${mod.color === "accent-yellow" ? "text-accent-yellow" : "text-primary"}`}>{mod.icon}</span>
                  </div>
                  <span className={`text-[10px] font-black tracking-[0.3em] ${mod.color === "accent-yellow" ? "text-accent-yellow/50" : "text-primary/50"}`}>{mod.tag}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-black leading-snug mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {t(mod.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-white/40 leading-relaxed text-sm flex-1">{t(mod.descKey)}</p>

                {/* Footer */}
                <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
                  <span className="text-xs text-primary/60 group-hover:text-primary transition-colors font-medium">Ver más</span>
                  <span className="text-primary/40 group-hover:text-primary transition-all group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
