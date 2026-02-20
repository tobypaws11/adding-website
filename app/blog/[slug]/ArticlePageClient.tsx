"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaqAccordion } from "./FaqAccordion";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { BlogPost } from "@/lib/blog-data";

interface ArticlePageClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const categoryStyles: Record<BlogPost["categoryKey"], { badge: string; topBorder: string; text: string }> = {
  seo: {
    badge: "bg-blue-500/20 text-blue-200 border-blue-400/40",
    topBorder: "bg-blue-400",
    text: "text-blue-300",
  },
  ai: {
    badge: "bg-violet-500/20 text-violet-200 border-violet-400/40",
    topBorder: "bg-violet-400",
    text: "text-violet-300",
  },
  auto: {
    badge: "bg-amber-500/20 text-amber-100 border-amber-300/40",
    topBorder: "bg-amber-400",
    text: "text-amber-300",
  },
  leads: {
    badge: "bg-emerald-500/20 text-emerald-100 border-emerald-400/40",
    topBorder: "bg-emerald-400",
    text: "text-emerald-300",
  },
  marketing: {
    badge: "bg-fuchsia-500/20 text-fuchsia-100 border-fuchsia-400/40",
    topBorder: "bg-fuchsia-400",
    text: "text-fuchsia-300",
  },
};

function formatPublishedDate(dateValue: string): string {
  const [year, month, day] = dateValue.split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("es-CR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export function ArticlePageClient({ post, relatedPosts }: ArticlePageClientProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const publishedLabel = useMemo(() => formatPublishedDate(post.publishedAt), [post.publishedAt]);

  useEffect(() => {
    const updateProgress = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollable <= 0) {
        setReadingProgress(0);
        return;
      }

      const current = Math.min(window.scrollY / totalScrollable, 1);
      setReadingProgress(current * 100);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const categoryStyle = categoryStyles[post.categoryKey];

  return (
    <>
      <div className="fixed top-0 left-0 z-[120] h-1 w-full bg-white/5">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
          aria-hidden="true"
        />
      </div>

      <Nav />

      <main className="pt-28">
        <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-gray to-matte-black" />
          <div
            className="absolute inset-0 opacity-70"
            style={{ backgroundImage: post.coverGradient }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid-tech opacity-20" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-12">
            <div className="max-w-4xl">
              <span
                className={`inline-flex items-center rounded-full border px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] ${categoryStyle.badge}`}
              >
                {post.category}
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 md:text-2xl">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.24em] text-white/50 md:text-sm">
                <span>{post.author}</span>
                <span aria-hidden="true">|</span>
                <span>{publishedLabel}</span>
                <span aria-hidden="true">|</span>
                <span>{post.readingTime} min de lectura</span>
              </div>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-20">
          <div
            className="[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:my-10 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-white/5 [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:text-white/90 [&_blockquote]:italic [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white [&_li]:text-lg [&_li]:leading-relaxed [&_li]:text-white/70 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_p]:mb-6 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-white/80 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6 md:[&_h2]:text-3xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <section className="border-t border-white/10 py-14 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 md:px-12">
            <div className="mb-12 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.faq && post.faq.length > 0 && (
              <FaqAccordion items={post.faq} />
            )}

            <div className="mb-12 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/30 to-primary/10 p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Siguiente paso</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
                ¿Listo para convertir contenido en crecimiento real?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Diseñamos estrategias de SEO, GEO, automatización e IA para que tu negocio en Costa Rica genere más
                demanda calificada sin depender solo de pauta.
              </p>
              <Link
                href="/contacto"
                className="mt-7 inline-flex items-center border border-primary/40 bg-matte-black/60 px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-primary transition-all hover:border-primary hover:bg-primary hover:text-white"
              >
                Hablemos sobre tu estrategia
              </Link>
            </div>

            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <h3 className="text-2xl font-black tracking-tight text-white">Más artículos</h3>
                <Link
                  href="/blog"
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-primary"
                >
                  Ver todo el blog
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => {
                  const relatedCategoryStyle = categoryStyles[relatedPost.categoryKey];

                  return (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 component-module"
                    >
                      <span
                        className={`absolute left-0 top-0 h-1 w-full ${relatedCategoryStyle.topBorder}`}
                        aria-hidden="true"
                      />

                      <div
                        className="h-28 border-b border-white/10"
                        style={{ backgroundImage: relatedPost.coverGradient }}
                        aria-hidden="true"
                      />

                      <div className="p-6">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] ${relatedCategoryStyle.badge}`}
                        >
                          {relatedPost.category}
                        </span>
                        <h4 className="mt-4 text-xl font-black tracking-tight text-white transition-colors group-hover:text-primary">
                          {relatedPost.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-white/60">{relatedPost.excerpt}</p>
                        <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.18em] ${relatedCategoryStyle.text}`}>
                          Leer artículo
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
