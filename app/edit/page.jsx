'use client'
import React, {useEffect} from "react";
import { Editor } from "@monaco-editor/react";
const fs = require('fs')
const path = require('path')

export default function Edit() {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor) {
      editorRef.current = editor;
    }

    useEffect(() => {
      console.log('dirname: ', __dirname)
    }, [])
    
    return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
