import { Code2, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import landingPage from "@/assets/landing-page.jpg";
import ecommerce from "@/assets/ecommerce.jpg";
import appWeb from "@/assets/aplicacion_web.png";
import aiBrainImg from "@/assets/ai-brain-database-3d.jpg";
import serverRackImg from "@/assets/server-rack-3d.jpg";

const services = [{
  icon: Code2,
  title: "Landing Page",
  subtitle: "Tu Presencia Digital Impactante",
  description: "Página de aterrizaje profesional optimizada para conversión. Perfecta para lanzar tu producto, servicio o campaña con máximo impacto visual.",
  image: landingPage,
  features: ["Diseño Responsivo", "SEO Optimizado", "Carga Ultra Rápida", "Formularios de Contacto"],
  price: "Desde $299",
  cta: "Solicitar Landing"
}, {
  icon: Layers,
  title: "Página Web Corporativa",
  subtitle: "Profesionalismo y Funcionalidad",
  description: "Sitio web completo con múltiples secciones, blog integrado y panel de administración. Ideal para empresas que buscan una presencia sólida online.",
  image: ecommerce,
  features: ["Multi-página", "CMS Integrado", "Blog y Noticias", "Dashboard Admin", "Integración APIs"],
  price: "Desde $450",
  cta: "Consultar Web"
}, {
  icon: Sparkles,
  title: "Aplicación Web Completa",
  subtitle: "Soluciones Escalables y Robustas",
  description: "Sistema web avanzado con arquitectura escalable, base de datos, autenticación de usuarios y funcionalidades personalizadas para tu negocio.",
  image: appWeb,
  features: ["Autenticación Usuarios", "Base de Datos", "API REST", "Panel Completo", "Escalabilidad Cloud", "Mantenimiento"],
  price: "Desde $1450",
  cta: "Empezar App",
  featured: true
}];
const additionalServices = [{
  icon: Code2,
  title: "Apps Móviles",
  description: "Desarrollo nativo y híbrido para iOS y Android con rendimiento óptimo.",
  image: appWeb,
  features: ["iOS & Android", "React Native", "Push Notifications", "App Store Deploy"],
  cta: "Ver Apps Móviles"
}, {
  icon: Sparkles,
  title: "Soluciones de IA y RAG",
  description: "Implementamos inteligencia artificial avanzada para que converses con tus datos.",
  image: aiBrainImg,
  features: ["Chat con Documentos", "SQL Natural", "Análisis Inteligente", "Modelos Personalizados"],
  cta: "Explorar IA"
}, {
  icon: Code2,
  title: "Infraestructura y Mantenimiento",
  description: "Optimización, actualización y soporte continuo para tu plataforma tecnológica.",
  image: serverRackImg,
  features: ["Optimización SEO", "Seguridad", "Updates", "Soporte 24/7"],
  cta: "Consultar"
}];
const Services = ({
  id
}: {
  id?: string;
}) => {
  const {
    elementRef: titleRef,
    isVisible: titleVisible
  } = useScrollAnimation();
  const {
    elementRef: webRef,
    isVisible: webVisible
  } = useScrollAnimation();
  return (
    <section id={id} className="relative py-14 px-4 bg-white">
      {/* Curved border top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none text-background">

      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 will-change-transform will-change-opacity ${titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nuestros <span className="text-[#4040aa]">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones web y móviles completas para impulsar tu transformación digital
          </p>
        </div>

        {/* Servicios Web */}
        <div ref={webRef} className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  className={`group transition-all duration-700 will-change-transform will-change-opacity ${webVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                    }`}
                >
                  <div
                    className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border h-full flex flex-col ${service.featured
                      ? "border-purple-500 ring-4 ring-purple-500/20 transform md:-translate-y-2"
                      : "border-gray-100"
                      }`}
                  >
                    {service.featured && (
                      <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-center py-2 text-sm font-bold">
                        ⭐ MÁS POPULAR
                      </div>
                    )}

                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 will-change-transform"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />

                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl gradient-tech flex items-center justify-center mb-2">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-1 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-sm text-purple-600 font-semibold mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900">
                          {service.price}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-xs text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full font-semibold py-5 rounded-xl transition-all ${service.featured
                          ? "gradient-tech text-white hover:opacity-90"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                          }`}
                        onClick={() =>
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
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
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180"></div>
    </section>
  );
};

export default Services;
