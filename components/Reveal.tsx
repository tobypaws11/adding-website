"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "right" | "left" | "scale" | "fade";
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
  threshold?: number;
}

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const variantClass =
    variant === "right" ? "reveal-right" :
    variant === "left"  ? "reveal-left"  :
    variant === "scale" ? "reveal-scale" :
    variant === "fade"  ? "reveal-fade"  :
    "reveal";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${variantClass} delay-${delay} ${className}`}>
      {children}
    </div>
  );
}
