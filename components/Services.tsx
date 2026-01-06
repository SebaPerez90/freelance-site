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

const iconDictionary: { [key: number]: JSX.Element } = {
  1: <CiShop size={40} />,
  2: <TfiWorld size={40} />,
  3: <RiComputerLine size={40} />,
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Tiendas Online",
      description:
        "Creo tu tienda virtual para que empieces a vender por Internet. Diseño simple, funcional y adaptado a tu negocio. Solución rápida y económica para que puedas comenzar a vender cuanto antes.",
      CTA: "Quiero mi tienda!",
    },
    {
      id: 2,
      title: "Sitios Web",
      description:
        "Diseño tu sitio web para que muestres lo que hacés o vendés de forma clara y profesional. Tus clientes van a poder encontrar todo lo que necesitan de tu negocio en un solo lugar.",
      CTA: "Quiero mi sitio!",
    },
    {
      id: 3,
      title: "Aplicacion a Medida",
      description:
        "Desarrollo aplicaciones para optimizar procesos específicos de tu negocio. Acá ya contas con tu propia base de datos, desde un solo lugar gestiones todo; procesos, stock, ventas, clientes, etc.",
      CTA: "Colaboremos!",
    },
  ];

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
