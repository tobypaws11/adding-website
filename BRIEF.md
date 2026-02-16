# AdDing Agency Website — Build Brief

## Overview
Build the AdDing Agency website — an AI-powered creative & digital agency based in Costa Rica. This is our own agency site, so it must be **impeccable** in UX/UI, grammar (Spanish voseo), SEO, GEO (Generative Engine Optimization), and performance.

**Domain:** www.addingagency.com  
**Contact email:** hola@addingagency.com  
**WhatsApp:** +506 7013-6366  

## Tech Stack
- **Next.js 14+ (App Router)** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- Deploy-ready for **Vercel**

## Brand Guidelines (from Libro de Marca)

### Colors
- **Blue (40%):** #008FF0 — brand elements, CTAs, accents
- **Black (40%):** #000000 — text, headers
- **White:** #FFFFFF — backgrounds
- **Yellow Klimt (10%):** #FABD05 — highlights, accent elements
- Use gray tones as complements

### Typography
- **Poppins Light** — body text / paragraphs
- **Helvetica Neue Bold** — titles (use font-bold with system sans-serif or Inter as web fallback)
- **Helvetica Neue Thin** — subtitles, supertitles

### Logo
- Logo files in `Logos y Slogan/` folder — SVG, PNG, JPG variants
- Use `logo-adding-negro.svg` on light backgrounds
- Use `logo-adding-blanco.svg` or `logo-adding-sobre-oscuro.svg` on dark backgrounds
- Isotipo (icon-only) versions for favicon/small uses

### Photography Style
- Dynamic, innovative photos
- Young people in work/creative contexts
- Fresh, modern, cool vibe
- Respect the defined color palette

## Language
**ALL copy in Spanish with Costa Rican voseo:**
- "vos" instead of "tú"
- "Agendá", "necesitás", "sabés", "descubrí", "mirá"
- Professional but approachable tone
- NO errors in grammar or spelling — this is our proof of concept

## Page Sections (Single Page MVP)

### 1. Navigation
- Fixed, transparent-to-white on scroll with backdrop blur
- Logo left, nav links right
- CTA button: "Hablemos" (blue pill button)

### 2. Hero Section
- Bold headline with thin/bold contrast matching brand
- Subheadline explaining value proposition
- CTA: "Agendá una llamada" + secondary "Ver portafolio"
- Visual: dashboard/metrics card showing results (animated)
- Floating tags with stats ("+340% tráfico orgánico", "ROI 5.2×")
- Subtle gradient background (#fff to light blue)

### 3. Client Logos Bar
- "Marcas que confían en nosotros"
- Logos: Iris Studio, MDM, Eventicos, Villa Solstice, Ezelandscape, Trumix
- Subtle opacity, horizontal scroll on mobile

### 4. Services Section (6 cards)
- "Todo lo que necesitás para crecer en digital."
- Cards with hover effects:
  1. 🌐 Diseño & Desarrollo Web
  2. 🤖 Agentes de IA
  3. 📊 SEO & Marketing Digital
  4. 📸 Identidad de Marca
  5. 🎬 Producción de Video
  6. ⚡ Automatización

### 5. Why AdDing (Dark section)
- "No somos una agencia más. Somos tu ventaja competitiva."
- 3 differentiators: IA en cada paso, Precios accesibles, Resultados medibles
- Stats panel on right side

### 6. Testimonials
- Clean centered quote card
- Placeholder testimonial (we'll add real ones later)

### 7. Blog Preview Section
- "Últimas del Blog" or similar heading
- Show 3 placeholder cards with "Próximamente" or similar
- Structure ready for future blog posts but NO actual content needed
- Link to /blog that can show "coming soon"

### 8. CTA Section
- "Hagamos que tu marca brille."
- "Agendá tu llamada gratis" button

### 9. Footer
- Logo, description, Costa Rica 🇨🇷
- Service links, Company links, Contact info
- hola@addingagency.com
- +506 7013-6366
- Social links (placeholder)

### 10. WhatsApp Floating Button
- Bottom-right floating WhatsApp icon
- Links to https://wa.me/50670136366
- Smooth animation on hover
- Always visible

## SEO Requirements
- Semantic HTML5 (proper heading hierarchy, landmarks)
- Next.js metadata API for title, description, OpenGraph, Twitter cards
- JSON-LD structured data (Organization, LocalBusiness)
- Sitemap generation
- robots.txt
- Alt text on all images
- Fast loading (target 95+ Lighthouse)
- Mobile-first responsive

## GEO (Generative Engine Optimization)
- Clear, well-structured content that AI can easily parse
- Schema.org markup (Organization, Service, FAQ)
- FAQ section with common questions about digital marketing services
- Content structured with clear headings and concise paragraphs
- Entity-rich content mentioning Costa Rica, PYMES, marketing digital
- Natural keyword integration throughout

## Performance
- Use next/image for optimized images
- Lazy load below-fold content
- Minimize JS bundle
- Use Poppins from Google Fonts with display=swap
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

## Animations
- Subtle, professional — NOT flashy
- Fade-in on scroll for sections
- Smooth hover states on cards and buttons
- Number counter animation for stats
- Parallax-lite on hero if performance allows
- Respect prefers-reduced-motion

## File Structure
```
/app
  /layout.tsx
  /page.tsx          (homepage)
  /blog/page.tsx     (coming soon placeholder)
  /globals.css
/components
  /Nav.tsx
  /Hero.tsx
  /LogosBar.tsx
  /Services.tsx
  /WhyAdding.tsx
  /Testimonials.tsx
  /BlogPreview.tsx
  /CTA.tsx
  /Footer.tsx
  /WhatsAppButton.tsx
/public
  /logos/            (SVG logos from brand assets)
  /og-image.png
```

## Reference
See `mockup-reference.html` for the design mockup. Follow that layout closely but improve with Next.js best practices, proper components, and smooth animations.

## IMPORTANT
- Copy the SVG logos from `Logos y Slogan/` into `public/logos/`
- Use Poppins from Google Fonts
- All text in Spanish voseo — triple check grammar
- Make it production-ready, not a prototype
- Clean, minimal, Apple-inspired design language
- Every section should feel purposeful
