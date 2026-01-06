"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { Button } from "./ui/button";
import Image from "next/image";

const Slider = () => {
  return (
    <section className=" flex flex-col justify-center items-center gap-28">
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 px-10 sm:px-0">
        <div className="w-full sm:w-[22em] flex flex-col gap-5 lg:gap-28 justify-between lg:py-5">
          <div>
            <h1 className="text-3xl space-y-3 font-bold mb-6">
              No importa tu rubro de tu negocio, mejora tu alcance online ahora.
            </h1>
            <p>
              Hoy en día, tener una presencia sólida en línea es esencial para
              el éxito de cualquier negocio. Aprovecha el potencial de la web
              para destacar y aumentar tus ventas.
            </p>
          </div>

          <Button size="lg" className="py-6">
            <a href="#contact-me-form">Potenciá tu negocio ahora!</a>
          </Button>
        </div>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          className="w-[20em] sm:w-[25em] h-[35em] rounded-lg overflow-hidden"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index} className="size-full overflow-hidden">
              <Image
                width={400}
                height={600}
                className="size-full object-cover "
                loading="lazy"
                src={`/images/${index + 1}.webp`}
                alt={`slider-image-${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
