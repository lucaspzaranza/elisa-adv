import React from "react";

export default function Button({
  label,
  hasMargin = false,
  customClasses,
  fontSize = "text-xl sm:text-lg",
  onClick,
}: {
  label: string;
  hasMargin?: boolean;
  customClasses?: string;
  fontSize?: string;
  onClick?: () => void;
}) {
  const btnClasses = `px-6 py-1 rounded-full bg-primary  
    font-semibold text-white w-[85%] h-[40px] sm:h-auto sm:min-w-[180px]
     ${hasMargin ? "m-0 sm:ml-4" : ""} + ${customClasses} + ${fontSize}`;

  return (
    <button className={btnClasses} onClick={onClick}>
      {label}
    </button>
  );
}
