import Image from "next/image";

export default function Footer() {
  const h1Classes = `w-full flex flex-row items-center justify-center
  text-3xl font-semibold text-primary-darker p-0`;

  return (
    <footer className="relative w-[85%] sm:w-full h-auto flex flex-col items-center justify-center">
      <h1 className={h1Classes}>elisa.ferraz23@gmail.com</h1>
      <div className="w-full flex flex-col sm:flex-row justify-center mb-8">
        <div className="w-[100%] sm:w-[100vw] text-center">
          <h1 className={h1Classes}>11 99350-1713</h1>
        </div>
        <div className="w-full flex flex-row justify-center sm:block sm:w-auto sm:absolute sm:bottom-4 sm:right-4 hover:opacity-80">
          <a
            href="https://api.whatsapp.com/send?phone=5511993501713"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image src="/whatsapp.png" alt="wpp" width={181} height={181} />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <span className="font-semibold text-primary text-center">
          © 2025 Direitos reservados - Termos de uso - Política de Privacidade
        </span>
        <span className="font-semibold text-primary mb-4 text-center">
          Criado por Agência Dulce (e programado pelo cara que a ama)
        </span>
      </div>
    </footer>
  );
}
