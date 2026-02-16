"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "@/components/Counter";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-36 md:pt-40">
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" aria-hidden="true" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.95fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/10 px-4 py-2 text-xs font-medium tracking-wide text-brand-blue">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-brand-yellow" /> Agencia IA en Costa Rica
          </p>
          <h1 className="mt-8 font-title text-5xl font-bold leading-[0.98] tracking-tight text-[#1D1D1F] md:text-7xl">
            <span className="font-thin">Creamos</span>
            <br />
            experiencias digitales
            <br />
            <span className="text-brand-blue">que transforman.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/65 md:text-xl">
            Somos tu socio estratégico para crecer con marketing digital, diseño y tecnología. Combinamos creatividad e inteligencia artificial para que tu marca destaque y venda más.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
            >
              Agendá una llamada
            </a>
            <a href="#blog" className="inline-flex items-center gap-2 text-sm font-medium text-black/75 transition-colors hover:text-brand-blue">
              Ver portafolio
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <motion.aside
          initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
          aria-label="Panel de resultados"
        >
          <div className="absolute -left-8 top-10 rounded-xl bg-white px-4 py-2 text-xs font-semibold shadow-soft md:-left-14">
            <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#22C55E]" /> +340% trafico organico
          </div>
          <div className="absolute -bottom-4 left-4 rounded-xl bg-white px-4 py-2 text-xs font-semibold shadow-soft md:left-8">
            <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-brand-yellow" /> ROI 5.2x promedio
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-cyan-400 text-sm font-bold text-white">
                AD
              </div>
              <div>
                <h2 className="font-medium text-[#1D1D1F]">Dashboard de crecimiento</h2>
                <p className="text-sm text-black/50">Últimos 30 días</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <article className="rounded-2xl bg-[#F5F7FA] p-4 text-center">
                <p className="text-2xl font-bold text-brand-blue">
                  <Counter to={12.4} decimals={1} suffix="K" />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-black/55">Visitas</p>
              </article>
              <article className="rounded-2xl bg-[#F5F7FA] p-4 text-center">
                <p className="text-2xl font-bold text-brand-blue">
                  <Counter to={847} />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-black/55">Leads</p>
              </article>
              <article className="rounded-2xl bg-[#F5F7FA] p-4 text-center">
                <p className="text-2xl font-bold text-brand-blue">
                  <Counter to={5.2} decimals={1} suffix="x" />
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-black/55">ROI</p>
              </article>
            </div>

            <div className="relative mt-6 h-24 overflow-hidden rounded-xl bg-gradient-to-b from-brand-blue/10 to-transparent">
              <svg viewBox="0 0 600 80" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
                <path
                  d="M0,60 C50,55 100,40 150,35 C200,30 250,45 300,30 C350,15 400,20 450,10 C500,5 550,15 600,8 L600,80 L0,80 Z"
                  fill="url(#chartFill)"
                />
                <path
                  d="M0,60 C50,55 100,40 150,35 C200,30 250,45 300,30 C350,15 400,20 450,10 C500,5 550,15 600,8"
                  stroke="#008FF0"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#008FF0" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#008FF0" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
