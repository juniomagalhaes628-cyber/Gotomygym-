import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { business } from "@/lib/business";
import { buildLocalBusinessJsonLd } from "@/lib/jsonld";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
