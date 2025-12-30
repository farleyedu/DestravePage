"use client";

import { useEffect, useRef, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Componente que revela conteúdo ao fazer scroll (fade + translateY)
 * Usa IntersectionObserver para performance
 */
export default function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Verifica se prefers-reduced-motion está ativo
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      element.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
