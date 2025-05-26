import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
  <>
    <nav className= "navBar">
      <div className="Titre">Mon Portfolio</div>
      <ul>
        <li>
          <Link to="/Interest">Interest</Link>
        </li>
        <li> 
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Projet">Projet</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
      </ul>
     
    </nav>
      </>
  )
}

export default NavBar
