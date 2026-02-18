# CODEX TASK — v2.0 | Mobile, SEO/GEO, Animaciones, Performance

## Objetivo
Ejecutar una ronda completa de mejoras en el sitio AdDing Agency que cubre:
1. Optimización mobile / responsive
2. SEO + GEO (geo-targeting para Costa Rica / Heredia)
3. Animaciones nuevas y llamativas (PC + tablet + mobile)
4. Performance y pruebas de build

---

## 1. SEO / GEO — `app/layout.tsx`

### 1a. Arreglar JSON-LD LocalBusiness
Actualizar el bloque `@type: "LocalBusiness"`:
```ts
address: {
  "@type": "PostalAddress",
  addressLocality: "Heredia",
  addressRegion: "Heredia",
  addressCountry: "CR"
},
```
(cambiar `addressRegion: "San Jose"` a `addressRegion: "Heredia"` y agregar `addressLocality: "Heredia"`)

### 1b. Actualizar Organization sameAs con todas las redes sociales reales
```ts
sameAs: [
  "https://www.linkedin.com/company/addingagencydotcom",
  "https://www.instagram.com/addingagencydotcom/",
  "https://www.facebook.com/addingagencydotcom/",
  "https://x.com/AdDingAgencydot",
  "https://www.youtube.com/channel/UC_-MOkVciT3NcvtKmUG22Lw",
  "https://www.tiktok.com/@addingagencydotcom",
  "https://www.pinterest.com/addingagencydotcom/"
]
```

### 1c. Agregar más keywords locales en `metadata.keywords`
Agregar al array existente:
```ts
"agencia digital Heredia",
"marketing digital San José Costa Rica",
"diseño web Heredia Costa Rica",
"agencia de IA Costa Rica",
"automatización empresarial Costa Rica",
"generación de leads Costa Rica",
"agentes de inteligencia artificial",
"PYMES Costa Rica marketing",
```

### 1d. Agregar meta tags GEO en `<head>` (dentro del `return` del RootLayout)
Agregar estas meta tags en el bloque `<head>`:
```html
<meta name="geo.region" content="CR-H" />
<meta name="geo.placename" content="Heredia, Costa Rica" />
<meta name="geo.position" content="9.9977;-84.1173" />
<meta name="ICBM" content="9.9977, -84.1173" />
```

### 1e. Agregar hreflang alternates en `metadata`
```ts
alternates: {
  canonical: "/",
  languages: {
    "es-CR": "/",
    "en": "/"
  }
}
```

### 1f. Actualizar description del metadata con mención de Heredia
```ts
const siteDescription = "AdDing Agency es una agencia digital con IA en Heredia, Costa Rica. Creamos ecosistemas digitales — diseño web, SEO, automatización y agentes de IA — para PYMES que quieren crecer de forma medible.";
```

### 1g. Agregar Open Graph locale_alternate
En el bloque `openGraph`, agregar:
```ts
locale_alternate: ["en_US"],
```

---

## 2. Footer — `components/Footer.tsx`

### 2a. Agregar cédula jurídica en el copyright
Cambiar:
```tsx
© {new Date().getFullYear()} CINTA MK FUTURISTA LIMITADA · {t("footer.derechos")}
```
Por:
```tsx
© {new Date().getFullYear()} CINTA MK FUTURISTA LIMITADA · CED. 3-102-862791 · {t("footer.derechos")}
```

### 2b. Aplicar font-mono al texto legal del footer
El div que contiene el copyright y los links legales debe tener `font-mono` para ese look técnico.
Cambiar la clase del div del copyright de:
```tsx
className="text-xs text-white/30 text-center md:text-left"
```
A:
```tsx
className="text-xs font-mono text-white/30 text-center md:text-left tracking-wider"
```
Hacer lo mismo para los links de Términos y Privacidad (agregar `font-mono` a esos `<Link>` elements también).

---

## 3. ANIMACIONES NUEVAS — el trabajo principal

### 3a. Scroll Progress Bar — `components/ScrollProgress.tsx`
Crear un nuevo componente `components/ScrollProgress.tsx`:
```tsx
"use client";
import { useEffect, useState } from "react";
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 z-[9999] h-[2px] bg-primary transition-none" style={{ width: `${progress}%` }} />
  );
}
```
Importar y agregar `<ScrollProgress />` en `app/page.tsx` justo antes del `<Nav />` (wrap it at the top level, also import it in the layout or page, prefer page.tsx).
Actually, add it in `app/layout.tsx` inside `<Providers>`, before `{children}`, so it appears on all pages.
No wait — add it inside the `Providers` render in `components/Providers.tsx` so it wraps all pages.

### 3b. TypeWriter Hero Headline — `components/TypeWriter.tsx`
Crear `components/TypeWriter.tsx`:
```tsx
"use client";
import { useEffect, useState } from "react";
interface TypeWriterProps {
  text: string;
  delay?: number;   // ms per character
  className?: string;
}
export function TypeWriter({ text, delay = 40, className = "" }: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);
  return (
    <span className={className}>
      {displayed}
      {!done && <span className="animate-pulse text-primary">|</span>}
    </span>
  );
}
```

