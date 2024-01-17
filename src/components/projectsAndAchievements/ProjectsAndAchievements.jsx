import React from "react";
import { Global } from "../../helpers/Global";

export const ProjectsAndAchievements = () => {
  const { projects } = Global;
  return (
    <section className="my-28" id="Experiencia">
      <h2 className="text-2xl font-semibold mb-6 flex gap-x-2 items-center">
        <i className="fa-solid fa-folder-open"></i>
        Proyectos
      </h2>
      <div className="grid grid-cols-2 gap-x-1 gap-y-4 items-center">
        {projects.map(({ id, name, description, img, url, tags, github }) => {
          return (
            <article key={id} className="my-3">
              <h3 className="text-xl font-semibold text-yellow-200 mb-2">
                {name}
              </h3>
              <p className="text-lg mb-4 text-pretty">{description}</p>
              <ul className="flex gap-x-2 flex-row">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <div
                      className={` rounded-full border border-white/10 flex justify-center items-center gap-x-3 px-2 py-1 bg-white/5 hover:scale-110 hover:bg-white/10 hover:cursor-pointer transition ${tag.color}`}
                    >
                      <span>{tag.icon}</span>
                      {tag.name}
                    </div>
                  </li>
                ))}
              </ul>
              <img
                className="rounded shadow-2xl shadow-white/10 w-80 mt-4"
                src={img}
                alt={`Captura de pantalla del proyecto ${img}`}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
