# AGENTS.md — AdDing Website Project Rules

## Stack
- Next.js 14+ (App Router), TypeScript, Tailwind CSS
- Vercel deployment (team: Toby's projects / `adding-website` project)
- Brand: AdDing — Costa Rica marketing/branding agency

## Deployment Rules (READ THIS FIRST)
**Codex role: write code + git push ONLY. Never touch Vercel.**

### ✅ Correct workflow:
1. Make code changes
2. `tsc --noEmit` — type-check before committing
3. `git add -A && git commit -m "feat: <description>"`
4. `git push origin main`
5. **Done. Stop here.**

### ❌ Never run:
- `vercel deploy` — never, ever
- `vercel build` — not your job
- `next build` — OOM risk on Mac mini

### Deployment (Claude's job):
```bash
vercel build              # local only (FREE)
vercel deploy --prebuilt  # $0 Vercel build cost
```
GitHub auto-deploy is DISCONNECTED — git push = GitHub only.

## Code Quality
- TypeScript strict mode — no `any`, no `ts-ignore`
- Tailwind only — no inline styles
- Mobile-first responsive
- `tsc --noEmit` must pass before committing

## Brand
- See `AdDing - Libro De Marca 2025.pdf` for full brand guidelines
- Tone: modern, creative, professional — Costa Rica agency
