"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#pricing", label: "Planes" },
];

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
      className="flex items-center fixed w-full px-5 py-2 backdrop-blur-sm bg-white/50 z-50 dark:bg-dark-deep/50"
    >
      <div className="relative flex items-center gap-4 justify-center w-full max-w-350 mx-auto ">
        <Image
          src="/logo6.svg"
          alt="logo"
          width={120}
          height={120}
          className="absolute left-0 top-0"
        />

        <nav className="mt-4">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
