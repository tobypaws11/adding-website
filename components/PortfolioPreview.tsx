"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const featured = [
  {
    id: "iris-studio",
    name: "Iris Studio",
    category: "Marketplace",
    tagline: "Directorio creativo para fotógrafos y realizadores en Costa Rica",
    screenshot: "/portfolio/iris-studio.jpg",
    url: "https://iris-studio-three.vercel.app",
  },
  {
    id: "mdm",
    name: "MDM — Mueble Diseño M",
    category: "Diseño Web",
    tagline: "Sitio web de alta gama para mueblería de diseño",
    screenshot: "/portfolio/mdm.jpg",
    url: "#",
  },
  {
    id: "eventicos",
    name: "Eventicos",
    category: "Plataforma Digital",
    tagline: "El directorio de eventos número uno de Costa Rica",
    screenshot: "/portfolio/eventicos.jpg",
    url: "https://eventicos.cr",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.4em] text-primary mb-4">
            PORTAFOLIO
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            Trabajo que genera <span className="text-primary">resultados.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-white/50 text-lg max-w-2xl font-light mb-12">
            Proyectos reales, resultados reales. Cada ecosistema digital que construimos está diseñado para crecer.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={(i * 100) as 0 | 100 | 200}>
              <div className="group card-glow bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={project.name}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Ver proyecto →
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg font-black text-white mt-3 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/50 font-light">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="text-center">
            <Link
              href="/portafolio"
              className="inline-block border border-primary/40 text-primary px-10 py-3 text-xs font-black tracking-widest hover:bg-primary hover:text-white transition-all"
            >
              VER TODOS LOS PROYECTOS →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
