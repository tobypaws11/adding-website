import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="testimonios-title">
      <Reveal className="section-shell text-center">
        <p className="section-label">Testimonios</p>
        <h2 id="testimonios-title" className="mt-4 font-title text-3xl font-bold tracking-tight text-[#1D1D1F] md:text-4xl">
          Lo que dicen nuestros clientes
        </h2>
        <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-light leading-relaxed text-black/80 md:text-4xl">
          "AdDing transformo nuestra presencia digital y en pocos meses vimos resultados medibles."
        </blockquote>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.1em] text-black/60">Testimonio real proximamente</p>
      </Reveal>
    </section>
  );
}
