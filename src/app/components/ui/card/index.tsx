import { TitleWithTextElement } from "@/interfaces/TitleWithTextElement";

export default function Card(props: Readonly<TitleWithTextElement>) {
  return (
    <div className="w-[38rem] h-[23rem] flex flex-col px-16 py-10 bg-gradient-to-br from-[#7f009c] to-[#C850D3] text-white rounded-[125px]">
      <h1 className="text-3xl w-3/4 mb-5 pl-0">
        <strong>{props.title}</strong>
      </h1>
      <div className="h-inherit flex flex-col items-center justify-center">
        <p className="text-3xl pl-0">{props.text}</p>
      </div>
    </div>
  );
}
