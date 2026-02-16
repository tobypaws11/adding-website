import { Reveal } from "@/components/Reveal";

const points = [
  {
    title: "Ecosistema, no campañas",
    description: "Construimos un Flywheel automatizado donde cada etapa alimenta la siguiente — prospección, nutrición, cierre, retención y crecimiento."
  },
  {
    title: "IA y automatización real",
    description: "Usamos inteligencia artificial en cada paso: agentes que responden 24/7, CRM automatizado, follow-ups inteligentes y optimización basada en data."
  },
  {
    title: "Resultados medibles",
    description: "Trabajás con KPIs reales de negocio — leads calificados, costo por adquisición, conversión y retorno. Nada de métricas de vanidad."
  }
];

const comparisons = [
  { them: "Campañas aisladas sin conexión", us: "Ecosistema Flywheel integrado" },
  { them: "Solo ejecución, sin estrategia", us: "Estrategia + Ejecución + Optimización" },
  { them: "Métricas de vanidad (likes)", us: "KPIs de negocio que impactan ingresos" },
  { them: "Trabajo manual, no escalable", us: "Automatización inteligente y escalable" },
];

export function WhyAdding() {
  return (
    <section id="porque-adding" className="bg-[#1D1D1F] py-20 text-white md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-yellow">Por qué AdDing</p>
          <h2 className="mt-4 font-title text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            No somos una agencia más. Somos tu sistema de crecimiento.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Especialistas en crear ecosistemas digitales automatizados que transforman prospectos en clientes leales. No hacemos campañas aisladas — construimos crecimiento predecible.
          </p>

          <div className="mt-10 space-y-8">
            {points.map((point, idx) => (
              <div key={point.title} className="flex gap-4">
                <span className="font-title text-3xl font-bold text-brand-blue sm:text-4xl">0{idx + 1}</span>
                <div>
                  <h3 className="font-title text-lg font-semibold sm:text-xl">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <h3 className="font-title text-lg font-semibold sm:text-xl">Otros proveedores vs AdDing</h3>
            <div className="mt-6 space-y-4">
              {comparisons.map((c) => (
                <div key={c.us} className="grid grid-cols-2 gap-3 border-b border-white/10 pb-4 last:border-0">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400" aria-hidden="true">✕</span>
                    <p className="text-xs leading-relaxed text-white/50 sm:text-sm">{c.them}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-emerald-400" aria-hidden="true">✓</span>
                    <p className="text-xs font-medium leading-relaxed text-white/90 sm:text-sm">{c.us}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
