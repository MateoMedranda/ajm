import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ajmLogo from "@/assets/ajm-hex-logo.png";
import { Suspense, lazy, memo } from "react";

// 1. Lazy load del fondo pesado
const HeroBackground = lazy(() => import("./HeroBackground"));

const Hero = ({ id }: { id?: string }) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-gradient-to-b from-background via-background to-background/95 contain-paint">
      
      {/* 2. Suspense: Muestra un fondo simple mientras carga el pesado. Esto libera el CPU inicial. */}
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <HeroBackground />
      </Suspense>

      <div className="relative z-10 text-center max-w-5xl mx-auto mt-[100px] mb-[100px]">
        <div className="mb-8 animate-float relative will-change-transform">
          {/* Un glow simple estático para que cargue instantáneo con el logo */}
          <div className="absolute inset-0 w-48 h-48 mx-auto bg-primary/20 rounded-full blur-xl" />
          
          <img 
            src={ajmLogo} 
            alt="AJM Web Solutions" 
            className="w-48 h-48 mx-auto drop-shadow-2xl relative z-10"
            width={192} 
            height={192}
            // 3. PRIORIDAD MÁXIMA AL LOGO
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 animate-fade-in leading-tight">
          <span className="gradient-text">Transformación Digital</span>
          <br />
          <span className="text-foreground">con IA y Desarrollo</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Apps, Web, Mantenimiento, RAG e Infraestructura inteligente. <br />
          <span className="text-primary font-semibold">Convertimos tus ideas en realidad digital.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="gradient-tech text-white font-semibold hover:opacity-90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20" 
            onClick={scrollToContact}
          >
            Agendar Consultoría
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/10" 
            onClick={() => document.getElementById("rag-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Soluciones IA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);