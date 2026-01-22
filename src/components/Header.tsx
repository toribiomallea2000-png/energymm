import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mm-energy-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    {
      label: "Soluciones",
      href: isHomePage ? "#solutions" : "/#solutions",
      isRoute: false,
    },
    {
      label: "Productos",
      href: isHomePage ? "#products" : "/#products",
      isRoute: false,
    },
    {
      label: "Beneficios",
      href: isHomePage ? "#benefits" : "/#benefits",
      isRoute: false,
    },
    {
      label: "Cómo Funciona",
      href: isHomePage ? "#how-it-works" : "/#how-it-works",
      isRoute: false,
    },
    {
      label: "Contacto",
      href: "/contacto",
      isRoute: true,
    },
  ];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-primary/20 bg-background shadow-md flex items-center justify-center">
              <img alt="Logo MM Energy" className="w-full h-full object-contain" src={logo} />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg lg:text-xl text-foreground">MM Energy</span>
              <p className="text-xs text-muted-foreground">Energía Renovable</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contacto">Evaluación Gratuita</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90">
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                  Evaluación Gratuita
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>;
};
export default Header;