import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Payment from "@/components/sections/Payment";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Portfolio />
        <Testimonials />
        <Payment />
      </main>
      <Footer />
    </div>
  );
}
