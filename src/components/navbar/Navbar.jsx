import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <div id="main">
              <div id="left">
                     <h1>Career <span>Corps</span></h1>
              </div>
              <div id="center">
                     <NavLink to='/wtp'>Career Program</NavLink>
                     <NavLink to='/aboutus'>About Us</NavLink>
                     <NavLink to='/workwithus'>Why Us</NavLink>
                     <NavLink to='/contactus'>Contact</NavLink>
              </div>
              <div id="right">
                     <button id='signup'>Sign Up</button>
                     <button id='registernow'>Register Now</button>

              </div>
              </div>   
    </div>
  )
}

export default Navbar
