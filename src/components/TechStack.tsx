const TechStack = () => {
  const technologies = [
    "React", "TypeScript", "Python", "Node.js", "TensorFlow", 
    "AWS", "Google Cloud", "Docker", "PostgreSQL", "MongoDB",
    "Next.js", "FastAPI", "Supabase", "OpenAI", "LangChain"
  ];

  return (
    <section className="py-16 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-2">Tecnologías que Dominamos</h3>
          <p className="text-muted-foreground">Stack moderno y probado en producción</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-muted-foreground font-medium text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;