"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  const { t } = useI18n();

  return (
    <section id="contacto" className="bg-gradient-to-b from-white to-brand-light py-20 md:py-28">
      <Reveal className="section-shell text-center">
        <p className="section-label">{t("cta.label")}</p>
        <h2 className="mt-4 font-title text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {t("cta.h2.1")}
          <br />
          <span className="text-brand-blue">{t("cta.h2.2")}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/65 md:text-lg">
          {t("cta.p")}
        </p>
        <a
          href="https://wa.me/50670136366"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.227A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 01-5.282-1.545l-.376-.228-2.772.729.741-2.71-.25-.396A9.78 9.78 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z"/></svg>
          {t("cta.btn")}
        </a>
      </Reveal>
    </section>
  );
}
