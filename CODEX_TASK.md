# Codex Task: SEO/GEO Audit Fixes + OG Images — AdDing Blog

## Contexto
El blog de AdDing Agency tiene 3 artículos publicados. Esta tarea aplica todos los fixes de auditoría SEO y GEO identificados. **No tocar Vercel ni next build.**

---

## CAMBIOS REQUERIDOS

### 1. Author — José Molina en los 3 artículos

En `lib/blog-data.ts`, cambiar en los 3 posts:
```
author: "Equipo AdDing"  →  author: "José Molina"
```
Y actualizar authorRole según el artículo:
- Artículo SEO/GEO: `authorRole: "Director de Estrategia Digital, AdDing Agency"`
- Artículo IA: `authorRole: "Director de Estrategia Digital, AdDing Agency"`
- Artículo Leads: `authorRole: "Director de Estrategia Digital, AdDing Agency"`

---

### 2. Slug fix — Artículo IA

En `lib/blog-data.ts`:
```
slug: "ia-para-pymes-costa-rica-2025"  →  slug: "ia-para-pymes-costa-rica-2026"
```

En `next.config.mjs`, agregar redirect permanente:
```js
async redirects() {
  return [
    {
      source: '/blog/ia-para-pymes-costa-rica-2025',
      destination: '/blog/ia-para-pymes-costa-rica-2026',
      permanent: true,
    },
  ]
}
```

---

### 3. metaTitle fixes

En `lib/blog-data.ts`:

**Artículo 2 (IA):**
```
metaTitle: "IA para PYMES en Costa Rica: guía práctica 2025"
→  metaTitle: "IA para PYMES en Costa Rica: guía práctica 2026"
```

**Artículo 3 (Leads):**
```
metaTitle: "7 razones por las que tu web no genera leads"
→  metaTitle: "Por qué tu web no genera leads: las 7 razones y cómo arreglarlas"
```

---

### 4. Fix "Hace poco auditamos" — Artículo 3

En `lib/blog-data.ts`, artículo `por-que-tu-sitio-web-no-genera-leads`, cambiar el segundo párrafo del content:

**Antes:**
```
<p>Hace poco auditamos un sitio que recibía cerca de 800 visitas mensuales y generaba cero leads calificados. En 20 minutos encontramos bloqueos graves en mensaje, experiencia y conversión. El sitio no estaba "mal hecho"; estaba mal orientado para convertir.</p>
```

**Después:**
```
<p>Es común encontrar sitios que reciben cerca de 800 visitas mensuales y generan cero leads calificados. En una auditoría de conversión, se detectan bloqueos graves en mensaje, experiencia y flujo en menos de 20 minutos. El sitio no está "mal hecho"; está mal orientado para convertir.</p>
```

---

### 5. OG Image dinámica por artículo — `app/blog/og/[slug]/route.ts`

Crear una ruta de API que genere imágenes OG dinámicas con `ImageResponse` de `next/og`.

**Archivo: `app/blog/og/[slug]/route.ts`**

