import React from 'react'
import { useAppContext } from '../../hooks/useAppContext'
import ME from '../../assets/images/me-about.png'

export default function About() {
    const { state } = useAppContext()
    return (
        <main>
            <section className='flex flex-col items-center mt-12'>
                <h5>Conozca</h5>
                <h2 className={`font-extrabold text-2xl ${state.theme ? "text-teal-600" : "text-sky-600"}`}>Sobre Mi</h2>
                <article className='flex flex-col mt-14 text-center about-container'>
                    <div className={` w-64 h-58 place-items-center rounded-tl-full rounded-tr-full overflow-hidden backdrop-blur-sm m-0 mx-auto  ${state.theme ? "img-container-light" : "img-container-dark"}`}>
                        <img src={ME} alt="Photo of Anthony" className='w-80 h-58' />
                    </div>
                    <p className='my-6 w-9/12 mx-auto'>
                        Soy un apasionado Desarrollador Full Stack enfocado en el Desarrollo
                        Web y Cloud Computing.
                        <br />
                        Amante de tecnologías modernas y el trabajo en equipo. Comprometido
                        con entregar productos de calidad, con código limpio y sostenible.
                        Siempre aprendiendo, adaptable y motivado por alcanzar nuevos
                        logros.
                        <br />
                        Me gusta trabajar en equipos y proyectos diversos que me permitan
                        estar continuamente aprendiendo sobre diversas tecnologías, métodos
                        y soluciones.
                        <br />
                        Actualmente soy estudiante de la carrera <a className={`font-bold underline ${state.theme ? "text-gray-950" : "text-gray-300"}`} href='https://www.digitalhouse.com/productos/programacion/certified-tech-developer' target='_blank'>Certified Tech Developer</a>
                        (Certificado en Desarrollo de Software) de Digital House y UTEC
                        (<a className={`font-bold underline ${state.theme ? "text-gray-950" : "text-gray-300"}`} href='https://utec.edu.uy/es/' target='_blank'>Universidad Técnologica del Uruguay</a>).
                        <br />
                        Mi objetivo actual es desarrollar una sólida competencia en DevOps,
                        Infraestructura como Código (IaC) y
                        Cloud Computing para avanzar en mi carrera en tecnología de la información y
                        mejorar la eficiencia en el despliegue y gestión de aplicaciones.
                    </p>
                </article>
            </section>
        </main>
    )
}
