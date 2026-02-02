import { ClipboardCheck, PenTool, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Análisis",
    description: "Evaluación integral de tu consumo energético actual",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Diseño",
    description: "Sistema a medida que maximiza eficiencia y ahorro",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Instalación",
    description: "Equipo certificado con integración perfecta",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Horizontal Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Left - Header */}
          <div className="lg:w-1/4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestro Proceso</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
              Cómo Funciona
            </h2>
          </div>

          {/* Right - Steps in a row */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                {/* Number */}
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-primary/30 rotate-45 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
