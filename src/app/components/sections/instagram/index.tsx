import Image from "next/image";

export default function Instagram() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 mb-36">
      <a
        href="https://www.instagram.com/elisaferraz.canon/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <h1
          className="w-content px-24 py-3 rounded-full text-center flex flex-row items-center hover:opacity-80 transition 
          justify-center text-white font-bold bg-gradient-to-r from-[#C850D3] to-[#7f009c] text-3xl sm:text-4xl"
        >
          Me siga no Instagram
        </h1>
      </a>

      <a
        href="https://www.instagram.com/elisaferraz.canon/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="/insta.png"
          className="rounded-[100px] shadow-[-80px_80px_40px_rgba(0,0,0,0.3)] cursor-pointer hover:opacity-80 transition"
          alt="insta"
          width={926}
          height={775}
        />
      </a>
    </div>
  );
}
