"use client";

import { useEffect } from "react";

/**
 * Corrige o atributo lang do <html> em páginas cujo idioma difere do
 * root layout (ex.: /en). O App Router só permite um <html> raiz, por
 * isso o ajuste é feito no cliente.
 */
export function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
