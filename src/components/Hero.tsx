import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ajmLogo from "@/assets/ajm-hex-logo.png";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{
        animationDelay: "1s"
      }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 animate-float">
          <img src={ajmLogo} alt="AJM Web Solutions" className="w-48 h-48 mx-auto drop-shadow-2xl" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
          <span className="text-foreground">Tu Socio Tecnológico Integral:</span>
          <br />
          <span className="gradient-text">Desarrollo Web, Móvil e IA</span>
          <br />
          <span className="text-foreground">Aplicada a tus Datos</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          Apps, Web, Mantenimiento, RAG e Infraestructura. Transformamos código y datos en soluciones inteligentes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          <Button size="lg" className="gradient-tech text-white font-semibold hover:opacity-90 transition-opacity" onClick={scrollToContact}>
            Agendar Consultoría
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={() => document.getElementById("rag-section")?.scrollIntoView({
          behavior: "smooth"
        })}>
            Ver Soluciones IA
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;