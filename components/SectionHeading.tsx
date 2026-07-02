"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  const reduced = useReducedMotion();

  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 flex items-center justify-center gap-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
        {eyebrow}
        <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
      </p>
      <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {/* sublinhado que se desenha quando entra no viewport */}
      <motion.span
        aria-hidden="true"
        className="mx-auto mt-5 block h-1 w-16 bg-accent"
        initial={reduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      />
      {subtitle ? <p className="mt-4 text-smoke">{subtitle}</p> : null}
    </Reveal>
  );
}
