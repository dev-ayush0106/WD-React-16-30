import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1>Logo</h1>
        <ul style={{display:"flex"}}>
          {/* <li style={{listStyle:"none"}}><a href="/">Home</a></li>
          <li style={{listStyle:"none"}}><a href="/about">About</a></li>
          <li style={{listStyle:"none"}}><a href="/courses">Courses</a></li>
          <li style={{listStyle:"none"}}><a href="/contact">Contact</a></li> */}
          {/* <li style={{listStyle:"none"}}><Link to="/">Home</Link></li>
          <li style={{listStyle:"none"}}><Link to="/about">About</Link></li>
          <li style={{listStyle:"none"}}><Link to="/courses">Courses</Link></li>
          <li style={{listStyle:"none"}}><Link to="/contact">Contact</Link></li> */}

          <li style={{listStyle:"none"}}>
            <NavLink to="/" className={({isActive})=>isActive?"active-link":""}>Home</NavLink>
          </li>
          <li style={{listStyle:"none"}}>
            <NavLink to="/about" className={({isActive})=>isActive?"active-link":""}>About</NavLink>
          </li>
          <li style={{listStyle:"none"}}>
            <NavLink to="/courses" className={({isActive})=>isActive?"active-link":""}>Course</NavLink>
          </li>
          <li style={{listStyle:"none"}}>
            <NavLink to="/contact" className={({isActive})=>isActive?"active-link":""}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
