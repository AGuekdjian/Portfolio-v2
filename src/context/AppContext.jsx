import React, { createContext, useReducer } from 'react';
import { Global } from '../helpers/Global'

export const AppContext = createContext();

export const initialState = { theme: !!localStorage.theme }

export const AppProvider = ({ children }) => {
    // useEffect(() => {

    // }, [])

    const reducer = (state, action) => {
        switch (action.type) {
            case Global.actionType.TOGGLE_THEME:
                return { ...state, theme: !state.theme }
            default:
                return
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};