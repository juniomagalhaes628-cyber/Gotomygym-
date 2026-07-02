"use client";

import { useEffect, useState } from "react";
import { business, whatsappUrl } from "@/lib/business";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Botão WhatsApp flutuante: aparece depois de o visitante passar o hero,
 * para não competir com o CTA principal.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl(`Olá! Gostava de saber mais sobre o ${business.name}.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink shadow-lg shadow-black/40 transition-all duration-300 hover:bg-accent-strong ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
