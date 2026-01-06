import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    title: "Proceso de Trabajo",
    items: [
      {
        question: "No sé nada de tecnología, ¿puedo igual tener mi web?",
        answer:
          "¡Por supuesto! Me encargo de todo el proceso. Solo necesito que me cuentes tu idea y qué querés lograr, y yo te guío paso a paso.",
      },
      {
        question: "¿Qué necesito tener para empezar?",
        answer:
          "Nada técnico. Una breve descripción de tu negocio, tus objetivos, y si tenés fotos o textos de referencias que querés usar. El resto lo armo yo.",
      },
      {
        question: "¿Cuánto tarda en estar lista mi web?",
        answer:
          "Depende del tipo de sitio que quieras, todo va depender de la complejidad de la solución que implementemos. Lo charlamos juntos y te doy una fecha clara desde el inicio.",
      },
    ],
  },
  {
    title: "Pagos",
    items: [
      {
        question: "¿Tengo que abonar algo para empezar?",
        answer:
          "Si. Solicito un adelanto del 25% para comenzar con el proyecto. Esto se hace para garantizar el compromiso de ambos con el proyecto y además al diseñar bocetos, requiere tiempo para implementarlos. El resto se abona al finalizar y entregar el sitio web.",
      },
      {
        question: "¿Puedo pagar en cuotas?",
        answer:
          "Sí. Evaluamos juntos la mejor forma para que puedas avanzar con tu proyecto sin complicaciones.",
      },
      {
        question: "¿El precio puede cambiar?",
        answer:
          "No. Una vez acordado el presupuesto, no hay sorpresas ni costos ocultos. Pero es importante saber que cada sección o funcionalidad extra que quieras agregar después del acuerdo inicial, tiene un costo adicional.",
      },
    ],
  },
  {
    title: "Garantías",
    items: [
      {
        question: "¿Qué pasa si no me gusta el resultado?",
        answer:
          "Trabajamos juntos para ajustar lo necesario. No finalizo el proyecto hasta que estés conforme.",
      },
      {
        question: "¿Y si tengo un problema después?",
        answer:
          "Podés escribirme sin problema. Estoy para ayudarte incluso después de la entrega.",
      },
    ],
  },
  {
    title: "Servicio post entrega",
    items: [
      {
        question: "¿Me enseñás a usar mi nueva web?",
        answer:
          "Sí. Te doy una capacitación básica para que puedas gestionar el contenido de tu sitio web de forma independiente.",
      },
      {
        question: "¿Que pasa si quiero agregar funcionalidades?",
        answer:
          "Sí. Puedo ayudarte a agregar nuevas funcionalidades a tu sitio web después de la entrega. Pero esto implica costos adicionales en base a la complejidad de lo que quieras agregar.",
      },
      {
        question: "¿Ofrecés mantenimiento mensual del sitio?",
        answer:
          "Sí. Podés contratar un plan mensual que incluye actualizaciones, soporte técnico y monitoreo del sitio para que siempre funcione bien.",
      },
    ],
  },
];

const FAQAccordion = () => {
  return (
    <section className="w-full max-w-7xl mx-auto" id="faq">
      <h2 className="text-4xl font-bold text-center mb-16">
        Preguntas Frecuentes
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full px-10 flex gap-14 overflow-hidden flex-wrap justify-between"
      >
        {faqData.map((section) => (
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
