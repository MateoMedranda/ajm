import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ajmLogo from "@/assets/ajm-hex-logo.png";
import vrHeroImage from "@/assets/vr-user-hero.jpg";

const Hero = ({
  id
}: {
  id?: string;
}) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{
          animationDelay: "1s"
        }} />
      </div>

      {/* Blurred hero image on the right - fused with background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-3/5 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"
        />
        <img 
          src={vrHeroImage} 
          alt="" 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto min-h-full object-cover opacity-60 blur-[2px] scale-110"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* Content - Left aligned */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <img src={ajmLogo} alt="AJM Web Solutions" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in leading-tight text-left">
            <span className="gradient-text">Transformación Digital</span>
            <br />
            <span className="text-foreground">con IA y Desarrollo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in leading-relaxed text-left" style={{
            animationDelay: "0.2s"
          }}>
            Apps, Web, Mantenimiento, RAG e Infraestructura inteligente. <br />
            <span className="text-primary font-semibold">Convertimos tus ideas en realidad digital.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
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
      </div>
    </section>
  );
};

export default Hero;