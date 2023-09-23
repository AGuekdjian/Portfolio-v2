import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useAppContext } from '../../hooks/useAppContext'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from '../../components/form/Form'
import { Global } from '../../helpers/Global';

export default function Contact() {
    const { state } = useAppContext()
    const { changed, form } = useForm({})

    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            let dataEmail = {
                service_id: `${Global.credentialsEmailJS.SERVICE_ID}`,
                template_id: `${Global.credentialsEmailJS.TEMPLATE_ID}`,
                user_id: `${Global.credentialsEmailJS.USER_ID}`,
                template_params: { ...form }
            }

            const res = await fetch(`${Global.credentialsEmailJS.API_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataEmail)
            })

            if (res.status == Global.codeStatus.OK) {
                msgSuccess(`${Global.messageStatus.SUCCESS}`)
            } else {
                msgError(`${Global.messageStatus.ERROR}`)
            }

        } catch (error) {
            throw new Error(`${Global.messageStatus.FATAL_ERROR}\n`, error)
        }
    }

    const msgSuccess = (msg) => {
        toast.success(msg, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: `${state.theme ? Global.themeType.LIGHT : Global.themeType.DARK}`,
        })
    }

    const msgError = (msg) => {
        toast.error(msg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: `${state.theme ? Global.themeType.LIGHT : Global.themeType.DARK}`,
        })
    }

    return (
        <main>
            <h5></h5>
            <h2></h2>
            <section>
                <ToastContainer />
                <section>
                    <div>LinkedIn</div>
                    <div>Mail</div>
                    <div>Whatsapp</div>
                </section>
                <section>
                    <Form changed={changed} sendMessage={sendMessage} />
                </section>
            </section>
        </main>
    )
}
