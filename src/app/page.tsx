import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-onyx min-h-screen text-titanium overflow-hidden">
      <Hero />
      <About />
      <Disciplines />
      <Process />
      <Pricing />
      <Philosophy />
      <Footer />
    </main>
  );
}
