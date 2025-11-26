import { Code2, Brain, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import tabletCodeImg from "@/assets/tablet-code-3d.jpg";
import aiBrainImg from "@/assets/ai-brain-database-3d.jpg";
import serverRackImg from "@/assets/server-rack-3d.jpg";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web y Móvil",
    description: "Creamos aplicaciones web modernas y apps móviles de alta calidad que impulsan tu negocio al siguiente nivel digital.",
    image: tabletCodeImg,
    features: ["React & TypeScript", "PWAs", "iOS/Android Nativo", "Landing Pages Modernas"],
    cta: "Conocer más"
  },
  {
    icon: Brain,
    title: "Soluciones de IA y RAG",
    description: "Implementamos inteligencia artificial avanzada para que converses con tus datos y extraigas conocimiento valioso.",
    image: aiBrainImg,
    features: ["Chat con Documentos", "SQL Natural", "Análisis Inteligente", "Bases de Datos IA"],
    cta: "Soluciones IA"
  },
  {
    icon: Server,
    title: "Infraestructura y Mantenimiento",
    description: "Optimizamos y escalamos tu infraestructura tecnológica para garantizar el mejor rendimiento y seguridad.",
    image: serverRackImg,
    features: ["Optimización SEO", "Seguridad", "Actualización de Código", "Hosting Escalable"],
    cta: "Consultar"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-4 bg-white animate-slide-in-right">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones tecnológicas completas para impulsar tu transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-14 h-14 rounded-xl gradient-tech flex items-center justify-center mb-3">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-6 rounded-xl transition-all"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
