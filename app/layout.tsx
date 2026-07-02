import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { business } from "@/lib/business";
import { buildLocalBusinessJsonLd } from "@/lib/jsonld";
import "./globals.css";

// Dupla tipográfica clássica de marcas desportivas:
// Barlow Condensed para títulos, Barlow para texto.
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} — Ginásio em Penafiel`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "ginásio",
    "Penafiel",
    "Portela",
    "fitness",
    "musculação",
    "treino funcional",
    "personal training",
    "Go to Gym",
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-PT": "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} — Ginásio em Penafiel`,
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Ginásio em Penafiel`,
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="pt-PT" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
