import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import CV from '../../assets/resources/CV_Anthony_Guekdjian.pdf'
import { useAppContext } from '../../hooks/useAppContext'

export default function Home() {
    const title = useRef(null);
    const { state } = useAppContext()

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
        <main>
            <section className="flex justify-center items-center flex-col relative top-80">
                <h1 className="text-6xl font-semibold">Anthony Guekdjian</h1>
                <div className={`mt-2 ${state.theme ? "text-teal-600" : "text-sky-600"}`}>
                    <span ref={title} />
                </div>
                <a href={CV} download className={`mt-6 mx-4 px-6 py-2 bg-sky-600 font-bold text-gray-800 rounded-xl duration-300 ${state.theme ? "bg-teal-600 dwn-btn-light" : "bg-sky-600 dwn-btn-dark"}`}>Descargar C.V.</a>
            </section>
        </main>
    )
}
