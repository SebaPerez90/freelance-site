import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCTA = () => {
  // Mensaje pre-armado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me gustaría consultar por tus servicios de desarrollo web."
  );
  const whatsappLink = `https://wa.me/5491132830604?text=${whatsappMessage}`; // reemplazá con tu número
  return (
    <div className="flex justify-center mx-4 ">
      <a
        href={whatsappLink}
        target="_blank"
        className="inline-flex items-center gap-2 bg-green-500/90 hover:bg-green-500 text-white px-5 py-2 rounded-lg text-sm sm:text-base transition"
      >
        <FaWhatsapp className="text-base sm:text-xl" />
        Hablemos
      </a>
    </div>
  );
};

export default WhatsAppCTA;
