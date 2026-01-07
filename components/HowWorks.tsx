"use client";

import { stepByStep } from "@/constants/steps";
import { motion } from "framer-motion";

const HowWorks = () => {
  return (
    <section
      //  lg:gap-40 w-full   pt-20 pb-32
      className="z-10 flex flex-col items-center justify-center gap-40 px-6 sm:px-10 w-full max-w-200 mx-auto"
    >
      <h2 className="text-4xl font-bold text-center">Como vamos a trabajar</h2>
      {stepByStep.map((data, index) => (
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
            className="text-7xl sm:text-9xl font-bold relative before:absolute before:left-12 before:top-12 before:w-12 before:h-12 before:rounded-full before:border-purple-700  before:border-10 before:blur-md before:scale-[5] before:bg-purple-100 before:-z-10 before:opacity-40 tracking-tighter"
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
            <h2 className="text-xl font-bold text-purple-500">{data.title}</h2>
            <p className="mt-4 text-pretty text-slate-600">
              {data.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default HowWorks;
