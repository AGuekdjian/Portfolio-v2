import React from 'react'

export default function Form({ changed, sendMessage }) {
    return (
        <form onSubmit={sendMessage}>
            <section>
                <label htmlFor="fullname"></label>
                <input type="text" name='fullname' onChange={changed} />
            </section>
            <section>
                <label htmlFor="email"></label>
                <input type="text" name='email' onChange={changed} />
            </section>
            <section>
                <label htmlFor="message"></label>
                <textarea name="message" onChange={changed} />
            </section>
            <button>Enviar</button>
        </form>
    )
}
