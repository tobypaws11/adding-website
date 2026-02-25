"use client";

import { FaqSection, FaqItem } from "@/components/FaqSection";

const serviciosFaqItems: FaqItem[] = [
  {
    question: "¿Cómo funciona el sistema Flywheel de generación de leads?",
    answer:
      "Es un ciclo automatizado de 4 etapas: atracción, captación, nutrición y conversión. Cada etapa alimenta la siguiente, así que entre más tiempo funciona, mejores resultados genera para tu negocio.",
  },
  {
    question: "¿Qué es SEO y por qué lo necesita mi negocio?",
    answer:
      "SEO (Search Engine Optimization) es el proceso de optimizar tu sitio web para que aparezca en los primeros resultados de Google. Si tu negocio no aparece cuando alguien busca tus servicios en Costa Rica, estás perdiendo clientes todos los días.",
  },
  {
    question: "¿Qué es GEO y en qué se diferencia del SEO?",
    answer:
      "GEO (Generative Engine Optimization) optimiza tu presencia para buscadores con inteligencia artificial como ChatGPT, Gemini y Perplexity. Mientras el SEO te posiciona en Google, el GEO asegura que la IA recomiende tu negocio cuando alguien pregunta por servicios como los tuyos.",
  },
  {
    question: "¿Cuánto cuesta contratar los servicios de AdDing?",
    answer:
      "Cada proyecto es único. Armamos paquetes personalizados según tus objetivos y presupuesto. Escribinos por WhatsApp y te damos una cotización sin compromiso en menos de 24 horas.",
  },
  {
    question: "¿Qué tipo de automatización pueden implementar?",
    answer:
      "Automatizamos CRM, seguimiento de leads, onboarding de clientes, email marketing, agendamiento y notificaciones. Todo se integra con herramientas como WhatsApp, email y calendario para que nada se pierda.",
  },
  {
    question: "¿Cómo funcionan los agentes de IA que ofrecen?",
    answer:
      "Son chatbots inteligentes que atienden a tus clientes 24/7 por WhatsApp y web. Califican leads, responden preguntas frecuentes, agendan citas y se entrenan específicamente para tu negocio.",
  },
  {
    question: "¿Necesito tener un sitio web para trabajar con ustedes?",
    answer:
      "No. Podemos crear tu sitio web desde cero como parte del ecosistema digital. Lo diseñamos optimizado para velocidad, SEO y conversión desde el primer día.",
  },
  {
    question: "¿Cómo miden los resultados de sus servicios?",
    answer:
      "Usamos dashboards con métricas claras: leads generados, tasa de conversión, posicionamiento en Google, tráfico web y ROI. Recibís reportes mensuales para que sepás exactamente cómo va tu inversión.",
  },
  {
    question: "¿Puedo contratar solo un servicio o tengo que tomar el paquete completo?",
    answer:
      "Podés contratar servicios individuales. Sin embargo, recomendamos el ecosistema completo porque cada pieza potencia las demás. Un sitio web sin SEO es como una tienda sin dirección.",
  },
  {
    question: "¿Qué diferencia a AdDing de otras agencias de marketing en Costa Rica?",
    answer:
      "Combinamos marketing digital con inteligencia artificial y automatización real. No vendemos likes ni seguidores: construimos ecosistemas que generan leads y ventas medibles. Además, optimizamos para SEO y GEO, algo que muy pocas agencias en el país ofrecen.",
  },
];

export function ServiciosFaq() {
  return (
    <FaqSection
      items={serviciosFaqItems}
      label="FAQ"
      title="Todo lo que necesitás saber sobre nuestros servicios"
      subtitle="Respondemos las preguntas más comunes sobre marketing digital, SEO, GEO e inteligencia artificial para tu negocio"
    />
  );
}
