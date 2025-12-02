import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ajmLogo from "@/assets/ajm-hex-logo.png";
import { useEffect, useState } from "react";

const Hero = ({
  id
}: {
  id?: string;
}) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    }));
    setParticles(newParticles);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-gradient-to-b from-background via-background to-background/95">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Large animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-10 right-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-10 w-[250px] h-[250px] bg-violet-500/15 rounded-full blur-[70px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/60 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration + 3}s`,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.size}px hsl(var(--primary)/0.4)`
            }}
          />
        ))}
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      </div>

      {/* Orbiting rings around logo area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 border border-primary/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-4 border border-accent/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute inset-8 border border-primary/5 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
      </div>

      {/* Glowing corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/20 to-transparent blur-3xl" />
      <div className="absolute bottom-32 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/15 to-transparent blur-2xl" />
      <div className="absolute bottom-32 right-0 w-48 h-48 bg-gradient-to-tl from-violet-500/15 to-transparent blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mt-[100px] mb-[100px]">
        <div className="mb-8 animate-float relative">
          {/* Logo glow effect */}
          <div className="absolute inset-0 w-48 h-48 mx-auto bg-primary/30 rounded-full blur-2xl animate-pulse-glow" />
          <img src={ajmLogo} alt="AJM Web Solutions" className="w-48 h-48 mx-auto drop-shadow-2xl relative z-10" />
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
            className="gradient-tech text-white font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25" 
            onClick={scrollToContact}
          >
            Agendar Consultoría
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20" 
            onClick={() => document.getElementById("rag-section")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Soluciones IA
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
