import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constants/faq";

const FAQAccordion = () => {
  return (
    <section id="faq" className="w-full max-w-7xl mx-auto" >
      <h2 className="text-4xl font-bold text-center mb-16">
        Preguntas Frecuentes
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full px-10 flex gap-14 overflow-hidden flex-wrap justify-between"
      >
        {faq.map((section) => (
          <div key={section.title} className="w-full sm:w-[24em] grow">
            <h3 className="text-2xl font-bold">{section.title}</h3>

            {section.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.question}
                className="border-b-gray-300 hover:border-b-gray-400 transition-all duration-200"
              >
                <AccordionTrigger className="text-base cursor-pointer hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-black/80 font-light">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQAccordion;
