"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  /** margem para começar a carregar antes de entrar no viewport */
  rootMargin?: string;
  className?: string;
  placeholder?: ReactNode;
};

/**
 * Só monta os filhos quando o elemento se aproxima do viewport
 * (IntersectionObserver). Usado para embeds de terceiros — Google Maps
 * e Facebook Page Plugin — para não bloquearem o render inicial.
 */
export function LazyMount({
  children,
  rootMargin = "400px",
  className,
  placeholder,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : placeholder}
    </div>
  );
}
