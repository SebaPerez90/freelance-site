import { plans } from "@/constants/princing";
import { FaCheck } from "react-icons/fa6";

const PricingSection = () => {
  return (
    <section id="pricing" className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Nuestros planes</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto my-5">
            Elige el plan que mejor se adapte a tu negocio. Cada plan está
            diseñado para cubrir las necesidades específicas de tu negocio, ya
            sea para mostrar tu producto o servicio, como gestionar todo tu
            negocio en una sola plataforma.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 place-items-center gap-8 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg px-8 py-10 flex flex-col justify-between border border-gray-100 max-w-125"
            >
              <div className="h-full flex flex-col justify-between">
                <span className="text-4xl font-sans font-semibold text-gray-900 my-4">
                  {plan.price} <span className="text-sm">ARS</span>
                </span>
                <div className="h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                </div>

                <ul className="space-y-3 my-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheck className="text-green-500 translate-y-1 mr-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="w-full py-3 px-6 rounded-lg font-semibold transition
                     bg-gray-900 text-white hover:bg-gray-800"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
