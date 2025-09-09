import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fifth from './Fifth'
import ProductDetails from './ProductDetails'

const Main = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<>
            <Fifth/>
            </>
        },
        {
            path:"/product",
            element:<ProductDetails/>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default Main
