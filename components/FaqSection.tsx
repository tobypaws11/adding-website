"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  label?: string;
  title?: string;
  subtitle?: string;
}

export function FaqSection({ items, label = "FAQ", title = "Preguntas frecuentes", subtitle }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-matte-black py-24 md:py-40 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-2xl font-black uppercase tracking-[0.4em] text-primary mb-6 md:mb-8">{label}</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">{title}</h2>
          {subtitle && <p className="text-white/40 text-lg font-light max-w-3xl">{subtitle}</p>}
          <div className="w-24 h-[1px] bg-primary mt-8" />
        </div>
        <div className="max-w-4xl mx-auto space-y-2">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-white/10 bg-carbon-gray hover:border-primary/20 transition-all">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left gap-4"
                >
                  <span className="text-sm md:text-base font-bold tracking-wide">{item.question}</span>
                  <span className={`material-symbols-outlined text-primary text-xl shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-white/50 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
