import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Rocket, Users, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CentralDevPage = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: Code,
      title: "Código Limpio",
      description: "Seguimos las mejores prácticas de desarrollo con código mantenible y escalable."
    },
    {
      icon: Rocket,
      title: "Entrega Rápida",
      description: "Metodologías ágiles para entregar valor de forma continua y eficiente."
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Desarrolladores senior con experiencia en múltiples tecnologías y frameworks."
    },
    {
      icon: Zap,
      title: "Innovación Constante",
      description: "Siempre actualizados con las últimas tendencias y tecnologías del mercado."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section 
        ref={elementRef}
        className={`relative pt-32 pb-24 px-4 min-h-screen flex items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
        }`}
      >
        {/* Curved border top */}
        <div className="absolute top-16 left-0 right-0 overflow-hidden leading-none text-background">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-current"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Central Dev</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nuestro centro de desarrollo combina experiencia técnica, metodologías ágiles y pasión por la innovación
              para crear soluciones digitales que transforman negocios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-xl gradient-tech flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">¿Por qué elegirnos?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              En AJM Web Solutions, no solo escribimos código. Creamos soluciones digitales que impulsan el crecimiento
              de tu negocio. Nuestro enfoque combina tecnología de punta con un profundo entendimiento de tus necesidades.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-muted-foreground">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-muted-foreground">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CentralDevPage;
