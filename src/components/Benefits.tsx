import { TrendingDown, Shield, Leaf, PiggyBank } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Menores Costos",
    description: "Reduce hasta 70% en facturas de electricidad",
  },
  {
    icon: Shield,
    title: "Independencia",
    description: "Control total de tu suministro energético",
  },
  {
    icon: Leaf,
    title: "Sostenible",
    description: "Cero emisiones, vida útil 25+ años",
  },
  {
    icon: PiggyBank,
    title: "ROI Claro",
    description: "Recuperación en 3-5 años",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 lg:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Horizontal Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Left - Header */}
          <div className="lg:w-1/3">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Por Qué Elegirnos</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-3">
              Beneficios de la Energía Renovable
            </h2>
            <p className="text-muted-foreground">
              Descubre por qué empresas de todos los sectores hacen el cambio.
            </p>
          </div>

          {/* Right - Benefits Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
