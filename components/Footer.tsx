import Image from "next/image";

const serviceLinks = ["Diseño Web", "Agentes de IA", "SEO", "Branding", "Video"];
const companyLinks = ["Nosotros", "Portafolio", "Blog", "Contacto"];

export function Footer() {
  return (
    <footer className="bg-black pb-8 pt-14 text-white md:pt-20">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logos/logo-adding-blanco.svg"
              alt="AdDing Agency"
              width={150}
              height={42}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Impulsamos PYMES con estrategias digitales inteligentes, humanas y efectivas. Costa Rica.
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
                <a href="tel:+50670136366" className="transition hover:text-brand-blue">
                  +506 7013-6366
                </a>
              </li>
              <li>San José, Costa Rica</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} AdDing Agency. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <a className="rounded-full border border-white/15 px-3 py-1 transition hover:border-brand-blue hover:text-brand-blue" href="#" aria-label="LinkedIn">
              in
            </a>
            <a className="rounded-full border border-white/15 px-3 py-1 transition hover:border-brand-blue hover:text-brand-blue" href="#" aria-label="Instagram">
              ig
            </a>
            <a className="rounded-full border border-white/15 px-3 py-1 transition hover:border-brand-blue hover:text-brand-blue" href="#" aria-label="Facebook">
              fb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
