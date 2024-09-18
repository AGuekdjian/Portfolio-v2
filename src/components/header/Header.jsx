import React, { useState } from "react";

export const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <header className="w-96 font-bold lg:font-normal bg-slate-200/10 backdrop-blur-[1px] rounded-full py-4 px-3 sticky top-4 lg:fixed lg:top-7 flex justify-center z-10">
      <nav>
        <ul className="flex">
          <li
            className={`transition text-center  w-16 ${
              activeNav === "#"
                ? "rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a href="#" onClick={() => setActiveNav("#")}>
              Inicio
            </a>
          </li>
          <li
            className={`transition text-center w-28 ${
              activeNav === "#Experiencia"
                ? "rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a href="#Experiencia" onClick={() => setActiveNav("#Experiencia")}>
              Experience
            </a>
          </li>
          <li
            className={`transition text-center w-24 ${
              activeNav === "#Proyectos"
                ? "rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a href="#Proyectos" onClick={() => setActiveNav("#Proyectos")}>
              Proyectos
            </a>
          </li>
          <li
            className={`transition text-center w-20 ${
              activeNav === "#Contacto"
                ? "rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a href="#Contacto" onClick={() => setActiveNav("#Contacto")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
