import { Sun, Battery, Plug, PlugZap, Thermometer, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import solarPanelsField from "@/assets/solar-panels-field.jpg";

const solutions = [
  {
    icon: Sun,
    title: "Paneles Solares",
    description: "Sistemas fotovoltaicos de alta eficiencia diseñados para aplicaciones comerciales e industriales con máximo rendimiento energético.",
    color: "bg-energy-green-light text-primary",
  },
  {
    icon: Battery,
    title: "Sistemas Híbridos",
    description: "Soluciones combinadas de energía solar y almacenamiento que garantizan suministro ininterrumpido y gestión óptima de la energía.",
    color: "bg-energy-blue-light text-secondary",
  },
  {
    icon: Plug,
    title: "Sistemas Solares On-Grid",
    description: "Instalaciones solares conectadas a la red que reducen las facturas de electricidad manteniendo respaldo de la red.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: PlugZap,
    title: "Sistemas Solares Off-Grid",
    description: "Independencia energética total con sistemas solares autónomos para ubicaciones remotas e instalaciones aisladas.",
    color: "bg-energy-warm text-energy-teal",
  },
  {
    icon: Thermometer,
    title: "Bombas de Calor",
    description: "Soluciones de calefacción y refrigeración eficientes que reducen costos operativos y huella de carbono.",
    color: "bg-energy-green-light text-primary",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestras Soluciones</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Soluciones Energéticas Integrales
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos una gama completa de sistemas de energía renovable adaptados para empresas, colegios, clubes, campos e instalaciones industriales.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={solarPanelsField}
            alt="Campo de paneles solares para instalaciones comerciales e industriales"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {solution.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Más Información</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>

              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            Explorar Todas las Soluciones
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
