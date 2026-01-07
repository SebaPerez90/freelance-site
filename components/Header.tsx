"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { navLinks } from "@/constants/navLinks";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle(
          "[box-shadow:0_0_30px_0_#00000033]",
          window.scrollY !== 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mensaje pre-armado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me gustaría consultar por tus servicios de desarrollo web."
  );
  const whatsappLink = `https://wa.me/5491132830604?text=${whatsappMessage}`; // reemplazá con tu número

  return (
    <header
      ref={headerRef}
      className="flex items-center fixed w-full p-5 backdrop-blur-sm bg-white/50 z-50 dark:bg-dark-deep/50"
    >
      <div className=" relative flex items-center gap-4 justify-between w-full max-w-350 mx-auto">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />

        <nav>
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="hover:text-purple-500 transition-all duration-200"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón WhatsApp */}
        <div className="flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500/90 hover:bg-green-500 text-white px-5 py-2 rounded-lg text-base transition"
          >
            <FaWhatsapp className="text-xl" />
            Hablemos
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
