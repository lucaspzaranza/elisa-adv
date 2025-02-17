import { TitleWithTextElement } from "@/interfaces/TitleWithTextElement";

export default function Banner(props: Readonly<TitleWithTextElement>) {
  return (
    <div className="w-[95%] mb-10 relative">
      <h1 className="absolute w-[15rem] h-[4rem] top-[-10px] flex flex-row items-center justify-center px-6 py-1 rounded-full bg-primary-darker text-3xl text-white">
        <strong>{props.title}</strong>
      </h1>
      <p className="w-full h-[14rem] p-16 pt-20 flex flex-row items-center justify-center rounded-[75px] bg-[#ededed] text-3xl text-primary-darker">
        {props.text}
      </p>
    </div>
  );
}
