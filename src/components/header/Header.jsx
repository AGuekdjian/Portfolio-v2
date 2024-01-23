import React, { useState } from "react";

export const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <header className="w-96 block bg-cyan-700 font-bold lg:font-normal lg:bg-slate-200/10 backdrop-blur-[1px] rounded-full py-4 px-3 lg:w-fit sticky top-4 lg:fixed lg:top-8 flex justify-center z-10">
      <nav>
        <ul className="flex">
          <li
            className={`transition text-center  w-8 mx-3 lg:w-16 ${
              activeNav === "#" ? "lg:rounded-xl lg:bg-cyan-700" : null
            }`}
          >
            <a href="#" onClick={() => setActiveNav("#")}>
              Inicio
            </a>
          </li>
          <li
            className={`transition text-center mx-6 w-12 lg:mx-3 lg:w-24 ${
              activeNav === "#Experiencia"
                ? "lg:rounded-xl lg:bg-cyan-700"
                : null
            }`}
          >
            <a href="#Experiencia" onClick={() => setActiveNav("#Experiencia")}>
              Experience
            </a>
          </li>
          <li
            className={`transition text-center mx-6  w-12 lg:mx-3 lg:w-24 ${
              activeNav === "#Proyectos" ? "lg:rounded-xl lg:bg-cyan-700" : null
            }`}
          >
            <a href="#Proyectos" onClick={() => setActiveNav("#Proyectos")}>
              Proyectos
            </a>
          </li>
          <li
            className={`transition text-center mx-6 w-10 lg:mx-3 lg:w-20 ${
              activeNav === "#Contacto" ? "lg:rounded-xl lg:bg-cyan-700" : null
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
