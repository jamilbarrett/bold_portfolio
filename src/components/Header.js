import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
{/* Navigation Links to guide visitor to different sections */}
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/works">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </nav>
    </header>
  )
}

export default Header