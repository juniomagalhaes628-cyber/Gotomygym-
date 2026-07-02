import { About } from "@/components/About";
import { Classes } from "@/components/Classes";
import { Contact } from "@/components/Contact";
import { FacebookFeed } from "@/components/FacebookFeed";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Schedule } from "@/components/Schedule";
import { buildFaqJsonLd } from "@/lib/jsonld";

export default function HomePage() {
  const faqJsonLd = buildFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Gallery />
        <Schedule />
        <Reviews />
        <Location />
        <FacebookFeed />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
