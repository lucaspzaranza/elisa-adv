"use client";

import Image from "next/image";
import ImageCarousel from "../../ui/image-carousel";
import Button from "@/components/ui/button";

export default function Header() {
  const btnClasses =
    "px-6 py-1 rounded-full bg-primary text-lg font-semibold text-white min-w-[180px]";
  const btnMarginLeft = "ml-4";
  const btnWithMarginLeft = btnClasses + " " + btnMarginLeft;

  return (
    <div className="bg-gray-100 pb-24">
      <div className="bg-elisa-1 bg-no-repeat bg-cover bg-[position:0px_10%]">
        <div className="grid grid-cols-3 h-6">
          <div className="bg-primary-lighter"></div>
          <div className="bg-primary-darker"></div>
          <div className="bg-primary"></div>
        </div>

        <div className="mt-8 flex flex-row justify-center">
          <Button label="Sobre mim" />
          <Button label="Serviço" hasMargin />
          <Button label="Missão" hasMargin />
          <Button label="Dúvidas" hasMargin />
          <Button label="Contato" hasMargin />
        </div>

        <div className="w-1/2 ml-64 my-20">
          <Image src="/logo.png" alt="Logo" width={540} height={230} priority />
        </div>

        <ImageCarousel />
      </div>
    </div>
  );
}
