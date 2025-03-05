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
      <div className="bg-elisa-1 bg-no-repeat flex flex-col justify-center items-center bg-cover bg-[position:-450px_0%] sm:bg-[position:0px_10%]">
        <div className="grid grid-cols-3 h-6">
          <div className="bg-primary-lighter"></div>
          <div className="bg-primary-darker"></div>
          <div className="bg-primary"></div>
        </div>

        <div className="w-[80%] mt-8 flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center items-center">
          <Button
            label="Sobre mim"
            onClick={() => (window.location.href = "#about-me")}
          />
          <Button
            label="Serviço"
            hasMargin
            onClick={() => (window.location.href = "#work-areas")}
          />
          <Button
            label="Missão"
            hasMargin
            onClick={() => (window.location.href = "#core-values")}
          />
          <Button
            label="Dúvidas"
            hasMargin
            onClick={() => (window.location.href = "#sac")}
          />
          <Button
            label="Contato"
            hasMargin
            onClick={() => (window.location.href = "#contact")}
          />
        </div>

        <div className="w-full sm:w-1/2 flex flex-row items-center justify-center sm:block sm:justify-normal ml-0 sm:ml-64 my-20">
          <Image src="/logo.png" alt="Logo" width={540} height={230} priority />
        </div>

        <ImageCarousel />
      </div>
    </div>
  );
}
