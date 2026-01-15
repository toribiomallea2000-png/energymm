import { TrendingDown, Shield, Leaf, PiggyBank, Check } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Menores Costos Energéticos",
    description: "Reduce tus facturas de electricidad hasta un 70% con nuestros sistemas de energía renovable eficientes, generando ahorros significativos a largo plazo.",
    highlights: ["Reducción inmediata de costos", "Gastos energéticos predecibles", "Protección contra volatilidad de precios"],
  },
  {
    icon: Shield,
    title: "Independencia Energética",
    description: "Obtén control sobre tu suministro de energía con sistemas diseñados para minimizar la dependencia de la red y asegurar continuidad operativa.",
    highlights: ["Menor dependencia de la red", "Capacidad de respaldo", "Continuidad del negocio"],
  },
  {
    icon: Leaf,
    title: "Sostenible y Confiable",
    description: "Invierte en soluciones de energía limpia que reducen tu huella de carbono mientras proporcionan energía confiable durante décadas.",
    highlights: ["Cero emisiones de carbono", "Vida útil de 25+ años", "Mantenimiento mínimo"],
  },
  {
    icon: PiggyBank,
    title: "Retorno de Inversión Claro",
    description: "Nuestros sistemas están diseñados para una recuperación rápida, con ROI típico alcanzado en 3-5 años e incentivos gubernamentales disponibles.",
    highlights: ["Período de recuperación rápido", "Incentivos gubernamentales", "Mayor valor de la propiedad"],
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Por Qué Elegirnos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Los Beneficios de la Energía Renovable
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre por qué empresas de todos los sectores están haciendo el cambio a energía renovable con MM Group.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex gap-5 p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {benefit.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
