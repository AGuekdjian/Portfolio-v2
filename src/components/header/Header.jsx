import React, { useState } from "react";

export const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <header className="block bg-slate-200/10 backdrop-blur-[1px] rounded-full py-4 px-3 w-fit fixed top-8 flex">
      <nav>
        <ul className="flex">
          <li
            className={`transition text-center mx-3 w-16 ${
              activeNav === "#" ? "rounded-xl bg-cyan-700" : null
            }`}
          >
            <a href="#" onClick={() => setActiveNav("#")}>
              Inicio
            </a>
          </li>
          <li
            className={`transition text-center mx-3 w-24 ${
              activeNav === "#Experiencia" ? "rounded-xl bg-cyan-700" : null
            }`}
          >
            <a href="#Experiencia" onClick={() => setActiveNav("#Experiencia")}>
              Experience
            </a>
          </li>
          <li
            className={`transition text-center mx-3 w-24 ${
              activeNav === "#Proyectos" ? "rounded-xl bg-cyan-700" : null
            }`}
          >
            <a href="#Proyectos" onClick={() => setActiveNav("#Proyectos")}>
              Proyectos
            </a>
          </li>
          <li
            className={`transition text-center mx-3 w-20 ${
              activeNav === "#Contacto" ? "rounded-xl bg-cyan-700" : null
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
