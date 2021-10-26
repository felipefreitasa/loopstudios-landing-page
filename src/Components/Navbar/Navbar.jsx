import React from 'react'
import './Navbar.scss'
import Logo from '../../Assets/Icons/logo.svg'

const Navbar = () => {
   return (
      <nav className="navbar">
         <img src={Logo} alt="Loopstudios" />
         <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
         </ul>
      </nav>
   )
}

export default Navbar
