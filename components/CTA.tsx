import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section id="contacto" className="bg-gradient-to-b from-white to-brand-light py-20 md:py-28">
      <Reveal className="section-shell text-center">
        <p className="section-label">¿Listo para crecer?</p>
        <h2 className="mt-4 font-title text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Hagamos que tu marca
          <br />
          <span className="text-brand-blue">brille.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/65 md:text-lg">
          Agendá una llamada gratuita y descubrí cómo podemos convertir tu presencia digital en crecimiento real para tu negocio.
        </p>
        <a
          href="https://wa.me/50670136366"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
        >
          Agendá tu llamada gratis
        </a>
      </Reveal>
    </section>
  );
}
