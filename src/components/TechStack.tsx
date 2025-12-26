import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

const TechStack = ({ id }: { id?: string }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [glowingIndex, setGlowingIndex] = useState(0);

  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", color: "#FF9900" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingIndex(Math.floor(Math.random() * technologies.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section
      id={id}
      ref={elementRef}
      // CORRECCIÓN: Fondo estático, sin animación de movimiento, width full y overflow hidden
      className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black w-full overflow-hidden"
    >

      {/* CORRECCIÓN: La animación se aplica aquí, al contenedor interno */}
      <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
        }`}>
        <h3 className="text-center text-2xl font-bold text-white mb-4">
          Tecnologías que Dominamos
        </h3>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Trabajamos con las herramientas más avanzadas del mercado
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 group transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative transition-all duration-1000 ${glowingIndex === index ? 'scale-110' : ''
                }`}>
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`h-16 w-16 object-contain transition-all duration-1000 ${glowingIndex === index ? '' : 'grayscale'
                    } group-hover:grayscale-0 group-hover:scale-110`}
                  style={{
                    filter: glowingIndex === index ? `drop-shadow(0 0 20px ${tech.color}80)` : undefined,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 20px ${tech.color}80)`;
                  }}
                  onMouseLeave={(e) => {
                    if (glowingIndex !== index) {
                      e.currentTarget.style.filter = '';
                    }
                  }}
                />
              </div>
              <span className="text-xs text-gray-400 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      {/* Curved border bottom - Estático */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180 text-white">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-900"></path>
        </svg>
      </div>
    </section>
  );
};

export default TechStack;