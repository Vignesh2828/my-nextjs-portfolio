"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`fixed bottom-5 right-5 w-[4.5rem] h-[2.5rem] rounded-full border-2 ${
        theme === "light" ? "bg-yellow-300 border-yellow-400" : "bg-gray-700 border-gray-500"
      } flex items-center p-1 transition-colors duration-500 shadow-lg`}
      onClick={toggleTheme}
    >
      <div
        className={`w-[2rem] h-[2rem] rounded-full flex items-center justify-center transition-transform duration-500 transform ${
          theme === "light" ? "translate-x-0 bg-white text-yellow-500" : "translate-x-[1.8rem] bg-gray-900 text-white"
        }`}
      >
        {theme === "light" ? <BsSun size={18} /> : <BsMoon size={18} />}
      </div>
    </button>
  );
}
