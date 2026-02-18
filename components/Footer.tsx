"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/addingagencydotcom", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> },
  { label: "Instagram", href: "https://www.instagram.com/addingagencydotcom/", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/> },
  { label: "X", href: "https://x.com/AdDingAgencydot", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC_-MOkVciT3NcvtKmUG22Lw", icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> },
  { label: "TikTok", href: "https://www.tiktok.com/@addingagencydotcom", icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/> },
  { label: "Facebook", href: "https://www.facebook.com/addingagencydotcom/", icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
  { label: "Pinterest", href: "https://www.pinterest.com/addingagencydotcom/", icon: <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.379-.293 1.194-.333 1.361-.052.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/> },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="bg-matte-black pt-24 md:pt-48 pb-12 md:pb-24 border-t border-white/5 relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-24 mb-24 md:mb-48">
          <div className="lg:col-span-6 space-y-8 md:space-y-16">
            <div className="flex items-center">
              <img src="/logos/logo-icon.svg" alt="AdDing Agency" className="h-12 w-auto md:h-14" />
            </div>
            <p className="text-white/30 max-w-xl text-base md:text-lg font-light leading-relaxed tracking-tight-luxury">
              {t("footer.tagline")}
            </p>
            <div className="space-y-3 text-sm text-white/40">
              <div><a href="mailto:hola@addingagency.com?subject=Consulta%20desde%20addingagency.com" className="hover:text-primary transition-all">hola@addingagency.com</a></div>
              <div>
                <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="hover:text-primary transition-all inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.227A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                  WhatsApp
                </a>
              </div>
              <div>Heredia, Costa Rica</div>
            </div>
            <div className="flex gap-6 md:gap-8">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-white/20 hover:text-primary transition-all" aria-label={s.label}>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8 md:space-y-12">
            <h5 className="text-xs font-black uppercase tracking-[0.5em] text-white">{t("footer.servicios")}</h5>
            <ul className="space-y-4 md:space-y-6">
              {[
                { title: t("svc.leads.title"), id: "svc-01" },
                { title: t("svc.auto.title"), id: "svc-02" },
                { title: t("svc.seo.title"), id: "svc-03" },
                { title: t("svc.web.title"), id: "svc-04" },
                { title: t("svc.ai.title"), id: "svc-05" },
                { title: t("svc.email.title"), id: "svc-06" },
              ].map((s) => (
                <li key={s.id}><Link href={`/servicios#${s.id}`} className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8 md:space-y-12">
            <h5 className="text-xs font-black uppercase tracking-[0.5em] text-white">{t("footer.empresa")}</h5>
            <ul className="space-y-4 md:space-y-6">
              <li><Link href="/servicios" className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{t("nav.servicios")}</Link></li>
              <li><Link href="/por-que-adding" className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{t("nav.porque")}</Link></li>
              <li><Link href="/nosotros" className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{t("nav.nosotros")}</Link></li>
              <li><Link href="/blog" className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{t("nav.blog")}</Link></li>
              <li><Link href="/contacto" className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{t("nav.contacto")}</Link></li>
              <li><Link href="/terminos" className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{t("footer.terms")}</Link></li>
              <li><Link href="/privacidad" className="text-xs font-bold text-white/40 hover:text-primary tracking-luxury transition-all">{t("footer.privacy")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
          <div className="text-xs font-mono text-white/20 uppercase tracking-[0.3em] text-center md:text-left">
            © {new Date().getFullYear()} CINTA MK FUTURISTA LIMITADA · CED. 3-102-862791
          </div>
          <div className="text-xs font-mono text-white/20 uppercase tracking-[0.3em]">
            {t("footer.creado")} <a href="https://www.addingagency.com" className="text-primary hover:text-white transition-colors">AdDing Agency</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
