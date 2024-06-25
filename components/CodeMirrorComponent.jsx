'use client'
import { getConfigData } from '@/app/hooks/queries/configData';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { lintGutter, linter } from '@codemirror/lint';
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from '@uiw/react-codemirror';

import { useEffect, useState } from 'react';



export default function CodeMirrorComponent({initialValue}) {
  const [value, setValue] = useState(initialValue)

  
  useEffect(() => {
    async function fetchData(){
      setValue(JSON.stringify(await getConfigData(), null, 2))
    }
    fetchData()
  }, [])

  function handleChange(val, viewUpdate){
    console.log('val:', val);
    console.log('viewUpdate: ', viewUpdate)
    setValue(val);
  }

  return (
    <CodeMirror 
      theme={vscodeDark}
      className='flex-1 flex [&>*]:flex-1 overflow-scroll'
      value={value} 
      onChange={handleChange} 
      extensions={[json(), lintGutter(), linter(jsonParseLinter())]} 
    />
  )
}
