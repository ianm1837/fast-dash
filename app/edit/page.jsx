'use client'
import React, {useEffect, useState, useRef} from "react";
import { Editor } from "@monaco-editor/react";

export default function Edit() {
    const editorRef = useRef(null);
    const [readData, setReadData] = useState('')

    function handleEditorDidMount(editor) {
      editorRef.current = editor;
    }

    useEffect(() => {
      async function getData(){
        const data = await fetch('/config')
        const jsonData = await data.json()
        console.log('data: ', jsonData)
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
