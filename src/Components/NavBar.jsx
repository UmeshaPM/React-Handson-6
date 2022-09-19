import React from 'react'
import { Link } from 'react-router-dom';
import './Compo.css'

const NavBar = () => {
  return (
    <nav>
      <div className='parent-div'>
        <Link to='/home' className='nav-link'>Home</Link>
        <Link to='/student' className='nav-link'>Students</Link>
        <Link to='/contact' className='nav-link'>Contacts</Link>
      </div>
    </nav>
  )
}
export default NavBar;