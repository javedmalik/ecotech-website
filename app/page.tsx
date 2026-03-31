import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import StatsTicker from "@/components/StatsTicker";
import About from "@/components/About";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import Process from "@/components/Process";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <StatsTicker />
        <About />
        <Services />
        <Materials />
        <Process />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
