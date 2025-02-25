import Button from "@/components/ui/button";

export default function ContactForm() {
  const inputClasses = `w-content h-16 px-10 bg-primary rounded-full text-white text-2xl font-semibold
    placeholder-white focus:outline-primary-darker`;

  const textAreaClasses = `w-content h-[15rem] px-10 py-4 bg-primary rounded-[35px] text-white text-2xl font-semibold
    placeholder-white focus:outline-primary-darker`;

  const labelClasses = `text-3xl text-primary-darker font-bold mb-1`;

  const inputContainerClasses = `w-full flex flex-col mb-6`;

  return (
    <div
      id="contact"
      className="w-full h-screen flex flex-col items-center justify-center mt-[-20px] mb-[100px]"
    >
      <div className="w-full flex flex-row pr-72 items-center justify-end">
        <h1 className="h-min mb-[-65px] p-0 text-end font-bold text-[10rem] text-primary-darker">
          contato
        </h1>
      </div>
      <div
        className="w-10/12 m-[75px] h-full mt-0 flex flex-row justify-center
        rounded-[100px] ring-4 ring-primary-darker"
      >
        <form className="w-full px-16 py-10">
          <div className={inputContainerClasses}>
            <label className={labelClasses}>Nome completo*</label>
            <input type="text" placeholder="Nome" className={inputClasses} />
          </div>

          <div className="w-full flex flex-row items-center gap-16 justify-between">
            <div className={inputContainerClasses}>
              <label className={labelClasses}>
                Número de telefone (Whats)*
              </label>
              <input
                type="text"
                placeholder="(XX) 12345 - 6789"
                className={inputClasses}
              />
            </div>

            <div className={inputContainerClasses}>
              <label className={labelClasses}>Motivo de contato*</label>
              <input type="text" placeholder="Causa" className={inputClasses} />
            </div>
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Mensagem*</label>
            <textarea className={textAreaClasses} />
          </div>

          <div className="w-full flex flex-row items-center justify-center">
            <Button
              label="Enviar"
              customClasses="w-1/2 h-[60px] rounded-[100px] hover:opacity-80"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
