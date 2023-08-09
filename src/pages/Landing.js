import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h3>I am Jamil</h3>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>




      </nav>
    </header>
  )
}

export default Header