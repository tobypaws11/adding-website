import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "¿Qué tipo de negocios atienden?",
    a: "Trabajamos con PYMES, marcas personales y empresas en crecimiento que buscan resultados concretos en digital. Nuestro enfoque es construir ecosistemas completos de generación de leads, no campañas aisladas."
  },
  {
    q: "¿En cuánto tiempo podría ver resultados?",
    a: "Depende del servicio, pero normalmente la fase de fundación toma entre 2 y 5 semanas. Desde el segundo mes ya empezás a ver leads consistentes y métricas de crecimiento medibles."
  },
  {
    q: "¿Pueden ayudarme aunque no tenga equipo interno?",
    a: "Sí. Nos integramos como tu equipo externo de marketing, ejecución y analítica para que podás avanzar sin fricción. Estrategia, contenido, ads, CRM, email — todo incluido."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28" aria-labelledby="faq-title">
      <div className="section-shell">
        <Reveal>
          <p className="section-label">Preguntas frecuentes</p>
          <h2 id="faq-title" className="section-title">Respuestas claras para decidir mejor</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {faqs.map((faq, idx) => (
            <Reveal key={faq.q} delay={idx * 0.06}>
              <article className="h-full rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="font-title text-lg font-semibold text-[#1D1D1F]">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{faq.a}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
