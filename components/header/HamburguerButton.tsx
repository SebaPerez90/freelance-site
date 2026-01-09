interface HamburguerButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
}

const HamburguerButton = ({
  isOpen,
  setIsOpen,
  closeMenu,
}: HamburguerButtonProps) => {
  const openMenu = () => {
    const line_a = document.getElementById("line_a");
    const line_b = document.getElementById("line_b");
    const line_c = document.getElementById("line_c");

    const main_section = document.getElementById("main-section");
    const footer_section = document.getElementById("footer");

    if (!isOpen) {
      line_a?.classList.add("[rotate:45deg]", "top-2");
      line_b?.classList.add("opacity-0");
      line_c?.classList.add("[rotate:-45deg]", "bottom-2");

      main_section?.classList.add("blur-[2px]");
      footer_section?.classList.add("blur-[2px]");

      document.body.style.overflow = "hidden";
      setIsOpen(true);
    } else {
      closeMenu();
    }
  };

  return (
    <button
      type="button"
      aria-label="boton menu hamburguesa"
      className="sm:hidden flex flex-col gap-1 cursor-pointer z-100"
      onClick={openMenu}
    >
      <span
        id="line_a"
        className="relative w-8 h-1 rounded-lg transition-all bg-purple-500"
      />
      <span
        id="line_b"
        className="relative w-8 h-1 rounded-lg transition-all bg-purple-500"
      />
      <span
        id="line_c"
        className="relative w-8 h-1 rounded-lg transition-all bg-purple-500"
      />
    </button>
  );
};

export default HamburguerButton;
