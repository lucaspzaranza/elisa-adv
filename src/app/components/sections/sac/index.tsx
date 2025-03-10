import CollapsibleMenu from "@/components/ui/collapsible";

export default function SAC() {
  return (
    <div id="sac" className="mb-16 bg-flowers bg-auto">
      <div
        className="w-[80%] sm:w-fit flex pr-12 py-4 text-white text-[2rem] sm:text-[3.25rem] rounded-r-full
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

      <CollapsibleMenu topic="4. Preciso de um advogado para iniciar o processo?">
        Sim, o advogado canônico é essencial para orientar, apresentar e
        acompanhar seu caso no tribunal. Geralmente, ao chegar no tribunal
        diocesano, o solicitante é automaticamente direcionado a um(a)
        advogado(a).
      </CollapsibleMenu>

      <CollapsibleMenu topic="5. O que acontece após a nulidade ser declarada?">
        A nulidade será declarada na sentença. Assim, uma vez recebida a
        sentença em que se reconheceu a nulidade, há que se verificar se há
        veto, isto é, uma condição para que o solicitante (demandante) possa
        estar livre para casar na Igreja novamente. Cumprido o veto, o Bispo irá
        retirar o veto e liberar o demandante para um futuro casamento. Vale
        lembrar que é preciso aguardar ainda o prazo de encerramento do
        processo, ou seja, aguardar o prazo para possível recurso (após a
        notificação da sentença) e o prazo para trânsito em julgado.
      </CollapsibleMenu>

      <CollapsibleMenu topic="6. O casamento civil é suficiente para a Igreja?">
        Não. Para a Igreja Católica, o sacramento do matrimônio exige a
        celebração religiosa conforme suas normas.
      </CollapsibleMenu>

      <CollapsibleMenu topic="7. Casais que enfrentam dificuldades podem pedir nulidade?">
        Não necessariamente. A nulidade matrimonial avalia a validade do vínculo
        desde o início da relação. Casais com dificuldades podem buscar
        aconselhamento e acompanhamento de um diretor espiritual.
      </CollapsibleMenu>

      <CollapsibleMenu topic="8. Quanto custa um processo de nulidade?">
        Os custos variam de acordo com o tribunal e os honorários do advogado.
        Consulte para informações detalhadas.
      </CollapsibleMenu>

      <CollapsibleMenu topic="9. Como agendar uma consultoria?">
        Entre em contato pelo formulário do site ou pelas redes sociais
        profissionais da Dra. Elisa.
      </CollapsibleMenu>

      <CollapsibleMenu topic="10. Posso recorrer se meu pedido de nulidade for negado?">
        Sim, é possível apresentar recurso a uma instância superior na Igreja.
      </CollapsibleMenu>
    </div>
  );
}
