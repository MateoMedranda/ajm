import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// Footer es ligero, podemos dejarlo o hacerlo lazy si prefieres
import Footer from "@/components/Footer";

// 1. Importación diferida de componentes "Below the fold" (Debajo del pliegue)
const Services = lazy(() => import("@/components/Services"));
const SpecializationSection = lazy(() => import("@/components/SpecializationSection"));
const TechStack = lazy(() => import("@/components/TechStack"));
const Contact = lazy(() => import("@/components/Contact"));

// Componente de carga simple para que no haya saltos bruscos
const SectionLoader = () => <div className="py-20 w-full flex justify-center"><div className="animate-pulse w-full h-32 bg-gray-100/5 rounded-lg max-w-4xl"></div></div>;

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* El Hero se carga normal (Eager) porque es lo primero que ve el usuario */}
      <Hero id="hero" />

      {/* El resto se carga solo cuando el navegador tenga tiempo libre */}
      <Suspense fallback={<SectionLoader />}>
        <Services id="services" />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SpecializationSection id="vr" />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TechStack id="tech" />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact id="contact" />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;