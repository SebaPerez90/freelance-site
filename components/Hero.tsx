import Image from "next/image";
import { FaRocket, FaCog, FaStar } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Más ventas",
    description: "Dispará tus ventas online con una web hecha para vos.",
    icon: FaRocket,
  },
  {
    id: 2,
    title: "Menos trabajo manual",
    description: "Automatizá procesos repetitivos y ahorrá tiempo y dinero.",
    icon: FaCog,
  },
  {
    id: 3,
    title: "Imagen profesional",
    description:
      "Mostrá tu producto o servicio de forma atractiva y confiable.",
    icon: FaStar,
  },
];

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="w-full flex flex-col h-dvh relative overflow-hidden"
    >
      <div className="z-20 flex flex-col gap-12 items-center justify-center h-full  relative bottom-48">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight tracking-tighter text-blackt mx-7 lg:mx-0 max-w-200">
          <strong className="text-purple-600">Impulsá tu negocio</strong> con
          soluciones digitales que trabajan por vos.
        </h1>
        <ul className=" xl:absolute -right-32 -bottom-14 w-112.5 space-y-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <li
                key={benefit.id}
                className="flex gap-4 p-4 bg-white/40 backdrop-blur rounded-xl shadow-lg"
              >
                <div className="flex items-start justify-center w-10 h-10 rounded-full bg-violet-100 text-violet-600">
                  <Icon className="mt-3" />
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="relative 

        before:absolute before:w-100 before:h-36 before:left-0 before:right-0 before:mx-auto before:-translate-y-100 before:bg-radial  before:from-purple-400 before:to-purple-800/50 before:-z-10 before:scale-x-200 before:blur-3xl before:-rotate-25 before:rounded-full
    after:absolute after:w-100 after:h-36 after:left-0 after:right-0 after:mx-auto after:-translate-y-110 after:bg-radial  after:from-blue-400/30 after:to-blue-800/30 after:-z-20 after:scale-x-200 after:blur-3xl after:-rotate-2a5 after:rounded-full  
      "
      >
        <Image
          src="/images/hero.png"
          alt="hero"
          width={470}
          height={470}
          className="absolute bottom-20 sm:bottom-0 mx-auto left-0 right-0 mask-[radial-gradient(circle,black_45%,transparent_82%)]"
        />
      </div>
    </section>
  );
};

export default Hero;
