import { Sun, Zap, Battery } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Panel images
import panelTrina1 from "@/assets/products/panel-trina-1.jpeg";
import panelTrina2 from "@/assets/products/panel-trina-2.avif";

// Inversor images
import inversorGrowatt1 from "@/assets/products/inversor-growatt-1.png";
import inversorGrowatt2 from "@/assets/products/inversor-growatt-2.jpeg";
import inversorGrowattGrande from "@/assets/products/inversor-growatt-grande.jpg";

// Bateria images
import bateriaGrowatt1 from "@/assets/products/bateria-growatt-1.jpg";
import bateriaGrowatt2 from "@/assets/products/bateria-growatt-2.jpg";

const products = [
  {
    title: "Paneles Solares",
    description:
      "Transforma la luz del sol en electricidad limpia y renovable. Nuestros paneles de alta eficiencia maximizan la captación de energía solar, reduciendo significativamente tu factura eléctrica mientras contribuís al cuidado del medio ambiente.",
    icon: Sun,
    images: [
      { src: panelTrina1, alt: "Panel Trina 1" },
      { src: panelTrina2, alt: "Panel Trina 2" },
    ],
    color: "text-energy-primary",
    bgColor: "bg-energy-primary/10",
  },
  {
    title: "Inversores",
    description:
      "El cerebro de tu sistema solar. Nuestros inversores convierten la energía generada por los paneles en electricidad lista para usar en tu hogar o negocio, optimizando el rendimiento y garantizando una gestión inteligente de la energía.",
    icon: Zap,
    images: [
      { src: inversorGrowatt1, alt: "Inversor Growatt 1" },
      { src: inversorGrowatt2, alt: "Inversor Growatt 2" },
      { src: inversorGrowattGrande, alt: "Inversor Growatt Grande" },
    ],
    color: "text-energy-secondary",
    bgColor: "bg-energy-secondary/10",
  },
  {
    title: "Baterías",
    description:
      "Almacená la energía del sol para cuando más la necesites. Con nuestras baterías, disfrutás de autonomía energética total, disponibilidad continua y la tranquilidad de contar con respaldo incluso durante cortes de luz.",
    icon: Battery,
    images: [
      { src: bateriaGrowatt1, alt: "Batería Growatt 1" },
      { src: bateriaGrowatt2, alt: "Batería Growatt 2" },
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-energy-primary/5 via-energy-secondary/5 to-primary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-energy-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-energy-secondary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Productos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Equipos de última generación para tu sistema de energía renovable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-12 h-12 rounded-full ${product.bgColor} flex items-center justify-center`}
                  >
                    <product.icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {product.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Image Carousel */}
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {product.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center p-4">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 h-8 w-8" />
                    <CarouselNext className="right-2 h-8 w-8" />
                  </Carousel>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
