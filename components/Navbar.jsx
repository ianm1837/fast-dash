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
          <Link href="/" className="btn btn-primary btn-outline mr-3">Apply to Homepage</Link>
          <SaveConfigButton />
        </div>
      ):(
        <Link href="/edit" className="btn btn-primary">edit</Link>
      )}
      
    </div>
  )
}

export default Navbar
