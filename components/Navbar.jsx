'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import SaveConfigButton from "./SaveConfigButton"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link href="/" className="btn btn-ghost text-xl">fast dash</Link>
      {pathname == '/edit' ? (
        <div>
          <a href="/" className="btn btn-primary btn-outline mr-3">Apply to Homepage</a>
          <SaveConfigButton />
        </div>
      ):(
        <a href="/edit" className="btn btn-primary">edit</a>
      )}
      
    </div>
  )
}

export default Navbar
