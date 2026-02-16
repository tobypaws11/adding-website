"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const services = [
  { icon: "🌐", titleKey: "svc.web.title", descKey: "svc.web.desc" },
  { icon: "🤖", titleKey: "svc.ai.title", descKey: "svc.ai.desc" },
  { icon: "📊", titleKey: "svc.seo.title", descKey: "svc.seo.desc" },
  { icon: "🎯", titleKey: "svc.leads.title", descKey: "svc.leads.desc" },
  { icon: "📧", titleKey: "svc.email.title", descKey: "svc.email.desc" },
  { icon: "⚡", titleKey: "svc.auto.title", descKey: "svc.auto.desc" },
];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="section-label">{t("services.label")}</p>
          <h2 className="section-title">{t("services.title")}</h2>
          <p className="section-subtitle">{t("services.subtitle")}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((svc, idx) => (
            <Reveal key={svc.titleKey} delay={idx * 0.05}>
              <article className="h-full rounded-3xl border border-transparent bg-[#F5F7FA] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:bg-white hover:shadow-soft">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-2xl">
                  {svc.icon}
                </div>
                <h3 className="font-title text-xl font-semibold text-[#1D1D1F] sm:text-2xl">{t(svc.titleKey)}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/65">{t(svc.descKey)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
