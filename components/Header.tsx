"use client";

import { useEffect, useState } from "react";
import { business, whatsappUrl } from "@/lib/business";
import { MenuIcon, XIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#aulas", label: "Aulas" },
  { href: "#horarios", label: "Horários" },
  { href: "#localizacao", label: "Localização" },
  { href: "#novidades", label: "Novidades" },
  { href: "#contactos", label: "Contactos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <a
          href="#inicio"
          className="font-display text-xl uppercase tracking-wide text-white"
          onClick={() => setOpen(false)}
        >
          Go <span className="text-accent">to</span> Gym
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl(`Olá! Gostava de marcar uma aula experimental no ${business.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
          >
            Aula experimental
          </a>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          className="flex h-[calc(100svh-4rem)] flex-col gap-2 border-t border-white/5 bg-ink px-6 py-6 md:hidden"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-2xl uppercase tracking-wide text-white transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappUrl(`Olá! Gostava de marcar uma aula experimental no ${business.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-accent px-6 py-4 text-center font-semibold text-ink"
          >
            Marca uma aula experimental
          </a>
        </nav>
      ) : null}
    </header>
  );
}
