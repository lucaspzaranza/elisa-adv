import CollapsibleMenu from "@/components/ui/collapsible";

export default function SAC() {
  return (
    <div>
      <div
        className="w-fit flex pr-12 py-4 text-white text-[3.25rem] rounded-r-full
        font-bold bg-gradient-to-r from-[#7f009c] to-[#C850D3] mb-10"
      >
        <h1>SAC (Perguntas Frequentes)</h1>
      </div>
      <CollapsibleMenu topic="1. O que é a nulidade matrimonial?">
        A nulidade é o reconhecimento de que um casamento nunca existiu
        juridicamente por falta de algum requisito essencial no momento da
        celebração.
      </CollapsibleMenu>

      <CollapsibleMenu topic="2. Quanto tempo leva um processo de nulidade matrimonial?">
        O tempo varia conforme a complexidade do caso e o tribunal, podendo
        durar de meses a alguns anos. A igreja está cada vez mais disposta a
        instaurar tribunais nas dioceses para deixar o processo de nulidade mais
        ágil e que seja realizado dentro de um tempo mais breve.
      </CollapsibleMenu>

      <CollapsibleMenu topic="3. Quais os motivos para pedir a nulidade do matrimônio?">
        Alguns motivos incluem falta de liberdade ao consentir, imaturidade, ou
        ocultação de fatos relevantes. Os motivos são muito pessoais e variam
        dentro da realidade do casal.
      </CollapsibleMenu>
    </div>
  );
}
