"use client";

import { motion } from "framer-motion";

const stepByStepContent = [
  {
    id: "01",
    title: "Nos conocemos",
    description:
      "Coordinamos una llamada para entender tu proyecto, ya sea una tienda online, un sitio web o una aplicación web. Definimos juntos el objetivo del proyecto y sus requisitos.",
  },
  {
    id: "02",
    title: "Dedinimos el diseño",
    description:
      "Creo bocetos y prototipos para mostrarte cómo se verá y funcionará tu sitio o app. También ayuda si ya tenes un diseño.",
  },
  {
    id: "03",
    title: "Manos a la obra",
    description:
      "Una vez aprobado el diseño, empiezo a desarrollar tu sitio o app. Coordinamos plazos de entrega y te mantengo al tanto del progreso.",
  },
  {
    id: "04",
    title: "Tu proyecto online",
    description:
      "Publicamos tu sitio o aplicación y lo dejamos todo listo para que empieces a usarlo sin complicaciones.",
  },
  {
    id: "05",
    title: "Post-lanzamiento",
    description:
      "Después del lanzamiento, sigo disponible para ayudarte con dudas, ajustes o mejoras futuras.",
  },
];

const HowWorks = () => {
  return (
    <section
      //  lg:gap-40 w-full   pt-20 pb-32
      className="z-10 flex flex-col items-center justify-center gap-40 px-6 sm:px-10 w-full max-w-200 mx-auto"
    >
      <h2 className="text-4xl font-bold text-center">Como vamos a trabajar</h2>
      {stepByStepContent.map((data, index) => (
        <motion.div
          transition={{
            duration: 0.2,
            delay: index * 0.2,
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          key={data.id}
          className="flex justify-center items-center gap-4 sm:gap-10 text-foreground "
          style={
            data.id === "02" || data.id === "04"
              ? { alignSelf: "flex-end", flexDirection: "row-reverse" }
              : { alignSelf: "flex-start" }
          }
        >
          <span
            className="text-7xl sm:text-9xl font-bold relative before:absolute before:left-12 before:top-12 before:w-12 before:h-12 before:rounded-full before:border-slate-900 dark:before:border-slate-600 before:border-10 before:blur-md before:scale-[5] before:bg-slate-400 before:-z-10 before:opacity-40 tracking-tighter"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {data.id}
          </span>
          <div
            className={`${
              data.id === "02" || data.id === "04"
                ? "sm:text-end text-center"
                : ""
            } w-full md:w-[20em] z-20`}
          >
            <h2 className="text-xl font-bold">{data.title}</h2>
            <p className="paragraph mt-4 text-pretty dark:text-ligth-soft">
              {data.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default HowWorks;
