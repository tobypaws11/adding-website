import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Marketing Digital, SEO, GEO, IA y Automatización",
  description:
    "Conocé nuestros servicios de marketing digital en Costa Rica: SEO, GEO, diseño web, agentes de IA, automatización y generación de leads para PYMES en Heredia y todo el país.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios de Marketing Digital e IA | AdDing Agency",
    description:
      "SEO Costa Rica, GEO, diseño web, agentes de IA, automatización y ecosistemas de generación de leads. Soluciones digitales desde Heredia para PYMES.",
    url: "https://www.addingagency.com/servicios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Marketing Digital e IA | AdDing Agency",
    description:
      "SEO Costa Rica, GEO, diseño web, agentes de IA, automatización y ecosistemas de generación de leads para PYMES.",
  },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
