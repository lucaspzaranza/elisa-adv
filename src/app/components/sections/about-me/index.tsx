import Image from "next/image";

export default function AboutMe() {
  const scalesSize = 40;
  return (
    <section id="about-me" className="relative">
      <div className="bg-gradient-to-b from-[#f3f4f6] to-[#fff] relative pb-16">
        <div className="w-full bg-elisa-2 bg-no-repeat bg-[length:864px_1080px] bg-[100%_40%]">
          <div className="w-1/2 text-strong-color">
            <h1 className="text-4xl">
              <strong className="flex flex-row items-end justify-normal">
                Sou Elisa, advogada <br /> e teóloga de formação!
                <Image
                  className="ml-2 pb-1"
                  src="/scales.png"
                  alt="Direito Canônico"
                  width={scalesSize}
                  height={scalesSize}
                />
              </strong>
            </h1>
            <section className="w-[85%] mt-8 text-3xl">
              <p className="mb-8">
                Atualmente sou mestranda em Direito Canônico pelo Instituto
                Superior de Direito Canônico (ISDC) em Londrina/PR e atuo no
                Tribunal Eclesiástico de Jundiaí/SP.
              </p>
              <p className="mb-8">
                Nos meus conteúdos, compartilho meu conhecimento direcionado a
                matrimônio, família, vocação e tudo o que envolve a doutrina
                católica sobre o tema, tornando assuntos densos e complexos mais
                compreensíveis, além de colaborar para ajudar casais ou jovens
                leigos que estão precisando de alguma orientação.
              </p>
              <h2>
                <strong>Salve Maria!</strong>
              </h2>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
