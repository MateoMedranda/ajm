import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RAGSection from "@/components/RAGSection";
import SpecializationSection from "@/components/SpecializationSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <RAGSection />
      <SpecializationSection />
      <InfrastructureSection />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
