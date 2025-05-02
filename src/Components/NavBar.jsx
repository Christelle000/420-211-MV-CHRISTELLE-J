import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <Link to="/Interest">Interest</Link>
      <Link to="/Porfolio">Porfolio</Link>
      <Link to="/Project">Project</Link>
      <Link to="/Interest">Interest</Link>
    </div>
  )
}

export default NavBar
