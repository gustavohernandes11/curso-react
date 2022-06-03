import React, { useReducer } from 'react'
import { data } from './data.js'
import { reducer } from './reducers.js'
import { GlobalContext } from './context.js'



export const GlobalContextProvider = ({ children }) => {
    const [globalState, globalDispatch] = useReducer(reducer, data)

    return (
        <GlobalContext.Provider value={{ globalState, globalDispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}