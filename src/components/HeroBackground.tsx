import { useMemo, memo } from "react";

// Movemos aquí el componente BackgroundBlobs
const BackgroundBlobs = memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-glow mix-blend-screen" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px] animate-pulse-glow mix-blend-screen" style={{ animationDelay: "1s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
    <div className="absolute top-10 right-1/4 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
    <div className="absolute bottom-1/3 left-10 w-[250px] h-[250px] bg-violet-500/15 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
  </div>
));

const HeroBackground = () => {
  // Movemos aquí el cálculo de partículas
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 4
    }));
  }, []);

  return (
    <>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <BackgroundBlobs />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/60 animate-float will-change-transform transform-gpu"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px hsl(var(--primary)/0.4)`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none transform-gpu">
        <div className="absolute inset-0 border border-primary/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-4 border border-accent/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <div className="absolute inset-8 border border-primary/5 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent blur-2xl" />
    </>
  );
};

export default memo(HeroBackground);