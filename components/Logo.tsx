/**
 * Logo oficial: moldura quadrada amarela com "GO / TO GYM" a branco.
 * `LogoMark` é a versão símbolo (quadrado); `Logo` junta símbolo + wordmark
 * para o header e footer.
 */

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <rect
        x="5"
        y="5"
        width="54"
        height="54"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="7"
      />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="var(--font-display)"
        fontSize="21"
        letterSpacing="1"
      >
        GO
      </text>
      <text
        x="32"
        y="48"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="var(--font-sans)"
        fontWeight="700"
        fontSize="8.5"
        letterSpacing="1.5"
      >
        TO GYM
      </text>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className="h-10 w-10" />
      <span className="font-display text-xl uppercase leading-none tracking-wide text-white">
        Go <span className="text-accent">to</span> Gym
      </span>
    </span>
  );
}
