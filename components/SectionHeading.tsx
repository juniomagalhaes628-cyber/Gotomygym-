import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-smoke">{subtitle}</p> : null}
    </Reveal>
  );
}
