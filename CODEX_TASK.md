# Codex Task: Apply Typography Formula

## The Formula (from brand guidelines discussion)

**Eyebrow labels** (small category text above headings): ALL CAPS + wide letter-spacing (tracking-widest)
**Headlines (H1, H2)**: Sentence case (only first letter capitalized), large and bold
**Body copy**: Clean and legible, normal case

### Example:
```
EYEBROW (ALL CAPS + WIDE TRACKING)

Headline principal en sentence case, grande y bold.

Body copy limpio y legible.
```

## CRITICAL: "AdDing" brand name
The brand name is "AdDing" (capital A, capital D). This must ALWAYS render correctly.
- In eyebrow labels that use ALL CAPS via CSS `uppercase` class: the word "AdDing" gets turned into "ADDING" which is wrong
- For ANY element with CSS `uppercase` that contains "AdDing": remove the `uppercase` class and manually write the text in ALL CAPS but keep "AdDing" as-is

## Current State Analysis

The site currently has the right idea but needs consistency cleanup:

### What's correct:
- Eyebrow labels mostly use `uppercase` CSS with wide tracking ✅
- Headlines are in sentence case ✅  
- "AdDing" is preserved in most places ✅

### What needs fixing:

1. **Eyebrow labels** should ALL use: `text-xs font-black uppercase tracking-[0.4em] text-primary`
   - EXCEPT when they contain "AdDing" — then remove `uppercase` and write manually like "POR QUÉ AdDing"

2. **Check ALL section labels across ALL pages** are consistent:
   - Look for `text-xs md:text-sm font-black tracking-[0.4em] uppercase` pattern
   - Make sure they have `uppercase` (or manual caps if containing "AdDing")
   
3. **Check ALL H1/H2 headings** — they should NOT have `uppercase` class
   - They should be sentence case in the translation text
   - Font should be large, black weight, tight tracking

4. **Nav link text** should NOT be uppercase (they're navigation, not labels). Currently they use manual ALL CAPS in translations like "SERVICIOS", "BLOG" etc. This is correct per the formula — nav items act as micro-copy/labels.

5. **CTA buttons** text should be ALL CAPS (they're buttons = micro-copy)

6. **Footer section headers** should be ALL CAPS + wide tracking (they're labels)

7. **Service card titles** (h3 in service modules) — these should be sentence case, bold

## Files to check:
- `lib/i18n.tsx` — verify all translation strings have correct casing
- `components/Nav.tsx`
- `components/Hero.tsx` 
- `components/Services.tsx`
- `components/WhyAdding.tsx`
- `components/Comparison.tsx`
- `components/BlogPreview.tsx`
- `components/Footer.tsx`
- `app/por-que-adding/page.tsx`
- `app/servicios/page.tsx`
- `app/nosotros/page.tsx`
- `app/contacto/page.tsx`
- `app/blog/page.tsx`

## Additional cleanup:
- Make sure CTA button text in i18n.tsx is ALL CAPS (like "HABLEMOS", "INICIAR ARQUITECTURA")
- Footer section header translations should be ALL CAPS
- Service titles in cards should be sentence case
- All font sizes should be reasonable (no text-[8px] or text-[9px] — minimum text-xs)

## DO NOT:
- Change the overall design or layout
- Change colors
- Change component structure
- Add new pages or sections
- Remove anything
- Change any URLs or links

## ONLY:
- Fix text casing (uppercase vs sentence case) per the formula above
- Ensure consistent font sizing for labels (minimum text-xs)
- Fix any remaining text-[8px], text-[9px], text-[10px] instances to at least text-xs
