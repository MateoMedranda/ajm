import { Sparkles, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import vrUserImg from "@/assets/vr-user-hero.jpg";

const SpecializationSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      id="vr-3d" 
      className={`py-32 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-24'
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Tecnología Inmersiva</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              <span className="gradient-text">Modelado 3D</span> y<br />
              Realidad Virtual
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Modelado en modelado 3D y realidad virtual, libros de datos de 2B aprovechados.{" "}
              <span className="text-primary font-semibold">Transformamos código y datos para en videojuegos inteligentes.</span>
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-tech flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Videojuegos y Experiencias VR</h3>
                  <p className="text-gray-400">Creación de mundos 3D inmersivos para gaming y simulaciones empresariales</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-tech flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Modelado y Animación 3D</h3>
                  <p className="text-gray-400">Assets profesionales para proyectos de realidad aumentada y metaverso</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="gradient-tech text-white font-semibold hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-xl"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Nuestro 3D
            </Button>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <img 
                src={vrUserImg} 
                alt="Usuario con gafas VR experimentando realidad virtual"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
