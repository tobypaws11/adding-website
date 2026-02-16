"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const socials = [
  { label: "Facebook", abbr: "fb", href: "https://facebook.com/addingagency" },
  { label: "Instagram", abbr: "ig", href: "https://instagram.com/addingagency" },
  { label: "X", abbr: "𝕏", href: "https://x.com/addingagency" },
  { label: "YouTube", abbr: "yt", href: "https://youtube.com/@addingagency" },
  { label: "TikTok", abbr: "tk", href: "https://tiktok.com/@addingagency" },
  { label: "Pinterest", abbr: "pi", href: "https://pinterest.com/addingagency" },
  { label: "Threads", abbr: "th", href: "https://threads.net/@addingagency" },
  { label: "Google Business", abbr: "G", href: "https://g.page/addingagency" },
];

export function Footer() {
  const { t } = useI18n();

  const serviceLinks = [
    t("svc.web.title"), t("svc.ai.title"), t("svc.seo.title"),
    t("svc.leads.title"), t("svc.auto.title")
  ];
  const companyLinks = [
    { label: t("nav.servicios"), href: "#servicios" },
    { label: t("nav.blog"), href: "#blog" },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  return (
    <footer className="bg-black pb-8 pt-14 text-white md:pt-20">
      <div className="section-shell">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logos/logo-adding-blanco.svg" alt="AdDing Agency" width={150} height={42} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{t("footer.servicios")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {serviceLinks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{t("footer.empresa")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {companyLinks.map((item) => (
                <li key={item.label}><a href={item.href} className="transition hover:text-brand-blue">{item.label}</a></li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{t("footer.legal")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/terminos" className="transition hover:text-brand-blue">{t("footer.terms")}</Link></li>
              <li><Link href="/privacidad" className="transition hover:text-brand-blue">{t("footer.privacy")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{t("footer.contacto")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:hola@addingagency.com" className="transition hover:text-brand-blue">hola@addingagency.com</a>
              </li>
              <li>
                <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-brand-blue">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.227A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                  WhatsApp
                </a>
              </li>
              <li>San José, Costa Rica</li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60 transition hover:border-brand-blue hover:text-brand-blue" aria-label={s.label}>
              {s.abbr}
            </a>
          ))}
        </div>

        {/* Legal + Creado por */}
        <div className="mt-6 space-y-2 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} CINTA MK FUTURISTA LIMITADA · Cédula jurídica: 3-102-862791 · {t("footer.derechos")}</p>
          <p>
            {t("footer.creado")}{" "}
            <a href="https://www.addingagency.com" className="font-medium text-brand-blue transition hover:text-white">
              AdDing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