```typescript
import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog-data'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return new Response('Not found', { status: 404 })
  }

  // Category accent colors
  const categoryColors: Record<string, string> = {
    seo: '#008FF0',
    ai: '#7C3AED',
    auto: '#D97706',
    leads: '#059669',
    marketing: '#C026D3',
  }
  const accent = categoryColors[post.categoryKey] ?? '#008FF0'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#050505',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6px',
            background: accent,
          }}
        />
        {/* Background gradient blob */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
          }}
        />
        {/* Category badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              background: `${accent}22`,
              border: `1px solid ${accent}66`,
              borderRadius: '999px',
              padding: '6px 18px',
              fontSize: '13px',
              fontWeight: 700,
              color: accent,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            {post.category}
          </div>
          <div
            style={{
              marginLeft: '16px',
              fontSize: '13px',
              color: '#ffffff55',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {post.readingTime} min de lectura
          </div>
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: post.title.length > 60 ? '42px' : '52px',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.15,
            maxWidth: '900px',
            marginBottom: '28px',
          }}
        >
          {post.title}
        </div>
        {/* Author + brand row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Avatar circle */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: `${accent}33`,
                border: `2px solid ${accent}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 900,
                color: accent,
              }}
            >
              JM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#ffffffcc', fontSize: '15px', fontWeight: 700 }}>
                {post.author}
              </span>
              <span style={{ color: '#ffffff44', fontSize: '13px' }}>
                {post.authorRole}
              </span>
            </div>
          </div>
          {/* Brand name */}
          <div
            style={{
              fontSize: '22px',
              fontWeight: 900,
              color: accent,
              letterSpacing: '-0.02em',
            }}
          >
            AdDing Agency
          </div>
        </div>
        {/* Bottom border line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: `linear-gradient(to right, ${accent}, transparent)`,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
```

---

### 6. Actualizar generateMetadata — usar OG image dinámica

En `app/blog/[slug]/page.tsx`, actualizar el `generateMetadata` para incluir OG image:

```typescript
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
    }
  ],
},
twitter: {
  card: "summary_large_image",
  title: post.metaTitle,
  description: post.metaDescription,
  images: [`https://www.addingagency.com/blog/og/${post.slug}`],
},
```

---

### 7. JSON-LD mejorado — agregar campos adicionales + author URL

En `app/blog/[slug]/page.tsx`, actualizar `jsonLdArticle`:

```typescript
const jsonLdArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.metaDescription,
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  keywords: post.tags.join(", "),
  articleSection: post.category,
  wordCount: post.content.replace(/<[^>]+>/g, '').split(' ').filter(Boolean).length,
  url: `https://www.addingagency.com/blog/${post.slug}`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.addingagency.com/blog/${post.slug}`
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
}
```

---

### 8. FAQPage schema — agregar a los 3 artículos

Agregar en `lib/blog-data.ts` un campo `faq` al interface `BlogPost`:

```typescript
faq?: Array<{ question: string; answer: string }>
```

**FAQs por artículo:**

**Artículo 1 (SEO/GEO):**
```typescript
faq: [
  {
    question: "¿Qué es GEO y cómo se diferencia del SEO?",
    answer: "GEO (Generative Engine Optimization) es la práctica de optimizar tu contenido para que motores de IA como ChatGPT y Gemini te entiendan, te citen y te recomienden. A diferencia del SEO tradicional que apunta a rankings de Google, el GEO busca que tu negocio aparezca dentro de respuestas generadas por inteligencia artificial."
  },
  {
    question: "¿Mi negocio en Costa Rica necesita GEO?",
    answer: "Si tus clientes potenciales usan ChatGPT, Gemini o el modo IA de Google para buscar soluciones, sí. En Costa Rica el mercado generativo todavía está en etapa temprana, lo que significa que las PYMES que actúen ahora tienen ventaja competitiva antes de que sature."
  },
  {
    question: "¿Tengo que abandonar el SEO para hacer GEO?",
    answer: "No. GEO complementa al SEO, no lo reemplaza. Las bases de buen SEO (contenido de calidad, velocidad, mobile) siguen siendo relevantes. Lo que cambia es agregar optimización semántica, estructura de contenido orientada a preguntas y señales de autoridad temática."
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados de GEO?",
    answer: "Depende de la autoridad existente del sitio y del nivel de competencia en el sector. En términos generales, con una estrategia consistente durante 2 a 4 meses se pueden observar mejoras en presencia dentro de respuestas generativas."
  },
]
```

**Artículo 2 (IA):**
```typescript
faq: [
  {
    question: "¿Cuánto cuesta implementar IA en una PYME en Costa Rica?",
    answer: "Depende de la solución. Automatizaciones básicas de WhatsApp pueden arrancar desde menos de $100 al mes. Implementaciones más complejas con CRM y flujos avanzados van entre $300 y $800 mensuales, incluyendo configuración y mantenimiento. El criterio clave es comparar ese costo contra el valor del tiempo y las ventas que se recuperan."
  },
  {
    question: "¿Necesito personal técnico para usar herramientas de IA?",
    answer: "No necesariamente. La mayoría de herramientas de IA para PYMES hoy son no-code o low-code: se configuran visualmente, sin programación. Lo que sí se necesita es orientación estratégica para que la herramienta resuelva un problema real de negocio y no solo sea tecnología sin foco."
  },
  {
    question: "¿Cuál es el primer paso para implementar IA en mi negocio?",
    answer: "Identificar un proceso con fricción alta y valor claro. Ejemplo: atención de WhatsApp fuera de horario, seguimiento de leads, o generación de contenido repetitivo. Empezar ahí, medir el antes y después, y escalar lo que funcione."
  },
  {
    question: "¿La IA puede reemplazar a mis empleados?",
    answer: "No es el objetivo correcto ni el resultado típico. La IA potencia a los equipos al automatizar tareas repetitivas, lo que libera tiempo para trabajo de mayor valor. Un flujo de WhatsApp automatizado no reemplaza a un vendedor; le permite enfocarse en cerrar en lugar de responder preguntas básicas."
  },
]
```

**Artículo 3 (Leads):**
```typescript
faq: [
  {
    question: "¿Por qué mi sitio web tiene visitas pero no genera clientes?",
    answer: "Las causas más frecuentes son: CTA genérico o invisible, velocidad lenta, falta de prueba social, formulario con demasiados campos, experiencia móvil deficiente y propuesta de valor poco clara. Un sitio puede tener buen diseño y aun así fallar en conversión si alguno de estos elementos no está bien resuelto."
  },
  {
    question: "¿Cuánto tiempo toma mejorar la conversión de un sitio web?",
    answer: "Con un plan enfocado, los cambios principales se pueden implementar en 5 a 7 días. Los resultados medibles (más formularios enviados, más chats iniciados) se empiezan a ver en las primeras 2 a 4 semanas siguientes, siempre que el tráfico existente sea suficiente para extraer conclusiones estadísticas."
  },
  {
    question: "¿Qué es la prueba de 5 segundos para un sitio web?",
    answer: "Es mostrarle tu página principal a alguien que no conoce tu negocio durante 5 segundos y luego preguntarle: ¿qué hace esta empresa?, ¿para quién es? y ¿qué acción esperan que hagás? Si no puede responder esas tres preguntas con claridad, tu home está perdiendo leads aunque tenga buen diseño."
  },
  {
    question: "¿Tengo que rehacer mi sitio web para mejorar las conversiones?",
    answer: "Rara vez. En la mayoría de los casos, se corrigen elementos puntuales: el titular principal, el CTA, la velocidad, la prueba social y el formulario. Rehacer desde cero es la opción más costosa y no siempre la más efectiva. Un diagnóstico previo ayuda a priorizar sin desperdiciar presupuesto."
  },
]
```

---

### 9. Renderizar FAQPage schema en page.tsx

En `app/blog/[slug]/page.tsx`, agregar el schema de FAQ si el post tiene FAQs:

```typescript
const jsonLdFaq = post.faq && post.faq.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: post.faq.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
} : null
```

Y renderizarlo después del Article script:
```tsx
{jsonLdFaq && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
  />
)}
```

---

### 10. Sección FAQ visible al final de cada artículo

En `ArticlePageClient.tsx`, antes del CTA final, agregar una sección de preguntas frecuentes si el post tiene FAQs:

```tsx
{post.faq && post.faq.length > 0 && (
  <section className="mt-16 border-t border-white/10 pt-12">
    <h2 className="mb-8 text-2xl font-black tracking-tight text-white">Preguntas frecuentes</h2>
    <div className="space-y-6">
      {post.faq.map((item, i) => (
        <div key={i} className="border border-white/10 p-6">
          <h3 className="mb-3 text-base font-bold text-white">{item.question}</h3>
          <p className="text-sm leading-relaxed text-white/65">{item.answer}</p>
        </div>
      ))}
    </div>
  </section>
)}
```

---

## Instrucciones de ejecución

1. Modificar `lib/blog-data.ts`:
   - Cambiar author a "José Molina" en los 3 posts
   - Cambiar authorRole en los 3 posts
   - Cambiar slug artículo 2
   - Cambiar metaTitle artículo 2 (2025 → 2026)
   - Cambiar metaTitle artículo 3
   - Agregar campo `faq` al interface BlogPost
   - Agregar FAQs a los 3 posts
   - Fix el párrafo "Hace poco auditamos..." en artículo 3

2. Crear `app/blog/og/[slug]/route.ts` con ImageResponse

3. Actualizar `app/blog/[slug]/page.tsx`:
   - generateMetadata con OG image + Twitter card
   - JSON-LD mejorado
   - FAQPage schema

4. Actualizar `app/blog/[slug]/ArticlePageClient.tsx`:
   - Sección FAQ visible

5. Agregar redirect en `next.config.mjs`

6. `npx tsc --noEmit` — debe pasar sin errores

7. `git add -A && git commit -m "feat: SEO/GEO audit fixes — author, FAQs, OG images, JSON-LD improvements"`

8. `git push origin main`

9. **NO correr vercel, NO correr next build**

10. Cuando termines, correr:
`openclaw system event --text "Done: SEO/GEO fixes aplicados — José Molina como autor, OG images dinámicas, FAQPage schema en los 3 artículos, JSON-LD completo, slug y metaTitles corregidos." --mode now`

---

## Notas importantes
- `lib/blog-data.ts` es un archivo TypeScript puro, no usa React. Las FAQs van en el array de datos.
- La ruta OG usa `runtime = 'edge'` para máxima compatibilidad con Vercel
- El campo `faq` en BlogPost es opcional (`faq?:`) para no romper TypeScript
- NO usar `next build`, solo `tsc --noEmit`
