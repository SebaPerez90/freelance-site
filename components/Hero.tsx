import { IoIosArrowForward } from "react-icons/io";
import { Button } from "./ui/button";
import { FaCheck } from "react-icons/fa6";

const benefits = [
  "Dispára tus ventas online con una web hecha para vos.",
  "Automatiza procesos repetitivos y ahorra tiempo y dinero.",
  "Mostra tu producto o servicio a tus clientes de una manera profesional y atractiva.",
];

const Hero = () => {
  return (
    <section id="hero-section" className="py-28 w-full h-[80dvh] relative">
      <div className="flex flex-col gap-12 items-center justify-center h-full">
        <header className="flex flex-col items-center justify-center gap-10 text-center w-[90%] lg:w-[60em] xl:w-[75em] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Impulsá tu negocio con soluciones digitales diseñadas a tu medida.
          </h1>
          <ul>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-slate-700"
              >
                <FaCheck className="text-green-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </header>
        <Button type="button" size={"lg"} className="w-max">
          <a href="#services">Conocé mis servicios</a>
          <IoIosArrowForward size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
