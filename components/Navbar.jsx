'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import SaveConfigButton from "./SaveConfigButton"

const Navbar = () => {
  const pathname = usePathname()

  async function handleSaveConfig(data){
    const res = await fetch("http://localhost:3000/config", {
      method: "POST"  ,
      body: JSON.stringify(data)
    } )
  }

  const testData = { testKey: "testValue" }   
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link href="/" className="btn btn-ghost text-xl">fast dash</Link>
      {pathname == '/edit' ? (
        <div>
          <button onClick={() => handleSaveConfig(testData)}>Save</button>

          <SaveConfigButton />
        </div>
      ):(
        <>
          <a href="/edit" className="btn btn-primary">edit</a>
        </>
      )}  
      
    </div>
  )
}

export default Navbar
