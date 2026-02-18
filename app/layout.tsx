import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Providers } from "@/components/Providers";
import "./globals.css";

const GTM_ID = "GTM-NP738RKK";

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
        width: 2048,
        height: 2048,
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* Geo */}
        <meta name="geo.region" content="CR-H" />
        <meta name="geo.placename" content="Heredia, Costa Rica" />
        <meta name="geo.position" content="9.9977;-84.1173" />
        <meta name="ICBM" content="9.9977, -84.1173" />
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${poppins.variable} ${jetbrains.variable} font-sans`}>

        {/* Google Tag Manager (noscript) — must be first element inside <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />

        {/* Google Tag Manager — loads after page is interactive */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </body>
    </html>
  );
}
