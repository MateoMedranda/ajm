import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState, useCallback } from "react";
import { Globe, Zap, Shield, TrendingUp, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import tabletCodeImg from "@/assets/tablet-code-3d.jpg";
import serverRackImg from "@/assets/server-rack-3d.jpg";
import aiBrainImg from "@/assets/ai-brain-database-3d.jpg";

const benefits = [
  {
    icon: Globe,
    title: "Acceso Universal",
    description: "Disponible desde cualquier dispositivo con navegador, sin instalaciones.",
    image: tabletCodeImg,
  },
  {
    icon: Zap,
    title: "Rendimiento Óptimo",
    description: "Carga rápida y experiencia fluida gracias a tecnologías modernas.",
    image: serverRackImg,
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Protección de datos con encriptación y autenticación robusta.",
    image: aiBrainImg,
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description: "Crece junto a tu negocio sin limitaciones técnicas.",
    image: tabletCodeImg,
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Múltiples usuarios trabajando en tiempo real desde cualquier lugar.",
    image: serverRackImg,
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Tu aplicación siempre activa, sin interrupciones ni mantenimientos.",
    image: aiBrainImg,
  },
];

const SpecializationSection = ({ id }: { id?: string }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = benefits.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section
      id={id}
      ref={elementRef}
      className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black w-full overflow-hidden"
    >
      {/* Curved border top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[150%] h-[100px]"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Por qué dar el salto a una{" "}
            <span className="gradient-text">Web App</span>?
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-5xl mx-auto">
            Conoce los beneficios clave de las aplicaciones web para tu negocio
            y cómo pueden transformar tu presencia digital.
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(totalSlides / 3) * 100}%`,
            }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="px-3"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <div className="w-10 h-10 rounded-lg gradient-tech flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="text-lg font-bold mb-2 text-white">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {/* Prev Arrow */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 hover:bg-gray-700 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 group"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-cyan-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 hover:bg-gray-700 hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 group"
            aria-label="Siguiente slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* Curved border bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] rotate-180"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default SpecializationSection;