import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import solarPanelsField from "@/assets/solar-panels-field.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={solarPanelsField}
          alt="Campo de paneles solares"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-energy-dark/95 via-energy-dark/80 to-energy-dark/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Más de 500 empresas confían en nosotros</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Soluciones de{" "}
              <span className="text-primary">Energía Renovable</span>{" "}
              a la Medida de tu Negocio
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Reduce tus costos energéticos hasta un 70% y logra independencia energética con nuestros sistemas solares y bombas de calor diseñados para empresas, escuelas, clubes, granjas y clientes industriales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                <a href="#contact">
                  Evaluación Energética Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
              >
                <a href="#solutions">Ver Soluciones</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-primary-foreground/70">Proyectos Completados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">70%</p>
                <p className="text-sm text-primary-foreground/70">Ahorro Promedio</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-primary-foreground/70">Años de Experiencia</p>
              </div>
            </div>
          </div>

          {/* Empty space for image to show through */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
