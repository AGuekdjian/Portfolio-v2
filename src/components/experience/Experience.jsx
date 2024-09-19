import { motion } from "framer-motion";
import { BriefcaseIcon, ChevronRightIcon } from "lucide-react";

const experiences = [
  {
    date: "Ago 2024 - In progress",
    title: "Aplicación de Gestión Integral.",
    description:
      "Me encuentro desarrollando una aplicación de gestión que ofrece soluciones para la administración de clientes, inventario, empleados y órdenes de servicio. El backend está diseñado con una arquitectura basada en  microservicios, utilizando NestJS, mientras que el frontend está contruido con React. La aplicación se ejecuta en contenedores Docker en AWS EC2, con MongoDB y PostgreSQL como bases de datos. La integración y entrega continua se manejan con GitHub Actions para optimizar el flujo de trabajo.",
    link: "#",
  },
  {
    date: "Oct 2023 - Dic 2023",
    title: "Tech Lead Infrastructure & Front-end Developer",
    description:
      "Proyecto integrador de la carrera de Desarrollo de Software de UTEC, en este proyecto estuve encargado de realizar la infraestructura en AWS y forme parte del desarrollo frontend con React, realizando la autenticación, autorización, enrutado, entre otras funcionalidades.",
    link: "#",
  },
  {
    date: "Ago 2022 - Jul 2023",
    title: "Frontend Developer Freelance en AmChamAr",
    description:
      "Desarrollé varias aplicaciones web, utilizando tecnologías como React, CSS, entre otras. Logrando muy buen SEO y rendimiento.",
  },
  {
    date: "May 2024",
    title: "Backend de E-commerce con NestJS (Proyecto personal)",
    description:
      "Desarrollé un backend de e-commerce utilizando NestJS, implementando una arquitectura basada en microservicios y orquestando la aplicación con Docker.",
  },
];

export default function Experience() {
  return (
    <section
      id="Experiencia"
      className="px-8 min-h-screen sm:relative sm:top-36 pt-28"
    >
      <div className="max-w-xl mx-auto lg:max-w-4xl xl:max-w-6xl">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex gap-x-3 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BriefcaseIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          Experiencia Laboral
        </motion.h2>
        <ol className="relative border-s border-neutral-700 space-y-8 sm:space-y-12">
          {experiences.map((experience, index) => (
            <motion.li
              key={index}
              className="ms-4 sm:ms-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {experience.date}
              </time>
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 mb-2 sm:mb-3">
                {experience.title}
              </h3>
              <p className="mb-4 text-sm sm:text-base font-normal text-gray-400">
                {experience.description}
              </p>
              {/* {experience.link && (
                <a
                  href={experience.link}
                  className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-cyan-500 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:text-cyan-400 focus:z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                >
                  Saber más
                  <ChevronRightIcon className="w-4 h-4 ms-2" />
                </a>
              )} */}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
