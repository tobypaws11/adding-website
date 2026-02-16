import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Diseño y Desarrollo Web",
    icon: "🌐",
    desc: "Sitios rápidos, modernos y optimizados para convertir visitas en oportunidades reales de negocio."
  },
  {
    title: "Agentes de IA",
    icon: "🤖",
    desc: "Asistentes inteligentes que responden, califican leads y automatizan tareas clave las 24 horas del día."
  },
  {
    title: "SEO y Marketing Digital",
    icon: "📊",
    desc: "Estrategias orientadas a datos para posicionarte orgánicamente y generar tráfico calificado constante."
  },
  {
    title: "Ecosistemas de Leads",
    icon: "🎯",
    desc: "Flywheel automatizado: prospección, nutrición, cierre y retención. No campañas aisladas — sistemas de crecimiento predecible."
  },
  {
    title: "Email Marketing y Newsletter",
    icon: "📧",
    desc: "Secuencias automatizadas, nurturing inteligente y newsletters que mantienen a tus prospectos comprometidos hasta la conversión."
  },
  {
    title: "Automatización",
    icon: "⚡",
    desc: "CRM, follow-ups, onboarding y flujos conectados que ahorran tiempo, reducen errores y escalan sin fricción."
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
            Construimos ecosistemas digitales completos para PYMES en Costa Rica — desde la primera visita hasta el cliente fiel, con automatización y mejora continua.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.05}>
              <article className="h-full rounded-3xl border border-transparent bg-[#F5F7FA] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:bg-white hover:shadow-soft">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-title text-xl font-semibold text-[#1D1D1F] sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-black/65">{service.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
