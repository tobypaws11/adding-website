"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const brands = ["Iris Studio", "MDM", "Eventicos", "Villa Solstice", "Ezelandscape", "Trumix"];

export function LogosBar() {
  const { t } = useI18n();

  return (
    <section className="border-y border-black/5 bg-white py-12" aria-label="Marcas aliadas">
      <Reveal className="section-shell">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-black/45">{t("logos.label")}</p>
        {/* Animated carousel */}
        <div className="mt-8 overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-black/10 bg-[#F5F7FA] px-6 py-3 text-sm font-medium text-black/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
