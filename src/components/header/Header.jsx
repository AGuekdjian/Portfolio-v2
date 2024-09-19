import React, { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";

export const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  const width = useWindowWidth();

  return (
    <header className="w-80 sm:w-[480px] font-bold lg:font-normal bg-slate-200/10 backdrop-blur-[1px] rounded-full py-4 px-3 sticky top-4 lg:fixed lg:top-7 flex justify-center z-10">
      <nav>
        <ul className="flex">
          <li
            className={`transition text-center w-9 h-9 sm:h-6 mx-2 sm:w-16  sm:mx-0 ${
              activeNav === "#"
                ? "rounded-full sm:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a
              href="#"
              className="relative top-1.5 sm:static"
              onClick={() => setActiveNav("#")}
            >
              {width > 640 ? "Inicio" : <i class="fa-solid fa-house"></i>}
            </a>
          </li>
          <li
            className={`transition text-center w-9 h-9 sm:h-6 sm:w-28 mx-2 sm:mx-0 ${
              activeNav === "#Experiencia"
                ? " rounded-full sm:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a
              href="#Experiencia"
              className="relative top-1.5 sm:static"
              onClick={() => setActiveNav("#Experiencia")}
            >
              {width > 640 ? (
                "Experiencia"
              ) : (
                <i class="fa-solid fa-briefcase"></i>
              )}
            </a>
          </li>
          <li
            className={`transition text-center w-9 h-9 sm:h-6 sm:w-24 mx-2 sm:mx-0 ${
              activeNav === "#Proyectos"
                ? "rounded-full sm:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a
              href="#Proyectos"
              className="relative top-1.5 sm:static"
              onClick={() => setActiveNav("#Proyectos")}
            >
              {width > 640 ? (
                "Proyectos"
              ) : (
                <i class="fa-solid fa-folder-open"></i>
              )}
            </a>
          </li>
          <li
            className={`transition text-center w-9 h-9 sm:h-6 sm:w-24 mx-2 sm:mx-0 ${
              activeNav === "#Formacion"
                ? "rounded-full sm:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a
              href="#Formacion"
              className="relative top-1.5 sm:static"
              onClick={() => setActiveNav("#Formacion")}
            >
              {width > 640 ? (
                "Formación"
              ) : (
                <i class="fa-solid fa-graduation-cap"></i>
              )}
            </a>
          </li>
          <li
            className={`transition text-center w-9 h-9 sm:h-6 sm:w-20 mx-2 sm:mx-0 ${
              activeNav === "#Contacto"
                ? "rounded-full sm:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700"
                : null
            }`}
          >
            <a
              href="#Contacto"
              className="relative top-1.5 sm:static"
              onClick={() => setActiveNav("#Contacto")}
            >
              {width > 640 ? "Contacto" : <i class="fa-solid fa-envelope"></i>}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
