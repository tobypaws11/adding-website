"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "es" | "en";

type Translations = Record<string, Record<Lang, string>>;

const translations: Translations = {
  // Nav
  "nav.servicios": { es: "SERVICIOS", en: "SERVICES" },
  "nav.porque": { es: "POR QUÉ ADDING", en: "WHY ADDING" },
  "nav.blog": { es: "BLOG", en: "BLOG" },
  "nav.portfolio": { es: "PORTAFOLIO", en: "PORTFOLIO" },
  "nav.contacto": { es: "CONTACTO", en: "CONTACT" },
  "nav.hablemos": { es: "HABLEMOS", en: "LET'S TALK" },

  // Hero
  "hero.badge": { es: "Agencia digital con IA · Costa Rica", en: "AI-Powered Digital Agency · Costa Rica" },
  "hero.h1.1": { es: "CRECIMIENTO", en: "DIGITAL" },
  "hero.h1.2": { es: "", en: "" },
  "hero.h1.3": { es: "DIGITAL", en: "GROWTH" },
  "hero.p": {
    es: "Construimos el ecosistema digital que convierte prospectos en clientes leales. Más leads, más ventas, más retención: todo conectado, todo automatizado.",
    en: "We build the digital ecosystem that turns prospects into loyal customers. More leads, more sales, more retention: all connected, all automated."
  },
  "hero.cta": { es: "AGENDÁ TU LLAMADA GRATIS", en: "BOOK YOUR FREE CALL" },
  "hero.link": { es: "CONOCÉ NUESTROS SERVICIOS", en: "EXPLORE OUR SERVICES" },
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
  "services.title": { es: "Todo lo que necesitás para crecer en digital", en: "Everything you need to grow digitally" },
  "services.subtitle": {
    es: "Construimos ecosistemas digitales completos para PYMES, desde la primera visita hasta el cliente fiel, acompañándote en cada etapa del recorrido del cliente con automatización y mejora continua.",
    en: "We build complete digital ecosystems for SMBs, from first visit to loyal customer, guiding you through every stage of the customer journey with automation and continuous improvement."
  },
  "svc.web.title": { es: "Diseño y desarrollo web", en: "Web design & development" },
  "svc.web.desc": { es: "Sitios rápidos, modernos y optimizados para convertir visitas en oportunidades reales de negocio.", en: "Fast, modern sites optimized to turn visits into real business opportunities." },
  "svc.ai.title": { es: "Agentes de IA", en: "AI agents" },
  "svc.ai.desc": { es: "Asistentes inteligentes que responden, califican leads y automatizan tareas clave las 24 horas del día.", en: "Smart assistants that respond, qualify leads, and automate key tasks around the clock." },
  "svc.seo.title": { es: "SEO, GEO y marketing digital", en: "SEO, GEO & digital marketing" },
  "svc.seo.desc": { es: "Estrategias de SEO y GEO (optimización para IA) orientadas a datos para posicionarte en buscadores tradicionales y en respuestas generativas de IA.", en: "SEO & GEO (AI search optimization) strategies to rank in traditional search engines and AI-generated answers." },
  "svc.leads.title": { es: "Ecosistemas de leads", en: "Lead ecosystems" },
  "svc.leads.desc": { es: "Flywheel automatizado: prospección, nutrición, cierre y retención. Nada de campañas aisladas, solo sistemas de crecimiento predecible.", en: "Automated flywheel: prospecting, nurturing, closing, and retention. No isolated campaigns, just predictable growth systems." },
  "svc.email.title": { es: "Email marketing y newsletter", en: "Email marketing & newsletter" },
  "svc.email.desc": { es: "Secuencias automatizadas, nutrición inteligente y newsletters que mantienen a tus prospectos comprometidos hasta que convierten.", en: "Automated sequences, intelligent nurturing, and newsletters that keep prospects engaged until they convert." },
  "svc.auto.title": { es: "Automatización", en: "Automation" },
  "svc.auto.desc": { es: "CRM, seguimientos, onboarding y flujos conectados que ahorran tiempo, reducen errores y escalan sin fricción.", en: "CRM, follow-ups, onboarding, and connected flows that save time, reduce errors, and scale without friction." },

  // Portfolio
  "portfolio.eyebrow": { es: "NUESTRO TRABAJO", en: "OUR WORK" },
  "portfolio.title": { es: "Proyectos que hablan\npor sí solos.", en: "Projects that speak\nfor themselves." },
  "portfolio.subtitle": { es: "Cada proyecto es un ecosistema digital diseñado para generar resultados reales.", en: "Every project is a digital ecosystem designed to generate real results." },
  "portfolio.cta": { es: "¿Querés ser el próximo?", en: "Want to be next?" },

  // Why AdDing
  "why.label": { es: "POR QUÉ ADDING", en: "WHY ADDING" },
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
  "guarantee.2.desc": { es: "Dashboard en tiempo real donde vas a ver exactamente de dónde vienen tus leads y cuáles convierten mejor.", en: "Real-time dashboard where you'll see exactly where your leads come from and which convert best." },
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
  "blog.title": { es: "Últimos artículos", en: "Latest articles" },
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
    es: "Sí. Nos integramos como tu equipo externo de marketing, ejecución y analítica para que puedas avanzar sin fricción. Estrategia, contenido, ads, CRM, email, todo incluido.",
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
  "cta.btn": { es: "AGENDÁ TU LLAMADA GRATIS", en: "BOOK YOUR FREE CALL" },

  // Footer
  "footer.tagline": {
    es: "Impulsamos empresas y emprendimientos con estrategias digitales inteligentes, tecnológicas y efectivas.",
    en: "We empower businesses and startups with smart, technology-driven, and effective digital strategies."
  },
  "footer.servicios": { es: "SERVICIOS", en: "SERVICES" },
  "footer.empresa": { es: "EMPRESA", en: "COMPANY" },
  "footer.contacto": { es: "CONTACTO", en: "CONTACT" },
  "footer.legal": { es: "Legal", en: "Legal" },
  "footer.terms": { es: "TÉRMINOS Y CONDICIONES", en: "TERMS & CONDITIONS" },
  "footer.privacy": { es: "POLÍTICA DE PRIVACIDAD", en: "PRIVACY POLICY" },
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
  "blog.visit": { es: "IR AL BLOG", en: "VISIT BLOG" },
  "blog.back": { es: "VOLVER AL INICIO", en: "BACK TO HOME" },
  "blog.categories": { es: "Categorías", en: "Categories" },
  "blog.cat.seo": { es: "SEO y Posicionamiento", en: "SEO & Rankings" },
  "blog.cat.ai": { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
  "blog.cat.auto": { es: "Automatización", en: "Automation" },
  "blog.cat.leads": { es: "Generación de Leads", en: "Lead Generation" },
  "blog.cat.marketing": { es: "Marketing Digital", en: "Digital Marketing" },
  "blog.subscribe.title": { es: "Suscribite al newsletter", en: "Subscribe to our newsletter" },
  "blog.subscribe.p": { es: "Recibí las últimas guías y estrategias directo en tu correo.", en: "Get the latest guides and strategies straight to your inbox." },
  "blog.subscribe.placeholder": { es: "Tu correo electrónico", en: "Your email address" },
  "blog.subscribe.btn": { es: "SUSCRIBIRME", en: "SUBSCRIBE" },

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
  "whypage.cta.btn": { es: "AGENDÁ TU CONSULTA GRATIS", en: "BOOK YOUR FREE CONSULTATION" },

  // Services page
  "svcpage.hero.title": { es: "Nuestros servicios", en: "Our services" },
  "svcpage.hero.sub": { es: "Todo lo que necesitás para dominar el mundo digital. Sin campañas aisladas, solo ecosistemas de crecimiento.", en: "Everything you need to dominate the digital world. No isolated campaigns, just growth ecosystems." },
  "svcpage.cta": { es: "¿Querés saber más sobre algún servicio?", en: "Want to learn more about a service?" },
  "svcpage.cta.btn": { es: "HABLEMOS POR WHATSAPP", en: "LET'S CHAT ON WHATSAPP" },

  // Nav extras
  "nav.nosotros": { es: "NOSOTROS", en: "ABOUT" },

  // About page
  "about.hero.title": { es: "Somos AdDing", en: "We are AdDing" },
  "about.hero.sub": { es: "Una agencia digital impulsada por inteligencia artificial, nacida en Costa Rica para transformar negocios.", en: "An AI-powered digital agency, born in Costa Rica to transform businesses." },
  "about.mission.label": { es: "Nuestra misión", en: "Our mission" },
  "about.mission.title": { es: "Impulsar el crecimiento de empresas y emprendimientos", en: "Drive growth for businesses and startups" },
  "about.mission.p": { es: "Creemos que cada negocio merece acceso a herramientas digitales de primer nivel. No importa si sos una PYME que está empezando o una empresa establecida, nuestro objetivo es construir ecosistemas digitales que generen resultados reales y sostenibles.", en: "We believe every business deserves access to first-class digital tools. Whether you're a startup or an established company, our goal is to build digital ecosystems that generate real, sustainable results." },
  "about.vision.label": { es: "Nuestra visión", en: "Our vision" },
  "about.vision.title": { es: "Ver un futuro brillante para cada marca", en: "See a bright future for every brand" },
  "about.vision.p": { es: "\"SEE YOU IN A BRIGHT FUTURE\" no es solo un tagline. Es nuestra promesa. Queremos que cada cliente que trabaje con nosotros vea resultados tangibles y construya un negocio digital que funcione incluso mientras duerme.", en: "\"SEE YOU IN A BRIGHT FUTURE\" isn't just a tagline. It's our promise. We want every client who works with us to see tangible results and build a digital business that works even while they sleep." },
  "about.values.label": { es: "Nuestros valores", en: "Our values" },
  "about.values.title": { es: "Lo que nos define", en: "What defines us" },
  "about.v1.title": { es: "Innovación constante", en: "Constant innovation" },
  "about.v1.desc": { es: "Usamos las últimas tecnologías y metodologías. Si hay una forma mejor de hacer algo, la encontramos.", en: "We use the latest technologies and methodologies. If there's a better way to do something, we find it." },
  "about.v2.title": { es: "Resultados sobre promesas", en: "Results over promises" },
  "about.v2.desc": { es: "No vendemos humo. Cada acción que tomamos está orientada a generar impacto medible en tu negocio.", en: "We don't sell smoke. Every action we take is aimed at generating measurable impact on your business." },
  "about.v3.title": { es: "Transparencia radical", en: "Radical transparency" },
  "about.v3.desc": { es: "Dashboards en tiempo real, reportes claros y comunicación directa. Siempre vas a saber qué estamos haciendo y por qué.", en: "Real-time dashboards, clear reports, and direct communication. You'll always know what we're doing and why." },
  "about.v4.title": { es: "Compromiso genuino", en: "Genuine commitment" },
  "about.v4.desc": { es: "No somos un proveedor más. Nos involucramos en tu negocio como si fuera nuestro, porque tu éxito es nuestro éxito.", en: "We're not just another vendor. We get involved in your business as if it were ours, because your success is our success." },
  "about.tagline": { es: "SEE YOU IN A BRIGHT FUTURE.", en: "SEE YOU IN A BRIGHT FUTURE." },
  "about.location": { es: "Costa Rica", en: "Costa Rica" },
  "about.location.desc": { es: "Con base en Heredia, operamos de forma remota para clientes en toda Latinoamérica y el mundo.", en: "Based in Heredia, we operate remotely for clients throughout Latin America and the world." },

  // Contact page
  "contact.hero.title": { es: "Hablemos", en: "Let's talk" },
  "contact.hero.sub": { es: "¿Tenés un proyecto en mente? ¿Querés hacer crecer tu negocio en digital? Contactanos y te respondemos en menos de 24 horas.", en: "Have a project in mind? Want to grow your business digitally? Contact us and we'll respond within 24 hours." },
  "contact.wa.title": { es: "WhatsApp", en: "WhatsApp" },
  "contact.wa.desc": { es: "La forma más rápida de contactarnos. Respondemos en minutos.", en: "The fastest way to reach us. We respond in minutes." },
  "contact.wa.btn": { es: "ESCRIBINOS POR WHATSAPP", en: "MESSAGE US ON WHATSAPP" },
  "contact.email.title": { es: "Email", en: "Email" },
  "contact.email.desc": { es: "Para consultas formales o propuestas detalladas.", en: "For formal inquiries or detailed proposals." },
  "contact.location.title": { es: "Ubicación", en: "Location" },
  "contact.location.desc": { es: "Heredia, Costa Rica. Operamos de forma remota para clientes en todo el mundo.", en: "Heredia, Costa Rica. We operate remotely for clients worldwide." },
  "contact.hours.title": { es: "Horario", en: "Hours" },
  "contact.hours.desc": { es: "Lunes a viernes, 9:00 AM a 6:00 PM (hora de Costa Rica, GMT-6)", en: "Monday to Friday, 9:00 AM to 6:00 PM (Costa Rica time, GMT-6)" },
  "contact.social.title": { es: "Seguinos en redes", en: "Follow us" },

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
