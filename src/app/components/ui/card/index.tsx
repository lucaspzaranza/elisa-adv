import { TitleWithTextElement } from "@/interfaces/TitleWithTextElement";

export default function Card(props: Readonly<TitleWithTextElement>) {
  return (
    <div className="w-[90%] h-fit sm:w-full sm:h-[20rem] mb-4 sm:mb-0 flex flex-col px-8 sm:px-16 py-10 bg-gradient-to-br from-[#7f009c] to-[#C850D3] text-white rounded-[80px] sm:rounded-[125px]">
      <h1 className="w-full flex flex-row items-center justify-center sm:block text-xl sm:text-3xl text-center mb-5 p-0">
        <strong>{props.title}</strong>
      </h1>
      <div className="w-full h-inherit flex flex-col text-center items-center justify-center">
        <p className="text-2xl sm:text-2xl pl-0">{props.text}</p>
      </div>
    </div>
  );
}
