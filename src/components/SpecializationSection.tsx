import { Box, Layers } from "lucide-react";

const SpecializationSection = () => {
  const specializations = [
    {
      icon: Box,
      title: "Modelado 3D y VR",
      description: "Assets 3D profesionales para videojuegos, realidad virtual y experiencias inmersivas.",
      features: [
        "Modelado High-Poly y Low-Poly",
        "Texturizado PBR",
        "Animaciones y Rigging",
        "Optimización para VR/AR",
        "Game Ready Assets"
      ],
      color: "primary"
    },
    {
      icon: Layers,
      title: "Arquitectura de Software",
      description: "Consultoría especializada en diseño de sistemas escalables y mantenibles.",
      features: [
        "Microservicios y APIs",
        "Cloud Architecture (AWS, GCP)",
        "CI/CD Pipelines",
        "Code Review y Refactoring",
        "Documentación Técnica"
      ],
      color: "secondary"
    }
  ];

  return (
    <section id="specialization" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Especialización Técnica</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expertise profundo en áreas críticas del desarrollo moderno
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-${spec.color}/20 border border-${spec.color}/30 mb-6`}>
                <spec.icon className={`h-8 w-8 text-${spec.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{spec.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{spec.description}</p>
              
              <ul className="space-y-3">
                {spec.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`h-6 w-6 rounded-lg bg-${spec.color}/10 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <div className={`h-2 w-2 rounded-full bg-${spec.color}`} />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;