import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import CV from "../../assets/resources/CV_Anthony_Guekdjian.pdf";
import ME from "../../assets/images/me-about.jpeg";
import { Social } from "../social/Social";

export const Home = () => {
  // const title = useRef(null);

  // useEffect(() => {
  //     const titleTyped = new Typed(title.current, {
  //         strings: [
  //             "Software Developer.",
  //             "Front-end Developer.",
  //             "Back-end Developer.",
  //             "Full Stack Developer.",
  //         ],
  //         typeSpeed: 100,
  //         backSpeed: 40,
  //         backDelay: 1400,
  //         startDelay: 200,
  //         loop: true,
  //     });

  //     return () => {
  //         titleTyped.destroy();
  //     };
  // }, []);

  return (
    <section className="w-screen mt-14 lg:mt-48 px-6 lg:w-[1000px]" id="#">
      <div className="flex items-center w-fit">
        <img
          className="w-13 h-12 lg:w-14 lg:h-14 rounded-full hover:scale-125 hover:cursor-pointer transition"
          src={ME}
        />
        <h1 className="text-xl lg:text-3xl font-bold lg:mt-4 ml-4">
          Hey, Soy Anthony Guekdjian
        </h1>
      </div>
      <p className="text-md lg:text-lg mt-4 lg:mt-1 text-balance">
        Soy Desarrollador de Software, me forme en UTEC (Universidad Tecnológica
        de Uruguay) junto a Digital House. Me gusta programar para solucionar
        diversos problemas, siempre buscando optimizar y mejorar procesos.
        Actualmente, estoy ampliando mis habilidades al aprender sobre DevOps
        Engineer y Cloud Computing. Con una mentalidad inquieta y curiosa, estoy
        constantemente aprendiendo y actualizándome en las últimas tendencias
        del sector.
        <br /> Estoy abierto a nuevas oportunidades laborales.
      </p>
      <Social />
    </section>
  );
};
