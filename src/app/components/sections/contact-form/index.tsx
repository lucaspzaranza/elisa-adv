"use client";

import Button from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailto = (event: React.FormEvent) => {
    // const formHasEmptyFields =
    //   formData.name.trim().length === 0 ||
    //   formData.phone.trim().length === 0 ||
    //   formData.subject.trim().length === 0 ||
    //   formData.message.trim().length === 0;

    // if (formHasEmptyFields) {
    //   console.log("Por favor preencha os campos que estão faltando os dados.");
    //   return;
    // }
    event.preventDefault();

    const email = "elisa.ferraz23@gmail.com";
    const subject = encodeURIComponent(formData.subject);
    const finalMessage = `
      Nome: ${formData.name ?? "-"};
      Telefone: ${formData.phone ?? "-"};
      Motivo do contato: ${formData.subject ?? "-"};\n

      ${formData.message}
    `;
    const body = encodeURIComponent(finalMessage);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const inputClasses = `w-content h-16 px-10 bg-primary rounded-full text-white text-2xl font-semibold
    placeholder-white focus:outline-primary-darker`;

  const textAreaClasses = `w-content h-[15rem] px-10 py-4 bg-primary rounded-[35px] text-white text-2xl font-semibold
    placeholder-white focus:outline-primary-darker`;

  const labelClasses = `text-3xl text-primary-darker font-bold mb-1`;

  const inputContainerClasses = `w-full flex flex-col mb-6`;

  return (
    <div
      id="contact"
      className="w-[90%] sm:w-full h-screen flex flex-col items-center justify-center mt-[-20px] mb-[100px]"
    >
      <div className="w-fit sm:w-full flex flex-row  p-0 sm:pr-72 items-center justify-end">
        <h1 className="h-min mb-[-35px] sm:mb-[-65px] p-0 pl-[-100px] sm:pl-0 text-end font-bold text-[5rem] sm:text-[10rem] text-primary-darker">
          contato
        </h1>
      </div>
      <div
        className="w-10/12 m-[75px] h-fit sm:h-full mt-0 flex flex-row justify-center
        rounded-[100px] ring-4 ring-primary-darker"
      >
        <form
          className="w-full px-4 sm:px-16 py-10 text-center sm:text-start"
          onSubmit={handleMailto}
        >
          <div className={inputContainerClasses}>
            <label className={labelClasses}>Nome completo*</label>
            <input
              type="text"
              placeholder="Nome"
              name="name"
              className={inputClasses}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center sm:gap-16 justify-between">
            <div className={inputContainerClasses}>
              <label className={labelClasses}>
                Número de telefone (Whats)*
              </label>
              <input
                type="text"
                name="phone"
                placeholder="(XX) 12345 - 6789"
                className={inputClasses}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={inputContainerClasses}>
              <label className={labelClasses}>Motivo de contato*</label>
              <input
                type="text"
                name="subject"
                placeholder="Motivo"
                className={inputClasses}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={inputContainerClasses}>
            <label className={labelClasses}>Mensagem*</label>
            <textarea
              className={textAreaClasses}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
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
