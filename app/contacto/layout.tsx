import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Hablemos de tu Proyecto Digital",
  description:
    "Contactá a AdDing Agency en Heredia, Costa Rica. Escribinos por WhatsApp o email para una cotización de SEO, GEO, diseño web, agentes de IA o automatización.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | AdDing Agency - Heredia, Costa Rica",
    description:
      "Hablemos de tu proyecto digital. SEO, GEO, IA, automatización y diseño web para PYMES en Costa Rica. Cotización sin compromiso.",
    url: "https://www.addingagency.com/contacto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | AdDing Agency - Heredia, Costa Rica",
    description:
      "Hablemos de tu proyecto digital. Cotización sin compromiso para SEO, GEO, IA y diseño web.",
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
