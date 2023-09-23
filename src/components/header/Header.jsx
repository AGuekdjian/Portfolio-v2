import { NavLink } from 'react-router-dom'
import { useAppContext } from '../../hooks/useAppContext'
import { Global } from '../../helpers/Global'
import { LuLightbulbOff, LuLightbulb } from 'react-icons/lu'

export default function Header() {
    const { state, dispatch } = useAppContext()

    const changeTheme = () => {
        dispatch({ type: Global.actionType[0].TOGGLE_THEME })
        localStorage.theme = JSON.stringify(!state.theme)
    }

    return (
        <header className={`duration-300 font-bold flex justify-around h-16 items-center header ${state.theme ? '' : 'dark-header'}`}>
            <NavLink to='/' className={`logo mx-2 duration-300 ${state.theme ? "text-logo-light" : "text-logo-dark"}`}>Portfolio</NavLink>
            <nav className='flex'>
                <ul className='flex mr-2 pr-2 menu'>
                    {Global.navbarInfo.map(({ url, name }, index) => {
                        return (
                            <li key={index} className={`mx-2 duration-300 ${state.theme ? "text-nav-light" : "text-nav-dark"}`}><NavLink to={url}>{name}</NavLink></li>
                        )
                    })}
                </ul>
                <button onClick={changeTheme} className='ml-2'>{state.theme ? <LuLightbulbOff className='text-2xl rotate-180' /> : <LuLightbulb className='text-2xl rotate-180' />}</button>
            </nav>
        </header>
    )
}
