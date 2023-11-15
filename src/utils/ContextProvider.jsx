import { createContext, useContext, useReducer } from "react";

const DataContext = createContext()

export const ContextProvider = ({children, initialState, reducer}) => {

    return (
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    )
}

export const useContextProvider = () => useContext(DataContext)