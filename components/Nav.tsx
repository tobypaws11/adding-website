"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#porque-adding", label: "Por qué AdDing" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`rounded-full border px-4 py-3 md:px-6 ${
            scrolled
              ? "glass border-black/5 shadow-soft"
              : "border-transparent bg-white/40 backdrop-blur-md"
          }`}
          aria-label="Principal"
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex shrink-0 items-center" aria-label="AdDing Agency">
              <Image
                src="/logos/logo-adding-negro.svg"
                alt="Logo de AdDing Agency"
                width={138}
                height={38}
                priority
              />
            </Link>
            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-black/75 transition-colors hover:text-brand-blue"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="inline-flex items-center rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              >
                Hablemos
              </a>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white md:hidden"
            >
              Hablemos
            </a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
