import { Check, Zap, TrendingUp, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const InfrastructureSection = ({ id }: { id?: string }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const plans = [
    {
      name: "Plano",
      subtitle: "Perfecto para empezar",
      price: "$19",
      period: "/mo",
      icon: Zap,
      features: [
        "Hosting compartido optimizado",
        "SSL incluido",
        "Deploy automático",
        "Dominio incluido",
        "Soporte básico",
        "1 GB de almacenamiento"
      ],
      popular: false,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Precio",
      subtitle: "El más popular",
      price: "$39",
      period: "/mo",
      icon: TrendingUp,
      features: [
        "Todo en Plano más:",
        "Servidor virtual dedicado",
        "Control total del entorno",
        "Escalado vertical fácil",
        "Backups automáticos",
        "10 GB de almacenamiento",
        "Monitoreo 24/7"
      ],
      popular: true,
      color: "from-purple-600 to-cyan-500"
    },
    {
      name: "Solución",
      subtitle: "Máxima potencia",
      price: "$59",
      period: "/mo",
      icon: Rocket,
      features: [
        "Todo en Precio más:",
        "Infraestructura distribuida",
        "Auto-scaling inteligente",
        "GPU para modelos IA",
        "CDN global",
        "Almacenamiento ilimitado",
        "SLA 99.99%"
      ],
      popular: false,
      color: "from-cyan-600 to-blue-800"
    }
  ];

  return (
    <section 
      ref={elementRef}
      id={id} 
      className={`py-32 px-4 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Planes de <span className="gradient-text">Hosting Adaptables</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Apps, VMs, Mantenimiento, RAG. Transformamos soluciones 3D personales y sitios de soluciones portables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden animate-fade-in ${
                  plan.popular 
                    ? "ring-4 ring-purple-500 shadow-2xl shadow-purple-500/30 transform md:-translate-y-4" 
                    : "shadow-xl hover:shadow-2xl"
                } transition-all duration-500 bg-white border border-gray-100`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-center py-3 text-sm font-bold">
                    🔥 Precio pensado
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? "pt-20" : "pt-8"}`}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-100 to-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full font-semibold py-6 rounded-xl transition-all text-lg ${
                      plan.popular 
                        ? "gradient-tech text-white hover:opacity-90" 
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Comenzar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg">
            ✓ Incluimos asesoría completa para configuración, migración y optimización
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-50 to-cyan-50 border border-purple-100">
            <span className="text-2xl">💎</span>
            <span className="text-gray-900 font-semibold text-lg">Mejor relación coste-beneficio garantizada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
