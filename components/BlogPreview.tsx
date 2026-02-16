import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const cards = [
  "Cómo elegir una estrategia digital para tu PYME",
  "Automatización inteligente: por dónde empezar",
  "SEO local en Costa Rica para negocios en crecimiento"
];

export function BlogPreview() {
  return (
    <section id="blog" className="bg-[#F6FAFF] py-20 md:py-28" aria-labelledby="blog-title">
      <div className="section-shell">
        <div id="portafolio" className="relative -top-24" aria-hidden="true" />
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Últimas del blog</p>
              <h2 id="blog-title" className="section-title">Insights para crecer con foco</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-brand-blue transition hover:text-black">
              Ir al blog →
            </Link>
          </div>
          <p className="section-subtitle">Estamos preparando recursos prácticos para ayudarte a tomar mejores decisiones en marketing digital e IA.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((title, idx) => (
            <Reveal key={title} delay={idx * 0.06}>
              <article className="rounded-3xl border border-black/5 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-blue">Próximamente</p>
                <h3 className="mt-3 font-title text-xl font-semibold text-[#1D1D1F]">{title}</h3>
                <p className="mt-3 text-sm text-black/60">Contenido en preparación para darte tácticas claras y aplicables desde el día uno.</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
