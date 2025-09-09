import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Java from './Components/Children/Java'
import Mern from './Components/Children/Mern'
import Python from './Components/Children/Python'
import Ds from './Components/Children/Ds'
import Navbar from './Components/Navbar'
import Nopage from './Components/Nopage'
import Student from './Components/Student'

const Fouth = () => {
    let router=createBrowserRouter([
        {
            path:"/", // home path
            element:<>
            <Navbar/>
            <Home/>
            </>
        },
        {
            path:"/about",
            element:<>
            <Navbar/>
            <About/>
            </>
        },
        {
            path:"/contact",
            element:<>
            <Navbar/>
            <Contact/>
            </>
        },
        {
            path:"/courses",
            element:<>
            <Navbar/>
            <Courses/>
            </>,
            children:([
                {
                    path:"javafs",
                    element:<Java/>
                },
                {
                    path:"mernfs",
                    element:<Mern/>
                },
                {
                    path:"pythonfs",
                    element:<Python/>
                },
                {
                    path:"ds",
                    element:<Ds/>
                }
            ])
        },
        {
            path:"/student/:id",
            element:<>
                <Navbar/>
                <Student/>
            </>
        },
        {
            path:"*",
            element:<Nopage/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Fouth
