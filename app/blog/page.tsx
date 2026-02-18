"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useI18n } from "@/lib/i18n";

const categories = [
  { key: "blog.cat.seo", icon: "search" },
  { key: "blog.cat.ai", icon: "smart_toy" },
  { key: "blog.cat.auto", icon: "settings_input_component" },
  { key: "blog.cat.leads", icon: "precision_manufacturing" },
  { key: "blog.cat.marketing", icon: "campaign" },
];

export default function BlogPage() {
  const { t } = useI18n();

  return (
    <>
      <Nav />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <span className="text-base font-black uppercase tracking-[0.4em] text-primary">{t("blog.label")}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mt-4 md:mt-6">{t("blog.title")}</h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed">
              {t("blog.p")}
            </p>
          </div>
        </section>

        {/* Under construction + Categories */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            {/* Main under construction card */}
            <div className="border border-white/10 bg-carbon-gray p-12 md:p-20 text-center mb-16 md:mb-24 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-yellow/60 to-transparent" />
              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-xs font-mono text-accent-yellow uppercase tracking-widest animate-pulse">STATUS: BUILDING</div>
              <div className="text-7xl md:text-9xl mb-8">🏗️</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">{t("blog.soon")}</h2>
              <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
                {t("blog.p")}
              </p>
            </div>

            {/* Categories preview */}
            <div className="mb-16 md:mb-24">
              <h3 className="text-center text-base font-black uppercase tracking-[0.4em] text-primary mb-12">{t("blog.categories")}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {categories.map((cat) => (
                  <div key={cat.key} className="component-module brushed-texture p-6 md:p-8 text-center group cursor-default">
                    <div className="w-12 h-12 mx-auto border border-primary/30 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-primary">{cat.icon}</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-luxury text-white/60">{t(cat.key)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter - coming soon */}
          </div>
        </section>

        {/* Back to home */}
        <section className="pb-16 text-center">
          <Link href="/" className="inline-block border border-white/10 text-white/40 px-10 py-4 text-xs font-black tracking-luxury hover:border-primary/40 hover:text-primary transition-all">
            {t("blog.back")}
          </Link>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
