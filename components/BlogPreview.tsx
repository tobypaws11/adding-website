import Link from "next/link";
import { blogPosts, type BlogPost } from "@/lib/blog-data";

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

export function BlogPreview() {
  const featuredPosts = [...blogPosts]
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
    .slice(0, 3);

  return (
    <section id="blog" className="border-t border-white/5 bg-carbon-gray py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-16 text-center md:mb-20">
          <span className="text-sm font-black uppercase tracking-[0.4em] text-primary md:text-base lg:text-lg">INSIGHTS</span>
          <h2 className="mt-4 text-4xl font-black tracking-tighter md:mt-6 md:text-6xl">Ideas que mueven negocios.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/50 md:text-lg">
            Estrategias accionables sobre SEO, IA, automatización y conversión para empresas en Costa Rica.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => {
            const style = categoryCardStyles[post.categoryKey];

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 component-module"
              >
                <span className={`absolute left-0 top-0 h-1 w-full ${style.topBorder}`} aria-hidden="true" />

                <div className={`relative h-36 border-b border-white/10 bg-gradient-to-br ${style.cover}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14)_0%,transparent_45%)]" />
                  <span
                    className={`absolute left-4 top-4 inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] ${style.badge}`}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-tight text-white transition-colors group-hover:text-primary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    <span>{post.readingTime} min</span>
                    <span>{formatPublishedDate(post.publishedAt)}</span>
                  </div>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-primary underline-offset-4 group-hover:underline">
                    Leer artículo →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center md:mt-14">
          <Link
            href="/blog"
            className="inline-block border border-primary/40 px-10 py-4 text-xs font-black uppercase tracking-luxury text-primary transition-all hover:bg-primary hover:text-white"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}
