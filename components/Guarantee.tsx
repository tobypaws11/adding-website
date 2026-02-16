"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: "👥", titleKey: "guarantee.1.title", descKey: "guarantee.1.desc" },
  { icon: "📊", titleKey: "guarantee.2.title", descKey: "guarantee.2.desc" },
  { icon: "🔄", titleKey: "guarantee.3.title", descKey: "guarantee.3.desc" },
  { icon: "💬", titleKey: "guarantee.4.title", descKey: "guarantee.4.desc" },
];

export function Guarantee() {
  const { t } = useI18n();

  return (
    <section id="garantia" className="bg-[#F6FAFF] py-20 md:py-28">
      <div className="section-shell">
        <Reveal className="text-center">
          <p className="section-label">{t("guarantee.label")}</p>
          <h2 className="section-title mx-auto max-w-2xl">{t("guarantee.title")}</h2>
          <p className="section-subtitle mx-auto">{t("guarantee.p")}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <Reveal key={item.titleKey} delay={idx * 0.06}>
              <article className="h-full rounded-2xl border border-black/5 bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-title text-lg font-semibold text-[#1D1D1F]">{t(item.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">{t(item.descKey)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
