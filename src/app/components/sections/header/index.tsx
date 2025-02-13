export default function Header() {
  const btnClasses = "px-6 py-1 rounded-full bg-primary text-lg text-white min-w-[140px]";
  const btnMarginLeft = "ml-4";
  
  return (
    <div>
      <div className="grid grid-cols-3 h-6">
        <div className="bg-primaryLighter"></div>
        <div className="bg-primary"></div>
        <div className="bg-primaryDarker"></div>
      </div>

      <div className="mt-8 flex flex-row justify-center">
        <button className={btnClasses}>Sobre mim</button>
        <button className={btnClasses + ' ' + btnMarginLeft}>Serviço</button>
        <button className={btnClasses + ' ' + btnMarginLeft}>Missão</button>
        <button className={btnClasses + ' ' + btnMarginLeft}>Dúvidas</button>
        <button className={btnClasses + ' ' + btnMarginLeft}>Contato</button>
      </div>
    </div>
  )
}