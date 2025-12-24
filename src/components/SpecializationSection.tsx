import { Box, Gamepad2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SpecializationSection = ({ id }: { id?: string }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={elementRef}
      className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black w-full overflow-hidden"
    >
      {/* Curved border top - Se queda estático */}
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

      {/* CAMBIO 2: Aplicamos la animación AQUI, al contenedor del contenido */}
      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
        }`}>
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Modelado <span className="gradient-text">3D y Realidad Virtual</span>
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Experiencias inmersivas para videojuegos y aplicaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl gradient-tech flex items-center justify-center mb-4">
              <Box className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Modelado 3D</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Modelos 3D de alta calidad para videojuegos y aplicaciones.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mr-2" />
                Assets para Videojuegos
              </li>
              <li className="flex items-center text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mr-2" />
                Visualización 3D
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl gradient-tech flex items-center justify-center mb-4">
              <Gamepad2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">VR & Gaming</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Experiencias inmersivas y desarrollo de videojuegos.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mr-2" />
                Realidad Virtual (VR)
              </li>
              <li className="flex items-center text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mr-2" />
                Unity & Unreal Engine
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Curved border bottom - Se queda estático */}
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