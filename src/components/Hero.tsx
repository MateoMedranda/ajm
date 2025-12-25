import React, { useMemo } from "react"; 
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ajmLogo from "@/assets/ajm-hex-logo.png";
import backgroundHero from "@/assets/background-hero.jpg";

const Hero = ({ id }: { id?: string }) => {

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const techWords = [
    "Gana clientes", "Actualizate", "Utiliza IA", "Diseño", "Aplicaciones Móviles",
    "Automatizate", "Posicionate", "24/7", "Seguro", "UX/UI",
    "Perfecto", "Adaptativo", "Futurista", "Llamativo"
  ];

const particles = useMemo(() => {
    return techWords.map((word, i) => {
      const isLeft = Math.random() > 0.5;
      const zoneWidth = 30; 

      let leftPos;
      if (isLeft) {
        leftPos = Math.random() * zoneWidth;
      } else {
        leftPos = (100 - zoneWidth) + (Math.random() * zoneWidth);
      }

      return {
        word,
        top: Math.random() * 100 + "%",      
        left: leftPos + "%", 
        duration: Math.random() * 10 + 10 + "s", 
        delay: Math.random() * 5 + "s",     
        size: Math.random() > 0.5 ? "text-sm" : "text-xs", 
        opacity: Math.random() * 0.3 + 0.1   
      };
    });
  }, []);

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-background">

      {/* Estilos inline para la animación (puedes mover esto a tu CSS global) */}
      <style>{`
        @keyframes floatText {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: var(--target-opacity); }
          80% { opacity: var(--target-opacity); }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}</style>

      {/* --- CAPA 1: FONDO SVG Y OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundHero}
          alt="Digital Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-background/85" /> {/* Aumenté un poco la opacidad para legibilidad */}
      </div>

      {/* --- CAPA 2: LUCES DE FONDO --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {particles.map((p, index) => (
          <span
            key={index}
            className={`absolute font-mono font-bold text-[#999bff7e] ${p.size} whitespace-nowrap`}
            style={
              {
                top: p.top,
                left: p.left,
                opacity: 40,
                animation: `floatText ${p.duration} linear infinite`,
                animationDelay: p.delay,
              } as React.CSSProperties & { [key: string]: string | number }
            }
          >
            {p.word}
          </span>
        ))}
      </div>

      {/* --- CAPA 3: CONTENIDO PRINCIPAL (z-10) --- */}
      <div className="relative z-10 text-center max-w-5xl mx-auto mt-[100px] mb-[60px]">
        <div className="mb-8 animate-float">
          <img src={ajmLogo} alt="AJM Web Solutions" className="w-48 h-48 mx-auto drop-shadow-2xl" />
        </div>

        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-12 animate-fade-in leading-tight">
          <span className="text-foreground">Tu mejor vendedor </span>
          <span className="bg-gradient-to-r from-[#80a8ff] to-[#4759ff] bg-clip-text text-transparent">es tu web</span>
          
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          No te quedes en el pasado y da el gran paso al mundo digital
          <br />
          <br />
          <span className="text-[#98ffff] font-semibold">Con nosotros, tus ideas se vuelven una realidad digital</span>
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button size="lg" className="bg-[#3434ff] text-white font-semibold hover:opacity-90 transition-opacity" onClick={scrollToContact}>
            Empezar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#d400ff] text-[white] hover:bg-primary/10 hover:text-white hover:border-[blue]"
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