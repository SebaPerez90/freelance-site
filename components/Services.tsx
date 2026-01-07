"use client";

import { CiShop } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { RiComputerLine } from "react-icons/ri";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { JSX } from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/services";

const iconDictionary: { [key: number]: JSX.Element } = {
  1: <CiShop size={40} />,
  2: <TfiWorld size={40} />,
  3: <RiComputerLine size={40} />,
};

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Mis servicios</h2>

      <div className="w-[90%] max-w-250">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            950: {
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="sm:h-[38em] h-[40em] custom-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="py-5">
              <ServiceCard
                id={service.id}
                icon={iconDictionary[service.id]}
                title={service.title}
                description={service.description}
                CTA={service.CTA}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
