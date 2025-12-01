import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SpecializationSection from "@/components/SpecializationSection";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Navbar />
      <Hero id="hero" />
      <Services id="services" className="pt-[40px] pb-[40px]" />
      <SpecializationSection id="vr" />
      <TechStack id="tech" />
      <Contact id="contact" />
      <Footer />
    </div>;
};
export default Index;