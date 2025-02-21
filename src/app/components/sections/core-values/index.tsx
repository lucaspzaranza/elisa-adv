import Banner from "@/components/ui/banner";
import { TitleWithTextElement } from "@/interfaces/TitleWithTextElement";

export default function CoreValues() {
  const coreValues: TitleWithTextElement[] = [
    {
      title: "Missão:",
      text: "Oferecer assessoria jurídica especializada e humanizada, promovendo a verdade e a justiça no contexto do Direito Canônico, em defesa do matrimônio e da família cristã.",
    },
    {
      title: "Visão:",
      text: "Ser referência nacional em assessoria canônica e advocacia matrimonial, integrando fé, conhecimento jurídico e amor à Igreja.",
    },
    {
      title: "Valores:",
      text: "Respeito à doutrina católica; compromisso com a verdade; discrição e ética profissional e cuidado pastoral com cada caso.",
    },
  ];

  return (
    <div className="mb-16 pl-[100px] w-11/12">
      {coreValues.map((data, index) => (
        <Banner {...data} key={index} />
      ))}
    </div>
  );
}
