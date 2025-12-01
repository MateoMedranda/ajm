import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ajmLogo from "@/assets/ajm-hex-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const serviceLinks = [
    { name: "Desarrollo Web", href: "/servicios#desarrollo-web" },
    { name: "Desarrollo Móvil", href: "/servicios#desarrollo-movil" },
    { name: "Aplicación IA", href: "/servicios#aplicacion-ia" },
    { name: "Modelado y VR", href: "/servicios#modelado-vr" },
    { name: "Mantenimiento", href: "/servicios#mantenimiento" },
    { name: "Asesoría de Hosting", href: "/servicios#asesoria-hosting" },
  ];

  const handleServiceClick = (href: string) => {
    const [path, hash] = href.split("#");
    navigate(path);
    setTimeout(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={ajmLogo} 
              alt="AJM Web Solutions" 
              className="h-10 w-10 cursor-pointer hover:opacity-80 transition-opacity" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Inicio
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 focus:outline-none">
                  Servicios
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background/98 backdrop-blur-md border-border">
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.name}
                      onClick={() => handleServiceClick(link.href)}
                      className="cursor-pointer hover:bg-accent/50"
                    >
                      {link.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/nosotros"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Nosotros
              </Link>

              <Link
                to="/central-dev"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Central Dev
              </Link>

              <Link
                to="/contacto"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
            >
              Inicio
            </Link>
            
            <div className="px-3 py-2 text-base font-medium text-muted-foreground">
              Servicios
            </div>
            {serviceLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleServiceClick(link.href)}
                className="block w-full text-left px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}

            <Link
              to="/nosotros"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
            >
              Nosotros
            </Link>

            <Link
              to="/central-dev"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
            >
              Central Dev
            </Link>

            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
