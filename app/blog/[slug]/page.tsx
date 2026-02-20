import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageClient } from "./ArticlePageClient";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | AdDing Agency",
      description: "El artículo que buscás no existe o fue movido.",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: [
        {
          url: `https://www.addingagency.com/blog/og/${post.slug}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://www.addingagency.com/blog/og/${post.slug}`],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 2);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.content
      .replace(/<[^>]+>/g, "")
      .split(" ")
      .filter(Boolean).length,
    url: `https://www.addingagency.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.addingagency.com/blog/${post.slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `https://www.addingagency.com/blog/og/${post.slug}`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.addingagency.com/nosotros",
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "AdDing Agency",
        url: "https://www.addingagency.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "AdDing Agency",
      url: "https://www.addingagency.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.addingagency.com/logos/logo-adding-blanco.svg",
      },
      sameAs: [
        "https://www.linkedin.com/company/addingagencydotcom",
        "https://www.instagram.com/addingagencydotcom/",
        "https://www.facebook.com/addingagencydotcom/",
      ],
    },
  };

  const jsonLdFaq =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <ArticlePageClient post={post} relatedPosts={relatedPosts} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
    </>
  );
}
