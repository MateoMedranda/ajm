import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, Eye, Heart } from "lucide-react";
import anuncioVideo from "@/assets/Anuncio1AJM.mp4";

const AboutPage = () => {
  const missionAnim = useScrollAnimation();
  const visionAnim = useScrollAnimation();
  const commitmentAnim = useScrollAnimation();
  const teamAnim = useScrollAnimation();
  const videoAnim = useScrollAnimation();

  const teamMembers = [
    {
      name: "Juan Baez",
      role: "Full Stack Developer",
      description: "Desarrollador full stack con experiencia en gestion de base de datos e integracion IOT",
      image: "src/assets/juan.jpeg"
    },
    {
      name: "Mateo Medranda",
      role: "Full Stack Developer",
      description: "Desarrollador especializado en el uspo de IA y aplicaciones moviles",
      image: "src/assets/mateo.png"
    },
    {
      name: "Aless Perez",
      role: "Diseñador web",
      description: "Diseñador web especializado en la recoleccion de requerimientos y diseño multifuncional.",
      image: "src/assets/Javi.jpe"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Nosotros
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Somos un equipo apasionado por la tecnología, dedicado a transformar ideas en soluciones digitales innovadoras
          </p>
        </div>
        
        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg className="w-full h-16 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        ref={missionAnim.elementRef}
        className={`py-20 px-4 bg-background transition-all duration-1000 ${
          missionAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold gradient-text">Misión</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Nuestra misión es democratizar el acceso a la tecnología de vanguardia, 
                proporcionando soluciones digitales innovadoras y personalizadas que impulsen 
                el crecimiento y la transformación digital de empresas de todos los tamaños. 
                Nos comprometemos a entregar calidad excepcional, utilizando las últimas 
                tecnologías y mejores prácticas de la industria.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        ref={visionAnim.elementRef}
        className={`py-20 px-4 bg-muted/30 relative transition-all duration-1000 ${
          visionAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
      >
        {/* Curved top border */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden">
          <svg className="w-full h-16 fill-background rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
                  alt="Future technology" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold gradient-text">Visión</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Ser reconocidos como líderes en innovación tecnológica en América Latina, 
                estableciendo nuevos estándares en desarrollo web, aplicaciones móviles y 
                soluciones de inteligencia artificial. Aspiramos a ser el socio estratégico 
                preferido para empresas que buscan transformar sus operaciones mediante la 
                tecnología, creando un impacto positivo y duradero en cada proyecto que emprendemos.
              </p>
            </div>
          </div>
        </div>

        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg className="w-full h-16 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Commitment Section */}
      <section 
        ref={commitmentAnim.elementRef}
        className={`py-20 px-4 bg-background transition-all duration-1000 ${
          commitmentAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold gradient-text">Compromiso</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Nuestro compromiso va más allá de entregar código funcional. Nos dedicamos a:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Excelencia técnica:</strong> Utilizar las mejores prácticas y tecnologías más actuales
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Comunicación transparente:</strong> Mantener informados a nuestros clientes en cada etapa
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Soporte continuo:</strong> Estar disponibles después del lanzamiento para garantizar el éxito
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">
                    <strong>Innovación constante:</strong> Actualizar nuestros conocimientos y adaptar soluciones a las últimas tendencias
                  </p>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                  alt="Team commitment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamAnim.elementRef}
        className={`py-20 px-4 bg-muted/30 relative transition-all duration-1000 ${
          teamAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Curved top border */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden">
          <svg className="w-full h-16 fill-background rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto pt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Nuestro Equipo
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible cada proyecto
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-background rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg className="w-full h-16 fill-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Video Section */}
      <section 
        ref={videoAnim.elementRef}
        className={`py-20 px-4 bg-background transition-all duration-1000 ${
          videoAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Conoce Más Sobre Nosotros
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un vistazo a nuestra forma de trabajo y la pasión que ponemos en cada proyecto
          </p>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <video 
              className="w-full h-auto"
              controls
              poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=675&fit=crop"
            >
              <source src={anuncioVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
