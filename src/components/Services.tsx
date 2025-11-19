import { Globe, Smartphone, Box } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta aplicaciones web complejas.",
    features: ["React & TypeScript", "Diseño responsivo", "Optimización SEO", "Alta performance"],
    gradient: "from-primary to-secondary",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android con la mejor experiencia de usuario.",
    features: ["iOS & Android", "UI/UX moderna", "Integración API", "Push notifications"],
    gradient: "from-secondary to-accent",
  },
  {
    icon: Box,
    title: "Modelado 3D",
    description: "Creación de assets 3D profesionales para videojuegos, desde personajes hasta entornos completos.",
    features: ["Game assets", "Personajes 3D", "Entornos", "Texturas PBR"],
    gradient: "from-accent to-primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas completas para llevar tu proyecto al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="glass-card border-2 hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
