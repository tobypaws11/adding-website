import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Diseño y Desarrollo Web",
    icon: "🌐",
    desc: "Sitios rapidos, modernos y optimizados para convertir visitas en oportunidades reales."
  },
  {
    title: "Agentes de IA",
    icon: "🤖",
    desc: "Asistentes inteligentes que responden, califican y automatizan tareas clave para tu negocio."
  },
  {
    title: "SEO y Marketing Digital",
    icon: "📊",
    desc: "Estrategias orientadas a datos para posicionarte y sostener crecimiento orgánico de calidad."
  },
  {
    title: "Identidad de Marca",
    icon: "📸",
    desc: "Construimos sistemas visuales coherentes que hacen tu marca memorable en cada canal."
  },
  {
    title: "Producción de Video",
    icon: "🎬",
    desc: "Contenido audiovisual dinamico para redes, anuncios y presentaciones de alto impacto."
  },
  {
    title: "Automatización",
    icon: "⚡",
    desc: "Flujos conectados que ahorran tiempo, reducen errores y escalan procesos sin fricción."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="section-label">Servicios</p>
          <h2 className="section-title">Todo lo que necesitás para crecer en digital.</h2>
          <p className="section-subtitle">
            Acompañamos a PYMES de Costa Rica con estrategia, ejecución y analítica para convertir esfuerzo digital en resultados medibles que vos sí sentís.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.05}>
              <article className="h-full rounded-3xl border border-transparent bg-[#F5F7FA] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:bg-white hover:shadow-soft">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-title text-2xl font-semibold text-[#1D1D1F]">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/65">{service.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
