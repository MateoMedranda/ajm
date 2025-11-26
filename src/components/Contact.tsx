import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 px-4 bg-white animate-slide-in-right">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="gradient-text">Hablemos</span> de tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Estamos listos para convertir tu visión en realidad digital
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl space-y-8 animate-fade-in shadow-2xl" style={{ animationDelay: "0.2s" }}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-3 text-white">
              Nombre Completo
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Juan Pérez"
              required
              className="bg-gray-800/50 border-gray-700 py-6 text-lg rounded-xl text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-3 text-white">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="juan@ejemplo.com"
              required
              className="bg-gray-800/50 border-gray-700 py-6 text-lg rounded-xl text-white placeholder:text-gray-400"
            />
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