### 3c. Actualizar Hero con TypeWriter en el headline principal
En `components/Hero.tsx`:
1. Importar `TypeWriter` from `"@/components/TypeWriter"`
2. En el `<h1>`, la segunda línea (el `<span>` itálico azul con `{t("hero.h1.3")}`) — reemplazarla con `<TypeWriter text={t("hero.h1.3")} delay={50} />` dentro del mismo `<span className="text-primary italic relative">`
3. Agregar un scroll indicator animado al final de la sección hero (antes del cierre de `</section>`), SOLO en desktop (hidden en mobile si queda mal):
```tsx
{/* Scroll indicator */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
  <span className="text-[10px] font-mono tracking-[0.3em] text-white uppercase">Scroll</span>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
  </svg>
</div>
```

### 3d. Terminal Typing Animation — `components/WhyAdding.tsx`
El bloque de código en el terminal (el `<code>` dentro del `bg-white/5 p-4`) debe tener una animación de aparición progresiva. Implementar así:
1. Importar `useEffect`, `useRef`, `useState` si no están importados
2. Crear un componente cliente local (o usar un hook) que use `IntersectionObserver` para detectar cuando el terminal entra en pantalla
3. Cuando entra en pantalla, agregar la clase CSS `animate-terminal-type` al bloque de código
4. En `globals.css`, agregar:
```css
@keyframes terminal-reveal {
  from { clip-path: inset(0 100% 0 0); opacity: 0; }
  to   { clip-path: inset(0 0% 0 0); opacity: 1; }
}
.animate-terminal-type {
  animation: terminal-reveal 1.2s cubic-bezier(0.16,1,0.3,1) forwards;
}
```
Alternatively, a simpler approach: wrap the code block div with `<Reveal variant="fade" threshold={0.3}>` and keep it simple.
Use this simpler approach: wrap the entire terminal `<div className="bg-matte-black border...">` with `<Reveal variant="left" threshold={0.1}>`.
Also wrap the right column (the pillars/reasons column) with `<Reveal variant="right" threshold={0.1}>`.

### 3e. Animaciones adicionales en `globals.css`
Agregar al final de `globals.css`:

```css
/* ── Gradient text animation ── */
@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.text-gradient-animated {
  background: linear-gradient(135deg, #008FF0 0%, #FABD05 50%, #008FF0 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
}

/* ── Counter number animation ── */
@keyframes count-up {
  from { opacity: 0; transform: translateY(16px) scale(0.9); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-count { animation: count-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }

/* ── Border glow on hover ── */
.card-glow {
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.card-glow:hover {
  box-shadow: 0 0 0 1px #008FF0, 0 0 30px rgba(0,143,240,0.25), 0 20px 40px rgba(0,0,0,0.4);
}

/* ── Neon line ── */
@keyframes neon-scan {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.neon-scan::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0,143,240,0.15), transparent);
  animation: neon-scan 3s linear infinite;
}

/* ── Page transition fade-in ── */
@keyframes page-enter {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page-enter {
  animation: page-enter 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
}

/* ── Hero orb extra ring ── */
@keyframes orb-ring {
  0%   { transform: scale(1); opacity: 0.4; }
  50%  { transform: scale(1.05); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.4; }
}
.animate-orb-ring { animation: orb-ring 6s ease-in-out infinite; }
```

### 3f. Aplicar `page-enter` a todos los `<main>` tags
En `app/page.tsx` y todas las páginas (servicios, por-que-adding, nosotros, blog, contacto), agregar la clase `page-enter` al `<main>` tag:
```tsx
<main className="page-enter">
```
(Si no hay `<main>`, agregar al div wrapper principal)

### 3g. Mejorar el Hero orb con más anillos
En `components/Hero.tsx`, dentro del div del orb animado, agregar después del último `<div>` de anillo:
```tsx
<div className="absolute inset-32 border border-primary/10 rounded-full animate-orb-ring" style={{ animationDelay: "1s" }} />
<div className="absolute -inset-8 border border-primary/5 rounded-full animate-pulse" style={{ animationDuration: "12s" }} />
```

### 3h. Aplicar `card-glow` a las tarjetas de servicios
En `components/Services.tsx`, agregar `card-glow` al className del `<Link>`:
```tsx
className="group flex flex-col border border-white/8 bg-white/2 hover:border-primary/30 hover:bg-primary/3 transition-all duration-300 p-8 md:p-10 h-full card-glow"
```

### 3i. Estadísticas animadas en sección WhyAdding (o en una nueva sección Stats)
En `components/WhyAdding.tsx`, en la parte donde se muestran los 4 nodos del grid (NODE_A, NODE_B, NODE_C, NODE_D) — hacer que cuando el IntersectionObserver detecte la sección, agregue la clase `animate-count` a cada node card con un pequeño delay stagger.
Envolver cada node div con `<Reveal variant="scale" delay={[0, 100, 200, 300][i]}>` donde i es el índice.

