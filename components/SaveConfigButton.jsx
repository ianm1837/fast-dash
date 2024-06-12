"use client";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "@/components/GlobalContextProvider";
import Link from "next/link";

export default function SaveConfigButton() {
  const { editorData, setEditorData } = useContext(GlobalContext);

  async function handleSaveData() {
    console.log("tried to save");
    setEditorData('')
  }

  useEffect(() => {
    console.log('editorData: ', editorData)
  }, [editorData])

  return (
    <>
      {editorData == '' ? (
        <Link className="btn btn-primary" href="/">
          Exit
        </Link>
      ) : (
        <a className="btn btn-primary" onClick={handleSaveData}>
          Save Config
        </a>
      )}
    </>
  );
}
