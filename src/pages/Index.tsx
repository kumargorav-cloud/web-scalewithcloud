import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import WhyThese from "./_components/WhyThese";
import HowIWork from "./_components/HowIWork";
import AIApproach from "./_components/AIApproach";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyThese />
      <HowIWork />
      <AIApproach />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
