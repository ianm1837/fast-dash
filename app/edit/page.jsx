'use client'
import React, {useEffect, useState, useRef, useContext} from "react";
import { Editor } from "@monaco-editor/react";
import { GlobalContext } from "@/components/GlobalContextProvider";

export default function Edit() {
    const editorRef = useRef(null);

    const { setEditorDataChanged, editorData, setJsonError } = useContext(GlobalContext)

    function handleEditorDidMount(editor) {
      editorRef.current = editor;
    }

    function handleOnChange(value){
      //makes save button appear in navbar
      setEditorDataChanged(true)
    }

    function handleOnValidate(e){
      setEditorDataChanged(false)
    }
    
    return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="json"
        onMount={() => handleEditorDidMount()}
        theme="vs-dark"
        defaultValue={editorData}
        onChange={() => handleOnChange()}
        onValidate={() => handleOnValidate()}
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
