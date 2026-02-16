"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const points = [
  { titleKey: "why.p1.title", descKey: "why.p1.desc" },
  { titleKey: "why.p2.title", descKey: "why.p2.desc" },
  { titleKey: "why.p3.title", descKey: "why.p3.desc" },
];

const comparisons = [
  { themKey: "why.c1.them", usKey: "why.c1.us" },
  { themKey: "why.c2.them", usKey: "why.c2.us" },
  { themKey: "why.c3.them", usKey: "why.c3.us" },
  { themKey: "why.c4.them", usKey: "why.c4.us" },
];

export function WhyAdding() {
  const { t } = useI18n();

  return (
    <section id="porque-adding" className="bg-[#1D1D1F] py-20 text-white md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-yellow">{t("why.label")}</p>
          <h2 className="mt-4 font-title text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t("why.title")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {t("why.subtitle")}
          </p>
          <div className="mt-10 space-y-8">
            {points.map((point, idx) => (
              <div key={point.titleKey} className="flex gap-4">
                <span className="font-title text-3xl font-bold text-brand-blue sm:text-4xl">0{idx + 1}</span>
                <div>
                  <h3 className="font-title text-lg font-semibold sm:text-xl">{t(point.titleKey)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{t(point.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <div className="mb-4 grid grid-cols-2 gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-400/70">{t("why.cmp.them")}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/70">{t("why.cmp.us")}</p>
            </div>
            <div className="space-y-4">
              {comparisons.map((c) => (
                <div key={c.usKey} className="grid grid-cols-2 gap-3 border-b border-white/10 pb-4 last:border-0">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400" aria-hidden="true">✕</span>
                    <p className="text-xs leading-relaxed text-white/50 sm:text-sm">{t(c.themKey)}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                    <p className="text-xs font-medium leading-relaxed text-white/90 sm:text-sm">{t(c.usKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
