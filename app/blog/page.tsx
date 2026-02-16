import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Pronto vas a encontrar artículos sobre marketing digital, IA y crecimiento para PYMES en Costa Rica."
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-brand-light px-6 py-16">
      <section className="w-full max-w-2xl rounded-3xl border border-black/5 bg-white p-10 text-center shadow-card">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Blog AdDing</p>
        <h1 className="mt-4 font-title text-4xl font-bold leading-tight text-brand-black md:text-5xl">Estamos preparando contenido que te va a servir de verdad.</h1>
        <p className="mt-5 text-base text-black/65 md:text-lg">
          Muy pronto vas a ver guías accionables sobre SEO, marketing digital, automatización y agentes de IA para hacer crecer tu negocio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}
