import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import Fifth from '../Class 5/Fifth'
import ProductDetails from '../Class 5/ProductDetails'
import Cart from './Cart'

const Routing = () => {
    const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Fifth/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div>
    
      <RouterProvider router={router}/>
    </div>
  )
}

export default Routing
