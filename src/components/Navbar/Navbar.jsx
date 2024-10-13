import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='header'>
          <nav>
        <div className="navbar-logo">
            <h1>UpSkill</h1>
        </div>
        <div className="navbar-list">
            <ul>
                <li>Home</li>
                <li>Cours</li>
                <li>Bootcame</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="navbar-button">
            <button className='btn-login'>Login</button>
            <button className='btn-register'>Register</button>
        </div>
    </nav>
    </div>
  
  )
}

export default Navbar