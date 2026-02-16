"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28" aria-labelledby="testimonios-title">
      <Reveal className="section-shell text-center">
        <p className="section-label">{t("test.label")}</p>
        <h2 id="testimonios-title" className="mt-4 font-title text-2xl font-bold tracking-tight text-[#1D1D1F] sm:text-3xl md:text-4xl">
          {t("test.title")}
        </h2>
        <blockquote className="mx-auto mt-8 max-w-4xl text-xl font-light leading-relaxed text-black/80 sm:text-2xl md:text-4xl">
          &ldquo;{t("test.quote")}&rdquo;
        </blockquote>
        <div className="mt-7">
          <p className="text-sm font-semibold text-[#1D1D1F]">Osvaldo Molina</p>
          <p className="text-sm text-black/55">Socio — Trumix</p>
        </div>
      </Reveal>
    </section>
  );
}
