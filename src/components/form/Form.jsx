import React from 'react'
import { useAppContext } from '../../hooks/useAppContext'

export default function Form({ changed, sendMessage }) {
    const {state} = useAppContext()
    return (
        <form onSubmit={sendMessage} className='m-4 flex flex-col px-6 py-4 backdrop-blur-sm rounded-3xl border border-sky-600'>
            <section className=''>
                <input className='w-full border-b-2 border-b-sky-600 p-4 m-1 bg-transparent' placeholder='Nombre Completo...' type="text" name='fullname' onChange={changed} />
            </section>
            <section>
                <input className='w-full border-b-2 border-b-sky-600 p-4 m-1 bg-transparent' placeholder='Correo Electronico...' type="text" name='email' onChange={changed} />
            </section>
            <section>
                <textarea className='w-full border-b-2 border-b-sky-600 p-4 m-1 bg-transparent resize-none' placeholder='Mensaje...' name="message" onChange={changed}/>
            </section>
            <button className={`mt-2 mx-4 px-6 py-2 bg-sky-600 font-bold text-gray-800 rounded-xl duration-300 ${state.theme ? "bg-teal-600 dwn-btn-light" : "bg-sky-600 dwn-btn-dark"}`}>Enviar</button>
        </form>
    )
}
