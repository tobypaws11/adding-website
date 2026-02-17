"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function BlogPreview() {
  const { t } = useI18n();

  return (
    <section id="blog" className="bg-carbon-gray py-24 md:py-40 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm md:text-base lg:text-lg font-black tracking-[0.4em] text-primary uppercase">{t("blog.label")}</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 md:mt-6">{t("blog.title")}</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="border border-white/10 bg-matte-black p-12 md:p-20 relative overflow-hidden">
            {/* Construction animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute top-4 right-4 text-[9px] font-mono text-accent-yellow uppercase tracking-widest">STATUS: BUILDING</div>

            <div className="text-6xl md:text-8xl mb-8">🏗️</div>
            <h3 className="text-2xl md:text-3xl font-black tracking-luxury mb-6">{t("blog.soon")}</h3>
            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
              {t("blog.p")}
            </p>

            <Link href="/blog" className="inline-block border border-primary/40 text-primary px-10 py-4 text-xs font-black tracking-luxury hover:bg-primary hover:text-white transition-all">
              {t("blog.visit")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
