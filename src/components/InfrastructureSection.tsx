import { Server, Zap, Rocket, Check } from "lucide-react";

const InfrastructureSection = () => {
  const infrastructureTiers = [
    {
      icon: Zap,
      tier: "Nivel Inicio",
      subtitle: "Perfecto para MVPs y Proyectos Pequeños",
      provider: "Hostinger, Netlify, Vercel",
      features: [
        "Hosting compartido optimizado",
        "SSL incluido",
        "Deploy automático",
        "Dominio incluido",
        "Soporte básico"
      ],
      highlight: false
    },
    {
      icon: Server,
      tier: "Nivel Medio",
      subtitle: "Escalabilidad y Control",
      provider: "VPS, DigitalOcean, Linode",
      features: [
        "Servidor virtual dedicado",
        "Control total del entorno",
        "Escalado vertical fácil",
        "Backups automáticos",
        "Monitoreo 24/7"
      ],
      highlight: true
    },
    {
      icon: Rocket,
      tier: "Nivel Enterprise/IA",
      subtitle: "Máxima Escalabilidad",
      provider: "AWS, Google Cloud, Azure",
      features: [
        "Infraestructura distribuida",
        "Auto-scaling inteligente",
        "GPU para modelos IA",
        "CDN global",
        "SLA 99.99%"
      ],
      highlight: false
    }
  ];

  return (
    <section id="infrastructure" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Hosting y Despliegue</span>
            <span className="text-foreground"> a tu Medida</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Asesoría completa para elegir la infraestructura ideal según tu presupuesto y necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {infrastructureTiers.map((tier, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in ${
                tier.highlight ? "ring-2 ring-primary shadow-lg shadow-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {tier.highlight && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full gradient-tech text-white text-xs font-semibold mb-4">
                  Recomendado
                </div>
              )}
              
              <div className={`inline-flex p-4 rounded-xl ${
                tier.highlight ? "gradient-tech" : "bg-primary/10 border border-primary/20"
              } mb-6`}>
                <tier.icon className={`h-8 w-8 ${tier.highlight ? "text-white" : "text-primary"}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground">{tier.tier}</h3>
              <p className="text-sm text-muted-foreground mb-3">{tier.subtitle}</p>
              <p className="text-primary font-semibold mb-6">{tier.provider}</p>
              
              <ul className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Incluimos asesoría completa para configuración, migración y optimización
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card">
            <span className="text-primary font-semibold">✓</span>
            <span className="text-foreground">Mejor relación coste-beneficio garantizada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;