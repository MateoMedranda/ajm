import { FileText, Database, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const RAGSection = () => {
  const ragServices = [
    {
      icon: FileText,
      title: "Análisis Documental con IA",
      description: "Sube documentos de cualquier extensión y usa IA para extraer conocimiento y chatear con ellos.",
      features: ["PDF, Excel, DOCX", "Extracción Inteligente", "Chat Natural", "Análisis Automático"],
      gradient: "from-primary to-secondary"
    },
    {
      icon: Database,
      title: "Chat con Bases de Datos",
      description: "Conecta tu DB y haz preguntas en lenguaje natural sin usar SQL.",
      features: ["Conexión Segura", "SQL Natural", "Múltiples DB", "Consultas Inteligentes"],
      gradient: "from-secondary to-accent"
    }
  ];

  return (
    <section id="rag-section" className="py-20 px-4 relative overflow-hidden">
      {/* Neural network background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Tecnología RAG Avanzada</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Conversa con tus Datos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforma documentos y bases de datos en conocimiento conversacional usando IA generativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ragServices.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Demo Chat Simulation */}
        <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Demo Interactivo</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="bg-muted/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm text-foreground/90">¿Cuál fue el ingreso total del Q3?</p>
              </div>
            </div>
            
            <div className="flex gap-3 justify-end">
              <div className="gradient-tech rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm text-white">Según los documentos analizados, el ingreso total del Q3 fue $2.4M, un incremento del 23% comparado con Q2.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <Button 
              className="w-full gradient-tech text-white font-semibold hover:opacity-90"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Probar con Mis Datos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAGSection;