import { gymClasses } from "@/lib/content";

/**
 * Faixa amarela com as modalidades em scroll contínuo (CSS puro).
 * Para em prefers-reduced-motion (ver globals.css).
 */
export function Ticker() {
  const items = [...gymClasses.map((c) => c.name), "Go to Gym"];
  // duplicado para o loop ser contínuo
  const sequence = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-black/20 bg-accent py-3"
    >
      <div className="ticker-track flex w-max items-center gap-8">
        {sequence.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap font-display text-lg uppercase tracking-widest text-ink"
          >
            {item}
            <span className="text-ink/40">■</span>
          </span>
        ))}
      </div>
    </div>
  );
}
