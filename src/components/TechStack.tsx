import { Code, Cloud, Database, Cpu, Layers, Box, Smartphone, Zap } from "lucide-react";

const TechStack = () => {
  const technologies = [
    { icon: Code, name: "React" },
    { icon: Layers, name: "TypeScript" },
    { icon: Code, name: "Python" },
    { icon: Zap, name: "Node.js" },
    { icon: Cpu, name: "TensorFlow" },
    { icon: Cloud, name: "AWS" },
    { icon: Cloud, name: "Google Cloud" },
    { icon: Box, name: "Docker" },
    { icon: Database, name: "PostgreSQL" },
    { icon: Database, name: "MongoDB" },
    { icon: Smartphone, name: "Next.js" },
    { icon: Zap, name: "FastAPI" },
    { icon: Database, name: "Supabase" },
    { icon: Cpu, name: "OpenAI" },
    { icon: Layers, name: "LangChain" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-4">
          Tecnologías que Dominamos
        </h3>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trabajamos con las herramientas más avanzadas del mercado
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.name}
                className="flex flex-col items-center gap-3 group animate-fade-in grayscale hover:grayscale-0 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="h-14 w-14 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
                <span className="text-xs text-gray-600 font-medium">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
