import Image from "next/image";

export default function Instagram() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center gap-6 sm:gap-16 mb-12 sm:mb-36">
      <a
        href="https://www.instagram.com/elisaferraz.canon/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full px-2 sm:w-auto sm:px-0"
      >
        <h1
          className="w-full sm:w-content px-2 sm:px-24 py-3 rounded-full text-center flex flex-row items-center hover:opacity-80 transition 
          justify-center text-white font-bold bg-gradient-to-r from-[#C850D3] to-[#7f009c] text-xl sm:text-4xl"
        >
          Me siga no Instagram
        </h1>
      </a>

      <a
        href="https://www.instagram.com/elisaferraz.canon/"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-2 sm:px-0"
      >
        <Image
          src="/insta.png"
          className="rounded-[50px] sm:rounded-[100px] shadow-[-20px_20px_40px_rgba(0,0,0,0.3)] sm:shadow-[-80px_80px_40px_rgba(0,0,0,0.3)] cursor-pointer hover:opacity-80 transition"
          alt="insta"
          width={926}
          height={775}
        />
      </a>
    </div>
  );
}
