import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Courses = () => {
  let navigate=useNavigate()
  return (
    <div>
      <h1>Courses Page</h1>
      {/* outlet is used to call the children elements */}
      <button onClick={()=>{navigate("javafs")}}>Go to Java Full Stack</button>
      <button onClick={()=>{navigate("mernfs")}}>Go to Mern Full Stack</button>
      <button onClick={()=>{navigate("pythonfs")}}>Go to Python Full Stack</button>
      <button onClick={()=>{navigate("ds")}}>Go to Data Science</button>
      <Outlet/>
    </div>
  )
}

export default Courses
