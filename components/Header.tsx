"use client";

import { useEffect, useState } from "react";
import { business, whatsappUrl } from "@/lib/business";
import { MenuIcon, XIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#aulas", label: "Aulas" },
  { href: "#planos", label: "Planos" },
  { href: "#horarios", label: "Horários" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#novidades", label: "Novidades" },
  { href: "#contactos", label: "Contactos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // destaca no menu a secção atualmente visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
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
        <a href="#inicio" aria-label="Go to Gym — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive ? "text-accent" : "text-zinc-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={whatsappUrl(`Olá! Gostava de marcar uma aula experimental no ${business.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
          >
            Aula experimental
          </a>
          <a
            href="/en"
            aria-label="English version"
            className="text-sm font-semibold text-zinc-400 transition-colors hover:text-accent"
          >
            EN
          </a>
        </nav>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          className="flex h-[calc(100svh-4rem)] flex-col gap-2 overflow-y-auto border-t border-white/5 bg-ink px-6 py-6 lg:hidden"
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
          <a
            href="/en"
            onClick={() => setOpen(false)}
            className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white"
          >
            English version
          </a>
        </nav>
      ) : null}
    </header>
  );
}
