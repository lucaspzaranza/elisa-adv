import Banner from "@/components/ui/banner";
import Card from "@/components/ui/card";
import { TitleWithTextElement } from "@/interfaces/TitleWithTextElement";

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
    <div className="pl-[100px] w-11/12">
      <div className="grid grid-cols-2 gap-6 my-24">
        {workAreas.map((data, index) => (
          <Card {...data} key={index} />
        ))}
      </div>
    </div>
  );
}
