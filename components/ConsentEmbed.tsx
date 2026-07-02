"use client";

import { useState, type ReactNode } from "react";

type ConsentEmbedProps = {
  children: ReactNode;
  /** nome do serviço externo (ex.: "Facebook", "Google Maps") */
  service: string;
  /** texto do botão de carregamento */
  buttonLabel: string;
  /** nota de privacidade mostrada no placeholder */
  note: string;
  icon?: ReactNode;
  className?: string;
};

/**
 * Click-to-load para embeds de terceiros (RGPD-friendly): o conteúdo
 * externo — e os respetivos cookies — só carrega depois de o visitante
 * clicar. Também melhora a performance: zero pedidos a terceiros no
 * carregamento inicial da página.
 */
export function ConsentEmbed({
  children,
  service,
  buttonLabel,
  note,
  icon,
  className,
}: ConsentEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 px-6 py-10 text-center ${
        className ?? ""
      }`}
    >
      {icon ? <div className="text-accent">{icon}</div> : null}
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="rounded-full bg-accent px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-accent-strong"
      >
        {buttonLabel}
      </button>
      <p className="max-w-sm text-xs leading-relaxed text-zinc-500">
        {note.replace("{service}", service)}
      </p>
    </div>
  );
}
