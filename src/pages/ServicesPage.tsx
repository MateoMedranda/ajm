import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Sparkles, Layers, Smartphone, Brain, Box, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ServicesPage = () => {
  const services = [
    {
      id: "desarrollo-web",
      icon: Code2,
      title: "Desarrollo Web",
      subtitle: "Soluciones web profesionales",
      description: "Creamos landing pages, sitios corporativos y aplicaciones web completas con las últimas tecnologías.",
      features: ["Landing Pages", "Sitios Corporativos", "Aplicaciones Web", "E-commerce", "Progressive Web Apps"],
    },
    {
      id: "desarrollo-movil",
      icon: Smartphone,
      title: "Desarrollo Móvil",
      subtitle: "Apps nativas e híbridas",
      description: "Desarrollo de aplicaciones móviles para iOS y Android con rendimiento óptimo y UX excepcional.",
      features: ["iOS & Android", "React Native", "Flutter", "Push Notifications", "App Store Deploy"],
    },
    {
      id: "aplicacion-ia",
      icon: Brain,
      title: "Aplicación IA",
      subtitle: "Inteligencia artificial avanzada",
      description: "Implementamos soluciones de IA, RAG y análisis inteligente de datos para tu negocio.",
      features: ["Chat con Documentos", "SQL Natural", "Análisis Inteligente", "Modelos Personalizados", "RAG Systems"],
    },
    {
      id: "modelado-vr",
      icon: Box,
      title: "Modelado 3D y VR",
      subtitle: "Experiencias inmersivas",
      description: "Creación de modelos 3D, experiencias de realidad virtual y aumentada para videojuegos y aplicaciones.",
      features: ["Modelado 3D", "Realidad Virtual", "Realidad Aumentada", "Unity & Unreal", "Gaming"],
    },
    {
      id: "mantenimiento",
      icon: Layers,
      title: "Mantenimiento",
      subtitle: "Actualización y optimización",
      description: "Mantenimiento, actualización y optimización de sitios web y aplicaciones existentes.",
      features: ["Optimización SEO", "Seguridad", "Updates", "Soporte 24/7", "Refactoring"],
    },
    {
      id: "asesoria-hosting",
      icon: Server,
      title: "Asesoría de Hosting",
      subtitle: "Infraestructura escalable",
      description: "Consultoría en infraestructura cloud, deployment y arquitectura de sistemas escalables.",
      features: ["AWS & Google Cloud", "Arquitectura Cloud", "DevOps", "CI/CD", "Monitoreo"],
    },
  ];

  const ServiceSection = ({ service, index }: { service: typeof services[0], index: number }) => {
    const { elementRef, isVisible } = useScrollAnimation();
    const Icon = service.icon;
    const isEven = index % 2 === 0;

    return (
      <section
        id={service.id}
        ref={elementRef}
        className={`relative py-32 px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-24' : '-translate-x-24'}`
        } ${isEven ? 'bg-white' : 'bg-gradient-to-b from-gray-900 to-black'}`}
      >
        {/* Curved border top */}
        <div className={`absolute top-0 left-0 right-0 overflow-hidden leading-none ${isEven ? 'text-gray-900' : 'text-white'}`}>
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className={isEven ? 'fill-gray-900' : 'fill-white'}></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
              <div className={`w-20 h-20 rounded-2xl gradient-tech flex items-center justify-center mb-6`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isEven ? 'text-gray-900' : 'text-white'}`}>
                {service.title}
              </h2>
              <p className={`text-lg mb-2 font-semibold ${isEven ? 'text-purple-600' : 'text-purple-400'}`}>
                {service.subtitle}
              </p>
              <p className={`text-lg mb-8 leading-relaxed ${isEven ? 'text-gray-600' : 'text-gray-300'}`}>
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className={`flex items-center text-base ${isEven ? 'text-gray-700' : 'text-gray-300'}`}>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className={`font-semibold ${isEven ? 'bg-gray-900 hover:bg-gray-800 text-white' : 'gradient-tech text-white hover:opacity-90'}`}
                onClick={() => document.getElementById("contact-page")?.scrollIntoView({ behavior: "smooth" })}
              >
                Solicitar Información
              </Button>
            </div>
            <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
              <div className={`w-full h-80 rounded-3xl ${isEven ? 'bg-gradient-to-br from-purple-100 to-cyan-100' : 'bg-gradient-to-br from-purple-900/30 to-cyan-900/30'} flex items-center justify-center`}>
                <Icon className={`h-40 w-40 ${isEven ? 'text-purple-600' : 'text-purple-400'} opacity-20`} />
              </div>
            </div>
          </div>
        </div>

        {/* Curved border bottom */}
        <div className={`absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180 ${isEven ? 'text-gray-900' : 'text-white'}`}>
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className={isEven ? 'fill-gray-900' : 'fill-white'}></path>
          </svg>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
