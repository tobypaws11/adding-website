import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="testimonios-title">
      <Reveal className="section-shell text-center">
        <p className="section-label">Testimonios</p>
        <h2 id="testimonios-title" className="mt-4 font-title text-2xl font-bold tracking-tight text-[#1D1D1F] sm:text-3xl md:text-4xl">
          Lo que dicen nuestros clientes
        </h2>
        <blockquote className="mx-auto mt-8 max-w-4xl text-xl font-light leading-relaxed text-black/80 sm:text-2xl md:text-4xl">
          &ldquo;Gracias a la estrategia de marketing digital de AdDing, hemos generado un flujo constante de leads calificados que logramos convertir en clientes fieles. El sistema que construyeron nos dio previsibilidad en ingresos y relaciones de largo plazo con nuestros clientes.&rdquo;
        </blockquote>
        <div className="mt-7">
          <p className="text-sm font-semibold text-[#1D1D1F]">Osvaldo Molina</p>
          <p className="text-sm text-black/55">Socio — Trumix</p>
        </div>
      </Reveal>
    </section>
  );
}
