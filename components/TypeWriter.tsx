"use client";

import { useEffect, useRef, useState } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
}

export function TypeWriter({ text, delay = 45, startDelay = 600, className = "" }: TypeWriterProps) {
  // Start with full text so SSR/initial render is SEO-friendly and no CLS
  const [displayed, setDisplayed] = useState(text);
  const [done, setDone] = useState(true);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    // After startDelay, restart the typing animation from scratch
    const startTimer = setTimeout(() => {
      let i = 0;
      setDisplayed("");
      setDone(false);
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, delay);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span className={className}>
      {displayed || "\u00A0"}
      {!done && (
        <span className="animate-pulse text-primary font-light">|</span>
      )}
    </span>
  );
}
