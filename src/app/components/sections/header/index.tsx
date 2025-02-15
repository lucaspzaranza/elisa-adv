"use client";

import Image from "next/image";
import ImageCarousel from "./image-carousel";

export default function Header() {
  const btnClasses =
    "px-6 py-1 rounded-full bg-primary text-lg text-white min-w-[180px]";
  const btnMarginLeft = "ml-4";

  return (
    <div className="bg-no-repeat bg-left bg-cover pb-8">
      <div className="grid grid-cols-3 h-6">
        <div className="bg-primary-lighter"></div>
        <div className="bg-primary-darker"></div>
        <div className="bg-primary"></div>
      </div>

      <div className="mt-8 flex flex-row justify-center">
        <button className={btnClasses}>Sobre mim</button>
        <button className={btnClasses + " " + btnMarginLeft}>Serviço</button>
        <button className={btnClasses + " " + btnMarginLeft}>Missão</button>
        <button className={btnClasses + " " + btnMarginLeft}>Dúvidas</button>
        <button className={btnClasses + " " + btnMarginLeft}>Contato</button>
      </div>

      <div className="w-1/2 ml-64 my-10">
        <Image src="/logo.png" alt="Logo" width={500} height={269} priority />
      </div>

      <ImageCarousel />
    </div>
  );
}
