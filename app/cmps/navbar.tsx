
import { NavLink } from "@remix-run/react"

const Navbar = () => {
  return <header className="flex space-between align-center">
    <h3>LOGO</h3>
    <nav className="flex space-between align-center">
        <NavLink to={"/"}><span>Home</span></NavLink>
        <NavLink to={"/car"}><span>Car</span></NavLink>
        <NavLink to={"/about"}><span>About</span></NavLink>
    </nav>
  </header>
}

export default Navbar