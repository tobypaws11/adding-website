"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const faqs = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
];

export function FAQ() {
  const { t } = useI18n();

  return (
    <section id="faq" className="py-20 md:py-28" aria-labelledby="faq-title">
      <div className="section-shell">
        <Reveal>
          <p className="section-label">{t("faq.label")}</p>
          <h2 id="faq-title" className="section-title">{t("faq.title")}</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {faqs.map((faq, idx) => (
            <Reveal key={faq.qKey} delay={idx * 0.06}>
              <article className="h-full rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="font-title text-lg font-semibold text-[#1D1D1F]">{t(faq.qKey)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{t(faq.aKey)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
