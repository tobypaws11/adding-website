"use client";

import { useI18n } from "@/lib/i18n";

const brands = ["Iris Studio", "MDM", "Eventicos", "Villa Solstice", "Ezelandscape", "Trumix"];

export function LogosBar() {
  const { t } = useI18n();

  return (
    <section className="border-y border-white/5 bg-carbon-gray py-10 md:py-12">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <p className="text-center text-sm md:text-base uppercase tracking-[0.4em] text-white/30 mb-6 md:mb-8 font-mono">{t("logos.label")}</p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-8 md:gap-12">
            {[...brands, ...brands].map((brand, i) => (
              <span key={`${brand}-${i}`} className="shrink-0 whitespace-nowrap border border-white/10 bg-white/5 px-6 md:px-8 py-2.5 md:py-3 text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-luxury">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
