import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ContactImage from "@/assets/contactanos.png";

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
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
        }`}>
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-[#4545a8]">Hablemos</span> de tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Estamos listos para convertir tu visión en realidad digital
          </p>
        </div>

        <div className="flex grid-cols-2 w-full">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br w-[50%] from-gray-900 to-black p-10 space-y-8 animate-fade-in shadow" style={{ animationDelay: "0.2s" }}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                Nombre
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Carlos Moreira"
                required
                className="bg-gray-800/50 border-gray-700 py-4 text-lg rounded-xl text-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                Correo
              </label>
              <Input
                id="email"
                type="email"
                placeholder="carlos123@gmail.com"
                required
                className="bg-gray-800/50 border-gray-700 py-4 text-lg rounded-xl text-white placeholder:text-gray-400"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-2 text-white">
                Tipo de Servicio
              </label>
              <select
                id="service"
                required
                className="w-full bg-gray-800/50 border border-gray-700 py-2 text-sm px-4 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary"
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
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                Cuéntanos sobre tu proyecto
              </label>
              <Textarea
                id="message"
                placeholder="Describe tu idea, necesidades o preguntas..."
                rows={6}
                required
                className="bg-gray-800/50 border-gray-700 resize-none text-sm rounded-xl text-white placeholder:text-gray-400"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-[#153794] text-white font-semibold hover:opacity-90 transition-opacity py-7 text-lg rounded-xl">
              Enviar Mensaje
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <div className="bg-black h-100 w-[50%]">
            <img src={ContactImage} alt="Contacto" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;