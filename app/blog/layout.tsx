import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Estrategias de Marketing Digital, SEO, GEO e IA",
  description:
    "Artículos sobre marketing digital, SEO, GEO, inteligencia artificial y automatización para PYMES en Costa Rica. Ideas que mueven negocios desde Heredia.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog de Marketing Digital e IA | AdDing Agency",
    description:
      "Estrategias de SEO Costa Rica, GEO, IA y crecimiento digital para empresas. Insights desde Heredia, Costa Rica.",
    url: "https://www.addingagency.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Marketing Digital e IA | AdDing Agency",
    description:
      "Estrategias de SEO Costa Rica, GEO, IA y crecimiento digital para empresas.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
