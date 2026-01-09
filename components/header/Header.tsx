"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import WhatsAppCTA from "./WhatsAppCTA";

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

  return (
    <header
      ref={headerRef}
      className="flex items-center fixed w-full p-5 backdrop-blur-sm bg-white/90 z-50 dark:bg-dark-deep/50"
    >
      <div className="relative flex items-center gap-4 justify-between w-full max-w-350 mx-auto">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="sm:scale-100 scale-75"
        />

        <NavLinks
          disappear={
            "hidden sm:block  bottom-2 absolute left-0 right-0 mx-auto w-max"
          }
          flexDirection={"flex items-center justify-center gap-5"}
        />

        {/* Botón WhatsApp */}
        <WhatsAppCTA />
      </div>

      {/* mobile menu is available when viewport width is less than 640 px */}
      <MobileMenu />
    </header>
  );
};

export default Header;
