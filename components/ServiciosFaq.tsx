"use client";

import { FaqSection, FaqItem } from "@/components/FaqSection";

const serviciosFaqItems: FaqItem[] = [
  {
    question: "¿Cómo funciona el sistema Flywheel de generación de leads?",
    answer:
      "Es un ciclo automatizado de 4 etapas: atracción, captación, nutrición y conversión. Combinamos SEO Costa Rica, GEO, Google Business Profile y automatización para que cada etapa alimente la siguiente y tu negocio genere leads y conversiones de forma constante.",
  },
  {
    question: "¿Qué es SEO y por qué lo necesita mi negocio en Costa Rica?",
    answer:
      "SEO (Search Engine Optimization) es el proceso de optimizar tu sitio web para que aparezca en los primeros resultados de Google. Si tu negocio en Heredia, San José o cualquier zona de Costa Rica no aparece cuando alguien busca tus servicios, estás perdiendo leads y clientes todos los días.",
  },
  {
    question: "¿Qué es GEO y en qué se diferencia del SEO?",
    answer:
      "GEO (Generative Engine Optimization) optimiza tu presencia para buscadores con inteligencia artificial como ChatGPT, Gemini y Perplexity. Mientras el SEO te posiciona en Google, el GEO asegura que la IA recomiende tu negocio cuando alguien pregunta por servicios en Costa Rica como los tuyos. Juntos, SEO y GEO maximizan tu posicionamiento local y tus conversiones.",
  },
  {
    question: "¿Cuánto cuesta contratar los servicios de AdDing?",
    answer:
      "Cada proyecto es único. Armamos paquetes personalizados de SEO, GEO, automatización y diseño web según tus objetivos y presupuesto. Escribinos por WhatsApp y te damos una cotización sin compromiso en menos de 24 horas.",
  },
  {
    question: "¿Qué tipo de automatización pueden implementar para generar más leads?",
    answer:
      "Automatizamos CRM, seguimiento de leads, onboarding de clientes, email marketing, agendamiento y notificaciones. Todo se integra con herramientas como WhatsApp, email y calendario para que ningún lead se pierda y tus conversiones aumenten.",
  },
  {
    question: "¿Cómo funcionan los agentes de IA que ofrecen?",
    answer:
      "Son chatbots inteligentes que atienden a tus clientes 24/7 por WhatsApp y web. Califican leads, responden preguntas frecuentes, agendan citas y se entrenan específicamente para tu negocio en Costa Rica.",
  },
  {
    question: "¿Necesito tener un sitio web para trabajar con ustedes?",
    answer:
      "No. Podemos crear tu sitio web desde cero como parte del ecosistema digital. Lo diseñamos optimizado para velocidad, SEO Costa Rica, posicionamiento local y conversión desde el primer día.",
  },
  {
    question: "¿Cómo miden los resultados de SEO, GEO y marketing digital?",
    answer:
      "Usamos dashboards con métricas claras: leads generados, tasa de conversión, posicionamiento en Google, visibilidad en buscadores con IA, tráfico web y ROI. Recibís reportes mensuales para que sepás exactamente cómo va tu inversión.",
  },
  {
    question: "¿Puedo contratar solo SEO o tengo que tomar el paquete completo?",
    answer:
      "Podés contratar servicios individuales como SEO, GEO o diseño web. Sin embargo, recomendamos el ecosistema completo porque cada pieza potencia las demás. Un sitio web sin SEO es como una tienda sin dirección, y sin GEO perdés visibilidad en buscadores con IA.",
  },
  {
    question: "¿Qué diferencia a AdDing de otras agencias de marketing en Costa Rica?",
    answer:
      "Combinamos marketing digital con inteligencia artificial y automatización real desde Heredia, Costa Rica. No vendemos likes ni seguidores: construimos ecosistemas que generan leads y ventas medibles. Además, optimizamos para SEO y GEO con Google Business Profile, algo que muy pocas agencias en el país ofrecen.",
  },
];

export function ServiciosFaq() {
  return (
    <FaqSection
      items={serviciosFaqItems}
      label="FAQ"
      title="Preguntas frecuentes sobre SEO, GEO y marketing digital en Costa Rica"
      subtitle="Respondemos las dudas más comunes sobre SEO Costa Rica, GEO, Google Business Profile, posicionamiento local, leads y conversiones para tu negocio"
    />
  );
}
