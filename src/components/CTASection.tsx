import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const CTASection = () => {
  return <section id="contact" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-energy-dark via-energy-dark to-primary/40" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - CTA Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Listo para Transformar tu Futuro Energético?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Da el primer paso hacia la independencia energética y ahorros significativos.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30">
              <a href="mailto:info@mmgroup.energy">
                Solicitar Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-wrap gap-6 lg:justify-end">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Llámanos</p>
                <p className="text-primary-foreground font-medium text-sm">+54 9 11 3042 1031 
+54 9 11 6709-8196</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Escríbenos</p>
                <p className="text-primary-foreground font-medium text-sm">info@mmenergiasolar.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Visítanos</p>
                <p className="text-primary-foreground font-medium text-sm">Buenos aires, Argentina.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;