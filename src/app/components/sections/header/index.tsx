"use client";

import Image from "next/image";
import ImageCarousel from "../../ui/image-carousel";

export default function Header() {
  const btnClasses =
    "px-6 py-1 rounded-full bg-primary text-lg font-semibold text-white min-w-[180px]";
  const btnMarginLeft = "ml-4";
  const btnWithMarginLeft = btnClasses + " " + btnMarginLeft;

  return (
    <div className="bg-elisa-1 bg-no-repeat bg-left bg-cover bg-[position:0px_10%] mb-24">
      <div className="grid grid-cols-3 h-6">
        <div className="bg-primary-lighter"></div>
        <div className="bg-primary-darker"></div>
        <div className="bg-primary"></div>
      </div>

      <div className="mt-8 flex flex-row justify-center">
        <button className={btnClasses}>Sobre mim</button>
        <button className={btnWithMarginLeft}>Serviço</button>
        <button className={btnWithMarginLeft}>Missão</button>
        <button className={btnWithMarginLeft}>Dúvidas</button>
        <button className={btnWithMarginLeft}>Contato</button>
      </div>

      <div className="w-1/2 ml-64 my-20">
        <Image src="/logo.png" alt="Logo" width={540} height={230} priority />
      </div>

      <ImageCarousel />
    </div>
  );
}
