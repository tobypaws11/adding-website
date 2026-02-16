import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const points = [
  {
    title: "IA en cada paso",
    description: "Investigamos, creamos y optimizamos con inteligencia artificial para entregar más valor en menos tiempo."
  },
  {
    title: "Precios accesibles",
    description: "Te damos un estándar alto de agencia digital sin costos inflados ni paquetes innecesarios."
  },
  {
    title: "Resultados medibles",
    description: "Trabajás con KPIs claros para que sepás qué está funcionando y dónde conviene invertir más."
  }
];

export function WhyAdding() {
  return (
    <section id="porque-adding" className="bg-[#1D1D1F] py-20 text-white md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-yellow">Por qué AdDing</p>
          <h2 className="mt-4 font-title text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            No somos una agencia más. Somos tu ventaja competitiva.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Integramos marketing digital, IA y ejecución creativa en un solo equipo para acelerar crecimiento de marcas y PYMES en Costa Rica.
          </p>

          <div className="mt-10 space-y-8">
            {points.map((point, idx) => (
              <div key={point.title} className="flex gap-4">
                <span className="font-title text-4xl font-bold text-brand-blue">0{idx + 1}</span>
                <div>
                  <h3 className="font-title text-xl font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="font-title text-xl font-semibold">Métricas clave</h3>
            <div className="mt-6 space-y-5">
              <div className="flex items-end justify-between border-b border-white/10 pb-4">
                <p className="text-sm text-white/60">Tiempo promedio de entrega</p>
                <p className="text-2xl font-bold text-brand-blue">2 sem</p>
              </div>
              <div className="flex items-end justify-between border-b border-white/10 pb-4">
                <p className="text-sm text-white/60">Satisfacción de clientes</p>
                <p className="text-2xl font-bold text-brand-blue">
                  <Counter to={98} suffix="%" />
                </p>
              </div>
              <div className="flex items-end justify-between border-b border-white/10 pb-4">
                <p className="text-sm text-white/60">ROI promedio</p>
                <p className="text-2xl font-bold text-brand-blue">
                  <Counter to={5.2} decimals={1} suffix="x" />
                </p>
              </div>
              <div className="flex items-end justify-between border-b border-white/10 pb-4">
                <p className="text-sm text-white/60">Proyectos completados</p>
                <p className="text-2xl font-bold text-brand-blue">
                  <Counter to={40} suffix="+" />
                </p>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-sm text-white/60">Ahorro vs agencia tradicional</p>
                <p className="text-2xl font-bold text-brand-yellow">-60%</p>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
