"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-16 border-t border-white/10 pt-12">
      <h2 className="mb-8 text-2xl font-black tracking-tight text-white">
        Preguntas frecuentes
      </h2>
      <div className="space-y-2">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`border transition-colors duration-200 ${
                isOpen
                  ? "border-primary/40 bg-primary/5"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-bold text-white md:text-base">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-primary transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm leading-relaxed text-white/65 md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
