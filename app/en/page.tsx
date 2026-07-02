import type { Metadata } from "next";
import Link from "next/link";
import { business, directionsUrl, mapEmbedUrl, whatsappUrl } from "@/lib/business";
import { ConsentEmbed } from "@/components/ConsentEmbed";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SetLang } from "@/components/SetLang";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: `${business.name} — Gym in Penafiel, Portugal`,
  description:
    "Modern, welcoming gym next to Termas de São Vicente, Penafiel. Visitors and tourists welcome — day training available, friendly staff, great equipment. Rated 4.8★ on Google.",
  alternates: {
    canonical: "/en",
    languages: { "pt-PT": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${business.siteUrl}/en`,
    siteName: business.name,
    title: `${business.name} — Gym in Penafiel, Portugal`,
    description:
      "Visitors and tourists welcome. Great equipment, friendly staff, 4.8★ on Google.",
  },
};

const TRIAL_MESSAGE = `Hi! I'd like to train at ${business.name}. Could you tell me more?`;

const touristReviews = [
  {
    name: "Louk den Hartogh",
    text: "Wonderful and welcoming gym! Great equipment and plenty of weights. Even though we don't speak Portuguese, as tourists we were made very welcome. A great training experience during our holiday!",
  },
  {
    name: "Siem Bleker",
    text: "The best gym in the area, with friendly staff. Great to use during your holiday or as your regular gym.",
  },
];

const hoursEn = [
  { label: "Monday – Friday", opens: "07:00", closes: "22:00" },
  { label: "Saturday", opens: "07:00", closes: "19:00" },
  { label: "Sunday", opens: "08:00", closes: "12:00" },
];

export default function EnglishPage() {
  return (
    <>
      <SetLang lang="en" />
      <ScrollProgress />
      <a
        href="#content"
        className="sr-only z-[60] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
          <Link href="/en" aria-label="Go to Gym — home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            Português
          </Link>
        </div>
      </header>

      <main id="content" className="bg-ink">
        {/* Hero */}
        <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-[radial-gradient(1000px_600px_at_80%_10%,rgba(242,242,0,0.07),transparent_60%),radial-gradient(800px_500px_at_10%_90%,rgba(242,242,0,0.05),transparent_60%)]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:px-8">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-smoke">
                <StarIcon className="h-4 w-4 fill-accent stroke-accent" />
                4.8★ on Google · Penafiel, Portugal
              </p>
              <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-wide text-white sm:text-7xl">
                Train with us <span className="text-accent">on holiday</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-zinc-300">
                Staying near Termas de São Vicente? {business.name} is a
                modern, welcoming local gym — great equipment, plenty of
                weights, and staff who make visitors feel at home.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl(TRIAL_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-ink transition-colors hover:bg-accent-strong"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Message us on WhatsApp
                </a>
                <a
                  href={`tel:${business.phone.e164}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {business.phone.display}
                </a>
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                Membership from{" "}
                <span className="font-semibold text-accent">
                  €{business.pricing.monthly}/month
                </span>{" "}
                — short stays welcome, just ask.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Tourist reviews */}
        <section className="bg-carbon py-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">
                Visitors love it here
              </h2>
              <p className="mt-3 text-smoke">
                Real Google reviews from travellers who trained with us.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {touristReviews.map((review) => (
                <Reveal key={review.name}>
                  <figure className="flex h-full flex-col rounded-2xl border border-white/5 bg-steel/60 p-7">
                    <div className="mb-4 flex gap-1" aria-label="5 stars">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <StarIcon
                          key={star}
                          className="h-4 w-4 fill-accent stroke-accent"
                        />
                      ))}
                    </div>
                    <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300">
                      “{review.text}”
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-semibold text-white">
                      {review.name}
                      <span className="block text-xs font-normal text-zinc-500">
                        Google review · translated from Dutch
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Hours + Location */}
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/5 bg-carbon p-8">
                <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <ClockIcon className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl uppercase tracking-wide text-white">
                  Opening hours
                </h2>
                <ul className="mt-6 space-y-3 text-smoke">
                  {hoursEn.map((slot) => (
                    <li
                      key={slot.label}
                      className="flex justify-between gap-6 border-b border-white/5 pb-3 last:border-b-0"
                    >
                      <span>{slot.label}</span>
                      <span className="font-display tracking-wider text-accent">
                        {slot.opens} — {slot.closes}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-carbon p-8">
                <div className="mb-5 inline-flex self-start rounded-xl bg-accent/10 p-3 text-accent">
                  <MapPinIcon className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl uppercase tracking-wide text-white">
                  Where to find us
                </h2>
                <address className="mt-4 not-italic leading-relaxed text-smoke">
                  {business.address.full}, Portugal
                  <br />
                  Next to Termas de São Vicente
                </address>
                <div className="mt-6 flex-1">
                  <ConsentEmbed
                    service="Google Maps"
                    buttonLabel="Show map"
                    note="Loading connects your browser to {service}, which may set cookies. You can use the directions button instead."
                    className="h-full min-h-56 rounded-xl border border-white/5 bg-steel/60"
                  >
                    <iframe
                      src={mapEmbedUrl}
                      title={`Map — ${business.name}`}
                      className="h-full min-h-56 w-full rounded-xl border-0 grayscale-[35%]"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </ConsentEmbed>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-accent-strong"
                >
                  Get directions
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-ink py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            © {new Date().getFullYear()} {business.name}® — all rights
            reserved.
          </span>
          <Link href="/" className="transition-colors hover:text-accent">
            Ver site em português →
          </Link>
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  );
}
