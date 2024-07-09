import React from 'react'
import { NavLink } from "react-router-dom"  // utilisé pour créer des liens de navigation dans une application React.
import "./Navbar.css"


function Navbar() {
  return <nav className='navbar'>
    <NavLink to="/" >
      <div className='navbar__logo'>
        <img src="../LOGO.png" alt="logo" />
      </div>
    </NavLink>
    
    <NavLink to="/" >
      <div>Accueil</div>
    </NavLink>

    <NavLink to="/about">
      <div>A Propos</div>
    </NavLink>
    
  </nav>
}

export default Navbar