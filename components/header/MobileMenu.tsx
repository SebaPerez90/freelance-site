import HamburguerButton from "@/components/header/HamburguerButton";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    const line_a = document.getElementById("line_a");
    const line_b = document.getElementById("line_b");
    const line_c = document.getElementById("line_c");

    const main_section = document.getElementById("main-section");
    const footer_section = document.getElementById("footer");

    line_a?.classList.remove("[rotate:45deg]", "top-2");
    line_b?.classList.remove("opacity-0");
    line_c?.classList.remove("[rotate:-45deg]", "bottom-2");

    main_section?.classList.remove("blur-[2px]");
    footer_section?.classList.remove("blur-[2px]");

    document.body.style.overflow = "";
    setIsOpen(false);
  };

  return (
    <>
      <HamburguerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeMenu={closeMenu}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="modal"
            onClick={closeMenu}
            className="bg-black/50 backdrop-blur-lg w-full fixed left-0 top-0 h-screen flex justify-end items-start shadow-xl z-50"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: 100, opacity: 1 }}
              whileInView={{ x: 10, opacity: 1 }}
              exit={{ opacity: 0, width: 0 }}
              className="flex flex-col items-center justify-center gap-14 w-[15em] h-[28em] bg-white  rounded-[0_0_0_10px]
              before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-linear-to-b before:from-purple-500 before:to-transparent relative"
            >
              <div className="absolute top-7 opacity-60 tracking-widest text-lg">
                MENÚ
              </div>

              <NavLinks
                disappear={"mt-8"}
                flexDirection={
                  "flex flex-col items-center justify-center gap-10"
                }
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
