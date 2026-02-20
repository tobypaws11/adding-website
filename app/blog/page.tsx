"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { blogPosts, getPostsByCategory, type BlogPost } from "@/lib/blog-data";

type CategoryFilter = "all" | BlogPost["categoryKey"];

const filterOptions: Array<{ key: CategoryFilter; label: string }> = [
  { key: "all", label: "Todos" },
  { key: "seo", label: "SEO" },
  { key: "ai", label: "IA" },
  { key: "auto", label: "Automatización" },
  { key: "leads", label: "Leads" },
  { key: "marketing", label: "Marketing" },
];

const categoryStats: Array<{ key: BlogPost["categoryKey"]; label: string; icon: string }> = [
  { key: "seo", label: "SEO y Posicionamiento", icon: "search" },
  { key: "ai", label: "Inteligencia Artificial", icon: "smart_toy" },
  { key: "auto", label: "Automatización", icon: "settings_input_component" },
  { key: "leads", label: "Generación de Leads", icon: "precision_manufacturing" },
  { key: "marketing", label: "Marketing Digital", icon: "campaign" },
];

const categoryCardStyles: Record<BlogPost["categoryKey"], { cover: string; badge: string; topBorder: string }> = {
  seo: {
    cover: "from-blue-600/20 to-cyan-400/10",
    badge: "border-blue-400/40 bg-blue-500/20 text-blue-200",
    topBorder: "bg-blue-400",
  },
  ai: {
    cover: "from-violet-600/20 to-purple-400/10",
    badge: "border-violet-400/40 bg-violet-500/20 text-violet-200",
    topBorder: "bg-violet-400",
  },
  auto: {
    cover: "from-amber-600/20 to-orange-400/10",
    badge: "border-amber-400/40 bg-amber-500/20 text-amber-100",
    topBorder: "bg-amber-400",
  },
  leads: {
    cover: "from-emerald-600/20 to-teal-400/10",
    badge: "border-emerald-400/40 bg-emerald-500/20 text-emerald-100",
    topBorder: "bg-emerald-400",
  },
  marketing: {
    cover: "from-fuchsia-600/20 to-rose-400/10",
    badge: "border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-100",
    topBorder: "bg-fuchsia-400",
  },
};

function formatPublishedDate(dateValue: string): string {
  const [year, month, day] = dateValue.split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("es-CR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const sortedPosts = useMemo(
    () => [...blogPosts].sort((left, right) => right.publishedAt.localeCompare(left.publishedAt)),
    []
  );

  const filteredPosts = useMemo(() => {
    if (activeFilter === "all") {
      return sortedPosts;
    }

    return sortedPosts.filter((post) => post.categoryKey === activeFilter);
  }, [activeFilter, sortedPosts]);

  const postTotals = useMemo(
    () => ({
      seo: getPostsByCategory("seo").length,
      ai: getPostsByCategory("ai").length,
      auto: getPostsByCategory("auto").length,
      leads: getPostsByCategory("leads").length,
      marketing: getPostsByCategory("marketing").length,
    }),
    []
  );

  return (
    <>
      <Nav />
      <main className="pt-28">
        <section className="relative overflow-hidden py-24 md:py-40">
          <div className="absolute inset-0 grid-tech opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-matte-black" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-6 text-center md:px-12">
            <span className="text-sm font-black uppercase tracking-[0.4em] text-primary md:text-base lg:text-lg">
              INSIGHTS
            </span>
            <h1 className="mt-4 text-5xl font-black tracking-tighter md:mt-6 md:text-7xl lg:text-8xl">
              Ideas que mueven negocios.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-white/50 md:mt-8 md:text-xl">
              Estrategias de marketing digital, IA y crecimiento para empresas en Costa Rica.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="mb-10 flex flex-wrap items-center gap-3 md:mb-12">
              {filterOptions.map((option) => {
                const isActive = activeFilter === option.key;

                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setActiveFilter(option.key)}
                    className={`rounded-full border px-5 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                      isActive
                        ? "border-primary bg-primary text-white"
                        : "border-white/15 text-white/60 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPosts.map((post) => {
                  const style = categoryCardStyles[post.categoryKey];

                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 component-module"
                    >
                      <span className={`absolute left-0 top-0 h-1 w-full ${style.topBorder}`} aria-hidden="true" />

                      <div className={`relative h-48 overflow-hidden border-b border-white/10 bg-gradient-to-br ${style.cover}`}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14)_0%,transparent_45%)]" />
                        <span
                          className={`absolute left-4 top-4 inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] ${style.badge}`}
                        >
                          {post.category}
                        </span>
                      </div>

                      <div className="flex min-h-[270px] flex-col p-6 md:p-7">
                        <h2 className="mb-4 text-2xl font-black tracking-tight text-white [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                          {post.title}
                        </h2>
                        <p className="mb-6 text-base leading-relaxed text-white/50 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          <span>{post.readingTime} min</span>
                          <span>{formatPublishedDate(post.publishedAt)}</span>
                        </div>

                        <span className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.2em] text-primary underline-offset-4 transition-all group-hover:underline">
                          Leer artículo →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/20 bg-carbon-gray/30 p-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  No hay artículos publicados en esta categoría todavía.
                </p>
              </div>
            )}

            <div className="mt-16 md:mt-20">
              <h3 className="mb-10 text-center text-sm font-black uppercase tracking-[0.4em] text-primary md:text-base lg:text-lg">
                Categorías
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {categoryStats.map((category) => (
                  <div key={category.key} className="component-module brushed-texture p-6 text-center md:p-8">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-primary/30">
                      <span className="material-symbols-outlined text-primary">{category.icon}</span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-luxury text-white/60">{category.label}</p>
                    <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/35">
                      {postTotals[category.key]} artículo{postTotals[category.key] === 1 ? "" : "s"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 text-center">
          <Link
            href="/"
            className="inline-block border border-white/10 px-10 py-4 text-xs font-black uppercase tracking-luxury text-white/40 transition-all hover:border-primary/40 hover:text-primary"
          >
            Volver al inicio
          </Link>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
