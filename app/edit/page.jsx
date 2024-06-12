'use client'
import React, {useEffect, useState, useRef, useContext} from "react";
import { Editor } from "@monaco-editor/react";
import { GlobalContext } from "@/components/GlobalContextProvider";

export default function Edit() {
    const editorRef = useRef(null);
    const [readData, setReadData] = useState('')

    const { setEditorData } = useContext(GlobalContext)

    function handleEditorDidMount(editor) {
      editorRef.current = editor;
    }

    function handleOnChange(value){
      // console.log('editor value: ', value)
      setEditorData(value)
    }

    useEffect(() => {
      async function getData(){
        const data = await fetch('/config')
        const jsonData = await data.json()
        setReadData(JSON.stringify(jsonData, null, 2))
      }
      getData()
    }, [])
    
    return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="json"
        onMount={handleEditorDidMount}
        theme="vs-dark"
        defaultValue={readData}
        onChange={handleOnChange}
        options={
          {
            minimap: {
              enabled: false
            },
            fontSize: 15,
            contextmenu: false,
          }
        }
      />
    </div>
  );
}
