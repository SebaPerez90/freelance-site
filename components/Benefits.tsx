"use client";

import { motion } from "framer-motion";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "⚡",
      title: "Rápido y sin vueltas",
      description: "Tu idea online en menos tiempo del que imaginás.",
    },
    {
      id: 2,
      icon: "🛠️",
      title: "Profesional y personalizado",
      description:
        "Desarrollo y diseño personalizado a tu medida para reflejar la escena de tu proyecto.",
    },
    {
      id: 3,
      icon: "💸",
      title: "Sin costos ocultos",
      description: "Presupuesto claro y acorde a lo que necesitás.",
    },
    {
      id: 4,
      icon: "🤝",
      title: "Acompañamiento real",
      description:
        "No te dejo solo: estoy para ayudarte antes, durante y luego del desarrollo.",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-14 w-full px-6 sm:px-10 py-32 lg:py-14">
        <div className="flex flex-col items-start gap-5 w-[90%] lg:w-auto ">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Descrubrí los beneficios de trabajar juntos!
          </h2>

          <p className="w-[90%]">
            Convertí tu idea en realidad con un proceso simple, transparente y
            profesional. Ahorra tiempo y dinero, miles de oportunidades están
            esperando por vos.
          </p>
        </div>

        <motion.div className="flex justify-center  flex-row flex-wrap lg:flex-nowraap lg:falex-col gap-6">
          {benefits.map((data) => (
            <motion.div
              key={data.id}
              transition={{
                duration: 0.3,
                delay: data.id * 0.2,
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col grow gap-3 px-5 py-9 bg-black/90 rounded-xl w-full sm:w-[25em]"
            >
              <header className="flex items-center gap-2">
                <span className="text-2xl font-semibold">{data.icon}</span>
                <h3 className="text-xl text-white font-semibold">
                  {data.title}
                </h3>
              </header>

              <p className="paragraph text-slate-300 font-light">
                {data.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
