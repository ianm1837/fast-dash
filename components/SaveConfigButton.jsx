"use client";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@/components/GlobalContextProvider";
import Link from "next/link";

export default function SaveConfigButton() {
  const { editorData, setEditorData, editorDataChanged, setEditorDataChanged } = useContext(GlobalContext);

  async function handleSaveData() {
    console.log("tried to save");
    setEditorDataChanged(false)
  }

  // useEffect(() => {
  //   console.log('editorData: ', editorData)
  //   const jsonEditorData = editorData
  //   JSON.stringify(jsonEditorData)
  // }, [editorData])

  return (
    <>
      { editorDataChanged == true && 
        <button onClick = { () => handleSaveData() } className = "btn btn-primary btn-outline mr-3">Save</button>
      }
      <Link className="btn btn-primary" href="/">
        Exit
      </Link>
    </>
  );
}
