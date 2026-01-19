import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es la energía solar fotovoltaica?",
      answer:
        "La energía solar fotovoltaica es una tecnología que convierte la luz solar directamente en electricidad mediante células fotovoltaicas. Estas células están hechas de materiales semiconductores que generan corriente eléctrica cuando son expuestos a la luz solar.",
    },
    {
      question: "¿Funciona la energía solar en días nublados?",
      answer:
        "Sí, los paneles solares siguen generando electricidad en días nublados, aunque con menor eficiencia. Los sistemas modernos pueden captar luz difusa y radiación infrarroja, permitiéndoles producir entre un 10% y 25% de su capacidad normal durante días nublados.",
    },
    {
      question: "¿Cuánto tiempo duran los paneles solares?",
      answer:
        "Los paneles solares de calidad tienen una vida útil de 25 a 30 años. La mayoría de los fabricantes garantizan que sus paneles mantendrán al menos el 80% de su eficiencia original después de 25 años. Sin embargo, muchos sistemas continúan produciendo electricidad de manera eficiente por más tiempo.",
    },
    {
      question: "¿Puedo instalar paneles solares en cualquier tipo de techo?",
      answer:
        "La mayoría de los techos son adecuados para la instalación de paneles solares, pero factores como la orientación, inclinación, sombras y capacidad estructural deben ser evaluados. Nuestros técnicos realizan una evaluación completa para determinar la viabilidad y diseñar el sistema óptimo para cada caso particular.",
    },
    {
      question: "¿Qué es una bomba de calor y cómo funciona para climatizar una pileta?",
      answer:
        "Una bomba de calor es un sistema eficiente que utiliza la energía del aire para calentar el agua de la pileta, manteniendo una temperatura agradable con bajo consumo energético. Es una solución sustentable que permite extender la temporada de uso de la pileta, brindando confort y ahorro en comparación con otros sistemas de climatización.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas sobre energía solar y nuestras soluciones renovables.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
