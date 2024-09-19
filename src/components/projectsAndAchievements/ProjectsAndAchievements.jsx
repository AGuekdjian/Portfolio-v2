import React, { useState } from "react";
import { Global } from "../../helpers/Global";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLinkIcon } from "lucide-react";

export const ProjectsAndAchievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { projects } = Global;

  return (
    <section
      id="Proyectos"
      className="px-8 min-h-screen sm:relative sm:top-36 pt-28"
    >
      <di>
        <motion.h2
          className="text-3xl font-bold mb-12 flex gap-x-3 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FolderGit2 className="w-8 h-8" />
          Mis Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-video">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-2 rounded-full hover:bg-opacity-80 transition-colors duration-300"
                      aria-label="View live project"
                    >
                      <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black p-2 rounded-full hover:bg-opacity-80 transition-colors duration-300"
                      aria-label="View GitHub repository"
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
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <motion.div
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </di>
    </section>
  );
};
