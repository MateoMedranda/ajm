import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { MessageSquare, Lightbulb, Code2, Rocket, Wrench } from "lucide-react";

const processes = [
  {
    step: 1,
    title: "Consultoría Inicial",
    description: "Escuchamos tus ideas y objetivos. Analizamos tu negocio para entender exactamente qué necesitas y cómo podemos ayudarte a alcanzar tus metas.",
    icon: MessageSquare,
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(34, 211, 238, 0.4)",
    borderColor: "border-cyan-400/30",
  },
  {
    step: 2,
    title: "Propuesta Innovadora",
    description: "Diseñamos una solución personalizada con wireframes y prototipos. Te presentamos una propuesta visual clara antes de escribir una sola línea de código.",
    icon: Lightbulb,
    color: "from-purple-400 to-pink-500",
    glowColor: "rgba(192, 132, 252, 0.4)",
    borderColor: "border-purple-400/30",
  },
  {
    step: 3,
    title: "Desarrollo Conjunto",
    description: "Construimos tu proyecto con metodologías ágiles. Te mantenemos informado en cada sprint y puedes ver el progreso en tiempo real.",
    icon: Code2,
    color: "from-pink-400 to-rose-500",
    glowColor: "rgba(244, 114, 182, 0.4)",
    borderColor: "border-pink-400/30",
  },
  {
    step: 4,
    title: "Despliegue",
    description: "Lanzamos tu aplicación al mundo. Configuramos servidores, dominios y SSL para que tu proyecto esté listo para recibir usuarios desde el día uno.",
    icon: Rocket,
    color: "from-green-400 to-emerald-500",
    glowColor: "rgba(52, 211, 153, 0.4)",
    borderColor: "border-green-400/30",
  },
  {
    step: 5,
    title: "Mantenimiento",
    description: "No te dejamos solo. Ofrecemos soporte continuo, actualizaciones de seguridad y mejoras para que tu aplicación siempre esté en óptimas condiciones.",
    icon: Wrench,
    color: "from-yellow-400 to-orange-500",
    glowColor: "rgba(250, 204, 21, 0.4)",
    borderColor: "border-yellow-400/30",
  },
];

const ProcessSection = ({ id }: { id?: string }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id={id}
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={elementRef}
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Proceso de Desarrollo Web
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un enfoque estructurado y transparente para transformar tus ideas en soluciones digitales exitosas
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 via-green-500 to-yellow-500 opacity-20 -translate-y-1/2" />

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Card */}
                  <div
                    className={`relative h-full p-6 rounded-2xl border ${process.borderColor} bg-gray-900/80 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                      isHovered
                        ? "scale-105 border-opacity-100"
                        : "scale-100 border-opacity-30"
                    }`}
                    style={{
                      boxShadow: isHovered
                        ? `0 0 40px ${process.glowColor}, 0 0 80px ${process.glowColor}`
                        : "none",
                    }}
                  >
                    {/* Step Number */}
                    <div
                      className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center text-white font-bold text-sm shadow-lg transition-transform duration-300 ${
                        isHovered ? "scale-125" : "scale-100"
                      }`}
                    >
                      {process.step}
                    </div>

                    {/* Icon Container */}
                    <div
                      className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${process.color} p-0.5 transition-all duration-500 ${
                        isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                      }`}
                    >
                      <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                        <Icon
                          className={`w-8 h-8 transition-all duration-300 ${
                            isHovered ? "text-white" : "text-gray-400"
                          }`}
                          style={{
                            filter: isHovered
                              ? `drop-shadow(0 0 10px ${process.glowColor})`
                              : "none",
                          }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg font-bold mb-3 transition-all duration-300 ${
                        isHovered
                          ? `bg-gradient-to-r ${process.color} bg-clip-text text-transparent`
                          : "text-white"
                      }`}
                    >
                      {process.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isHovered ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {process.description}
                    </p>

                    {/* Decorative corner glow */}
                    <div
                      className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-full transition-opacity duration-500 ${
                        isHovered ? "opacity-20" : "opacity-0"
                      }`}
                      style={{
                        background: `radial-gradient(circle at bottom right, ${process.glowColor}, transparent 70%)`,
                      }}
                    />
                  </div>

                  {/* Arrow connector (visible on lg screens) */}
                  {index < processes.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div
                        className={`w-6 h-6 rotate-45 border-t-2 border-r-2 transition-all duration-300 ${
                          isHovered || hoveredIndex === index + 1
                            ? "border-purple-400 opacity-100"
                            : "border-gray-600 opacity-40"
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-50" />
        </div>
      </div>

      {/* Bottom curved border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60V20C240 0 480 0 720 20C960 40 1200 40 1440 20V60H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default ProcessSection;
