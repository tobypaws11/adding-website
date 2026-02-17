# Codex Task: v1.6 Fixes

## CRITICAL: "AdDing" brand name casing
The CSS class `uppercase` on headings converts "AdDing" to "ADDING". This is WRONG.
Fix: For ANY heading/text that contains the brand name "AdDing", do NOT use `uppercase` CSS class. 
Instead, write the text with manual casing. The brand name must ALWAYS render as "AdDing" (capital A, capital D, lowercase everything else).

Search ALL files for text containing "Adding" or "AdDing" in translations (lib/i18n.tsx) and components, and ensure:
- If the element has `uppercase` class, either remove it or split the text so "AdDing" is in a separate span without uppercase
- In i18n.tsx translations, the brand name should be "AdDing"

Affected areas (at minimum):
- Nav links: "POR QUÉ ADDING" should show "Por Qué AdDing" 
- Page titles: "POR QUÉ ELEGIR ADDING" → "Por Qué Elegir AdDing"
- Section labels like "SERVICIOS" with tracking-[0.6em] are fine (they don't contain the brand name)
- But "POR QUÉ ADDING" label does contain it

Strategy: For headings that contain "AdDing", remove `uppercase` class and manually capitalize in the translation strings. For section labels (small blue text), same approach.

## Nav: Nosotros before Blog
Change nav link order to: Servicios | Por Qué AdDing | Nosotros | Blog | Contacto

File: components/Nav.tsx - reorder the links array.

## Logo in hero
Add the AdDing logo prominently in the Hero section, above the main heading. Use:
```html
<img src="/logos/logo-adding-blanco.svg" alt="AdDing Agency" className="h-16 md:h-20 lg:h-24 w-auto mx-auto mb-8" />
```

## Nav logo still too small
Current: h-12 md:h-14 lg:h-16. Make it: h-14 md:h-16 lg:h-20
Also increase nav height: h-20 md:h-24 → h-22 md:h-28

## Section label font sizes too small
The small blue section labels (e.g., "SERVICIOS", "POR QUÉ ADDING") use `text-[10px]` which is way too small.
Change ALL instances of section labels from `text-[10px]` to `text-xs md:text-sm` across:
- components/Services.tsx
- components/WhyAdding.tsx  
- components/Comparison.tsx
- components/BlogPreview.tsx
- app/por-que-adding/page.tsx
- app/servicios/page.tsx
- app/nosotros/page.tsx
- app/contacto/page.tsx
- app/blog/page.tsx

Also for nav link text, change from `text-[10px]` to `text-xs`.
For CTA buttons, change from `text-[10px]` to `text-xs`.
For footer section headers, change from `text-[10px]` to `text-xs`.

## Location: Use "Heredia" only
In i18n.tsx:
- "about.location.desc": Change to just mention "Heredia, Costa Rica" — remove City Mall / Venture X reference
- "contact.location.desc": Same — just "Heredia, Costa Rica" not exact address
- In Footer.tsx: Change "Heredia, Costa Rica" (it currently says this, keep it)

In legal pages (app/terminos/page.tsx, app/privacidad/page.tsx):
- Change address from "Heredia, Costa Rica (Centro Comercial City Mall, Oficinas de Venture X)" to just "Heredia, Costa Rica"

## About page: base in Heredia
Update about.location.desc to say based in Heredia.

## Nosotros page: "Compromiso genuino" card overflow
In app/nosotros/page.tsx, the values grid cards may overflow. Ensure text doesn't overflow:
- Add `overflow-hidden` to card containers
- Or reduce padding / text size if needed

## Remove newsletter from blog page
In app/blog/page.tsx, remove the entire newsletter signup section (the div with subscribe title, email input, button).

## Contact page: hours
Change "contact.hours.desc" — the text should just say business hours (Lunes a viernes, 9:00 AM - 6:00 PM, hora Costa Rica GMT-6). This is already correct, just verify.

## Summary of files to modify:
1. lib/i18n.tsx — brand name fixes, location updates
2. components/Nav.tsx — reorder links, bigger logo, bigger text
3. components/Hero.tsx — add logo image
4. components/Services.tsx — bigger labels
5. components/WhyAdding.tsx — bigger labels
6. components/Comparison.tsx — bigger labels
7. components/BlogPreview.tsx — bigger labels
8. components/Footer.tsx — bigger labels
9. app/por-que-adding/page.tsx — bigger labels, brand name fix
10. app/servicios/page.tsx — bigger labels, brand name fix
11. app/nosotros/page.tsx — bigger labels, overflow fix
12. app/contacto/page.tsx — bigger labels, location fix
13. app/blog/page.tsx — bigger labels, remove newsletter
14. app/terminos/page.tsx — location fix
15. app/privacidad/page.tsx — location fix
