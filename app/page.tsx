import { About } from "@/components/About";
import { Classes } from "@/components/Classes";
import { Contact } from "@/components/Contact";
import { FacebookFeed } from "@/components/FacebookFeed";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Schedule } from "@/components/Schedule";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Location />
        <FacebookFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
