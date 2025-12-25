import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import ajmLogo from "@/assets/ajm-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Central Dev", href: "/central-dev" },
    { name: "Contacto", href: "/contacto" },
  ];

  const services = [
    { name: "Desarrollo Web", href: "/servicios#web" },
    { name: "Desarrollo Móvil", href: "/servicios#movil" },
    { name: "Aplicación IA", href: "/servicios#ia" },
    { name: "Modelado y VR", href: "/servicios#vr" },
    { name: "Mantenimiento", href: "/servicios#mantenimiento" },
    { name: "Asesoría de Hosting", href: "/servicios#hosting" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/ajmwebsolutions", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ajmwebsolutions", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/ajmwebsolutions", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/ajmwebsolutions", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={ajmLogo} alt="AJM" className="h-12 w-auto" />
              <div>
                <p className="font-semibold text-lg gradient-text">AJM Web Solutions</p>
                <p className="text-sm text-muted-foreground">Innovación tecnológica</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformamos ideas en soluciones digitales innovadoras. Tu éxito es nuestra prioridad.
            </p>
            {/* Redes Sociales */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contacto@ajmweb.com" className="hover:text-primary transition-colors">
                  contacto@ajmweb.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+573001234567" className="hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright centrado */}
      <div className="border-t border-border/50 py-6">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} AJM Web Solutions. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
