import { ArrowRight, Leaf, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-energy-dark via-energy-dark to-energy-blue/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Tailored{" "}
              <span className="text-primary">Renewable Energy</span>{" "}
              Solutions for Your Business
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Reduce energy costs by up to 70% and achieve energy independence with our custom-designed solar and heat pump systems for businesses, schools, farms, and industrial clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                <a href="#contact">
                  Get a Free Energy Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
              >
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-primary-foreground/70">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">70%</p>
                <p className="text-sm text-primary-foreground/70">Avg. Cost Reduction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-[450px] h-[450px]">
              {/* Central Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
                <Zap className="w-16 h-16 text-primary" />
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <Building2 className="w-10 h-10 text-secondary" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-energy-teal/20 backdrop-blur-sm border border-energy-teal/30 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Leaf className="w-10 h-10 text-energy-teal" />
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-full" />
              <div className="absolute inset-8 border-2 border-secondary/10 rounded-full" />
              <div className="absolute inset-16 border-2 border-primary/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
