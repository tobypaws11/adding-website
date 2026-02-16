"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-36 md:pt-44">
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.95fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/10 px-4 py-2 text-xs font-medium tracking-wide text-brand-blue">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-brand-yellow" /> Agencia IA en Costa Rica
          </p>
          <h1 className="mt-8 font-title text-4xl font-bold leading-[0.98] tracking-tight text-[#1D1D1F] sm:text-5xl md:text-7xl">
            <span className="font-thin">Construimos</span>
            <br />
            ecosistemas digitales
            <br />
            <span className="text-brand-blue">que generan crecimiento.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-black/65 sm:text-lg md:text-xl">
            No hacemos campañas aisladas. Creamos sistemas automatizados de generación de leads que convierten prospectos en clientes leales — con IA, data y mejora continua.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
            >
              Agendá una llamada
            </a>
            <a href="#servicios" className="inline-flex items-center gap-2 text-sm font-medium text-black/75 transition-colors hover:text-brand-blue">
              Ver servicios
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <motion.aside
          initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
          aria-label="Flywheel de crecimiento"
        >
          {/* Flywheel visual instead of specific metrics */}
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-cyan-400 text-sm font-bold text-white">
                AD
              </div>
              <div>
                <h2 className="font-medium text-[#1D1D1F]">Tu Flywheel de crecimiento</h2>
                <p className="text-sm text-black/50">Ecosistema automatizado</p>
              </div>
            </div>

            {/* Flywheel stages */}
            <div className="space-y-3">
              {[
                { icon: "🎯", label: "Prospección automatizada", sub: "Ads + Landing Pages → CRM" },
                { icon: "🧠", label: "Nutrición inteligente", sub: "Email sequences + Retargeting" },
                { icon: "💰", label: "Cierre eficiente", sub: "CRM automatizado + Follow-ups" },
                { icon: "🚀", label: "Retención y crecimiento", sub: "Referidos + Upsell + Newsletter" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] p-3 transition-colors hover:bg-brand-blue/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-lg">{step.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#1D1D1F]">{step.label}</p>
                    <p className="truncate text-xs text-black/50">{step.sub}</p>
                  </div>
                  {i < 3 && (
                    <span className="ml-auto text-brand-blue/40" aria-hidden="true">↓</span>
                  )}
                  {i === 3 && (
                    <span className="ml-auto text-brand-yellow" aria-hidden="true">↻</span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-black/40">Cada etapa alimenta la siguiente — crecimiento continuo</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
