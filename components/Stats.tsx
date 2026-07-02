"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

type Stat = {
  /** valor numérico a animar (null = mostrar `label` estático) */
  value: number | null;
  decimals?: number;
  suffix?: string;
  /** texto estático quando não é numérico (ex.: "7h–22h") */
  staticText?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 4.8, decimals: 1, suffix: "★", label: "Classificação Google" },
  { value: null, staticText: "7h–22h", label: "Aberto todos os dias úteis" },
  { value: 100, suffix: "%", label: "Acompanhamento local" },
];

function AnimatedValue({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const target = stat.value ?? 0;
  const [display, setDisplay] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!inView || stat.value === null) return;
    if (reduced) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduced, target, stat.value]);

  if (stat.value === null) {
    return <>{stat.staticText}</>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {display.toFixed(stat.decimals ?? 0).replace(".", ",")}
      {stat.suffix}
    </span>
  );
}

export function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
      {STATS.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.1}>
          <div className="card-hover rounded-2xl border border-white/5 bg-carbon p-6 hover:border-accent/30">
            <p className="font-display text-4xl text-accent">
              <AnimatedValue stat={stat} />
            </p>
            <p className="mt-2 text-sm text-smoke">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
