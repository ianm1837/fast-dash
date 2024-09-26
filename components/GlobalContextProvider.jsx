'use client'
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext()

export default function GlobalContextProvider({children}){
    const [ editorData, setEditorData ] = useState('')
    const [ editorDataChanged, setEditorDataChanged ] = useState(false)
    const [ jsonError, setJsonError ] = useState(false)


    const contextValues = {
        editorData,
        setEditorData,
        editorDataChanged,
        setEditorDataChanged,
        jsonError,
        setJsonError
    }

    //get data on page load
    useEffect(() => {
        async function getData(){
          const data = await fetch('/config')
          const jsonData = await data.json()
          setEditorData(JSON.stringify(jsonData, null, 2))
        }
        getData()
      }, [])

    return(
        <GlobalContext.Provider value={contextValues}>
            {children}
        </GlobalContext.Provider>
    )
}