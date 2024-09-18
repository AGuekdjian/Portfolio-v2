import React, { useState } from "react";
import { Global } from "../../helpers/Global";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLinkIcon, Github } from "lucide-react";

export const ProjectsAndAchievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { projects } = Global;

  return (
    <section
      className="min-h-screen text-white py-28 px-6 lg:px-0"
      id="Proyectos"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 flex gap-x-3 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FolderGit2 className="w-8 h-8" />
          Mis Proyectos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => {
                    console.log(tech);
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
      </div>
    </section>
  );
};
