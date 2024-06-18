'use client'
import React, {useEffect, useState, useRef, useContext} from "react";
// import { Editor } from "@monaco-editor/react";
// import { GlobalContext } from "@/components/GlobalContextProvider";
import { QueryClient } from "@tanstack/react-query";
import useFetchConfig from "../hooks/queries/useFetchConfig";
import * as monaco from 'monaco-editor'

export default function Edit() {
    const editorRef = useRef(null);
    const editorContainerRef = useRef(null)
    const { data, isLoading, isError } = useFetchConfig()

    useEffect(() => {
      async function getData(){
        // const data = await fetch('/config')
        // const jsonData = await data.json()
        // setReadData(JSON.stringify(jsonData, null, 2))
      }
      // getData()

      console.log("self: ", self)

      self.MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
          if (label === 'json') {
            return './json.worker.bundle.js';
          }
          if (label === 'css' || label === 'scss' || label === 'less') {
            return './css.worker.bundle.js';
          }
          if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return './html.worker.bundle.js';
          }
          if (label === 'typescript' || label === 'javascript') {
            return './ts.worker.bundle.js';
          }
          return './editor.worker.bundle.js';
        }
      };

      const editor = monaco.editor.create(editorContainerRef.current, {
        value: '',
        language: 'json',
        theme: "vs-dark",
        minimap: {
          enabled: false
        },
        fontSize: 15,
        contextmenu: false,
      })
    }, [])
    
    return (
    <div className="w-screen h-screen">
      <div ref={editorContainerRef} className="w-full h-full"/>
      {/* <Editor
        height="90vh"
        defaultLanguage="json"
        onMount={handleEditorDidMount}
        theme="vs-dark"
        defaultValue="test data"
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
      /> */}
    </div>
  );
}
