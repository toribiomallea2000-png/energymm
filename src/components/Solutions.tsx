import { Sun, Battery, Plug, PlugZap, Thermometer } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import solarHouse from "@/assets/solar-house.png";
import solarPanelsField from "@/assets/solar-panels-field.jpg";
import solarPanelsRoof from "@/assets/solar-panels-roof.jpg";
import solarPump from "@/assets/solar-pump.jpg";

const carouselImages = [
  { src: solarHouse, alt: "Casa con paneles solares" },
  { src: solarPanelsField, alt: "Campo de paneles solares" },
  { src: solarPanelsRoof, alt: "Paneles solares en techo" },
  { src: solarPump, alt: "Bomba solar de riego" },
];

const solutions = [
  { icon: Sun, title: "Paneles Solares", description: "Sistemas fotovoltaicos de alta eficiencia" },
  { icon: Battery, title: "Sistemas Híbridos", description: "Solar + almacenamiento combinados" },
  { icon: Plug, title: "On-Grid", description: "Conectados a la red eléctrica" },
  { icon: PlugZap, title: "Off-Grid", description: "Independencia energética total" },
  { icon: Thermometer, title: "Bombas de Calor", description: "Climatización eficiente" },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Image Carousel */}
          <div className="px-8">
            <Carousel 
              opts={{ loop: true }} 
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[280px] lg:h-[320px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>

          {/* Right - Solutions List */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestras Soluciones</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
              Soluciones Energéticas Integrales
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{solution.title}</h3>
                  <p className="text-xs text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
