import { useAppContext } from '../../hooks/useAppContext'

export default function Footer() {
    const { state } = useAppContext()

    const fechaActual = new Date();
    const yearNow = fechaActual.getFullYear();

    return (
        <footer className={`font-bold flex justify-around h-16 items-center footer ${state.theme ? '' : 'dark-footer'}`}>
            <p>&copy; {`${yearNow} Copyright: Anthony Guekdjian`}</p>
        </footer>
    )
}
