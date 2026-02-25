"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiciosFaq } from "@/components/ServiciosFaq";
import { useI18n } from "@/lib/i18n";

const serviciosFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.addingagency.com/servicios#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo funciona el sistema Flywheel de generación de leads?",
      acceptedAnswer: { "@type": "Answer", text: "Es un ciclo automatizado de 4 etapas: atracción, captación, nutrición y conversión. Combinamos SEO Costa Rica, GEO, Google Business Profile y automatización para que cada etapa alimente la siguiente y tu negocio genere leads y conversiones de forma constante." },
    },
    {
      "@type": "Question",
      name: "¿Qué es SEO y por qué lo necesita mi negocio en Costa Rica?",
      acceptedAnswer: { "@type": "Answer", text: "SEO (Search Engine Optimization) es el proceso de optimizar tu sitio web para que aparezca en los primeros resultados de Google. Si tu negocio en Heredia, San José o cualquier zona de Costa Rica no aparece cuando alguien busca tus servicios, estás perdiendo leads y clientes todos los días." },
    },
    {
      "@type": "Question",
      name: "¿Qué es GEO y en qué se diferencia del SEO?",
      acceptedAnswer: { "@type": "Answer", text: "GEO (Generative Engine Optimization) optimiza tu presencia para buscadores con inteligencia artificial como ChatGPT, Gemini y Perplexity. Mientras el SEO te posiciona en Google, el GEO asegura que la IA recomiende tu negocio cuando alguien pregunta por servicios en Costa Rica como los tuyos. Juntos, SEO y GEO maximizan tu posicionamiento local y tus conversiones." },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta contratar los servicios de AdDing?",
      acceptedAnswer: { "@type": "Answer", text: "Cada proyecto es único. Armamos paquetes personalizados de SEO, GEO, automatización y diseño web según tus objetivos y presupuesto. Escribinos por WhatsApp y te damos una cotización sin compromiso en menos de 24 horas." },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de automatización pueden implementar para generar más leads?",
      acceptedAnswer: { "@type": "Answer", text: "Automatizamos CRM, seguimiento de leads, onboarding de clientes, email marketing, agendamiento y notificaciones. Todo se integra con herramientas como WhatsApp, email y calendario para que ningún lead se pierda y tus conversiones aumenten." },
    },
    {
      "@type": "Question",
      name: "¿Cómo funcionan los agentes de IA que ofrecen?",
      acceptedAnswer: { "@type": "Answer", text: "Son chatbots inteligentes que atienden a tus clientes 24/7 por WhatsApp y web. Califican leads, responden preguntas frecuentes, agendan citas y se entrenan específicamente para tu negocio en Costa Rica." },
    },
    {
      "@type": "Question",
      name: "¿Necesito tener un sitio web para trabajar con ustedes?",
      acceptedAnswer: { "@type": "Answer", text: "No. Podemos crear tu sitio web desde cero como parte del ecosistema digital. Lo diseñamos optimizado para velocidad, SEO Costa Rica, posicionamiento local y conversión desde el primer día." },
    },
    {
      "@type": "Question",
      name: "¿Cómo miden los resultados de SEO, GEO y marketing digital?",
      acceptedAnswer: { "@type": "Answer", text: "Usamos dashboards con métricas claras: leads generados, tasa de conversión, posicionamiento en Google, visibilidad en buscadores con IA, tráfico web y ROI. Recibís reportes mensuales para que sepás exactamente cómo va tu inversión." },
    },
    {
      "@type": "Question",
      name: "¿Puedo contratar solo SEO o tengo que tomar el paquete completo?",
      acceptedAnswer: { "@type": "Answer", text: "Podés contratar servicios individuales como SEO, GEO o diseño web. Sin embargo, recomendamos el ecosistema completo porque cada pieza potencia las demás. Un sitio web sin SEO es como una tienda sin dirección, y sin GEO perdés visibilidad en buscadores con IA." },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a AdDing de otras agencias de marketing en Costa Rica?",
      acceptedAnswer: { "@type": "Answer", text: "Combinamos marketing digital con inteligencia artificial y automatización real desde Heredia, Costa Rica. No vendemos likes ni seguidores: construimos ecosistemas que generan leads y ventas medibles. Además, optimizamos para SEO y GEO con Google Business Profile, algo que muy pocas agencias en el país ofrecen." },
    },
  ],
};

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
      { es: "Optimización GEO para búsquedas con IA (ChatGPT, Gemini, Perplexity)", en: "GEO optimization for AI search (ChatGPT, Gemini, Perplexity)" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosFaqJsonLd) }}
      />
      <Nav />
      <main className="pt-20 page-enter">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">{t("services.label")}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mt-4 md:mt-6">{t("svcpage.hero.title")}</h1>
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
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-xs font-mono text-white/10">{svc.code}</div>
                <div>
                  <div className={`w-14 h-14 border ${svc.color === "accent-yellow" ? "border-accent-yellow/30" : "border-primary/30"} flex items-center justify-center mb-8`}>
                    <span className={`material-symbols-outlined text-2xl ${svc.color === "accent-yellow" ? "text-accent-yellow" : "text-primary"}`}>{svc.icon}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black tracking-normal mb-4">{t(svc.titleKey)}</h2>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">{t(svc.descKey)}</p>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-6">
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

        {/* FAQ */}
        <ServiciosFaq />

        {/* CTA */}
        <section className="py-16 md:py-32 bg-carbon-gray border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">{t("svcpage.cta")}</h2>
            <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="inline-block bg-primary text-white px-12 md:px-16 py-5 md:py-7 text-xs font-black tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,143,240,0.4)]">
              {t("svcpage.cta.btn")}
            </a>
            <div className="mt-8">
              <Link href="/" className="text-xs font-bold uppercase tracking-luxury text-white/40 hover:text-primary transition-all">
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
