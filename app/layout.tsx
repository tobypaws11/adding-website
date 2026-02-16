import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
});

const siteUrl = "https://www.addingagency.com";
const siteTitle = "AdDing Agency | Agencia de Marketing Digital e IA en Costa Rica";
const siteDescription =
  "AdDing Agency impulsa PYMES en Costa Rica con diseño web, SEO, branding, video, automatización y agentes de IA orientados a resultados medibles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | AdDing Agency"
  },
  description: siteDescription,
  keywords: [
    "agencia digital Costa Rica",
    "marketing digital para PYMES",
    "agentes de IA",
    "SEO Costa Rica",
    "diseño web en Costa Rica",
    "automatización para negocios"
  ],
  openGraph: {
    type: "website",
    locale: "es_CR",
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
    canonical: "/"
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
          "https://wa.me/50670136366"
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
          addressCountry: "CR",
          addressRegion: "San Jose"
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
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Identidad de marca" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Producción de video" } },
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
            name: "¿Cuánto tarda un proyecto digital con AdDing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Depende del alcance, pero la mayoría de proyectos para PYMES en Costa Rica se ejecutan entre 2 y 6 semanas con entregables claros en cada etapa."
            }
          },
          {
            "@type": "Question",
            name: "¿Trabajan solo en Costa Rica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nuestra base está en Costa Rica y trabajamos con marcas locales y regionales que buscan crecer con marketing digital medible."
            }
          },
          {
            "@type": "Question",
            name: "¿Qué incluyen sus servicios de IA y automatización?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Diseñamos agentes de IA, automatizaciones y flujos que reducen tareas manuales, mejoran tiempos de respuesta y aumentan conversiones."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="es-CR">
      <body className={`${poppins.variable} bg-white font-body text-brand-black antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </body>
    </html>
  );
}
