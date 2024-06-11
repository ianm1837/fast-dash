import Link from "next/link"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link href="/" className="btn btn-ghost text-xl">fast dash</Link>
      <Link href="/edit" className="btn btn-primary">edit</Link>
    </div>
  )
}

export default Navbar
