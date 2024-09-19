import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Linkedin, Mail, FileText } from "lucide-react";
import ME from "../../assets/images/me-about.jpeg";

export default function Home() {
  const title = useRef(null);

  useEffect(() => {
    const titleTyped = new Typed(title.current, {
      strings: [
        "Software Developer.",
        "Front-end Developer.",
        "Back-end Developer.",
        "Full Stack Developer.",
      ],
      typeSpeed: 100,
      backSpeed: 40,
      backDelay: 1400,
      startDelay: 200,
      loop: true,
    });

    return () => {
      titleTyped.destroy();
    };
  }, []);

  return (
    <section
      id="Home"
      className="px-8 min-h-screen mt-12 sm:relative sm:top-36"
    >
      <div className="max-w-xl mx-auto lg:max-w-4xl xl:max-w-6xl">
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-cyan-500 hover:scale-105 transition-transform duration-300"
            src={ME}
            alt="Anthony Guekdjian"
          />
          <div className="text-center sm:text-left sm:mt-6 sm:ml-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              Hey, Soy Anthony Guekdjian
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 mb-4">
              <span ref={title}></span>
            </p>
          </div>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Soy Desarrollador de Software, me formé en UTEC (Universidad
          Tecnológica de Uruguay) junto a Digital House. Me gusta programar para
          solucionar diversos problemas, siempre buscando optimizar y mejorar
          procesos. Actualmente, estoy ampliando mis habilidades al aprender
          sobre DevOps Engineer y Cloud Computing. Con una mentalidad inquieta y
          curiosa, estoy constantemente aprendiendo y actualizándome en las
          últimas tendencias del sector.
          <br />
          <br />
          Estoy abierto a nuevas oportunidades laborales.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/Anthony_Guekdjian_CV.pdf"
            download
            className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300"
          >
            <FileText className="w-5 h-5 mr-2" />
            Descargar CV
          </a>
          <a
            href="mailto:anthonyguekdjian@gmail.com"
            target="_blank"
            className="flex items-center px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contactar
          </a>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/AGuekdjian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aguekdjian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:anthonyguekdjian@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
