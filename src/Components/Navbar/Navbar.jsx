import React from 'react'
import './Navbar.css'
import { FaBlog } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          <h2> <FaBlog /> BLOGWISE</h2>
        </div>
        <div className="link">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Advert</li>
          </ul>
        </div>
        <div className="subscribtion">
          <button>Subscribe</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar