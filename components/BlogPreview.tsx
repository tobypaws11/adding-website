"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { useI18n } from "@/lib/i18n";

export function BlogPreview() {
  const { t } = useI18n();
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="bg-carbon-gray py-24 md:py-40 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary">{t("blog.label")}</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4 md:mt-6">{t("blog.title")}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post) => (
            <article key={post.slug} className="bg-matte-black border border-white/10 p-6 md:p-8 flex flex-col">
              <span className="inline-block w-fit border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                {post.category}
              </span>
              <h3 className="mt-5 text-2xl font-black tracking-tight">{post.title}</h3>
              <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-white/50 flex-1">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-8 inline-block text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-all">
                LEER MÁS →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <Link href="/blog" className="inline-block border border-primary/40 text-primary px-10 py-4 text-xs font-black tracking-luxury hover:bg-primary hover:text-white transition-all">
            VER TODOS LOS ARTÍCULOS →
          </Link>
        </div>
      </div>
    </section>
  );
}
