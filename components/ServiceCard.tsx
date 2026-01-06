import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface ServiceCardProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  CTA: string;
}

const ServiceCard = ({
  id,
  icon,
  title,
  description,
  CTA,
}: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-6 w-[17em] sm:w-[22em] mx-auto">
      <div className="flex flex-col items-center w-full relative">
        <figure className="w-full h-[15em] rounded-lg overflow-hidden">
          <Image
            loading="lazy"
            width={500}
            height={300}
            className="size-full object-cover"
            src={
              id === 1
                ? "/images/9.webp"
                : id === 2
                ? "/images/11.webp"
                : "/images/10.webp"
            }
            alt="service image"
          />
        </figure>
        <span className="rounded-full p-4 bg-white/60 backdrop-blur-sm absolute -bottom-8 border">
          {icon}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-center text-xl font-semibold">{title}</h3>
        <p className="paragraph mt-5">{description}</p>
      </div>
      <Button size={"lg"} className="mx-auto">
        <a href="#contact-me-form">{CTA}</a>
      </Button>
    </div>
  );
};

export default ServiceCard;
