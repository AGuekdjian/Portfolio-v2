import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../../hooks/useAppContext'
import { Global } from '../../helpers/Global'
import { LuLightbulbOff, LuLightbulb } from 'react-icons/lu'
import './Header.css'

export default function Header() {
    const { state, dispatch } = useAppContext()

    const changeTheme = () => {
        dispatch({ type: Global.actionType[0].TOGGLE_THEME })
        localStorage.theme = JSON.stringify(!state.theme)
    }

    return (
        <header className={`font-bold flex justify-around h-16 items-center header ${state.theme ? '' : 'dark-header'}`}>
            <NavLink to='/' className={`logo mx-2`}>Portfolio</NavLink>
            <nav className='flex'>
                <ul className='flex mr-2 pr-2 menu'>
                    <li className={`mx-2`}><NavLink to='/home'>Inicio</NavLink></li>
                    <li className={`mx-2`}><NavLink to='/about'>Sobre Mi</NavLink></li>
                    <li className={`mx-2`}><NavLink to='/projects&achievements'>Proyectos</NavLink></li>
                    <li className={`mx-2`}><NavLink to='/contact'>Contacto</NavLink></li>
                </ul>
                <button onClick={changeTheme} className='ml-2'>{state.theme ? <LuLightbulbOff /> : <LuLightbulb />}</button>
            </nav>
        </header>
    )
}
