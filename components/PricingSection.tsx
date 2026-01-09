import { plans } from "@/constants/princing";
import { FaCheck } from "react-icons/fa6";

const parsePrice = (price: string) => Number(price.replace(/[^0-9]/g, ""));

const PricingSection = () => {
  return (
    <section id="pricing" className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="w-full sm:text-center mb-10">
          <h2 className="text-4xl font-bold">Nuestros planes</h2>
          <p className="text-gray-600 leading-relaxed w-full sm:max-w-2/3 lg:max-w-3xl mx-auto my-5">
            Elige el plan que mejor se adapte a tu negocio. Cada plan está
            diseñado para cubrir las necesidades específicas de tu negocio, ya
            sea para mostrar tu producto o servicio, como gestionar todo tu
            negocio en una sola plataforma.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 max-[1024]:place-items-center gap-8">
          {plans.map((plan, index) => {
            // Mensaje pre-armado para WhatsApp
            const whatsappMessage = encodeURIComponent(
              `¡Hola! Me interesa el plan *${plan.name}*. Quisiera más información.`
            );

            const whatsappLink = `https://wa.me/5491132830604?text=${whatsappMessage}`;

            // 🔥 DESCUENTO HARDCODEADO
            const discount =
              index === 1 ? 34 : index === 2 ? 20 : index === 0 ? 34 : 0;

            const originalPrice = parsePrice(plan.price);
            const finalPrice =
              discount > 0
                ? Math.round(originalPrice * (1 - discount / 100))
                : originalPrice;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg px-8 py-10 flex flex-col justify-between border border-gray-100 max-w-125"
              >
                <div className="h-full flex flex-col justify-between">
                  {/* PRECIO */}
                  <div className="my-7 flex flex-col items-start gap-1">
                    {discount > 0 && (
                      <span className="text-sm ml-2 text-gray-500 line-through">
                        ${originalPrice.toLocaleString("es-AR")}
                      </span>
                    )}

                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-sans font-semibold text-gray-900">
                        ${finalPrice.toLocaleString("es-AR")}
                        <span className="text-sm relative -top-1 ml-1">
                          ARS
                        </span>
                      </span>

                      {discount > 0 && (
                        <span className="text-sm px-2 py-1 rounded-full bg-green-500/15  text-green-600 font-semibold">
                          {discount}% OFF
                        </span>
                      )}
                    </div>
                  </div>

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
                  <a href={whatsappLink} target="_blank">
                    {plan.cta}
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
