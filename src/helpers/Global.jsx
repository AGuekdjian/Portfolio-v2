import AmCham from "../assets/images/Amcham.png";
import Eventos from "../assets/images/Website-eventos.png";
import Diversidad from "../assets/images/Website-diversidad.png";
import Sponsors from "../assets/images/Website-sponsors.png";
import { Tags } from "./Tags";

export const Global = {
  actionType: {
    TOGGLE_THEME: "TOGGLE_THEME",
  },
  themeType: {
    LIGHT: "light",
    DARK: "dark",
  },
  codeStatus: {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZATION: 403,
  },
  messageStatus: {
    SUCCESS: "Mensaje enviado!!!",
    ERROR: "El mensaje no se envio, ingrese bien los datos!!!",
    FATAL_ERROR: "Hubo un error al tratar de enviar el mensaje!!!",
  },
  credentialsEmailJS: {
    API_URL: "https://api.emailjs.com/api/v1.0/email/send",
    SERVICE_ID: "service_9l2k5kt",
    TEMPLATE_ID: "template_o6qnfdw",
    USER_ID: "S7jOMpxUgwl0U46Fd",
  },
  navbarInfo: [
    {
      url: "/home",
      name: "Inicio",
    },
    {
      url: "/about",
      name: "Sobre Mi",
    },
    {
      url: "/projects&achievements",
      name: "Proyectos",
    },
    {
      url: "/contact",
      name: "Contacto",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Sitio web de AmCham Argentina",
      description: "AmCham Argentina",
      img: AmCham,
      url: "https://www.onboarding.amcham.com.ar/",
      tags: [Tags.REACT, Tags.TAILWIND],
      github: "https://github.com/AGuekdjian",
    },
    {
      id: 2,
      name: "Sitio web de AmCham Connect",
      description: "AmCham Connect",
      img: Eventos,
      url: "https://www.eventos.amcham.com.ar/",
      tags: [Tags.REACT, Tags.TAILWIND],
      github: "https://github.com/AGuekdjian",
    },
    {
      id: 3,
      name: "Sitio web de AmCham Diversidad",
      description: "AmCham Diversidad",
      img: Diversidad,
      url: "https://www.diversidad.amcham.com.ar/",
      tags: [Tags.REACT, Tags.TAILWIND],
      github: "https://github.com/AGuekdjian",
    },
    {
      id: 4,
      name: "Sitio web de AmCham Sponsors",
      description: "AmCham Sponsors",
      img: Sponsors,
      url: "https://www.sponsorship.amcham.com.ar/",
      tags: [Tags.REACT, Tags.TAILWIND],
      github: "https://github.com/AGuekdjian",
    },
  ],
};
