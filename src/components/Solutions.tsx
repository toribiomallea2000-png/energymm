import { Sun, Battery, Plug, PlugZap, Thermometer, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Sun,
    title: "Solar Panels",
    description: "High-efficiency photovoltaic systems designed for commercial and industrial applications with maximum energy yield.",
    color: "bg-energy-green-light text-primary",
  },
  {
    icon: Battery,
    title: "Hybrid Systems",
    description: "Combined solar and storage solutions that ensure uninterrupted power supply and optimal energy management.",
    color: "bg-energy-blue-light text-secondary",
  },
  {
    icon: Plug,
    title: "On-Grid Solar Systems",
    description: "Grid-connected solar installations that reduce electricity bills while maintaining grid backup reliability.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: PlugZap,
    title: "Off-Grid Solar Systems",
    description: "Complete energy independence with standalone solar systems for remote locations and facilities.",
    color: "bg-energy-warm text-energy-teal",
  },
  {
    icon: Thermometer,
    title: "Heat Pumps",
    description: "Energy-efficient heating and cooling solutions that reduce operational costs and carbon footprint.",
    color: "bg-energy-green-light text-primary",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a complete range of renewable energy systems tailored for businesses, schools, farms, and industrial facilities.
          </p>
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
                  <span className="text-sm">Learn More</span>
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
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
