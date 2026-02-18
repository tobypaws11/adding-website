import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap",
  variable: "--font-poppins"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-jetbrains"
});

const siteUrl = "https://www.addingagency.com";
const siteTitle = "AdDing Agency | Agencia de Marketing Digital e IA en Costa Rica";
const siteDescription =
  "AdDing Agency es una agencia digital con IA en Heredia, Costa Rica. Creamos ecosistemas digitales — diseño web, SEO, automatización y agentes de IA — para PYMES que quieren crecer de forma medible.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | AdDing Agency"
  },
  description: siteDescription,
  keywords: [
    "agencia digital Costa Rica",
    "agencia digital Heredia",
    "marketing digital para PYMES",
    "marketing digital San José Costa Rica",
    "agentes de IA",
    "agentes de inteligencia artificial",
    "agencia de IA Costa Rica",
    "SEO Costa Rica",
    "diseño web en Costa Rica",
    "diseño web Heredia Costa Rica",
    "automatización para negocios",
    "automatización empresarial Costa Rica",
    "generación de leads Costa Rica",
    "PYMES Costa Rica marketing",
  ],
  openGraph: {
    type: "website",
    locale: "es_CR",
    alternateLocale: ["en_US"],
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "AdDing Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdDing Agency - Agencia digital y de IA en Costa Rica"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-CR": "/",
      "en": "/"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.addingagency.com/#organization",
        name: "AdDing Agency",
        url: "https://www.addingagency.com",
        logo: "https://www.addingagency.com/logos/logo-adding-negro.svg",
        sameAs: [
          "https://www.linkedin.com/company/addingagencydotcom",
          "https://www.instagram.com/addingagencydotcom/",
          "https://www.facebook.com/addingagencydotcom/",
          "https://x.com/AdDingAgencydot",
          "https://www.youtube.com/channel/UC_-MOkVciT3NcvtKmUG22Lw",
          "https://www.tiktok.com/@addingagencydotcom",
          "https://www.pinterest.com/addingagencydotcom/"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hola@addingagency.com",
          telephone: "+50670136366",
          contactType: "customer service",
          areaServed: "CR",
          availableLanguage: ["Spanish"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.addingagency.com/#localbusiness",
        name: "AdDing Agency",
        image: "https://www.addingagency.com/og-image.png",
        priceRange: "$$",
        email: "hola@addingagency.com",
        telephone: "+50670136366",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Heredia",
          addressRegion: "Heredia",
          addressCountry: "CR"
        },
        areaServed: "Costa Rica",
        url: "https://www.addingagency.com"
      },
      {
        "@type": "Service",
        serviceType: "Marketing digital y automatización para PYMES",
        provider: {
          "@id": "https://www.addingagency.com/#organization"
        },
        areaServed: "Costa Rica",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios AdDing",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño y desarrollo web" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agentes de IA" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO y marketing digital" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ecosistemas de generación de leads" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email marketing y newsletter" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatización" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.addingagency.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Qué tipo de negocios atienden?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Trabajamos con PYMES, marcas personales y empresas en crecimiento que buscan resultados concretos en digital con ecosistemas completos de generación de leads."
            }
          },
          {
            "@type": "Question",
            name: "¿En cuánto tiempo podría ver resultados?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La fase de fundación toma entre 2 y 5 semanas. Desde el segundo mes ya empezás a ver leads consistentes y métricas de crecimiento medibles."
            }
          },
          {
            "@type": "Question",
            name: "¿Pueden ayudarme aunque no tenga equipo interno?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Nos integramos como tu equipo externo de marketing, ejecución y analítica para que podás avanzar sin fricción."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="es-CR" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <meta name="geo.region" content="CR-H" />
        <meta name="geo.placename" content="Heredia, Costa Rica" />
        <meta name="geo.position" content="9.9977;-84.1173" />
        <meta name="ICBM" content="9.9977, -84.1173" />
      </head>
      <body className={`${poppins.variable} ${jetbrains.variable} font-sans`}>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </body>
    </html>
  );
}
