import React from "react";
import CV from "../../assets/resources/CV_Anthony_Guekdjian.pdf";

export const Social = () => {
  const info = [
    {
      name: "GitHub",
      url: "https://github.com/AGuekdjian",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anthony-guekdjian/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "anthonyguekdjian@gmail.com",
      url: "mailto:anthonyguekdjian@gmail.com",
      icon: "fa-regular fa-envelope",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+598098452454",
      icon: "fa-brands fa-whatsapp",
    },
  ];
  return (
    <section className="mt-3 ml-1 flex w-full">
      <nav className="flex flex-wrap gap-y-2 justify-center">
        {info.map((social, index) => {
          return (
            <a
              key={index}
              className="mx-1.5 rounded-full border border-white/10 flex justify-center items-center gap-x-3 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 hover:cursor-pointer transition"
              href={social.url}
              target="_blank"
            >
              <i className={`${social.icon} text-2xl`}></i>
              <span className="text-sm">{social.name}</span>
            </a>
          );
        })}
        <a
          className="mx-1.5 rounded-full border border-white/10 flex justify-center items-center gap-x-3 px-4 bg-white/5 hover:scale-110 hover:bg-white/10 hover:cursor-pointer transition"
          download
          href={CV}
          target="_blank"
        >
          <i className={`fa-solid fa-briefcase text-2xl`}></i>
          <span className="text-sm">Resume</span>
        </a>
      </nav>
    </section>
  );
};
