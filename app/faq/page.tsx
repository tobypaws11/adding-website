"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FaqItem } from "@/components/FaqSection";

/* ── FAQ sections ─────────────────────────────────────── */

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: "Sobre AdDing y cómo trabajamos",
    items: [
      {
        question: "¿Qué tipo de negocios atienden en AdDing?",
        answer:
          "Trabajamos con PYMES, marcas personales y empresas en crecimiento en Costa Rica que necesitan posicionamiento local, más leads y conversiones reales. Si tenés un negocio en Heredia, San José o cualquier parte del país y querés aparecer en Google y en buscadores con IA, podemos ayudarte.",
      },
      {
        question: "¿En cuánto tiempo voy a ver resultados con SEO y GEO?",
        answer:
          "La fase de fundación toma entre 2 y 5 semanas. Desde el segundo mes ya empezás a ver leads consistentes y métricas de crecimiento medibles con nuestro sistema Flywheel. Los resultados de SEO Costa Rica y posicionamiento local se consolidan entre el tercer y sexto mes.",
      },
      {
        question: "¿Pueden ayudarme aunque no tenga equipo de marketing interno?",
        answer:
          "Sí. Nos integramos como tu equipo externo de marketing digital, SEO, GEO y analítica. Vos te concentrás en tu negocio y nosotros nos encargamos de todo el ecosistema digital para generar leads y conversiones.",
      },
      {
        question: "¿Qué incluye el ecosistema digital de AdDing?",
        answer:
          "Incluye diseño web, SEO, GEO (Generative Engine Optimization), automatización, agentes de IA, email marketing, Google Business Profile y generación de leads. Todo conectado para que cada pieza trabaje en conjunto y multiplique tus conversiones.",
      },
      {
        question: "¿Trabajan con empresas fuera de Costa Rica?",
        answer:
          "Sí. Aunque estamos en Heredia, Costa Rica, atendemos clientes en toda Latinoamérica y el Caribe. Nuestro modelo de SEO, GEO y marketing digital es 100% digital, así que la ubicación no es una barrera para lograr posicionamiento y conversiones.",
      },
      {
        question: "¿Cuánto cuesta contratar los servicios de AdDing?",
        answer:
          "Cada proyecto es único. Armamos paquetes personalizados de SEO, GEO, automatización y diseño web según tus objetivos y presupuesto. Escribinos por WhatsApp y te damos una cotización sin compromiso en menos de 24 horas.",
      },
      {
        question: "¿Puedo contratar solo SEO o tengo que tomar el paquete completo?",
        answer:
          "Podés contratar servicios individuales como SEO, GEO o diseño web. Sin embargo, recomendamos el ecosistema completo porque cada pieza potencia las demás. Un sitio web sin SEO es como una tienda sin dirección, y sin GEO perdés visibilidad en buscadores con IA.",
      },
      {
        question: "¿Cómo miden los resultados de SEO, GEO y marketing digital?",
        answer:
          "Usamos dashboards con métricas claras: leads generados, tasa de conversión, posicionamiento en Google, visibilidad en buscadores con IA, tráfico web y ROI. Recibís reportes mensuales para que sepás exactamente cómo va tu inversión.",
      },
      {
        question: "¿Qué diferencia a AdDing de otras agencias de marketing en Costa Rica?",
        answer:
          "Combinamos marketing digital con inteligencia artificial y automatización real desde Heredia, Costa Rica. No vendemos likes ni seguidores: construimos ecosistemas que generan leads y ventas medibles. Además, optimizamos para SEO y GEO con Google Business Profile, algo que muy pocas agencias en el país ofrecen.",
      },
    ],
  },
  {
    title: "SEO, GEO y posicionamiento local en Costa Rica",
    items: [
      {
        question: "¿Qué es SEO y por qué lo necesita mi negocio en Costa Rica?",
        answer:
          "SEO (Search Engine Optimization) es el proceso de optimizar tu sitio web para que aparezca en los primeros resultados de Google. Si tu negocio en Heredia, San José o cualquier zona de Costa Rica no aparece cuando alguien busca tus servicios, estás perdiendo leads y clientes todos los días.",
      },
      {
        question: "¿Qué es GEO y en qué se diferencia del SEO?",
        answer:
          "GEO (Generative Engine Optimization) optimiza tu presencia para buscadores con inteligencia artificial como ChatGPT, Gemini y Perplexity. Mientras el SEO te posiciona en Google, el GEO asegura que la IA recomiende tu negocio cuando alguien pregunta por servicios en Costa Rica como los tuyos. Juntos, SEO y GEO maximizan tu posicionamiento local y tus conversiones.",
      },
      {
        question: "¿Cuánto tiempo tarda el SEO en dar resultados en Costa Rica?",
        answer:
          "Los primeros cambios en posicionamiento local se ven entre 3 y 6 meses. Con nuestra estrategia combinada de SEO Costa Rica + GEO + contenido optimizado, aceleramos ese proceso y lográs visibilidad más rápido que con SEO tradicional.",
      },
      {
        question: "¿El SEO y GEO funcionan para negocios locales en Costa Rica?",
        answer:
          "Absolutamente. El posicionamiento local es clave para PYMES. Optimizamos tu Google Business Profile, tu sitio web y tus contenidos para que aparezcás cuando alguien busque tus servicios en Heredia, San José o cualquier zona de Costa Rica, tanto en Google como en buscadores con IA.",
      },
    ],
  },
  {
    title: "Automatización e inteligencia artificial",
    items: [
      {
        question: "¿Cómo funciona el sistema Flywheel de generación de leads?",
        answer:
          "Es un ciclo automatizado de 4 etapas: atracción, captación, nutrición y conversión. Combinamos SEO Costa Rica, GEO, Google Business Profile y automatización para que cada etapa alimente la siguiente y tu negocio genere leads y conversiones de forma constante.",
      },
      {
        question: "¿Qué tipo de automatización pueden implementar para generar más leads?",
        answer:
          "Automatizamos CRM, seguimiento de leads, onboarding de clientes, email marketing, agendamiento y notificaciones. Todo se integra con herramientas como WhatsApp, email y calendario para que ningún lead se pierda y tus conversiones aumenten.",
      },
      {
        question: "¿Cómo funcionan los agentes de IA que ofrecen?",
        answer:
          "Son chatbots inteligentes que atienden a tus clientes 24/7 por WhatsApp y web. Califican leads, responden preguntas frecuentes, agendan citas y se entrenan específicamente para tu negocio en Costa Rica.",
      },
      {
        question: "¿Un agente de IA puede reemplazar a mi equipo de ventas?",
        answer:
          "No lo reemplaza, lo potencia. El agente de IA se encarga de las preguntas repetitivas, la calificación inicial y el agendamiento. Tu equipo se enfoca en cerrar ventas con leads que ya están listos para comprar, aumentando tus conversiones.",
      },
    ],
  },
  {
    title: "Diseño web y desarrollo",
    items: [
      {
        question: "¿Necesito tener un sitio web para trabajar con ustedes?",
        answer:
          "No. Podemos crear tu sitio web desde cero como parte del ecosistema digital. Lo diseñamos optimizado para velocidad, SEO Costa Rica, posicionamiento local y conversión desde el primer día.",
      },
      {
        question: "¿Qué tecnologías usan para el desarrollo web?",
        answer:
          "Usamos Next.js, React y tecnologías modernas que garantizan velocidad, seguridad y escalabilidad. Tu sitio carga rápido, se posiciona mejor en Google, es compatible con estrategias de GEO y se adapta a cualquier dispositivo.",
      },
      {
        question: "¿Incluyen hosting y mantenimiento del sitio web?",
        answer:
          "Sí. El hosting, las actualizaciones de seguridad y el mantenimiento técnico están incluidos. Vos te despreocupás y nosotros nos aseguramos de que todo funcione perfecto para tu SEO y posicionamiento.",
      },
    ],
  },
];

