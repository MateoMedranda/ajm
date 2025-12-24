import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = ({ id }: { id?: string }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      ref={elementRef}
      id={id}
      className="py-14 px-4 bg-white w-full overflow-hidden"
    >
      <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
        }`}>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-[#4545a8]">Hablemos</span> de tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Estamos listos para convertir tu visión en realidad digital
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl space-y-8 animate-fade-in shadow-2xl" style={{ animationDelay: "0.2s" }}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-3 text-white">
              Nombre
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre"
              required
              className="bg-gray-800/50 border-gray-700 py-6 text-lg rounded-xl text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-3 text-white">
              Correo
            </label>
            <Input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              required
              className="bg-gray-800/50 border-gray-700 py-6 text-lg rounded-xl text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold mb-3 text-white">
              Tipo de Servicio
            </label>
            <select
              id="service"
              required
              className="w-full bg-gray-800/50 border border-gray-700 py-4 px-4 text-lg rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Selecciona un servicio</option>
              <option value="desarrollo-web">Desarrollo Web</option>
              <option value="desarrollo-movil">Desarrollo Móvil</option>
              <option value="aplicacion-ia">Aplicación IA</option>
              <option value="modelado-vr">Modelado 3D y VR</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="asesoria-hosting">Asesoría de Hosting</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-3 text-white">
              Cuéntanos sobre tu proyecto
            </label>
            <Textarea
              id="message"
              placeholder="Describe tu idea, necesidades o preguntas..."
              rows={6}
              required
              className="bg-gray-800/50 border-gray-700 resize-none text-lg rounded-xl text-white placeholder:text-gray-400"
            />
          </div>

          <Button type="submit" size="lg" className="w-full gradient-tech text-white font-semibold hover:opacity-90 transition-opacity py-7 text-lg rounded-xl">
            Enviar Mensaje
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;