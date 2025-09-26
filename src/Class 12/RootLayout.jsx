import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Navbar1 from './Navbar'

const RootLayout = () => {
  return (
    <div>
    <Navbar1/>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default RootLayout
