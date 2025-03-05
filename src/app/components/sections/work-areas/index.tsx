import Banner from "@/components/ui/banner";
import Card from "@/components/ui/card";
import { TitleWithTextElement } from "@/interfaces/TitleWithTextElement";
import Image from "next/image";

export default function WorkAreas() {
  const workAreas: TitleWithTextElement[] = [
    {
      title: "Assessoria em Nulidade Matrimonial:",
      text: "Acompanhamento e representação em processos de declaração de nulidade matrimonial junto aos Tribunais Eclesiásticos.",
    },
    {
      title: "Orientação Jurídica para Casais:",
      text: "Atendimento personalizado para questões relacionadas ao matrimônio, como dúvidas sobre os direitos canônicos e preparação para processos judiciais.",
    },
    {
      title: "Formação e Palestras:",
      text: "Conferências e workshops sobre Direito Canônico, matrimônio e temas relacionados à fé cristã e família.",
    },
    {
      title: "Aconselhamento Canônico:",
      text: "Apoio a leigos e religiosos que buscam compreensão e soluções para questões específicas no âmbito do Direito Canônico.",
    },
  ];

  return (
    <div id="work-areas" className="relative pl-[100px] w-full">
      <div className="absolute top-[-140px] sm:top-[-250px] left-0 w-full">
        <svg
          className="w-full h-[60px] sm:h-[200px]" // Aumentei a altura para ondas mais profundas
          viewBox="0 0 1440 350"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Gradiente do cinza para o branco */}
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#999" /> {/* Cinza forte no topo */}
              <stop offset="65%" stopColor="#fff" />{" "}
              {/* Branco na parte de baixo */}
            </linearGradient>
          </defs>
          <path
            d="M0,90 C300,550 1120,-400 1600,320 C1440,600 1440,320 1440,320 L0,320 Z"
            fill="url(#gradient)"
          />
        </svg>
      </div>

      <div className="w-full sm:w-11/12 grid sm:grid-cols-2 gap-6 my-24">
        {workAreas.map((data, index) => (
          <Card {...data} key={index} />
        ))}
      </div>
    </div>
  );
}
