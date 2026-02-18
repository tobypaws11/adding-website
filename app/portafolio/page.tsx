"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    id: "iris-studio",
    name: "Iris Studio",
    category: "Marketplace",
    year: "2025",
    tagline: "Directorio creativo para fotógrafos y realizadores en Costa Rica",
    tags: ["Next.js", "Marketplace", "UX/UI"],
    url: "#",
    screenshot: "/portfolio/iris-studio.jpg",
    status: "development",
  },
  {
    id: "mdm",
    name: "MDM — Mueble Diseño M",
    category: "Diseño Web",
    year: "2025",
    tagline: "Sitio web de alta gama para mueblería de diseño",
    tags: ["Next.js", "Diseño Web", "Lead Gen"],
    url: "https://mdm.cr/",
    screenshot: "/portfolio/mdm.jpg",
    status: "live",
  },
  {
    id: "eventicos",
    name: "Eventicos",
    category: "Plataforma Digital",
    year: "2025",
    tagline: "El directorio de eventos número uno de Costa Rica",
    tags: ["Plataforma", "Eventos", "Monetización"],
    url: "https://eventicos.net",
    screenshot: "/portfolio/eventicos.jpg",
    status: "live",
  },
  {
    id: "trumix",
    name: "Trumix",
    category: "Diseño Web",
    year: "2026",
    tagline: "Control de plagas profesional — presencia digital impecable",
    tags: ["Diseño Web", "Branding Digital"],
    url: "https://trumix.net/",
    screenshot: "/portfolio/trumix.jpg",
    status: "live",
  },
  {
    id: "villa-solstice",
    name: "Villa Solstice",
    category: "Real Estate",
    year: "2026",
    tagline: "Alquiler vacacional de lujo en Hacienda Pinilla, CR",
    tags: ["Real Estate", "Turismo", "Lujo"],
    url: "#",
    screenshot: "/portfolio/villa-solstice.jpg",
    status: "development",
  },
  {
    id: "ezelandscape",
    name: "Eze Landscape",
    category: "Diseño Web",
    year: "2026",
    tagline: "Paisajismo y jardines — presencia web que inspira",
    tags: ["Diseño Web", "Paisajismo"],
    url: "#",
    screenshot: "/portfolio/ezelandscape.jpg",
    status: "development",
  },
];

const categories = ["Todos", "Diseño Web", "Marketplace", "Plataforma Digital", "Real Estate"];

export default function PortafolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Nav />
      <main className="page-enter pt-20 md:pt-28">
        {/* Hero */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12 pb-16 md:pt-20 md:pb-24">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.4em] text-primary mb-4">
              NUESTRO TRABAJO
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6">
              Proyectos que hablan
              <br />
              <span className="text-primary">por sí solos.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Cada proyecto es un ecosistema digital diseñado para generar resultados reales.
              Mirá lo que hemos construido.
            </p>
          </Reveal>
        </section>

        {/* Filter pills */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-12">
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${
                    activeFilter === cat
                      ? "bg-primary text-white border-primary"
                      : "border-white/10 text-white/40 hover:text-white hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Project grid */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 100 as 0 | 100 | 200}>
                <div className="group relative card-glow bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30">
                  {/* Image */}
                  {project.status === "live" && project.url !== "#" ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
                      <Image
                        src={project.screenshot}
                        alt={project.name}
                        width={1200}
                        height={675}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Ver proyecto →
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.screenshot}
                        alt={project.name}
                        width={1200}
                        height={675}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-500 flex items-center justify-center">
                        <span className="text-accent-yellow font-bold text-sm tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          En Desarrollo
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                        {project.category}
                      </span>
                      <span className="text-white/20 text-xs">{project.year}</span>
                      {project.status === "development" && (
                        <span className="bg-accent-yellow/10 text-accent-yellow text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                          En Desarrollo
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-black text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-white/60 font-light mb-4">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.status === "live" && project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary text-xs font-bold tracking-widest hover:text-white transition-colors"
                      >
                        Ver proyecto →
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 py-24 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                ¿Querés ser el <span className="text-primary">próximo</span>?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 font-light">
                Hablemos de tu proyecto. Construyamos algo que genere resultados reales.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a
                href="https://wa.me/50686aborrar?text=Hola%20AdDing%2C%20quiero%20hablar%20de%20mi%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-10 py-4 text-sm font-black tracking-widest hover:bg-primary/80 transition-all"
              >
                HABLEMOS POR WHATSAPP
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
