import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "Qué tipo de negocios atienden?",
    a: "Trabajamos con PYMES, marcas personales y empresas en crecimiento que necesiten resultados concretos en digital."
  },
  {
    q: "En cuánto tiempo podrías ver resultados?",
    a: "Depende del servicio, pero normalmente definimos metas desde el inicio y mostramos avances medibles desde las primeras semanas."
  },
  {
    q: "Pueden ayudarte aunque no tengás equipo interno?",
    a: "Sí. Nos integramos como tu equipo externo de marketing, ejecución y analítica para que podás avanzar sin fricción."
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

        <div className="mt-10 grid gap-4 md:grid-cols-3">
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
