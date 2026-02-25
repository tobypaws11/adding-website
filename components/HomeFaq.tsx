"use client";

import { FaqSection, FaqItem } from "@/components/FaqSection";

const homeFaqItems: FaqItem[] = [
  {
    question: "¿Qué tipo de negocios atienden en AdDing?",
    answer:
      "Trabajamos con PYMES, marcas personales y empresas en crecimiento en Costa Rica que necesitan posicionamiento local, más leads y conversiones reales. Si tenés un negocio en Heredia, San José o cualquier parte del país y querés aparecer en Google y en buscadores con IA, podemos ayudarte.",
  },
  {
    question: "¿En cuánto tiempo voy a ver resultados con SEO y GEO?",
    answer:
      "La fase de fundación toma entre 2 y 5 semanas. Desde el segundo mes ya empezás a ver leads consistentes y métricas de crecimiento medibles con nuestro sistema Flywheel. Los resultados de SEO Costa Rica y posicionamiento local se consolidan entre el tercer y sexto mes.",
  },
  {
    question: "¿Qué incluye el ecosistema digital de AdDing?",
    answer:
      "Incluye diseño web, SEO, GEO (Generative Engine Optimization), automatización, agentes de IA, email marketing, Google Business Profile y generación de leads. Todo conectado para que cada pieza trabaje en conjunto y multiplique tus conversiones.",
  },
  {
    question: "¿Pueden ayudarme con mi perfil de Google Business y posicionamiento local?",
    answer:
      "Sí. Optimizamos tu Google Business Profile para que tu negocio aparezca en búsquedas locales en Costa Rica. Combinamos eso con SEO on-page, GEO y contenido estratégico para que generés más leads desde Google Maps y buscadores con inteligencia artificial.",
  },
  {
    question: "¿Trabajan con empresas fuera de Costa Rica?",
    answer:
      "Sí. Aunque estamos en Heredia, Costa Rica, atendemos clientes en toda Latinoamérica y el Caribe. Nuestro modelo de SEO, GEO y marketing digital es 100% digital, así que la ubicación no es una barrera para lograr posicionamiento y conversiones.",
  },
];

export function HomeFaq() {
  return (
    <FaqSection
      items={homeFaqItems}
      label="FAQ"
      title="Preguntas frecuentes"
      subtitle="Lo que más nos preguntan antes de empezar"
      ctaText="Ver más preguntas frecuentes"
      ctaHref="/faq"
    />
  );
}
