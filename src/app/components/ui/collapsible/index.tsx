"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CollapsibleMenu(
  props: Readonly<{
    topic: string;
    children: React.ReactNode;
  }>
) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full pl-1 sm:pl-default sm:mx-auto mt-4 sm:mt-10">
      {/* Botão que expande/colapsa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-7/12 flex flex-row items-start justify-start p-0 rounded-lg"
      >
        <span className="flex flex-row w-full items-start justify-between text-start text-xl sm:text-4xl pl-0 font-bold text-primary-darker">
          <p className="inline-block w-full leading-tight p-0">{props.topic}</p>

          {/* Ícone de seta com animação */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-1 bg-gradient-to-br from-[#7f009c] to-[#C850D3] text-white" />
          </motion.div>
        </span>
      </button>

      {/* Conteúdo que expande */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="w-full sm:w-1/2 py-4">
          <p className="text-lg text-black sm:text-3xl pl-0">
            {props.children}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
