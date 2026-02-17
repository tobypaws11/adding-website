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
  "hero.h1.1": { es: "Ingeniería", en: "Engineering" },
  "hero.h1.2": { es: "", en: "" },
  "hero.h1.3": { es: "Superior", en: "Superiority" },
  "hero.p": {
    es: "Eliminá la entropía presupuestaria con integración de datos de alta fidelidad. Diseñado para rendimiento a escala industrial y visibilidad radical.",
    en: "Eliminate budget entropy through high-fidelity data stitching. Designed for industrial-scale performance and radical visibility."
  },
  "hero.cta": { es: "Iniciar Arquitectura", en: "Initialize Architecture" },
  "hero.link": { es: "Documentación Técnica", en: "Technical Docs" },
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
    es: "Impulsamos empresas y emprendimientos con estrategias digitales inteligentes, tecnológicas y efectivas.",
    en: "We empower businesses and startups with smart, technology-driven, and effective digital strategies."
  },
  "footer.servicios": { es: "Servicios", en: "Services" },
  "footer.empresa": { es: "Empresa", en: "Company" },
  "footer.contacto": { es: "Contacto", en: "Contact" },
  "footer.legal": { es: "Legal", en: "Legal" },
  "footer.terms": { es: "Términos y Condiciones", en: "Terms & Conditions" },
  "footer.privacy": { es: "Política de Privacidad", en: "Privacy Policy" },
  "footer.creado": { es: "Creado por", en: "Built by" },
  "footer.derechos": { es: "Todos los derechos reservados.", en: "All rights reserved." },

  // Hub terminal
  "hub.line1": { es: "Inicializando mapeo de funnel neural...", en: "Initializing neural funnel mapping..." },
  "hub.line2": { es: "Conectando a Google.Hub...", en: "Connecting to Google.Hub..." },

  // Comparison
  "cmp.label": { es: "Delta de Rendimiento", en: "Performance Delta" },
  "cmp.title1": { es: "Clínico", en: "Clinical" },
  "cmp.title2": { es: "Convencional", en: "Conventional" },
  "cmp.gain": { es: "Ganancia Calculada", en: "Calculated Gain" },

  // Blog
  "blog.visit": { es: "Ir al Blog", en: "Visit Blog" },
  "blog.back": { es: "Volver al inicio", en: "Back to home" },
  "blog.categories": { es: "Categorías", en: "Categories" },
  "blog.cat.seo": { es: "SEO y Posicionamiento", en: "SEO & Rankings" },
  "blog.cat.ai": { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
  "blog.cat.auto": { es: "Automatización", en: "Automation" },
  "blog.cat.leads": { es: "Generación de Leads", en: "Lead Generation" },
  "blog.cat.marketing": { es: "Marketing Digital", en: "Digital Marketing" },
  "blog.subscribe.title": { es: "Suscribite al newsletter", en: "Subscribe to our newsletter" },
  "blog.subscribe.p": { es: "Recibí las últimas guías y estrategias directo en tu correo.", en: "Get the latest guides and strategies straight to your inbox." },
  "blog.subscribe.placeholder": { es: "Tu correo electrónico", en: "Your email address" },
  "blog.subscribe.btn": { es: "Suscribirme", en: "Subscribe" },

  // Why AdDing page
  "whypage.hero.title": { es: "Por qué elegir AdDing", en: "Why choose AdDing" },
  "whypage.hero.sub": { es: "No somos una agencia más. Somos tu sistema de crecimiento digital.", en: "We're not just another agency. We're your digital growth system." },
  "whypage.approach.label": { es: "Nuestro enfoque", en: "Our approach" },
  "whypage.approach.title": { es: "Ecosistemas, no campañas aisladas", en: "Ecosystems, not isolated campaigns" },
  "whypage.approach.p1": { es: "Mientras otras agencias te venden campañas sueltas de ads o publicaciones en redes sociales, nosotros construimos un sistema completo que funciona las 24 horas. Cada pieza del ecosistema alimenta la siguiente: desde la prospección automatizada hasta la retención de clientes.", en: "While other agencies sell you disconnected ad campaigns or social media posts, we build a complete system that works 24/7. Each piece of the ecosystem feeds the next: from automated prospecting to customer retention." },
  "whypage.approach.p2": { es: "Nuestro Flywheel automatizado conecta cada etapa del recorrido del cliente. No dependés de una sola fuente de tráfico ni de esfuerzos manuales. El sistema crece solo.", en: "Our automated Flywheel connects every stage of the customer journey. You don't depend on a single traffic source or manual efforts. The system grows on its own." },
  "whypage.diff.label": { es: "Lo que nos diferencia", en: "What sets us apart" },
  "whypage.diff.title": { es: "Construido diferente", en: "Built different" },
  "whypage.d1.title": { es: "IA en cada paso", en: "AI at every step" },
  "whypage.d1.desc": { es: "Usamos inteligencia artificial para automatizar respuestas, calificar leads, personalizar contenido y optimizar campañas. No es un slogan, es nuestra operación diaria.", en: "We use AI to automate responses, qualify leads, personalize content, and optimize campaigns. It's not a slogan, it's our daily operation." },
  "whypage.d2.title": { es: "Métricas de negocio, no vanidad", en: "Business metrics, not vanity" },
  "whypage.d2.desc": { es: "No te reportamos likes ni seguidores. Trabajamos con KPIs reales: leads calificados, costo por adquisición, tasa de conversión y retorno de inversión. Los números que importan.", en: "We don't report likes or followers. We work with real KPIs: qualified leads, cost per acquisition, conversion rate, and ROI. The numbers that matter." },
  "whypage.d3.title": { es: "Transparencia total", en: "Total transparency" },
  "whypage.d3.desc": { es: "Dashboard en tiempo real donde podés ver exactamente de dónde vienen tus leads, cuáles convierten y cuánto te está costando cada cliente nuevo. Sin sorpresas.", en: "Real-time dashboard where you can see exactly where your leads come from, which convert, and how much each new client is costing you. No surprises." },
  "whypage.d4.title": { es: "Equipo dedicado", en: "Dedicated team" },
  "whypage.d4.desc": { es: "No sos un número más en una cartera de 50 clientes. Trabajamos con un grupo selecto de empresas para darle a cada una la atención que merece.", en: "You're not just a number in a portfolio of 50 clients. We work with a select group of companies to give each one the attention it deserves." },
  "whypage.d5.title": { es: "Optimización continua", en: "Continuous optimization" },
  "whypage.d5.desc": { es: "Análisis semanal de métricas y ajustes estratégicos. Cada mes es mejor que el anterior porque el sistema aprende y se adapta.", en: "Weekly metrics analysis and strategic adjustments. Each month is better than the last because the system learns and adapts." },
  "whypage.d6.title": { es: "Tecnología de punta", en: "Cutting-edge tech" },
  "whypage.d6.desc": { es: "Next.js, React, automatización con IA, CRM inteligente, email marketing automatizado. Usamos las mejores herramientas del mercado para construir tu ecosistema.", en: "Next.js, React, AI automation, smart CRM, automated email marketing. We use the best tools on the market to build your ecosystem." },
  "whypage.process.label": { es: "Nuestro proceso", en: "Our process" },
  "whypage.process.title": { es: "Así trabajamos", en: "How we work" },
  "whypage.step1.title": { es: "Diagnóstico", en: "Diagnosis" },
  "whypage.step1.desc": { es: "Analizamos tu negocio, tu mercado y tu competencia. Identificamos oportunidades y definimos la estrategia.", en: "We analyze your business, market, and competition. We identify opportunities and define the strategy." },
  "whypage.step2.title": { es: "Fundación", en: "Foundation" },
  "whypage.step2.desc": { es: "Construimos los cimientos: sitio web optimizado, CRM, flujos de automatización y canales de captación.", en: "We build the foundations: optimized website, CRM, automation flows, and acquisition channels." },
  "whypage.step3.title": { es: "Activación", en: "Activation" },
  "whypage.step3.desc": { es: "Encendemos el Flywheel: campañas, contenido, SEO, email marketing. Todo conectado y automatizado.", en: "We turn on the Flywheel: campaigns, content, SEO, email marketing. All connected and automated." },
  "whypage.step4.title": { es: "Optimización", en: "Optimization" },
  "whypage.step4.desc": { es: "Medimos, ajustamos y mejoramos. Cada semana analizamos resultados y optimizamos el sistema para mejor rendimiento.", en: "We measure, adjust, and improve. Each week we analyze results and optimize the system for better performance." },
  "whypage.cta": { es: "¿Listo para construir tu ecosistema?", en: "Ready to build your ecosystem?" },
  "whypage.cta.btn": { es: "Agendá tu consulta gratis", en: "Book your free consultation" },

  // Services page
  "svcpage.hero.title": { es: "Nuestros servicios", en: "Our services" },
  "svcpage.hero.sub": { es: "Todo lo que necesitás para dominar el mundo digital. Sin campañas aisladas, solo ecosistemas de crecimiento.", en: "Everything you need to dominate the digital world. No isolated campaigns, just growth ecosystems." },
  "svcpage.cta": { es: "¿Querés saber más sobre algún servicio?", en: "Want to learn more about a service?" },
  "svcpage.cta.btn": { es: "Hablemos por WhatsApp", en: "Let's chat on WhatsApp" },

  // Email
  "email.subject": { es: "Consulta desde addingagency.com", en: "Inquiry from addingagency.com" },
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
