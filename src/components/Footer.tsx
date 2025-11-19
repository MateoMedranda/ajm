import ajmLogo from "@/assets/ajm-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={ajmLogo} alt="AJM" className="h-12 w-auto" />
            <div>
              <p className="font-semibold text-lg gradient-text">AJM Web Solutions</p>
              <p className="text-sm text-muted-foreground">Innovación tecnológica</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AJM Web Solutions. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
