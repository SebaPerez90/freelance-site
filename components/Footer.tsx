"use client";

import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const homeRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current && window.scrollY > 800) {
        homeRef.current.classList.replace("opacity-0", "opacity-100");
        homeRef.current.classList.remove("pointer-events-none");
      } else if (homeRef.current) {
        homeRef.current.classList.replace("opacity-100", "opacity-0");
        homeRef.current.classList.add("pointer-events-none");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className="relative flex flex-col items-center pt-20 w-full"
    >
      <a
        ref={homeRef}
        href="#hero-section"
        className="hidden sm:block opacity-0 transition-all duration-500 pointer-events-none z-50"
      >
        <button
          type="button"
          className="fixed right-5 bottom-10 bg-black text-white rounded-full p-3 cursor-pointer animate-bounce"
        >
          <FaArrowUp size={15} />
        </button>
      </a>

      <hr className="h-0.5 my-4 bg-gray-300 w-[70%]" />
      <span className=" w-max font-medium text-sm my-2 text-foreground">
        © 2026 Soluciones tecnológicas | Sebastian Perez
      </span>
    </footer>
  );
};

export default Footer;