/* ── All items flat for JSON-LD ──────────────────────── */

const allFaqItems = faqCategories.flatMap((cat) => cat.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.addingagency.com/faq#faq",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* ── Component ───────────────────────────────────────── */

function FaqAccordionGroup({ category }: { category: FaqCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-black tracking-tight mb-6">{category.title}</h2>
      <div className="space-y-2">
        {category.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border border-white/10 bg-carbon-gray hover:border-primary/20 transition-all">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left gap-4"
              >
                <span className="text-sm md:text-base font-bold tracking-wide">{item.question}</span>
                <span
                  className={`material-symbols-outlined text-primary text-xl shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-white/50 font-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main className="pt-20 page-enter">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />
          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 text-center">
            <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">FAQ</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mt-4 md:mt-6">
              Preguntas frecuentes
            </h1>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-3xl mx-auto mt-6 md:mt-8 leading-relaxed">
              Todo lo que necesitás saber sobre SEO Costa Rica, GEO, Google Business Profile, posicionamiento local, leads, conversiones, automatización e inteligencia artificial para tu negocio
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-24 bg-matte-black">
          <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
            {faqCategories.map((category, idx) => (
              <FaqAccordionGroup key={idx} category={category} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-32 bg-carbon-gray border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              ¿Tenés otra pregunta?
            </h2>
            <p className="text-white/40 text-lg font-light mb-10">
              Escribinos y te respondemos en menos de 24 horas
            </p>
            <a
              href="https://wa.me/50670136366"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary text-white px-12 md:px-16 py-5 md:py-7 text-xs font-black tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,143,240,0.4)]"
            >
              ESCRIBINOS POR WHATSAPP
            </a>
            <div className="mt-8">
              <Link
                href="/"
                className="text-xs font-bold uppercase tracking-luxury text-white/40 hover:text-primary transition-all"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
