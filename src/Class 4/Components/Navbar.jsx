import React from 'react'
import { Link } from 'react-router-dom'

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
          <li style={{listStyle:"none"}}><Link to="/">Home</Link></li>
          <li style={{listStyle:"none"}}><Link to="/about">About</Link></li>
          <li style={{listStyle:"none"}}><Link to="/courses">Courses</Link></li>
          <li style={{listStyle:"none"}}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
