import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCapIcon,
  CalendarIcon,
  MapPinIcon,
  ExternalLinkIcon,
  ChevronDownIcon,
  X,
} from "lucide-react";
import { Tags } from "../../helpers/Tags";
import DSUTEC from "../../assets/certified/DSUTEC.jpeg";

const educations = [
  {
    date: "2024 - In Progress",
    title:
      "Data Science and Machine Learning: Making Data-Driven Decisions Program",
    institution: "MIT (Massachusetts Institute of Technology)",
    description:
      "El Programa de Data Science and Machine Learning: Making Data-Driven Decisions Program, elaborado por profesores del MIT, proporciona las habilidades esenciales para aplicar técnicas de ciencia de datos para tomar decisiones informadas. Diseñado para profesionales de datos que buscan avanzar en sus carreras y abordar problemas complejos, este certificado cubre tecnologías clave como el aprendizaje automático, el aprendizaje profundo, el análisis de redes, los sistemas de recomendación, las redes neuronales gráficas, las series temporales y la IA generativa.",
    location: "Online",
    skills: [Tags.PY, Tags.ML, Tags.DS, Tags.DL, Tags.NN, Tags.AI],
    link: "https://idss-gl.mit.edu/mit-idss-data-science-machine-learning-online-program",
    featured: true,
  },
  {
    date: "2024 - In Progress",
    title: "Especialización en Desarrollo Back-End",
    institution: "UTEC (Universidad Tecnológica de Uruguay)",
    description:
      "Programa avanzado en desarrollo back-end, enfocado en sistemas robustos y escalables. Cubre tecnologías cloud, DevOps, microservicios, Go, Java, Spring Cloud, Docker, Kubernetes, CI/CD, Terraform, RabbitMQ y Keycloak. Formación integral para aplicaciones empresariales modernas y distribuidas.",
    location: "Online",
    skills: [
      Tags.AWS,
      Tags.EUREKA,
      Tags.RABBITMQ,
      Tags.KEYCLOAK,
      Tags.CI_CD,
      Tags.TERRAFORM,
      Tags.DOCKER,
      Tags.KUBERNETES,
      Tags.GO,
      Tags.JAVA,
      Tags.SPRING_CLOUD,
    ],
    link: "https://utec.edu.uy/",
    featured: true,
  },
  {
    date: "2022 - 2023",
    title: "Desarrollador de Software",
    institution: "UTEC (Universidad Tecnológica de Uruguay)",
    description:
      "Formación integral en desarrollo de software full stack, con énfasis en metodologías ágiles, diseño de experiencia de usuario, programación front-end y back-end, bases de datos, infraestructura IT y habilidades blandas esenciales para la industria tecnológica.",
    location: "Online",
    skills: [
      Tags.SCRUM_KANBAN,
      Tags.AWS,
      Tags.CI_CD,
      Tags.BASH,
      Tags.TERRAFORM,
      Tags.ANSIBLE,
      Tags.RABBITMQ,
      Tags.KEYCLOAK,
      Tags.EUREKA,
      Tags.HTML_CSS,
      Tags.JAVASCRIPT,
      Tags.NODE_JS,
      Tags.GO,
      Tags.SPRING_CLOUD,
      Tags.JAVA,
      Tags.REACT,
      Tags.MYSQL,
      Tags.MONGODB,
      Tags.DOCKER,
      Tags.KUBERNETES,
      Tags.GIT,
    ],
    link: "https://utec.edu.uy/",
    certificate: "/ProfessionalDeveloper.pdf",
    featured: true,
  },
  {
    date: "2022 - 2024",
    title: "Certified Tech Developer",
    institution: "Digital House",
    description:
      "Programa intensivo enfocado en programación front-end y back-end con tecnologías web modernas, bases de datos, infraestructura IT y metodologías ágiles.",
    location: "Online",
    skills: [
      Tags.SCRUM_KANBAN,
      Tags.BASH,
      Tags.TERRAFORM,
      Tags.ANSIBLE,
      Tags.AWS,
      Tags.CI_CD,
      Tags.HTML_CSS,
      Tags.JAVASCRIPT,
      Tags.NODE_JS,
      Tags.JAVA,
      Tags.REACT,
      Tags.MYSQL,
      Tags.MONGODB,
      Tags.DOCKER,

      Tags.GIT,
    ],
    link: "https://www.digitalhouse.com/productos/programacion/professional-developer?_gl=1*2ijct6*_up*MQ..*_ga*NDQwMDc2NjQwLjE3MjY3MDU0NjU.*_ga_RVZRJ1CC9V*MTcyNjcwNTQ2NC4xLjEuMTcyNjcwNTUwMS4wLjAuMA..",
    certificate: DSUTEC,
    featured: true,
  },
  // Agrega más formaciones aquí...
];

export default function AcademicFormation() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const featuredEducations = educations.filter((edu) => edu.featured);
  const displayEducations = showAll ? educations : featuredEducations;

  return (
    <section
      id="Formacion"
      className="px-8 min-h-screen sm:relative sm:top-36 pt-28"
    >
      <div className="max-w-xl mx-auto lg:max-w-4xl xl:max-w-6xl">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 flex gap-x-3 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GraduationCapIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          Formación Académica
        </motion.h2>
        <ol className="relative border-s border-neutral-700 space-y-12 sm:space-y-16">
          <AnimatePresence>
            {displayEducations.map((education, index) => (
              <motion.li
                key={education.title}
                className="ms-4 sm:ms-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute w-3 h-3 bg-cyan-500 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-2 text-sm text-gray-400">
                  <span className="flex items-center mb-1 sm:mb-0 sm:mr-4">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {education.date}
                  </span>
                  <span className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {education.location}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 mb-1">
                  {education.title}
                </h3>
                <h4 className="text-md sm:text-lg font-medium text-cyan-400 mb-2">
                  {education.institution}
                </h4>
                <p className="mb-4 text-sm sm:text-base font-normal text-gray-400">
                  {education.description}
                </p>
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-white mb-2">
                    Habilidades adquiridas:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {education.skills.map((skill, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                        >
                          {skill.icon}
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.link && (
                    <a
                      href={education.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-cyan-500 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:text-cyan-400 focus:z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                    >
                      Ver Institución
                      <ExternalLinkIcon className="w-4 h-4 ms-2" />
                    </a>
                  )}
                  {education.certificate && (
                    <button
                      onClick={() =>
                        setSelectedCertificate(education.certificate)
                      }
                      className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium text-cyan-500 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:text-cyan-400 focus:z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
                    >
                      Ver Certificado
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
                        className="lucide lucide-shield-check"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </button>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
        {educations.length > featuredEducations.length && (
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 inline-flex items-center px-4 py-2 text-sm font-medium text-cyan-500 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 hover:text-cyan-400 focus:z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {showAll ? "Mostrar menos" : "Ver todas las formaciones"}
            <ChevronDownIcon
              className={`w-4 h-4 ms-2 transition-transform ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </motion.button>
        )}
      </div>
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Certificado</h3>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe
              src={selectedCertificate}
              className="w-full h-[70vh]"
              title="Certificado"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
