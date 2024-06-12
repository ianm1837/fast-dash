'use client'
import { createContext, useState } from "react";

export const GlobalContext = createContext()

export default function GlobalContextProvider({children}){
    const [ editorData, setEditorData ] = useState('')

    return(
        <GlobalContext.Provider value={{setEditorData, editorData}}>
            {children}
        </GlobalContext.Provider>
    )
}