import React from "react";

export default function Button({
  label,
  hasMargin = false,
  customClasses,
  onClick,
}: {
  label: string;
  hasMargin?: boolean;
  customClasses?: string;
  onClick?: () => void;
}) {
  const btnClasses = `px-6 py-1 rounded-full bg-primary text-lg 
    font-semibold text-white w-1/2 sm:min-w-[180px]
     ${hasMargin ? "m-0 sm:ml-4" : ""} + ${customClasses}`;

  return (
    <button className={btnClasses} onClick={onClick}>
      {label}
    </button>
  );
}
