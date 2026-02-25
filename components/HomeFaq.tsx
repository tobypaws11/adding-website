"use client";

import { FaqSection, FaqItem } from "@/components/FaqSection";

const homeFaqItems: FaqItem[] = [
  {
    question: "¿Qué tipo de negocios atienden en AdDing?",
    answer:
      "Trabajamos con PYMES, marcas personales y empresas en crecimiento en Costa Rica que buscan resultados concretos en digital. Si tenés un negocio y querés generar leads de forma consistente, podemos ayudarte.",
  },
  {
    question: "¿En cuánto tiempo voy a ver resultados?",
    answer:
      "La fase de fundación toma entre 2 y 5 semanas. Desde el segundo mes ya empezás a ver leads consistentes y métricas de crecimiento medibles con nuestro sistema Flywheel.",
  },
  {
    question: "¿Pueden ayudarme aunque no tenga equipo de marketing interno?",
    answer:
      "Sí. Nos integramos como tu equipo externo de marketing, ejecución y analítica. Vos te concentrás en tu negocio y nosotros nos encargamos de todo el ecosistema digital.",
  },
  {
    question: "¿Qué incluye el ecosistema digital de AdDing?",
    answer:
      "Incluye diseño web, SEO, automatización, agentes de IA, email marketing y generación de leads. Todo conectado para que cada pieza trabaje en conjunto y multiplique tus resultados.",
  },
  {
    question: "¿Trabajan con empresas fuera de Costa Rica?",
    answer:
      "Sí. Aunque estamos en Heredia, Costa Rica, atendemos clientes en toda Latinoamérica y el Caribe. Nuestro modelo es 100% digital, así que la ubicación no es una barrera.",
  },
];

export function HomeFaq() {
  return (
    <FaqSection
      items={homeFaqItems}
      label="FAQ"
      title="Preguntas frecuentes"
      subtitle="Lo que más nos preguntan antes de empezar"
    />
  );
}
