import { Reveal } from "@/components/Reveal";

export function BlogPreview() {
  return (
    <section id="blog" className="bg-[#F6FAFF] py-20 md:py-28" aria-labelledby="blog-title">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="section-label">Blog</p>
          <h2 id="blog-title" className="section-title">Estamos construyendo algo bueno.</h2>
          <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-brand-yellow/15 text-5xl" aria-hidden="true">
            🏗️
          </div>
          <p className="mt-6 text-base leading-relaxed text-black/60 md:text-lg">
            Muy pronto vas a encontrar guías accionables sobre SEO, marketing digital, automatización y agentes de IA para hacer crecer tu negocio.
          </p>
          <p className="mt-3 text-sm font-medium text-brand-blue">Próximamente</p>
        </Reveal>
      </div>
    </section>
  );
}
