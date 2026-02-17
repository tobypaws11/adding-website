"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useI18n } from "@/lib/i18n";

const services = [
  {
    icon: "precision_manufacturing",
    titleKey: "svc.leads.title",
    descKey: "svc.leads.desc",
    color: "primary",
    code: "SVC_01",
    features: [
      { es: "Flywheel automatizado de 4 etapas", en: "4-stage automated Flywheel" },
      { es: "Prospección multicanal (Google, Meta, LinkedIn)", en: "Multichannel prospecting (Google, Meta, LinkedIn)" },
      { es: "Nutrición de leads con secuencias personalizadas", en: "Lead nurturing with personalized sequences" },
      { es: "Scoring y calificación automática", en: "Automatic scoring and qualification" },
      { es: "Reportes de conversión y ROI", en: "Conversion and ROI reports" },
    ],
  },
  {
    icon: "settings_input_component",
    titleKey: "svc.auto.title",
    descKey: "svc.auto.desc",
    color: "accent-yellow",
    code: "SVC_02",
    features: [
      { es: "CRM configurado y automatizado", en: "Configured and automated CRM" },
      { es: "Flujos de seguimiento automáticos", en: "Automatic follow-up flows" },
      { es: "Onboarding automatizado de clientes", en: "Automated client onboarding" },
      { es: "Integración de herramientas (email, WhatsApp, calendario)", en: "Tool integration (email, WhatsApp, calendar)" },
      { es: "Notificaciones y alertas inteligentes", en: "Smart notifications and alerts" },
    ],
  },
  {
    icon: "data_exploration",
    titleKey: "svc.seo.title",
    descKey: "svc.seo.desc",
    color: "primary",
    code: "SVC_03",
    features: [
      { es: "Auditoría SEO técnica completa", en: "Complete technical SEO audit" },
      { es: "Estrategia de keywords y contenido", en: "Keyword and content strategy" },
      { es: "Optimización on-page y off-page", en: "On-page and off-page optimization" },
      { es: "Google Ads y Meta Ads", en: "Google Ads and Meta Ads" },
      { es: "Reportes de posicionamiento mensual", en: "Monthly ranking reports" },
    ],
  },
  {
    icon: "code",
    titleKey: "svc.web.title",
    descKey: "svc.web.desc",
    color: "accent-yellow",
    code: "SVC_04",
    features: [
      { es: "Diseño moderno y responsivo", en: "Modern and responsive design" },
      { es: "Desarrollo en Next.js y React", en: "Next.js and React development" },
      { es: "Optimizado para velocidad y SEO", en: "Optimized for speed and SEO" },
      { es: "Formularios y captación de leads integrada", en: "Integrated forms and lead capture" },
      { es: "Hosting y mantenimiento incluido", en: "Hosting and maintenance included" },
    ],
  },
  {
    icon: "smart_toy",
    titleKey: "svc.ai.title",
    descKey: "svc.ai.desc",
    color: "primary",
    code: "SVC_05",
    features: [
      { es: "Chatbots inteligentes 24/7", en: "24/7 intelligent chatbots" },
      { es: "Calificación automática de leads", en: "Automatic lead qualification" },
      { es: "Asistentes de reservas y agendamiento", en: "Booking and scheduling assistants" },
      { es: "Integración con WhatsApp y web", en: "WhatsApp and web integration" },
      { es: "Entrenamiento personalizado por negocio", en: "Custom training per business" },
    ],
  },
  {
    icon: "mail",
    titleKey: "svc.email.title",
    descKey: "svc.email.desc",
    color: "accent-yellow",
    code: "SVC_06",
    features: [
      { es: "Secuencias de nutrición automatizadas", en: "Automated nurturing sequences" },
      { es: "Newsletter semanal o mensual", en: "Weekly or monthly newsletter" },
      { es: "Segmentación de audiencia", en: "Audience segmentation" },
      { es: "A/B testing de asuntos y contenido", en: "Subject and content A/B testing" },
      { es: "Métricas de apertura, clics y conversión", en: "Open, click, and conversion metrics" },
    ],
  },
];

export default function ServiciosPage() {
  const { t, lang } = useI18n();

  return (
    <>
      <Nav />
      <main className="pt-28">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <span className="text-xs md:text-sm font-black tracking-[0.4em] text-primary uppercase">{t("services.label")}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mt-4 md:mt-6">{t("svcpage.hero.title")}</h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-3xl mx-auto mt-6 md:mt-8 leading-relaxed">
              {t("svcpage.hero.sub")}
            </p>
          </div>
        </section>

        {/* Services detail */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-8 md:space-y-16">
            {services.map((svc, idx) => (
              <div key={svc.code} id={`svc-${String(idx + 1).padStart(2, "0")}`} className={`grid lg:grid-cols-2 gap-8 md:gap-16 border border-white/10 ${idx % 2 === 0 ? "bg-carbon-gray" : "bg-matte-black"} p-8 md:p-16 relative overflow-hidden group hover:border-primary/20 transition-all`}>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-[9px] font-mono text-white/10">{svc.code}</div>
                <div>
                  <div className={`w-14 h-14 border ${svc.color === "accent-yellow" ? "border-accent-yellow/30" : "border-primary/30"} flex items-center justify-center mb-8`}>
                    <span className={`material-symbols-outlined text-2xl ${svc.color === "accent-yellow" ? "text-accent-yellow" : "text-primary"}`}>{svc.icon}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">{t(svc.titleKey)}</h2>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{t(svc.descKey)}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">
                    {lang === "es" ? "Incluye" : "Includes"}
                  </h4>
                  <ul className="space-y-4">
                    {svc.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                        <span className="text-sm text-white/60 font-light">{f[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-32 bg-carbon-gray border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">{t("svcpage.cta")}</h2>
            <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="inline-block bg-primary text-white px-12 md:px-16 py-5 md:py-7 text-xs font-black tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,143,240,0.4)]">
              {t("svcpage.cta.btn")}
            </a>
            <div className="mt-8">
              <Link href="/" className="text-[10px] font-bold uppercase tracking-luxury text-white/40 hover:text-primary transition-all">
                {t("blog.back")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
