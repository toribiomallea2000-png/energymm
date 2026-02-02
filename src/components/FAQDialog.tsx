import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQDialogProps {
  children: React.ReactNode;
}

const FAQDialog = ({ children }: FAQDialogProps) => {
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
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Preguntas Frecuentes
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary rounded-lg px-4 border-none"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FAQDialog;