### 3j. Aplicar `text-gradient-animated` al badge del hero
En `components/Hero.tsx`, cambiar el `<span>` del badge de:
```tsx
className="text-xs font-mono tracking-widest text-primary uppercase"
```
A:
```tsx
className="text-xs font-mono tracking-widest uppercase text-gradient-animated"
```

---

## 4. MOBILE OPTIMIZATION

### 4a. Verificar touch targets mínimos
En todos los botones y links de navegación, asegurar que tengan al menos `min-h-[44px]` o `py-3` para cumplir con estándares de accesibilidad móvil.
En `components/Nav.tsx`, asegurar que los links del nav tengan `py-2 px-1` como mínimo.

### 4b. WhatsApp floating button — mejorar en mobile
En `components/WhatsAppButton.tsx`, asegurar que el botón flotante sea `w-14 h-14` en mobile y `w-16 h-16` en desktop. Agregar `bottom-6 right-4 md:bottom-8 md:right-8` para mejor posicionamiento.

### 4c. Hero — asegurar que el orb no cause overflow en mobile
En `components/Hero.tsx`, el orb tiene `w-[400px] md:w-[700px]`. En pantallas muy pequeñas (< 375px), puede causar overflow. Cambiar a:
```tsx
className="... w-[280px] sm:w-[400px] md:w-[700px] ..."
```

### 4d. Verificar que los service cards en mobile no tengan padding excesivo
En `components/Services.tsx`, el padding `p-8 md:p-10` puede quedar ajustado en mobile. Cambiar a `p-6 md:p-10`.

### 4e. Asegurar texto legible en mobile
Revisar que ningún texto tenga tamaño menor a 12px en mobile. Los `text-[10px]` en service card tags — cambiar a `text-xs` (12px mínimo).

---

## 5. PERFORMANCE

### 5a. Agregar `priority` al logo del hero
En `components/Hero.tsx`, cambiar el `<img>` del logo:
```tsx
// Esto es un img tag estático, si se usa Image de next/image:
```
Si usa `<img>` nativo (como actualmente), agregar `fetchPriority="high"` y `decoding="async"`:
```tsx
<img src="/logos/logo-full.svg" alt="AdDing Agency" className="h-40 sm:h-48 md:h-56 w-auto mx-auto" fetchPriority="high" decoding="async" />
```

### 5b. Agregar `loading="lazy"` a imágenes del carousel
En `components/LogosBar.tsx`, agregar `loading="lazy"` a todos los `<img>` tags de los logos de clientes.

### 5c. Prefetch links de navegación importantes
En `components/Nav.tsx`, los `<Link>` de Next.js ya hacen prefetch por defecto. Verificar que todos usen `<Link>` (no `<a>`) para los links internos.

---

## 6. LOGO CAROUSEL SIZE NORMALIZATION — `components/LogosBar.tsx`

### 6a. Ajustar tamaños para consistencia visual
- MDM: `className="h-20 w-auto object-contain"` (se reducía a h-28, pero h-20 da mejor balance)
- Iris Studio: `className="h-16 w-auto object-contain"`  
- Trumix: `className="h-14 w-auto object-contain"`
- Eventicos (inline SVG): `width={160} height={56}` o similar
- Villa Solstice (inline SVG): `width={160} height={56}` o similar

Todos los logos deben estar centrados verticalmente dentro del carousel: agregar `flex items-center justify-center` al container de cada logo.

El wrapper de cada logo debe tener altura fija: `h-20 flex items-center justify-center`. El `<img>` o SVG dentro tendrá `max-h-16 w-auto`.

---

## 7. BUILD FINAL

Después de todos los cambios:
1. Correr `npm run build` para verificar que compila sin errores
2. Si hay errores de TypeScript, arreglarlos
3. Hacer commit con mensaje `feat: v2.0 - mobile, SEO/GEO, animations, performance`
4. Push a GitHub

---

## INSTRUCCIONES DE EJECUCIÓN

- Working directory: `/tmp/adding-website`
- NO borrar archivos existentes, solo modificarlos o crear nuevos
- NO remover clases o lógica existente a menos que la tarea lo indique explícitamente
- Después de cada sección importante, verificar que el archivo compila correctamente
- El nombre "AdDing" NUNCA debe estar en texto con `text-transform: uppercase` aplicado vía CSS
- Los textos de eyebrow labels (como `SERVICIOS`, `POR QUÉ ADDING`) son strings directos en MAYÚSCULAS — no usar CSS uppercase
- Voseo costarricense: "podés", "tenés", "agendá", "conocé" — no modificar la copy existente
- Al final: `git add -A && git commit -m "feat: v2.0 - mobile SEO/GEO animations performance" && git push`
