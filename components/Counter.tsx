"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  from?: number;
  to: number;
  decimals?: number;
  suffix?: string;
};

export function Counter({ from = 0, to, decimals = 0, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (shouldReduceMotion) {
      setValue(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate(latest) {
        setValue(latest);
      }
    });

    return () => controls.stop();
  }, [from, isInView, shouldReduceMotion, to]);

  return (
    <motion.span ref={ref}>
      {value.toLocaleString("es-CR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </motion.span>
  );
}
