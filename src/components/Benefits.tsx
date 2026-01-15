import { TrendingDown, Shield, Leaf, PiggyBank, Check } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Lower Energy Costs",
    description: "Reduce your electricity bills by up to 70% with our efficient renewable energy systems, delivering significant long-term savings.",
    highlights: ["Immediate cost reduction", "Predictable energy expenses", "Protection from price volatility"],
  },
  {
    icon: Shield,
    title: "Energy Independence",
    description: "Gain control over your energy supply with systems designed to minimize reliance on the grid and ensure operational continuity.",
    highlights: ["Reduced grid dependency", "Backup power capability", "Business continuity"],
  },
  {
    icon: Leaf,
    title: "Sustainable & Reliable",
    description: "Invest in clean energy solutions that reduce your carbon footprint while providing dependable power for decades.",
    highlights: ["Zero carbon emissions", "25+ year system lifespan", "Minimal maintenance"],
  },
  {
    icon: PiggyBank,
    title: "Clear Return on Investment",
    description: "Our systems are designed for rapid payback, with typical ROI achieved within 3-5 years and government incentives available.",
    highlights: ["Fast payback period", "Government incentives", "Increased property value"],
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            The Benefits of Going Renewable
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover why businesses across all sectors are making the switch to renewable energy with MM Group.
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
