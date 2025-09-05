import React from 'react'
import { useLocation } from 'react-router-dom'

const Nopage = () => {
    let location=useLocation()
    console.log(location)
  return (
    <div>
      <h1>No Page Present at {location.pathname}</h1>
    </div>
  )
}

export default Nopage
