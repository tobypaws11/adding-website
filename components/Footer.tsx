import Image from "next/image";

const serviceLinks = ["Diseño Web", "Agentes de IA", "SEO", "Ecosistemas de Leads", "Automatización"];
const companyLinks = ["Nosotros", "Servicios", "Blog", "Contacto"];

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
  return (
    <footer className="bg-black pb-8 pt-14 text-white md:pt-20">
      <div className="section-shell">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logos/logo-adding-blanco.svg"
              alt="AdDing Agency"
              width={150}
              height={42}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Impulsamos PYMES con estrategias digitales inteligentes, humanas y efectivas.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Empresa</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {companyLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:hola@addingagency.com" className="transition hover:text-brand-blue">
                  hola@addingagency.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50670136366" target="_blank" rel="noreferrer" className="transition hover:text-brand-blue">
                  WhatsApp: +506 7013-6366
                </a>
              </li>
              <li>San José, Costa Rica</li>
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60 transition hover:border-brand-blue hover:text-brand-blue"
              aria-label={s.label}
            >
              {s.abbr}
            </a>
          ))}
        </div>

        <div className="mt-6 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} AdDing Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
