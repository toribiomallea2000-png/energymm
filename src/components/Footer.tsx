import { Leaf } from "lucide-react";
import logo from "@/assets/mm-energy-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = {
    solutions: [{
      label: "Paneles Solares",
      href: "#solutions"
    }, {
      label: "Sistemas Híbridos",
      href: "#solutions"
    }, {
      label: "Sistemas On-Grid",
      href: "#solutions"
    }, {
      label: "Sistemas Off-Grid",
      href: "#solutions"
    }, {
      label: "Bombas de Calor",
      href: "#solutions"
    }],
    company: [{
      label: "Sobre Nosotros",
      href: "#"
    }, {
      label: "Nuestro Equipo",
      href: "#"
    }, {
      label: "Carreras",
      href: "#"
    }, {
      label: "Noticias",
      href: "#"
    }],
    support: [{
      label: "Contacto",
      href: "#contact"
    }, {
      label: "Preguntas Frecuentes",
      href: "#faq"
    }, {
      label: "Política de Privacidad",
      href: "#"
    }, {
      label: "Términos de Servicio",
      href: "#"
    }]
  };
  return <footer className="bg-energy-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 bg-background">
                <img src={logo} alt="Logo MM Group" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-bold text-lg">MM Energy</span>
                <p className="text-xs text-primary-foreground/70">Energía Renovable</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">Desarrollamos soluciones de energía renovable pensadas para quienes buscan eficiencia energética, ahorro a largo plazo y un impacto positivo en el medioambiente, utilizando tecnología moderna y confiable.</p>
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">Operaciones Carbono Neutral</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Soluciones</h3>
            <ul className="space-y-3">
              {links.solutions.map(link => <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {links.company.map(link => <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Soporte</h3>
            <ul className="space-y-3">
              {links.support.map(link => <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} MM Energy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;