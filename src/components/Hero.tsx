import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import solarPanelsField from "@/assets/solar-panels-field.png";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Más de 500 empresas confían en nosotros</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              Soluciones de{" "}
              <span className="text-primary">Energía Renovable</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-6 max-w-lg">
              Reduce tus costos energéticos y logra independencia energética con nuestros sistemas solares y bombas de calor
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#contact">
                  Evaluación Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="#solutions">Ver Soluciones</a>
              </Button>
            </div>
          </div>

          {/* Stats - Right Side */}
          <div className="grid grid-cols-3 gap-4 lg:pl-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20">
              <p className="text-2xl lg:text-3xl font-bold text-primary">500+</p>
              <p className="text-xs text-primary-foreground/70">Proyectos</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20">
              <p className="text-2xl lg:text-3xl font-bold text-primary">70%</p>
              <p className="text-xs text-primary-foreground/70">Ahorro</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/20">
              <p className="text-2xl lg:text-3xl font-bold text-primary">25+</p>
              <p className="text-xs text-primary-foreground/70">Años Exp.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
