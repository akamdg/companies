  
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Oldest Companies</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>Statistics</NavLink></li>
          <li><NavLink to='/Post1300'>Post-1300</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default withRouter(Navbar)