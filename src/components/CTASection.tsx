import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-energy-dark via-energy-dark to-primary/40" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para Transformar tu Futuro Energético?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Da el primer paso hacia la independencia energética y ahorros significativos. Nuestros expertos están listos para diseñar la solución de energía renovable perfecta para tu negocio.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 shadow-2xl shadow-primary/30"
          >
            <a href="mailto:info@mmgroup.energy">
              Solicitar una Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-primary-foreground/20">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70">Llámanos</p>
                <p className="text-primary-foreground font-medium">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70">Escríbenos</p>
                <p className="text-primary-foreground font-medium">info@mmgroup.energy</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70">Visítanos</p>
                <p className="text-primary-foreground font-medium">Oficinas Centrales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
