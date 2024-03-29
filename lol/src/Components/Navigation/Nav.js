import React from 'react'
import "../../SCSS/NavCSS/_nav.scss"
import "../../SCSS/HeaderCSS/_header.scss"
import { Outlet, Link } from 'react-router-dom';
const Nav = ({ setMenu }) => {
  return (
    <div>
      <div className="navigation ">
        <ul className="nav-list">
          <li className="nav-link"><Link to='/Home' className='navText'>Home</Link></li>
          <li className="nav-link"><Link to='/Manage' className='navText'>My Account</Link></li>
          <li className="nav-link"><Link to='/About' className='navText'>About</Link></li>
          <li className="nav-link"><Link to='/Contact' className='navText'>Contact Us</Link></li>
          <li className="nav-link"><Link to='/' className='navText'>LogOut</Link></li>
        </ul>
        <Outlet />
        <div className='closeTab'><i onClick={() => setMenu(false)} class="fa-solid fa-xmark"></i></div>
      </div>
    </div>
  )
}

export default Nav
