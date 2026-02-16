"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "es" | "en";

type Translations = Record<string, Record<Lang, string>>;

const translations: Translations = {
  // Nav
  "nav.servicios": { es: "Servicios", en: "Services" },
  "nav.porque": { es: "Por qué AdDing", en: "Why AdDing" },
  "nav.blog": { es: "Blog", en: "Blog" },
  "nav.contacto": { es: "Contacto", en: "Contact" },
  "nav.hablemos": { es: "Hablemos", en: "Let's talk" },

  // Hero
  "hero.badge": { es: "Agencia IA en Costa Rica", en: "AI Agency in Costa Rica" },
  "hero.h1.1": { es: "Construimos", en: "We build" },
  "hero.h1.2": { es: "ecosistemas digitales", en: "digital ecosystems" },
  "hero.h1.3": { es: "que generan crecimiento.", en: "that drive growth." },
  "hero.p": {
    es: "No hacemos campañas aisladas. Creamos sistemas automatizados de generación de leads que convierten prospectos en clientes leales, con IA, data y mejora continua.",
    en: "We don't run isolated campaigns. We build automated lead generation systems that turn prospects into loyal customers, with AI, data, and continuous improvement."
  },
  "hero.cta": { es: "Agendá una llamada", en: "Book a call" },
  "hero.link": { es: "Ver servicios", en: "See services" },
  "hero.flywheel.title": { es: "Tu Flywheel de crecimiento", en: "Your Growth Flywheel" },
  "hero.flywheel.sub": { es: "Ecosistema automatizado", en: "Automated ecosystem" },
  "hero.flywheel.each": { es: "Cada etapa alimenta la siguiente: crecimiento continuo", en: "Each stage feeds the next: continuous growth" },
  "hero.fly.1": { es: "Prospección automatizada", en: "Automated prospecting" },
  "hero.fly.2": { es: "Nutrición inteligente", en: "Intelligent nurturing" },
  "hero.fly.3": { es: "Cierre eficiente", en: "Efficient closing" },
  "hero.fly.4": { es: "Retención y crecimiento", en: "Retention & growth" },

  // Logos
  "logos.label": { es: "Marcas que confían en nosotros", en: "Brands that trust us" },

  // Services
  "services.label": { es: "Servicios", en: "Services" },
  "services.title": { es: "Todo lo que necesitás para crecer en digital.", en: "Everything you need to grow digitally." },
  "services.subtitle": {
    es: "Construimos ecosistemas digitales completos para PYMES, desde la primera visita hasta el cliente fiel, acompañándote en cada etapa del recorrido del cliente con automatización y mejora continua.",
    en: "We build complete digital ecosystems for SMBs, from first visit to loyal customer, guiding you through every stage of the customer journey with automation and continuous improvement."
  },
  "svc.web.title": { es: "Diseño y Desarrollo Web", en: "Web Design & Development" },
  "svc.web.desc": { es: "Sitios rápidos, modernos y optimizados para convertir visitas en oportunidades reales de negocio.", en: "Fast, modern sites optimized to turn visits into real business opportunities." },
  "svc.ai.title": { es: "Agentes de IA", en: "AI Agents" },
  "svc.ai.desc": { es: "Asistentes inteligentes que responden, califican leads y automatizan tareas clave las 24 horas del día.", en: "Smart assistants that respond, qualify leads, and automate key tasks around the clock." },
  "svc.seo.title": { es: "SEO y Marketing Digital", en: "SEO & Digital Marketing" },
  "svc.seo.desc": { es: "Estrategias orientadas a datos para posicionarte orgánicamente y generar tráfico calificado constante.", en: "Data-driven strategies to rank organically and generate consistent qualified traffic." },
  "svc.leads.title": { es: "Ecosistemas de Leads", en: "Lead Ecosystems" },
  "svc.leads.desc": { es: "Flywheel automatizado: prospección, nutrición, cierre y retención. Nada de campañas aisladas, solo sistemas de crecimiento predecible.", en: "Automated flywheel: prospecting, nurturing, closing, and retention. No isolated campaigns, just predictable growth systems." },
  "svc.email.title": { es: "Email Marketing y Newsletter", en: "Email Marketing & Newsletter" },
  "svc.email.desc": { es: "Secuencias automatizadas, nutrición inteligente y newsletters que mantienen a tus prospectos comprometidos hasta la conversión.", en: "Automated sequences, intelligent nurturing, and newsletters that keep prospects engaged until conversion." },
  "svc.auto.title": { es: "Automatización", en: "Automation" },
  "svc.auto.desc": { es: "CRM, seguimientos, onboarding y flujos conectados que ahorran tiempo, reducen errores y escalan sin fricción.", en: "CRM, follow-ups, onboarding, and connected flows that save time, reduce errors, and scale without friction." },

  // Why AdDing
  "why.label": { es: "Por qué AdDing", en: "Why AdDing" },
  "why.title": { es: "No somos una agencia más. Somos tu sistema de crecimiento.", en: "We're not just another agency. We're your growth system." },
  "why.subtitle": {
    es: "Especialistas en crear ecosistemas digitales automatizados que transforman prospectos en clientes leales. No hacemos campañas aisladas, construimos crecimiento predecible.",
    en: "Specialists in building automated digital ecosystems that turn prospects into loyal customers. We don't run isolated campaigns, we build predictable growth."
  },
  "why.p1.title": { es: "Ecosistema, no campañas", en: "Ecosystem, not campaigns" },
  "why.p1.desc": { es: "Construimos un Flywheel automatizado donde cada etapa alimenta la siguiente: prospección, nutrición, cierre, retención y crecimiento.", en: "We build an automated Flywheel where each stage feeds the next: prospecting, nurturing, closing, retention, and growth." },
  "why.p2.title": { es: "IA y automatización real", en: "Real AI & automation" },
  "why.p2.desc": { es: "Usamos inteligencia artificial en cada paso: agentes que responden 24/7, CRM automatizado, seguimientos inteligentes y optimización basada en data.", en: "We use AI at every step: agents that respond 24/7, automated CRM, smart follow-ups, and data-driven optimization." },
  "why.p3.title": { es: "Resultados medibles", en: "Measurable results" },
  "why.p3.desc": { es: "Trabajás con KPIs reales de negocio: leads calificados, costo por adquisición, conversión y retorno. Nada de métricas de vanidad.", en: "You work with real business KPIs: qualified leads, cost per acquisition, conversion, and ROI. No vanity metrics." },
  "why.cmp.them": { es: "Otros proveedores", en: "Other providers" },
  "why.cmp.us": { es: "AdDing Agency", en: "AdDing Agency" },
  "why.c1.them": { es: "Campañas aisladas sin conexión", en: "Disconnected isolated campaigns" },
  "why.c1.us": { es: "Ecosistema Flywheel integrado", en: "Integrated Flywheel ecosystem" },
  "why.c2.them": { es: "Solo ejecución, sin estrategia", en: "Execution only, no strategy" },
  "why.c2.us": { es: "Estrategia + Ejecución + Optimización", en: "Strategy + Execution + Optimization" },
  "why.c3.them": { es: "Métricas de vanidad (likes)", en: "Vanity metrics (likes)" },
  "why.c3.us": { es: "KPIs de negocio que impactan ingresos", en: "Business KPIs that impact revenue" },
  "why.c4.them": { es: "Trabajo manual, no escalable", en: "Manual work, not scalable" },
  "why.c4.us": { es: "Automatización inteligente y escalable", en: "Intelligent, scalable automation" },

  // Guarantee
  "guarantee.label": { es: "Nuestra garantía", en: "Our guarantee" },
  "guarantee.title": { es: "Tu crecimiento en manos de expertos.", en: "Your growth in expert hands." },
  "guarantee.p": {
    es: "No hacemos promesas vacías. Construimos sistemas sólidos que generan resultados sostenibles. Tu éxito es nuestro éxito.",
    en: "We don't make empty promises. We build solid systems that generate sustainable results. Your success is our success."
  },
  "guarantee.1.title": { es: "Equipo especializado", en: "Specialized team" },
  "guarantee.1.desc": { es: "Expertos en marketing digital, automatización y generación de leads para negocios B2B y B2C.", en: "Experts in digital marketing, automation, and lead generation for B2B and B2C businesses." },
  "guarantee.2.title": { es: "Proceso transparente", en: "Transparent process" },
  "guarantee.2.desc": { es: "Dashboard en tiempo real donde verás exactamente de dónde vienen tus leads y cuáles convierten mejor.", en: "Real-time dashboard where you'll see exactly where your leads come from and which convert best." },
  "guarantee.3.title": { es: "Optimización continua", en: "Continuous optimization" },
  "guarantee.3.desc": { es: "Análisis semanal de métricas y ajustes estratégicos para mejorar resultados mes tras mes.", en: "Weekly metrics analysis and strategic adjustments to improve results month after month." },
  "guarantee.4.title": { es: "Comunicación constante", en: "Constant communication" },
  "guarantee.4.desc": { es: "Reportes mensuales ejecutivos con insights accionables y reuniones de sincronización.", en: "Monthly executive reports with actionable insights and sync meetings." },

  // Testimonials
  "test.label": { es: "Testimonios", en: "Testimonials" },
  "test.title": { es: "Lo que dicen nuestros clientes", en: "What our clients say" },
  "test.quote": {
    es: "Gracias a la estrategia de marketing digital de AdDing, hemos generado un flujo constante de leads calificados que logramos convertir en clientes fieles. El sistema que construyeron nos dio previsibilidad en ingresos y relaciones de largo plazo con nuestros clientes.",
    en: "Thanks to AdDing's digital marketing strategy, we've generated a steady flow of qualified leads that we've converted into loyal customers. The system they built gave us income predictability and long-term client relationships."
  },

  // Blog
  "blog.label": { es: "Blog", en: "Blog" },
  "blog.title": { es: "Estamos construyendo algo bueno.", en: "We're building something great." },
  "blog.p": {
    es: "Muy pronto vas a encontrar guías accionables sobre SEO, marketing digital, automatización y agentes de IA para hacer crecer tu negocio.",
    en: "Soon you'll find actionable guides on SEO, digital marketing, automation, and AI agents to grow your business."
  },
  "blog.soon": { es: "Próximamente", en: "Coming soon" },

  // FAQ
  "faq.label": { es: "Preguntas frecuentes", en: "FAQ" },
  "faq.title": { es: "Respuestas claras para decidir mejor", en: "Clear answers to decide better" },
  "faq.q1": { es: "¿Qué tipo de negocios atienden?", en: "What kind of businesses do you work with?" },
  "faq.a1": {
    es: "Trabajamos con PYMES, marcas personales y empresas en crecimiento que buscan resultados concretos en digital. Nuestro enfoque es construir ecosistemas completos de generación de leads, no campañas aisladas.",
    en: "We work with SMBs, personal brands, and growing companies seeking concrete digital results. Our focus is building complete lead generation ecosystems, not isolated campaigns."
  },
  "faq.q2": { es: "¿En cuánto tiempo podría ver resultados?", en: "How soon could I see results?" },
  "faq.a2": {
    es: "Depende del servicio, pero normalmente la fase de fundación toma entre 2 y 5 semanas. Desde el segundo mes ya empezás a ver leads consistentes y métricas de crecimiento medibles.",
    en: "It depends on the service, but typically the foundation phase takes 2–5 weeks. By month two you'll start seeing consistent leads and measurable growth metrics."
  },
  "faq.q3": { es: "¿Pueden ayudarme aunque no tenga equipo interno?", en: "Can you help me even without an internal team?" },
  "faq.a3": {
    es: "Sí. Nos integramos como tu equipo externo de marketing, ejecución y analítica para que podás avanzar sin fricción. Estrategia, contenido, ads, CRM, email, todo incluido.",
    en: "Yes. We integrate as your external marketing, execution, and analytics team so you can move forward without friction. Strategy, content, ads, CRM, email, all included."
  },

  // CTA
  "cta.label": { es: "¿Listo para crecer?", en: "Ready to grow?" },
  "cta.h2.1": { es: "Hagamos que tu marca", en: "Let's make your brand" },
  "cta.h2.2": { es: "brille.", en: "shine." },
  "cta.p": {
    es: "Agendá una llamada gratuita y descubrí cómo podemos convertir tu presencia digital en crecimiento real para tu negocio.",
    en: "Book a free call and discover how we can turn your digital presence into real growth for your business."
  },
  "cta.btn": { es: "Agendá tu llamada gratis", en: "Book your free call" },

  // Footer
  "footer.tagline": {
    es: "Impulsamos PYMES con estrategias digitales inteligentes, humanas y efectivas.",
    en: "We empower SMBs with smart, human, and effective digital strategies."
  },
  "footer.servicios": { es: "Servicios", en: "Services" },
  "footer.empresa": { es: "Empresa", en: "Company" },
  "footer.contacto": { es: "Contacto", en: "Contact" },
  "footer.legal": { es: "Legal", en: "Legal" },
  "footer.terms": { es: "Términos y Condiciones", en: "Terms & Conditions" },
  "footer.privacy": { es: "Política de Privacidad", en: "Privacy Policy" },
  "footer.creado": { es: "Creado por", en: "Built by" },
  "footer.derechos": { es: "Todos los derechos reservados.", en: "All rights reserved." },
};

interface I18nContextType {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "es",
  toggle: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = useCallback(
    (key: string) => translations[key]?.[lang] ?? key,
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
