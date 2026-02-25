import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Marketing Digital, SEO, GEO e IA",
  description:
    "Respondemos tus dudas sobre marketing digital, SEO, GEO, automatización e inteligencia artificial para PYMES en Costa Rica. Consultá nuestras preguntas frecuentes.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Preguntas Frecuentes | AdDing Agency",
    description:
      "Todo lo que necesitás saber sobre nuestros servicios de marketing digital, SEO, GEO, automatización e IA para tu negocio en Costa Rica.",
    url: "https://www.addingagency.com/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
